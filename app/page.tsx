"use client"

import { Navigation } from "@/components/navigation"
import { Dashboard } from "@/components/dashboard"
import { MoodTracker } from "@/components/mood-tracker"
import { TherapySession } from "@/components/therapy-session"
import { JournalTablet } from "@/components/journal-tablet"
import { useState } from "react"

export default function AtlasCareApp() {
  const [activeView, setActiveView] = useState("dashboard")

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />
      case "mood":
        return <MoodTracker />
      case "therapy":
        return <TherapySession />
      case "journal":
        return <JournalTablet />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation activeView={activeView} setActiveView={setActiveView} />
      <main className="ml-64 min-h-screen">{renderActiveView()}</main>
    </div>
  )
}
