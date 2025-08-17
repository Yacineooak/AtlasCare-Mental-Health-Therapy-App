"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  TrendingUp,
  Award,
  Heart,
  Brain,
  Zap,
  BookOpen,
  Target,
  Sparkles,
  ChevronRight,
  Activity,
  Users,
  Shield,
  Lightbulb,
  MessageCircle,
  BarChart3,
  Video,
  Star,
  Globe,
  Headphones,
  Moon,
  Sun,
  Wind,
} from "lucide-react"
import { useState, useEffect } from "react"

export function Dashboard() {
  const [wellnessScore, setWellnessScore] = useState(94)
  const [moodStability, setMoodStability] = useState(9.2)
  const [therapyProgress, setTherapyProgress] = useState(87)
  const [mindfulnessStreak, setMindfulnessStreak] = useState(47)
  const [resilienceScore, setResilienceScore] = useState(8.9)
  const [communityImpact, setCommunityImpact] = useState(156)
  const [goals, setGoals] = useState([
    { id: 1, name: "Morning mindfulness", progress: 100, streak: 47, icon: Sun, color: "orange", status: "Complete" },
    { id: 2, name: "Emotional journaling", progress: 92, streak: 0, icon: BookOpen, color: "blue", status: "92%" },
    { id: 3, name: "Gratitude practice", progress: 65, streak: 0, icon: Heart, color: "pink", status: "In Progress" },
    { id: 4, name: "Breathing exercises", progress: 75, streak: 0, icon: Wind, color: "cyan", status: "75%" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setWellnessScore((prev) => Math.min(100, prev + Math.random() * 0.5 - 0.25))
      setMoodStability((prev) => Math.max(0, Math.min(10, prev + Math.random() * 0.2 - 0.1)))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleGoalUpdate = (goalId: number) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === goalId ? { ...goal, progress: Math.min(100, goal.progress + 5) } : goal)),
    )
  }

  const handleQuickAction = (action: string) => {
    console.log(`[v0] Quick action triggered: ${action}`)
    // Simulate action feedback
    if (action === "mood-check") {
      setMoodStability((prev) => Math.min(10, prev + 0.1))
    }
  }

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white animate-gentle-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="font-heading text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome back, Alex
              </h1>
              <p className="text-muted-foreground text-xl mt-1">
                Your mental wellness companion is here to support you
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">Heart Rate: 72 BPM</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2">
              <Brain className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 font-medium text-sm">Stress Level: Low</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-4 py-2">
              <Moon className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">Sleep Quality: 8.5/10</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl px-8 py-4 shadow-xl">
            <div className="w-4 h-4 bg-white/30 rounded-full animate-gentle-pulse"></div>
            <span className="font-bold text-lg">Wellness Score: {Math.round(wellnessScore)}/100</span>
            <TrendingUp className="w-5 h-5 ml-2" />
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl px-6 py-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 font-medium text-sm">AI Prediction: Great day ahead! ✨</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6">
        <Card
          className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.03] group relative overflow-hidden cursor-pointer"
          onClick={() => handleQuickAction("mood-stability")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 group-hover:text-primary transition-colors" />
                Mood Stability
              </div>
              <Badge variant="outline" className="text-xs">
                Real-time
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">{moodStability.toFixed(1)}/10</div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-600 font-medium">+2.1 this week</span>
            </div>
            <Progress value={Math.round(moodStability * 10)} className="h-3 bg-primary/20" />
            <div className="text-xs text-muted-foreground mt-2">Consistently excellent</div>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-secondary/30 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.03] group relative overflow-hidden cursor-pointer"
          onClick={() => handleQuickAction("therapy-progress")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 group-hover:text-secondary transition-colors" />
                Therapy Progress
              </div>
              <Badge className="bg-blue-100 text-blue-700 text-xs">Active</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">{therapyProgress}%</div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-muted-foreground">Next: Today 3PM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
              <span className="text-sm font-medium">Dr. Sarah Chen</span>
            </div>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/30 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.03] group relative overflow-hidden cursor-pointer"
          onClick={() => handleQuickAction("mindfulness-streak")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 group-hover:text-accent transition-colors" />
                Mindfulness Streak
              </div>
              <Badge className="bg-orange-100 text-orange-700 text-xs">Record!</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">{mindfulnessStreak} days</div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-orange-600 font-medium">Diamond tier achieved</span>
            </div>
            <div className="text-xs text-muted-foreground">Next milestone: 60 days</div>
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.03] group relative overflow-hidden cursor-pointer"
          onClick={() => handleQuickAction("resilience-score")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
                Resilience Score
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 text-xs">Strong</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">{resilienceScore.toFixed(1)}/10</div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 font-medium">+1.7 this month</span>
            </div>
            <Progress value={Math.round(resilienceScore * 10)} className="h-3 bg-emerald-200" />
          </CardContent>
        </Card>

        <Card
          className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.03] group relative overflow-hidden cursor-pointer"
          onClick={() => handleQuickAction("community-impact")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 group-hover:text-violet-600 transition-colors" />
                Community Impact
              </div>
              <Badge className="bg-violet-100 text-violet-700 text-xs">Leader</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground mb-2">{communityImpact}</div>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Star className="w-4 h-4 text-violet-500" />
              <span className="text-violet-600 font-medium">People inspired</span>
            </div>
            <div className="text-xs text-muted-foreground">Top 5% contributor</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Advanced Wellness Analytics</span>
                  <p className="text-sm text-muted-foreground">AI-powered insights and predictions</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 group">
                <span>Explore Deep Insights</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="h-80 bg-gradient-to-br from-white/50 via-primary/10 to-secondary/10 rounded-2xl border border-border/50 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              <div className="text-center z-10 space-y-4">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-soft-bounce">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center animate-soft-bounce delay-100">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center animate-soft-bounce delay-200">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">Predictive Wellness Intelligence</h3>
                <p className="text-muted-foreground max-w-md">
                  Real-time mood analysis, stress prediction, and personalized intervention recommendations
                </p>
                <div className="flex items-center justify-center gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">94%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">2.3x</div>
                    <div className="text-xs text-muted-foreground">Faster Recovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">87%</div>
                    <div className="text-xs text-muted-foreground">Prevention Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span>Personalized Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {goals.map((goal) => {
              const IconComponent = goal.icon
              return (
                <div key={goal.id} className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-4 h-4 text-${goal.color}-500`} />
                      <span className="font-medium">{goal.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          goal.progress === 100
                            ? "bg-green-100 text-green-700 border-green-200"
                            : "bg-primary/10 text-primary border-primary/20"
                        }
                      >
                        {goal.status}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => handleGoalUpdate(goal.id)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                  <div className="text-xs text-muted-foreground">
                    {goal.progress === 100
                      ? `Streak: ${goal.streak} days • Next level: ${goal.streak + 13} days`
                      : `${100 - goal.progress}% remaining to complete`}
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent border-primary/20 hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl">Instant Wellness Tools</span>
                <p className="text-sm text-muted-foreground font-normal">
                  Quick access to professional-grade interventions
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button
              className="h-24 flex-col gap-3 bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-[1.05] group"
              onClick={() => handleQuickAction("mood-check")}
            >
              <Heart className="w-7 h-7 group-hover:animate-gentle-pulse" />
              <div className="text-center">
                <div className="text-sm font-bold">Mood Check</div>
                <div className="text-xs opacity-90">AI-powered analysis</div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-24 flex-col gap-3 bg-gradient-to-br from-background to-muted/20 hover:bg-muted/30 border-2 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-[1.05] group"
              onClick={() => handleQuickAction("video-session")}
            >
              <Video className="w-7 h-7 group-hover:text-primary transition-colors" />
              <div className="text-center">
                <div className="text-sm font-bold">Video Session</div>
                <div className="text-xs text-muted-foreground">HD quality therapy</div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-24 flex-col gap-3 bg-gradient-to-br from-background to-muted/20 hover:bg-muted/30 border-2 hover:border-secondary/30 transition-all duration-500 hover:transform hover:scale-[1.05] group"
              onClick={() => handleQuickAction("guided-audio")}
            >
              <Headphones className="w-7 h-7 group-hover:text-secondary transition-colors" />
              <div className="text-center">
                <div className="text-sm font-bold">Guided Audio</div>
                <div className="text-xs text-muted-foreground">Immersive sessions</div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-24 flex-col gap-3 bg-gradient-to-br from-background to-muted/20 hover:bg-muted/30 border-2 hover:border-accent/30 transition-all duration-500 hover:transform hover:scale-[1.05] group"
              onClick={() => handleQuickAction("crisis-support")}
            >
              <MessageCircle className="w-7 h-7 group-hover:text-accent transition-colors" />
              <div className="text-center">
                <div className="text-sm font-bold">Crisis Support</div>
                <div className="text-xs text-muted-foreground">24/7 availability</div>
              </div>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl">AI Wellness Coach</span>
                <p className="text-sm text-muted-foreground font-normal">Personalized insights and recommendations</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-blue-800 font-bold mb-2">Cognitive Pattern Analysis</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Your thought patterns show 73% more positive reframing compared to last month. Consider exploring
                    advanced CBT techniques.
                  </p>
                  <Button size="sm" variant="ghost" className="mt-3 text-blue-700 hover:bg-blue-100">
                    Explore Techniques <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-emerald-800 font-bold mb-2">Biometric Integration</p>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    Your HRV data suggests optimal stress resilience. Perfect time for challenging growth exercises.
                  </p>
                  <Button size="sm" variant="ghost" className="mt-3 text-emerald-700 hover:bg-emerald-100">
                    View Recommendations <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-violet-800 font-bold mb-2">Community Impact Score</p>
                  <p className="text-sm text-violet-700 leading-relaxed">
                    Your wellness journey has inspired {communityImpact} community members. You're in the top 5% of
                    positive influencers.
                  </p>
                  <Button size="sm" variant="ghost" className="mt-3 text-violet-700 hover:bg-violet-100">
                    View Impact <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
