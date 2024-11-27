import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { threadId } = await request.json();
  const apiKey = process.env.OPENAI_API_KEY;
  const assistantId = process.env.ASSISTANT_ID;

  try {
    const response = await axios.post(
      `https://api.openai.com/v1/threads/${threadId}/runs`,
      { assistant_id: assistantId },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "OpenAI-Beta": "assistants=v2",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error triggering assistant run:", error);
    return NextResponse.json({ error: "Failed to trigger assistant run" }, { status: 500 });
  }
}
