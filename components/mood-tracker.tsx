"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, TrendingUp, BarChart3, Clock, Save, Sparkles } from "lucide-react"
import { useState } from "react"

const moods = [
  {
    emoji: "😄",
    label: "Amazing",
    value: 10,
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    emoji: "😊",
    label: "Good",
    value: 8,
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    emoji: "😐",
    label: "Okay",
    value: 6,
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    textColor: "text-amber-700",
  },
  {
    emoji: "😔",
    label: "Low",
    value: 4,
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    emoji: "😢",
    label: "Difficult",
    value: 2,
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100",
    textColor: "text-rose-700",
  },
]

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [reflection, setReflection] = useState("")
  const [weeklyAverage, setWeeklyAverage] = useState(7.2)
  const [entriesThisWeek, setEntriesThisWeek] = useState(5)
  const [currentStreak, setCurrentStreak] = useState(12)
  const [recentEntries, setRecentEntries] = useState([
    { date: "Yesterday", mood: "😊", note: "Good mood, productive day", value: 8 },
    { date: "March 13", mood: "😐", note: "Neutral, some stress", value: 6 },
    { date: "March 12", mood: "😄", note: "Amazing day with friends", value: 10 },
  ])
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveMoodEntry = async () => {
    if (selectedMood === null) return

    setIsSaving(true)
    console.log(`[v0] Saving mood entry: ${moods[selectedMood].label} with reflection: ${reflection}`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Update analytics
    const newMoodValue = moods[selectedMood].value
    setWeeklyAverage((prev) => (prev * entriesThisWeek + newMoodValue) / (entriesThisWeek + 1))
    setEntriesThisWeek((prev) => prev + 1)
    setCurrentStreak((prev) => prev + 1)

    // Add to recent entries
    setRecentEntries((prev) => [
      {
        date: "Today",
        mood: moods[selectedMood].emoji,
        note: reflection.slice(0, 30) + (reflection.length > 30 ? "..." : ""),
        value: newMoodValue,
      },
      ...prev.slice(0, 2),
    ])

    // Reset form
    setSelectedMood(null)
    setReflection("")
    setIsSaving(false)
  }

  const getMoodInsight = () => {
    if (selectedMood === null) return ""

    const mood = moods[selectedMood]
    const insights = {
      Amazing: "Your positive energy is contagious! Consider sharing what's working well with your support network.",
      Good: "You're in a great headspace. This might be a perfect time for challenging growth activities.",
      Okay: "Neutral feelings are completely normal. Sometimes taking a moment to breathe can help clarify your emotions.",
      Low: "It's okay to have difficult days. Remember that reaching out for support is a sign of strength.",
      Difficult:
        "You're being brave by acknowledging these feelings. Consider connecting with your therapist or crisis support.",
    }

    return insights[mood.label as keyof typeof insights] || ""
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Mood Tracker</h1>
          <p className="text-muted-foreground text-lg">How are you feeling today?</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            View History
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <BarChart3 className="w-4 h-4" />
            Analytics
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Select Your Current Mood
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {moods.map((mood, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedMood === index
                        ? "bg-primary/10 border-2 border-primary scale-105 shadow-lg"
                        : `${mood.color} border-2 hover:scale-102 hover:shadow-md`
                    }`}
                    onClick={() => setSelectedMood(index)}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative p-6">
                      <div className="flex items-center gap-5">
                        <div className="text-4xl transform transition-transform hover:scale-110">{mood.emoji}</div>
                        <div className="flex-1">
                          <h3
                            className={`font-heading font-semibold text-lg ${selectedMood === index ? "text-primary" : mood.textColor}`}
                          >
                            {mood.label}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {mood.label === "Amazing" && "Feeling fantastic and energized"}
                            {mood.label === "Good" && "Positive and content overall"}
                            {mood.label === "Okay" && "Neutral, neither good nor bad"}
                            {mood.label === "Low" && "Feeling down or unmotivated"}
                            {mood.label === "Difficult" && "Having a challenging time"}
                          </p>
                        </div>
                        {selectedMood === index && (
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedMood !== null && (
            <Card className="animate-in slide-in-from-bottom-4 duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Reflection & Context
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">AI Insight</p>
                      <p className="text-sm text-muted-foreground">{getMoodInsight()}</p>
                    </div>
                  </div>
                </div>

                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  placeholder="Take a moment to reflect... What events, thoughts, or experiences are influencing how you feel right now?"
                  className="w-full h-32 p-4 bg-background/80 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 backdrop-blur-sm transition-all"
                  maxLength={500}
                />
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-xs">Your thoughts are private and secure</p>
                  <p className="text-muted-foreground text-xs">{reflection.length}/500</p>
                </div>
                <Button
                  className="w-full h-12 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={selectedMood === null || isSaving}
                  onClick={handleSaveMoodEntry}
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save mood entry
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Weekly Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Average Mood</span>
                  <span className="font-semibold">{weeklyAverage.toFixed(1)}/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Entries This Week</span>
                  <span className="font-semibold">{entriesThisWeek}/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Streak</span>
                  <span className="font-semibold text-green-600">{currentStreak} days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentEntries.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <span className="text-2xl">{entry.mood}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{entry.date}</p>
                      <p className="text-xs text-muted-foreground">{entry.note}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{entry.value}/10</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
