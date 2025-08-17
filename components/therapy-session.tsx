"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Mic, MicOff, VideoOff, MessageCircle, Shield, Calendar, Clock, User, PhoneOff } from "lucide-react"
import { useState, useEffect } from "react"

export function TherapySession() {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isInSession, setIsInSession] = useState(true)
  const [sessionDuration, setSessionDuration] = useState(45) // minutes
  const [timeRemaining, setTimeRemaining] = useState(32) // minutes
  const [isConnected, setIsConnected] = useState(true)
  const [chatMessages, setChatMessages] = useState([
    { sender: "Dr. Sarah", message: "How are you feeling today?", time: "2:15 PM" },
    { sender: "You", message: "I've been having some anxiety lately", time: "2:16 PM" },
  ])

  useEffect(() => {
    if (!isInSession) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsInSession(false)
          return 0
        }
        return prev - 1
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [isInSession])

  const handleEndSession = () => {
    console.log("[v0] Ending therapy session")
    setIsInSession(false)
    setIsConnected(false)
  }

  const handleToggleMute = () => {
    setIsMuted(!isMuted)
    console.log(`[v0] Audio ${!isMuted ? "muted" : "unmuted"}`)
  }

  const handleToggleVideo = () => {
    setIsVideoOff(!isVideoOff)
    console.log(`[v0] Video ${!isVideoOff ? "disabled" : "enabled"}`)
  }

  const handleScheduleFollowup = () => {
    console.log("[v0] Scheduling follow-up appointment")
    // Simulate scheduling
  }

  const handlePrivateChat = () => {
    console.log("[v0] Opening private chat")
    // Simulate chat functionality
  }

  const handleShareScreen = () => {
    console.log("[v0] Sharing screen")
    // Simulate screen sharing
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Therapy Sessions</h1>
          <p className="text-muted-foreground text-lg">Secure, professional mental health support</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={handleScheduleFollowup}>
            <Calendar className="w-4 h-4" />
            Schedule Session
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Clock className="w-4 h-4" />
            Session History
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span>Session with Dr. Sarah Mitchell</span>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 ${isConnected ? "bg-green-500" : "bg-red-500"} rounded-full ${isConnected ? "animate-gentle-pulse" : ""}`}
                    ></div>
                    <span className="text-sm text-muted-foreground">
                      {isInSession ? "Live Session" : "Session Ended"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>End-to-end encrypted</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full pb-6">
              <div className="relative h-full bg-gradient-to-br from-muted to-muted/80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                        <span className="text-primary-foreground text-4xl font-semibold">DS</span>
                      </div>
                      <div
                        className={`absolute -bottom-2 -right-2 w-8 h-8 ${isConnected ? "bg-green-500" : "bg-gray-400"} rounded-full border-4 border-background`}
                      ></div>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-2xl mb-2">Dr. Sarah Mitchell</h3>
                    <p className="text-muted-foreground mb-4">Licensed Clinical Therapist</p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary text-sm font-medium">Specializes in Teen & Young Adult Care</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 w-48 h-36 bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm">
                  <div
                    className={`w-full h-full ${isVideoOff ? "bg-gray-800" : "bg-gradient-to-br from-secondary/20 to-primary/20"} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      {isVideoOff ? (
                        <>
                          <VideoOff className="w-8 h-8 text-white mx-auto mb-2" />
                          <span className="text-white text-sm font-medium">Video Off</span>
                        </>
                      ) : (
                        <>
                          <User className="w-8 h-8 text-foreground mx-auto mb-2" />
                          <span className="text-foreground text-sm font-medium">You</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {isInSession && (
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-6">
                    <Button
                      variant={isMuted ? "destructive" : "secondary"}
                      size="lg"
                      className="w-16 h-16 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                      onClick={handleToggleMute}
                    >
                      {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </Button>

                    <Button
                      variant="destructive"
                      size="lg"
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                      onClick={handleEndSession}
                    >
                      <PhoneOff className="w-7 h-7" />
                    </Button>

                    <Button
                      variant={isVideoOff ? "destructive" : "secondary"}
                      size="lg"
                      className="w-16 h-16 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                      onClick={handleToggleVideo}
                    >
                      {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                    </Button>
                  </div>
                )}

                {!isInSession && (
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="text-muted-foreground mb-4">Session has ended</p>
                    <Button onClick={() => setIsInSession(true)} className="bg-primary hover:bg-primary/90">
                      Reconnect
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Session Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="font-semibold">{sessionDuration} minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Remaining</span>
                <span className={`font-semibold ${timeRemaining > 10 ? "text-primary" : "text-orange-500"}`}>
                  {timeRemaining} minutes
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                  style={{ width: `${((sessionDuration - timeRemaining) / sessionDuration) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                onClick={handlePrivateChat}
              >
                <MessageCircle className="w-4 h-4" />
                Private Chat
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                onClick={handleShareScreen}
              >
                <Shield className="w-4 h-4" />
                Share Screen
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                onClick={handleScheduleFollowup}
              >
                <Calendar className="w-4 h-4" />
                Schedule Follow-up
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Crisis Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 mb-3">Remember: You're in a safe space. Take your time.</p>
              <div className="flex items-center gap-2 text-xs text-green-600 mb-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>24/7 crisis support available</span>
              </div>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Emergency Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
