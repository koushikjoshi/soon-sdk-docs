import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: { threadId: string } }
) {
  const { threadId } = params;
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openai.com/v1/threads/${threadId}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "OpenAI-Beta": "assistants=v2",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching thread details:", error);
    return NextResponse.json(
      { error: "Failed to fetch thread details" },
      { status: 500 }
    );
  }
}
