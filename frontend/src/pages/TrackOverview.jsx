import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  BookOpen,
  Clock,
  Users,
  Check,
  Lock,
  Play,
  ChevronDown,
  ArrowLeft,
} from 'lucide-react';
import { mockCourseContent } from '@/data/mockData';

export default function TrackOverview() {
  const { trackSlug } = useParams();
  const course = mockCourseContent[trackSlug];

  if (!course) {
    return <div>Track not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Button variant="ghost" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative mx-auto px-4 py-12">
          <div className="mb-4 flex items-center gap-2">
            <Badge data-testid="track-badge">TRACK</Badge>
            <Badge variant="secondary" data-testid="level-badge">{course.level}</Badge>
          </div>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="track-title">
            {course.title}
          </h1>
          <p className="mb-6 max-w-2xl text-lg text-muted-foreground">
            {course.description}
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>{course.stats.chapters} Chapters</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{course.stats.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{course.stats.learners} Learners</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20">
              <svg className="h-full w-full -rotate-90 transform">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-border"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 34 * (1 - course.progress / 100)
                  }`}
                  className="text-primary transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold">{course.progress}%</span>
              </div>
            </div>

            <Button size="lg" asChild data-testid="continue-learning-button">
              <Link to={`/tracks/${trackSlug}/chapters/microservices`}>
                Continue Learning
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Cards */}
      <section className="border-b border-border bg-card/50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <p className="mb-2 text-sm text-muted-foreground">Time Spent</p>
                <p className="mb-1 text-3xl font-bold">{course.timeSpent}</p>
                <p className="text-xs text-muted-foreground">
                  +{course.weeklyProgress} this week
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="mb-2 text-sm text-muted-foreground">
                  Modules Completed
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <svg className="h-full w-full -rotate-90 transform">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-border"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${
                          2 * Math.PI *
                          28 *
                          (1 - course.modulesCompleted / course.totalModules)
                        }`}
                        className="text-primary"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold">
                        {course.modulesCompleted}/{course.totalModules}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Keep it up!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <p className="mb-2 text-sm text-muted-foreground">
                  Est. Remaining
                </p>
                <p className="mb-1 text-3xl font-bold">
                  {course.estimatedRemaining}
                </p>
                <p className="text-xs text-muted-foreground">To finish track</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-3">
          {/* Course Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold" data-testid="course-content-title">
              Course Content
            </h2>

            <div className="space-y-2">
              {course.chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`flex items-center justify-between rounded-lg border p-4 transition-colors ${
                    chapter.status === 'current'
                      ? 'border-primary bg-primary/5 border-l-4'
                      : 'border-border bg-card hover:bg-card/80'
                  }`}
                  data-testid={`chapter-${chapter.number}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        chapter.status === 'completed'
                          ? 'bg-primary/10 text-primary'
                          : chapter.status === 'current'
                          ? 'bg-blue-500/10 text-blue-500'
                          : 'bg-card text-muted-foreground'
                      }`}
                    >
                      {chapter.status === 'completed' ? (
                        <Check className="h-5 w-5" />
                      ) : chapter.status === 'current' ? (
                        <Play className="h-5 w-5" />
                      ) : (
                        <Lock className="h-5 w-5" />
                      )}
                    </div>

                    <div>
                      <p className="font-medium">
                        {chapter.number}. {chapter.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {chapter.duration} • {chapter.type}
                      </p>
                    </div>
                  </div>

                  {chapter.status !== 'locked' && (
                    <Button
                      variant={
                        chapter.status === 'current' ? 'default' : 'ghost'
                      }
                      size="sm"
                      asChild
                    >
                      <Link
                        to={
                          chapter.type === 'reading'
                            ? `/tracks/${trackSlug}/chapters/${chapter.slug || 'intro'}`
                            : `/tracks/${trackSlug}/challenges/${chapter.slug || 'challenge'}`
                        }
                      >
                        {chapter.status === 'completed'
                          ? 'Review'
                          : chapter.status === 'current'
                          ? 'Continue'
                          : 'Start'}
                      </Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <Button variant="ghost" className="mt-4 w-full">
              Show all {course.stats.chapters} chapters
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">What You'll Learn</h3>
                <ul className="space-y-3">
                  {course.whatYouLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Your Instructors</h3>
                <div className="space-y-4">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={instructor.avatar} />
                        <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{instructor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {instructor.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-border bg-gradient-to-br from-primary/10 to-card">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">Join the Discussion</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Connect with other learners and ask questions
                </p>
                <Button variant="outline" className="w-full">
                  Visit Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
