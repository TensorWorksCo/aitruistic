"use client";

import { useState, useRef } from "react";
import { Mic, Square, Play, Loader2, AlertCircle, Phone, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useConversation } from "@elevenlabs/react";

export default function VoiceClonePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [voiceId, setVoiceId] = useState<string | null>(null);
  const [agentId, setAgentId] = useState<string | null>("sXUinz6W32o4KnLTDUf9");
  const [isCloning, setIsCloning] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [conversationText, setConversationText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [customPrompt, setCustomPrompt] = useState("You are a helpful AI assistant demonstrating voice cloning technology for an AI safety class.");
  const [firstMessage, setFirstMessage] = useState("Hello! I'm speaking with your cloned voice. How can I help you today?");
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to agent");
    },
    onDisconnect: () => {
      console.log("Disconnected from agent");
    },
    onMessage: (message) => {
      console.log("Message:", message);
    },
    onError: (error) => {
      setError(typeof error === 'string' ? error : 'An error occurred');
    },
    overrides: voiceId ? {
      agent: {
        prompt: {
          prompt: customPrompt,
        },
        firstMessage: firstMessage,
      },
      tts: {
        voiceId: voiceId,
      },
    } : undefined,
  });

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      setError("Failed to access microphone. Please grant permission.");
      console.error(err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const cloneVoice = async () => {
    if (!audioBlob) return;

    setIsCloning(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "recording.webm");

      const response = await fetch("/api/voice/clone", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to clone voice");
      }

      const data = await response.json();
      setVoiceId(data.voiceId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to clone voice");
      console.error(err);
    } finally {
      setIsCloning(false);
    }
  };

  const speakText = async () => {
    if (!voiceId || !conversationText.trim()) return;

    setIsSpeaking(true);
    setError(null);

    try {
      const response = await fetch("/api/voice/speak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voiceId,
          text: conversationText,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate speech");
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(audioUrl);
        };
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate speech");
      console.error(err);
      setIsSpeaking(false);
    }
  };

  const startAgentConversation = async () => {
    if (!agentId) {
      setError("Please create an agent first by cloning your voice");
      return;
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: agentId,
        connectionType: "websocket" as const,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start conversation");
    }
  };

  const endAgentConversation = async () => {
    await conversation.endSession();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Voice Cloning Demo</h1>
          <p className="text-muted-foreground">
            AI Safety Class: Explore the capabilities and implications of voice cloning technology
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6">
          {/* Step 1: Record Audio */}
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Record Your Voice</CardTitle>
              <CardDescription>
                Record at least 10-30 seconds of clear speech for best results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                {!isRecording ? (
                  <Button
                    onClick={startRecording}
                    disabled={isCloning || isSpeaking}
                    size="lg"
                  >
                    <Mic className="mr-2 h-5 w-5" />
                    Start Recording
                  </Button>
                ) : (
                  <Button
                    onClick={stopRecording}
                    variant="destructive"
                    size="lg"
                  >
                    <Square className="mr-2 h-5 w-5" />
                    Stop Recording
                  </Button>
                )}
                {isRecording && (
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-lg font-mono">{formatTime(recordingTime)}</span>
                  </div>
                )}
              </div>
              {audioBlob && !isRecording && (
                <div className="text-sm text-muted-foreground">
                  ✓ Recording captured ({formatTime(recordingTime)})
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 2: Clone Voice */}
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Create Voice Clone</CardTitle>
              <CardDescription>
                Process your recording to create a voice clone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={cloneVoice}
                disabled={!audioBlob || isCloning || isSpeaking || !!voiceId}
                size="lg"
              >
                {isCloning ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Cloning Voice...
                  </>
                ) : voiceId ? (
                  "✓ Voice Cloned Successfully"
                ) : (
                  "Clone Voice"
                )}
              </Button>
              {voiceId && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Voice ID: {voiceId}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Step 3: Test Conversation */}
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Test Your Cloned Voice</CardTitle>
              <CardDescription>
                Enter text to hear it spoken in your cloned voice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="conversation-text">Text to Speak</Label>
                <Input
                  id="conversation-text"
                  placeholder="Enter text to be spoken in your voice..."
                  value={conversationText}
                  onChange={(e) => setConversationText(e.target.value)}
                  disabled={!voiceId || isSpeaking}
                />
              </div>
              <Button
                onClick={speakText}
                disabled={!voiceId || !conversationText.trim() || isSpeaking}
                size="lg"
              >
                {isSpeaking ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Speaking...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Speak Text
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Step 4: Real-time Agent Conversation */}
          <Card>
            <CardHeader>
              <CardTitle>Step 4: Real-time Agent Conversation</CardTitle>
              <CardDescription>
                Configure and start a live conversation with an AI agent using your cloned voice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {voiceId && (
                <Alert className="bg-green-500/10 border-green-500/50">
                  <AlertCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700 dark:text-green-400">
                    ✓ Cloned voice will be used: {voiceId}
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="custom-prompt">System Prompt</Label>
                <textarea
                  id="custom-prompt"
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm"
                  placeholder="Enter the system prompt for the agent..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  disabled={conversation.status === "connected"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="first-message">First Message</Label>
                <Input
                  id="first-message"
                  placeholder="Enter the agent's first message..."
                  value={firstMessage}
                  onChange={(e) => setFirstMessage(e.target.value)}
                  disabled={conversation.status === "connected"}
                />
              </div>

              <div className="flex items-center gap-4">
                {conversation.status !== "connected" ? (
                  <Button
                    onClick={startAgentConversation}
                    disabled={!agentId || !voiceId || isSpeaking}
                    size="lg"
                    variant="default"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Start Agent Call
                  </Button>
                ) : (
                  <Button
                    onClick={endAgentConversation}
                    variant="destructive"
                    size="lg"
                  >
                    <PhoneOff className="mr-2 h-5 w-5" />
                    End Call
                  </Button>
                )}
                {conversation.status === "connected" && (
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">
                      {conversation.isSpeaking ? "Agent speaking..." : "Listening..."}
                    </span>
                  </div>
                )}
              </div>

              {!voiceId && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please clone your voice first (Step 2) to use the agent conversation feature.
                  </AlertDescription>
                </Alert>
              )}

              <div className="text-xs text-muted-foreground">
                Status: {conversation.status}
              </div>
            </CardContent>
          </Card>

          {/* AI Safety Discussion */}
          <Card className="border-yellow-500/50 bg-yellow-500/5">
            <CardHeader>
              <CardTitle>AI Safety Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Ethical Implications:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Voice cloning can be used for impersonation and fraud</li>
                <li>Consent is crucial - only clone voices with explicit permission</li>
                <li>Deepfake audio can spread misinformation</li>
                <li>Consider watermarking and detection mechanisms</li>
                <li>Legal frameworks are still evolving around synthetic media</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <audio ref={audioRef} className="hidden" />
      </div>
    </div>
  );
}
