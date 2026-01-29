import { NextRequest, NextResponse } from "next/server";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

async function deleteVoice(request: NextRequest) {
  try {
    const { voiceId } = await request.json();

    if (!voiceId) {
      return NextResponse.json(
        { error: "No voice ID provided" },
        { status: 400 }
      );
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: "ElevenLabs API key not configured" },
        { status: 500 }
      );
    }

    console.log("Deleting voice:", voiceId);
    await elevenlabs.voices.delete(voiceId);
    console.log("Voice deleted successfully:", voiceId);

    return NextResponse.json({
      message: "Voice deleted successfully",
    });
  } catch (error) {
    console.error("Voice deletion error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete voice" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  return deleteVoice(request);
}

export async function POST(request: NextRequest) {
  return deleteVoice(request);
}
