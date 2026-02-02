import { Link } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Search,
  Bell,
  ChevronDown,
  Check,
  Clock,
  Lock,
  ArrowRight,
  TrendingUp,
  Zap,
} from 'lucide-react';
import {
  mockUser,
  mockStats,
  mockRoadmap,
  mockTracks,
} from '@/data/mockData';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="z-10 flex h-16 shrink-0 items-center justify-between border-b border-border bg-background px-8">
          <h1 className="text-xl font-semibold" data-testid="dashboard-title">
            User Dashboard
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-9"
                data-testid="dashboard-search"
              />
            </div>

            <button className="relative" data-testid="notification-bell">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                2
              </span>
            </button>

            <div className="flex items-center gap-2">
              <Avatar data-testid="user-avatar">
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium">{mockUser.name}</p>
                <p className="text-xs text-muted-foreground">
                  {mockUser.status}
                </p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border transition-colors hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Current Goal
                    </p>
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mb-2 text-2xl font-bold">
                    {mockUser.currentGoal}
                  </p>
                  <Progress value={65} className="mb-2" />
                  <p className="text-xs text-muted-foreground">
                    65% to target readiness
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-colors hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Tracks Completed
                    </p>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mb-2 text-2xl font-bold">
                    {mockStats.tracksCompleted} / {mockStats.totalTracks}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    +{mockStats.weeklyProgress} this week
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-colors hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Job Readiness
                    </p>
                  </div>
                  <p className="mb-2 text-2xl font-bold">
                    {mockStats.jobReadiness}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {mockStats.jobReadinessNote}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-colors hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">AI Credits</p>
                  </div>
                  <p className="mb-2 text-2xl font-bold">
                    {mockUser.aiCredits}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Refills in {mockUser.creditsRefillDays} days
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Learning Roadmap */}
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle data-testid="roadmap-title">
                  Learning Roadmap
                </CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/tracks/system-design">
                    Continue Reading <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="relative flex items-start gap-8 overflow-x-auto pb-4">
                  {mockRoadmap.map((item, index) => (
                    <div
                      key={item.id}
                      className="relative flex min-w-[150px] flex-col items-center"
                    >
                      <div
                        className={`mb-3 flex h-16 w-16 items-center justify-center rounded-lg border-2 ${
                          item.status === 'completed'
                            ? 'border-primary bg-primary/10'
                            : item.status === 'in-progress'
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-border bg-card'
                        }`}
                      >
                        {item.status === 'completed' ? (
                          <Check className="h-6 w-6 text-primary" />
                        ) : item.status === 'in-progress' ? (
                          <Clock className="h-6 w-6 text-blue-500" />
                        ) : (
                          <Lock className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>

                      <p className="mb-1 text-center text-sm font-medium">
                        {item.title}
                      </p>
                      {item.progress > 0 && (
                        <Badge
                          variant={
                            item.status === 'completed'
                              ? 'default'
                              : 'secondary'
                          }
                          className="text-xs"
                        >
                          {item.progress}%
                        </Badge>
                      )}

                      {/* Connecting line */}
                      {index < mockRoadmap.length - 1 && 
                       (item.status !== 'locked' || mockRoadmap[index + 1].status !== 'locked') && (
                        <div className="absolute left-[calc(50%+40px)] top-8 h-0.5 w-[calc(100%-8px)] bg-border"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-card/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    📍 Next Step: System Design Chapter 7 - Message Queues
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Active Tracks Table */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle data-testid="active-tracks-title">
                  📚 Your Tracks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="pb-3 font-medium">Track Name</th>
                        <th className="pb-3 font-medium">Progress</th>
                        <th className="pb-3 font-medium">Time Left</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTracks.map((track) => (
                        <tr
                          key={track.id}
                          className="border-b border-border transition-colors hover:bg-card/50"
                        >
                          <td className="py-4">{track.name}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <Progress
                                value={track.progress}
                                className="w-24"
                              />
                              <span className="text-sm">{track.progress}%</span>
                            </div>
                          </td>
                          <td className="py-4 text-sm text-muted-foreground">
                            {track.timeLeft}
                          </td>
                          <td className="py-4">
                            <Badge
                              variant={
                                track.status === 'Completed'
                                  ? 'default'
                                  : track.status === 'In Progress'
                                  ? 'secondary'
                                  : 'outline'
                              }
                            >
                              {track.status}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/tracks/${track.slug}`}>
                                {track.status === 'Completed'
                                  ? 'Review'
                                  : track.status === 'In Progress'
                                  ? 'Continue'
                                  : 'Start'}
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Resume Health */}
            <Card className="relative overflow-hidden border-border">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent"></div>
              <CardHeader>
                <CardTitle data-testid="resume-health-title">
                  🔥 AI Resume Roaster
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Last updated 2 days ago
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="relative h-32 w-32">
                      <svg className="h-full w-full -rotate-90 transform">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-border"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 56 * (1 - 6.5 / 10)
                          }`}
                          className="text-yellow-500 transition-all duration-1000"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold">6.5</span>
                        <span className="text-xs text-muted-foreground">
                          / 10
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="mt-2 bg-yellow-500/10 text-yellow-600"
                    >
                      Fair Score
                    </Badge>
                  </div>

                  <div className="flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Your resume has potential but needs work. Focus on action
                      verbs and quantifiable metrics.
                    </p>

                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        <span>Clean layout and readable formatting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-red-500">✕</span>
                        <span>Weak action verbs detected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 text-yellow-500">⚠</span>
                        <span>Missing quantifiable metrics</span>
                      </li>
                    </ul>

                    <Button asChild data-testid="fix-with-ai-button">
                      <Link to="/resume-roaster">Fix with AI</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
