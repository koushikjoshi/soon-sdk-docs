import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { threadId, content } = await request.json();
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      `https://api.openai.com/v1/threads/${threadId}/messages`,
      {
        role: 'user',
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v2',
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error adding message:', error);
    return NextResponse.json({ error: 'Failed to add message' }, { status: 500 });
  }
}
