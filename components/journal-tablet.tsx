"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Sticker, Save, Calendar, Heart, Star, Sun, Camera, Mic, Tag } from "lucide-react"
import { useState, useEffect } from "react"

const stickers = [
  { icon: Heart, color: "text-red-400", name: "heart" },
  { icon: Star, color: "text-yellow-400", name: "star" },
  { icon: Sun, color: "text-orange-400", name: "sun" },
]

const themes = [
  {
    id: 0,
    name: "Lavender Dreams",
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    accent: "border-purple-200",
    preview: "bg-gradient-to-r from-purple-200 to-pink-200",
  },
  {
    id: 1,
    name: "Ocean Breeze",
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
    accent: "border-blue-200",
    preview: "bg-gradient-to-r from-blue-200 to-cyan-200",
  },
  {
    id: 2,
    name: "Sunset Glow",
    bg: "bg-gradient-to-br from-orange-50 to-pink-50",
    accent: "border-orange-200",
    preview: "bg-gradient-to-r from-orange-200 to-pink-200",
  },
  {
    id: 3,
    name: "Forest Calm",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50",
    accent: "border-green-200",
    preview: "bg-gradient-to-r from-green-200 to-emerald-200",
  },
]

export function JournalTablet() {
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [journalText, setJournalText] = useState("")
  const [title, setTitle] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [wordCount, setWordCount] = useState(0)
  const [selectedStickers, setSelectedStickers] = useState<string[]>([])
  const [moodTag, setMoodTag] = useState("")
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Gratitude Reflection",
      date: "Today",
      preview: "Feeling grateful for the small moments...",
      mood: "happy",
      color: "green",
    },
    {
      id: 2,
      title: "Challenging Day",
      date: "Yesterday",
      preview: "Had a challenging day but learned...",
      mood: "thoughtful",
      color: "blue",
    },
    {
      id: 3,
      title: "Therapy Insights",
      date: "March 13",
      preview: "Therapy session insights and reflections...",
      mood: "hopeful",
      color: "purple",
    },
  ])

  useEffect(() => {
    const autoSaveTimer = setTimeout(() => {
      if (journalText.trim() || title.trim()) {
        handleAutoSave()
      }
    }, 2000)

    return () => clearTimeout(autoSaveTimer)
  }, [journalText, title])

  useEffect(() => {
    const words = journalText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0)
    setWordCount(words.length)
  }, [journalText])

  const handleAutoSave = async () => {
    console.log("[v0] Auto-saving journal entry")
    setLastSaved(new Date())
  }

  const handleSaveEntry = async () => {
    if (!title.trim() && !journalText.trim()) return

    setIsSaving(true)
    console.log(`[v0] Saving journal entry: ${title} with ${wordCount} words`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Add to entries list
    const newEntry = {
      id: entries.length + 1,
      title: title || "Untitled Entry",
      date: "Today",
      preview: journalText.slice(0, 50) + (journalText.length > 50 ? "..." : ""),
      mood: moodTag || "neutral",
      color: ["green", "blue", "purple", "orange"][Math.floor(Math.random() * 4)],
    }

    setEntries((prev) => [newEntry, ...prev.slice(0, 4)])
    setLastSaved(new Date())
    setIsSaving(false)

    // Reset form
    setTitle("")
    setJournalText("")
    setSelectedStickers([])
    setMoodTag("")
  }

  const handleAddSticker = (stickerName: string) => {
    if (!selectedStickers.includes(stickerName)) {
      setSelectedStickers((prev) => [...prev, stickerName])
      console.log(`[v0] Added sticker: ${stickerName}`)
    }
  }

  const handleAddPhoto = () => {
    console.log("[v0] Adding photo to journal entry")
    // Simulate photo upload
  }

  const handleAddVoiceNote = () => {
    console.log("[v0] Recording voice note")
    // Simulate voice recording
  }

  const handleAddMoodTag = () => {
    const moods = ["happy", "sad", "excited", "anxious", "peaceful", "frustrated", "grateful", "hopeful"]
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    setMoodTag(randomMood)
    console.log(`[v0] Added mood tag: ${randomMood}`)
  }

  const formatLastSaved = () => {
    if (!lastSaved) return "Not saved"
    const now = new Date()
    const diffMinutes = Math.floor((now.getTime() - lastSaved.getTime()) / (1000 * 60))

    if (diffMinutes < 1) return "Auto-saved just now"
    if (diffMinutes === 1) return "Auto-saved 1 minute ago"
    return `Auto-saved ${diffMinutes} minutes ago`
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">My Journal</h1>
          <p className="text-muted-foreground text-lg">Express yourself freely in your private space</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            View Entries
          </Button>
          <Button
            className="flex items-center gap-2"
            onClick={handleSaveEntry}
            disabled={isSaving || (!title.trim() && !journalText.trim())}
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Entry
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Themes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {themes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTheme(index)}
                  className={`w-full p-3 rounded-xl text-left transition-all duration-200 ${
                    selectedTheme === index
                      ? "bg-primary/10 border-2 border-primary shadow-lg scale-105"
                      : "bg-card/50 border border-border/50 hover:bg-card/80 hover:scale-102"
                  }`}
                >
                  <div className={`w-full h-8 rounded-lg mb-2 ${theme.preview} shadow-sm`}></div>
                  <span className="text-sm font-medium text-foreground">{theme.name}</span>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sticker className="w-5 h-5" />
                Stickers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 mb-3">
                {stickers.map((StickerIcon, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 bg-card/50 border border-border/50 rounded-xl flex items-center justify-center hover:bg-card/80 hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-md ${
                      selectedStickers.includes(StickerIcon.name) ? "bg-primary/20 border-primary" : ""
                    }`}
                    onClick={() => handleAddSticker(StickerIcon.name)}
                  >
                    <StickerIcon.icon className={`w-5 h-5 ${StickerIcon.color}`} />
                  </button>
                ))}
              </div>
              {selectedStickers.length > 0 && (
                <div className="text-xs text-muted-foreground">Selected: {selectedStickers.join(", ")}</div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Recent Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-card/50 border border-border/50 rounded-xl p-3 cursor-pointer hover:bg-card/80 transition-all duration-200 hover:scale-102 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-foreground">{entry.date}</p>
                    <div className={`w-2 h-2 bg-${entry.color}-500 rounded-full`}></div>
                  </div>
                  <p className="text-xs font-medium text-foreground mb-1">{entry.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{entry.preview}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Journal Area */}
        <div className="lg:col-span-3">
          <Card className="h-[700px]">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Today's Entry</CardTitle>
                  <p className="text-muted-foreground mt-1">Tuesday, March 15, 2024</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-gentle-pulse"></div>
                    <span>Auto-save: On</span>
                  </div>
                  {moodTag && (
                    <div className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                      #{moodTag}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-full p-0">
              <div
                className={`h-full ${themes[selectedTheme].bg} ${themes[selectedTheme].accent} border-2 border-t-0 rounded-b-lg relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative h-full flex flex-col p-8">
                  <div className="mb-6">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Give your entry a meaningful title..."
                      className="w-full bg-transparent border-none text-2xl font-heading font-bold text-foreground placeholder:text-foreground/50 focus:outline-none"
                      maxLength={100}
                    />
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
                  </div>

                  <textarea
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    placeholder="What's on your mind today? This is your safe space to express yourself freely, explore your thoughts, and reflect on your experiences. Remember, there's no right or wrong way to journal..."
                    className="flex-1 w-full bg-transparent border-none text-foreground placeholder:text-foreground/50 resize-none focus:outline-none leading-relaxed text-lg"
                  />

                  {/* Decorative Elements */}
                  <div className="absolute bottom-8 right-8 opacity-10">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute top-1/3 right-12 opacity-5">
                    <Star className="w-8 h-8 text-secondary" />
                  </div>

                  {/* Selected Stickers Display */}
                  {selectedStickers.length > 0 && (
                    <div className="absolute top-20 right-8 flex gap-2">
                      {selectedStickers.map((stickerName, index) => {
                        const sticker = stickers.find((s) => s.name === stickerName)
                        if (!sticker) return null
                        const StickerIcon = sticker.icon
                        return (
                          <div
                            key={index}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                          >
                            <StickerIcon className={`w-5 h-5 ${sticker.color}`} />
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Toolbar */}
          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-gentle-pulse"></div>
                    <span className="text-sm text-muted-foreground">{formatLastSaved()}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{wordCount} words</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Private & encrypted</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleAddPhoto}>
                    <Camera className="w-4 h-4" />
                    Add Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleAddVoiceNote}>
                    <Mic className="w-4 h-4" />
                    Voice Note
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={handleAddMoodTag}>
                    <Tag className="w-4 h-4" />
                    Mood Tag
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
