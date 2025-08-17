"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Home,
  Heart,
  Video,
  BookOpen,
  Settings,
  HelpCircle,
  User,
  Bell,
  Moon,
  Sun,
  Search,
  Activity,
  Shield,
  Globe,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react"
import { useState, useEffect } from "react"

interface NavigationProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function Navigation({ activeView, setActiveView }: NavigationProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(5)
  const [searchQuery, setSearchQuery] = useState("")
  const [wellnessScore, setWellnessScore] = useState(94)
  const [currentStreak, setCurrentStreak] = useState(47)

  const navItems = [
    {
      id: "dashboard",
      label: "Wellness Dashboard",
      icon: Home,
      badge: null,
      description: "Your personalized overview",
    },
    { id: "mood", label: "Mood Intelligence", icon: Heart, badge: "AI", description: "Advanced mood tracking" },
    { id: "therapy", label: "Professional Sessions", icon: Video, badge: "3", description: "HD video therapy" },
    { id: "journal", label: "Reflective Journal", icon: BookOpen, badge: null, description: "Guided self-reflection" },
    {
      id: "analytics",
      label: "Wellness Analytics",
      icon: TrendingUp,
      badge: "Pro",
      description: "Deep insights & trends",
    },
    { id: "community", label: "Support Community", icon: Globe, badge: "156", description: "Connect & inspire" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setWellnessScore((prev) => Math.min(100, Math.max(80, prev + Math.random() * 2 - 1)))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleNotificationClick = () => {
    console.log("[v0] Opening notifications")
    setNotifications(0) // Clear notifications when clicked
  }

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    console.log(`[v0] Theme switched to ${!isDarkMode ? "dark" : "light"} mode`)
    // In a real app, this would update the document class or context
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log(`[v0] Searching for: ${searchQuery}`)
      // Simulate search results
    }
  }

  const handleNavigation = (viewId: string) => {
    console.log(`[v0] Navigating to: ${viewId}`)
    setActiveView(viewId)
  }

  return (
    <nav className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-card/98 via-card/95 to-card/98 backdrop-blur-2xl border-r border-border/30 z-50 shadow-2xl">
      <div className="p-6 h-full flex flex-col">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-xl animate-gentle-pulse">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AtlasCare
              </h1>
              <p className="text-xs text-muted-foreground font-medium">AI-Powered Wellness Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 p-0 hover:bg-primary/10 transition-all duration-300"
              onClick={handleThemeToggle}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 p-0 relative hover:bg-primary/10 transition-all duration-300"
              onClick={handleNotificationClick}
            >
              <Bell className="w-4 h-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500 border-2 border-white animate-gentle-pulse">
                  {notifications}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Smart Search */}
        <form onSubmit={handleSearch} className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search wellness tools, insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-background/80 transition-all duration-300"
          />
        </form>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-3 border border-primary/20">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">Wellness Score</span>
            </div>
            <div className="text-lg font-bold text-foreground mt-1">{Math.round(wellnessScore)}/100</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-700">Streak</span>
            </div>
            <div className="text-lg font-bold text-emerald-800 mt-1">{currentStreak} days</div>
          </div>
        </div>

        {/* Enhanced Navigation Items */}
        <div className="space-y-2 mb-8 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-4 h-14 transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground shadow-xl transform scale-[1.02] border border-primary/30"
                    : "hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 text-muted-foreground hover:text-foreground hover:transform hover:scale-[1.01] hover:shadow-lg"
                }`}
                onClick={() => handleNavigation(item.id)}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive ? "bg-white/20 shadow-lg" : "bg-muted/30 group-hover:bg-primary/10 group-hover:shadow-md"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs opacity-70">{item.description}</div>
                </div>
                {item.badge && (
                  <Badge
                    variant={isActive ? "secondary" : "outline"}
                    className={`ml-auto text-xs px-2 py-1 ${
                      item.badge === "AI"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0"
                        : item.badge === "Pro"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0"
                          : "bg-primary/20 text-primary border-primary/30"
                    }`}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            )
          })}
        </div>

        {/* Enhanced Settings Section */}
        <div className="border-t border-border/30 pt-6 space-y-2 mb-6">
          <Button
            variant="ghost"
            className="w-full justify-start gap-4 h-12 text-muted-foreground hover:text-foreground transition-all duration-300 hover:transform hover:scale-[1.01] hover:bg-muted/30"
            onClick={() => console.log("[v0] Opening advanced settings")}
          >
            <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <span>Advanced Settings</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-4 h-12 text-muted-foreground hover:text-foreground transition-all duration-300 hover:transform hover:scale-[1.01] hover:bg-muted/30"
            onClick={() => console.log("[v0] Opening 24/7 support")}
          >
            <div className="w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <span>24/7 Support</span>
          </Button>
        </div>

        {/* Premium User Profile */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-4 border border-primary/20 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-foreground truncate">Alex Johnson</p>
                <Badge className="text-xs px-2 py-0 bg-gradient-to-r from-primary to-secondary text-white border-0">
                  Premium
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3 h-3 text-orange-500" />
                <p className="text-xs text-muted-foreground">{currentStreak}-day wellness streak</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Sparkles className="w-3 h-3 text-primary" />
                <p className="text-xs text-primary font-medium">Top 5% community member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
