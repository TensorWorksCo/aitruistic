import { NextRequest, NextResponse } from "next/server";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { voiceId, text } = await request.json();

    if (!voiceId || !text) {
      return NextResponse.json(
        { error: "Voice ID and text are required" },
        { status: 400 }
      );
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: "ElevenLabs API key not configured" },
        { status: 500 }
      );
    }

    const audio = await elevenlabs.textToSpeech.convert(voiceId, {
      text,
      modelId: "eleven_monolingual_v1",
    });

    const chunks: Uint8Array[] = [];
    for await (const chunk of audio as unknown as AsyncIterable<Uint8Array>) {
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
    console.error("Text-to-speech error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate speech" },
      { status: 500 }
    );
  }
}
