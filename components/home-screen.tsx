import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Play, Video, Plus } from "lucide-react"

export function HomeScreen() {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Good morning, Alex</h1>
            <p className="text-muted-foreground text-sm">How are you feeling today?</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-semibold">A</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
        </div>

        {/* Quick Mood Check */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-card to-card/80 border border-border/50 p-6 mb-8 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-card-foreground mb-1">Quick mood check</h3>
                <p className="text-muted-foreground text-sm">Tap to log how you're feeling</p>
              </div>
              <div className="flex gap-3">
                <button className="text-2xl hover:scale-125 transition-all duration-200 hover:drop-shadow-lg">
                  😊
                </button>
                <button className="text-2xl hover:scale-125 transition-all duration-200 hover:drop-shadow-lg">
                  😐
                </button>
                <button className="text-2xl hover:scale-125 transition-all duration-200 hover:drop-shadow-lg">
                  😔
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="flex-1 px-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 hover:from-primary/15 hover:to-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Mood Tracker</h3>
                <p className="text-muted-foreground text-xs">Track your daily emotions</p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 p-6 hover:from-secondary/15 hover:to-secondary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <BookOpen className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Journal</h3>
                <p className="text-muted-foreground text-xs">Write your thoughts</p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 p-6 hover:from-accent/15 hover:to-accent/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Play className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Meditation</h3>
                <p className="text-muted-foreground text-xs">Find your calm</p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 hover:from-primary/15 hover:to-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Video className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Therapy</h3>
                <p className="text-muted-foreground text-xs">Connect with care</p>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Suggestion */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-muted to-muted/80 border border-border/50 p-6 mb-8 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="relative flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-primary-foreground text-sm">💡</span>
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-semibold text-foreground mb-2">Today's gentle reminder</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Remember, it's okay to have difficult days. You're doing better than you think, and every small step
                counts toward your wellness journey.
              </p>
              <Button size="sm" className="h-9 px-4 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow">
                Read more insights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="px-6 pb-10">
        <div className="flex justify-center">
          <Button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            <Plus className="w-6 h-6" />
          </Button>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-4">Building healthy habits together</p>
      </div>
    </div>
  )
}
