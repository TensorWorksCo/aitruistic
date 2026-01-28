import { NextRequest, NextResponse } from "next/server";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: "No audio file provided" },
        { status: 400 }
      );
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: "ElevenLabs API key not configured" },
        { status: 500 }
      );
    }

    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const voice = await elevenlabs.voices.ivc.create({
      name: `Voice Clone ${Date.now()}`,
      files: [buffer],
    });

    return NextResponse.json({
      voiceId: voice.voiceId,
      message: "Voice cloned successfully",
    });
  } catch (error) {
    console.error("Voice cloning error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to clone voice" },
      { status: 500 }
    );
  }
}
