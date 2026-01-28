import { NextRequest, NextResponse } from "next/server";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

const conversationResponses = [
  "That's interesting! Tell me more about that.",
  "I see what you mean. How does that make you feel?",
  "That's a great point. What else would you like to discuss?",
  "I understand. Can you elaborate on that?",
  "Fascinating! What made you think of that?",
  "That's worth considering. What are your thoughts on the implications?",
];

export async function POST(request: NextRequest) {
  try {
    const { voiceId, audioData } = await request.json();

    if (!voiceId || !audioData) {
      return NextResponse.json(
        { error: "Voice ID and audio data are required" },
        { status: 400 }
      );
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: "ElevenLabs API key not configured" },
        { status: 500 }
      );
    }

    const responseText = conversationResponses[Math.floor(Math.random() * conversationResponses.length)];

    const audio = await elevenlabs.textToSpeech.convert(voiceId, {
      text: responseText,
      modelId: "eleven_monolingual_v1",
    });

    const chunks: Uint8Array[] = [];
    for await (const chunk of audio as any) {
      chunks.push(chunk);
    }

    const audioBuffer = Buffer.concat(chunks);

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Real-time conversation error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to process conversation",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "Real-time voice conversation endpoint",
      note: "This endpoint generates conversational responses using your cloned voice."
    },
    { status: 200 }
  );
}
