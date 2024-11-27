"use client";

import Navbar from "@/components/Navbar";
import StarsBg from "@/components/StarsBg";
import Suggestions from "@/components/Suggestions";
import React, { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ChatPage = () => {
  const [textAreaHeight, setTextAreaHeight] = useState<string>("40px");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState<string>("");
  const [threadId, setThreadId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [tempUserMessage, setTempUserMessage] = useState<string | null>(null); // Temporary user message

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n").length;
    setTextAreaHeight(lines >= 2 ? "60px" : "40px");
    setInput(e.target.value);
  };

  useEffect(() => {
    const createThread = async () => {
      try {
        const response = await fetch("/api/threads", { method: "POST" });
        const data = await response.json();
        setThreadId(data.id);
      } catch (error) {
        console.error("Error creating thread:", error);
      }
    };

    createThread();
  }, []);

  useEffect(() => {
    scrollToBottom(); // Automatically scroll to the bottom when messages update
  }, [messages, loading, tempUserMessage]);

  const sendMessage = async (content: string) => {
    // Temporarily display the user's message
    setTempUserMessage(content);
    setInput("");
    setLoading(true);

    try {
      // Add the user's message to the thread
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ threadId, content }),
      });

      // Trigger the assistant to generate a response
      const runResponse = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ threadId }),
      });
      const runData = await runResponse.json();

      if (!runData.id) {
        console.error("Run initiation failed:", runData);
        setLoading(false);
        setTempUserMessage(null); // Remove the temporary user message
        return;
      }

      const { id: runId } = runData;

      // Poll for the assistant's response
      const pollResponse = async () => {
        try {
          const response = await fetch(`/api/run/${threadId}/${runId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();

          if (data.status === "completed") {
            // Fetch updated messages after the run completes
            const messagesResponse = await fetch(`/api/messages/${threadId}`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            const messagesData = await messagesResponse.json();

            // Process messages to remove annotations
            const updatedMessages = messagesData.data.map(
              (msg: {
                role: string;
                content: { text?: { value: string } }[];
              }) => ({
                role: msg.role,
                content: msg.content
                  .map((item) => item.text?.value) // Extract only the text value
                  .join(" ") // Combine if multiple content items exist
                  .trim(),
              })
            );

            setMessages(updatedMessages);
            setLoading(false);
            setTempUserMessage(null); // Remove the temporary user message
          } else if (data.status === "failed") {
            console.error("Run failed:", data);
            setLoading(false);
            setTempUserMessage(null); // Remove the temporary user message
          } else {
            // Retry if not completed
            setTimeout(pollResponse, 1000);
          }
        } catch (error) {
          console.error("Error polling run status:", error);
          setLoading(false);
          setTempUserMessage(null); // Remove the temporary user message
        }
      };

      await pollResponse();
    } catch (error) {
      console.error("Error processing message:", error);
      setLoading(false);
      setTempUserMessage(null); // Remove the temporary user message
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-start items-start p-8 pt-16 bg-black">
      <div className="absolute top-[-20px] w-screen left-0 z-[90]">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen">
        <StarsBg />
      </div>
      <div className="shadow-md rounded-md w-full h-full overflow-hidden backdrop-blur-sm relative z-50 p-3 flex flex-col justify-start items-start">
        <div
          className="w-full h-[calc(100%-60px)] overflow-auto"
          ref={chatContainerRef}
        >
          {messages.length === 0 && !loading ? (
            <Suggestions onSelect={(suggestion) => sendMessage(suggestion)} />
          ) : (
            <div className="pb-5">
              {messages
                .slice()
                .reverse()
                .map((msg, index) =>
                  msg.role === "user" ? (
                    <div
                      key={index}
                      className={`text-white pr-4 max-w-2/3 flex flex-col justify-start items-end`}
                    >
                      <p className="font-bold">You</p>
                      <p className="p-3 rounded-md bg-white text-black shadow-white shadow-md">
                        {msg.content.replace(/【.*?】/g, "").trim()}
                      </p>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="text-white mt-5 mb-5 max-w-2/3 flex flex-col justify-start items-start"
                    >
                      <p className="font-bold">Assistant</p>
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        className="text-black bg-white p-3 rounded-md shadow-white shadow-md"
                      >
                        {msg.content.replace(/【.*?】/g, "").trim()}
                      </Markdown>
                    </div>
                  )
                )}
              {/* Render the temporary user message */}
              {tempUserMessage && (
                <div
                  className={`text-white pr-4 max-w-2/3 flex flex-col justify-start items-end`}
                >
                  <p className="font-bold">You</p>
                  <p className="p-3 rounded-md bg-white text-black shadow-white shadow-md">
                    {tempUserMessage}
                  </p>
                </div>
              )}
              {/* Render the loading indicator */}
              {loading && (
                <div className="my-2 p-3 rounded-md text-white self-start font-bold">
                  Assistant is thinking...
                </div>
              )}
            </div>
          )}
        </div>
        <div className="absolute bottom-3 left-0 w-full p-3 flex flex-row justify-between items-center gap-x-2">
          <textarea
            className="flex-1 rounded-md bg-black shadow-sm shadow-gray-50 border border-solid border-gray-600 resize-none overflow-auto p-2 text-white focus:border-white focus:outline-none placeholder:text-white/80"
            placeholder="Ask anything about building with web3"
            style={{ height: textAreaHeight }}
            onChange={handleTextAreaChange}
            value={input}
          />
          <button
            onClick={() => sendMessage(input)}
            style={{ height: textAreaHeight }}
            className="bg-white px-3 rounded-md text-black font-bold"
            disabled={loading || !input.trim()}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
