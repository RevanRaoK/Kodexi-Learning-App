import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Download,
  Upload,
  Check,
  AlertCircle,
  Lightbulb,
  ThumbsUp,
  Home,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { mockResumeAnalysis } from '@/data/mockData';

export default function ResumeReport() {
  const { reportId } = useParams();
  const report = mockResumeAnalysis;

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-500';
    if (score >= 5) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary"></div>
            <span className="text-xl font-bold text-primary">KODEXI</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              to="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              to="/resume-roaster"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Resumes
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-primary"
            >
              Analysis
            </Link>
          </nav>

          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/resume-roaster" className="hover:text-foreground">
              Resumes
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Analysis Report</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            AI GENERATED REPORT
          </Badge>
          <h1 className="mb-4 text-4xl font-bold" data-testid="report-title">
            Resume Analysis
          </h1>
          <p className="text-lg text-muted-foreground">
            Your resume health is{' '}
            <span className={getScoreColor(report.score)}>{report.status}</span>
          </p>
        </div>

        {/* Score Visualization */}
        <div className="mb-12 flex flex-col items-center">
          <div className="relative mb-6 h-40 w-40">
            <svg className="h-full w-full -rotate-90 transform">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                className="text-border"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - report.score / 10)}`}
                className={`${getScoreColor(report.score)} transition-all duration-1000`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">{report.score}</span>
              <span className="text-sm text-muted-foreground">SCORE</span>
            </div>
          </div>

          {/* Score Bar */}
          <div className="relative h-2 w-full max-w-md overflow-hidden rounded-full bg-border">
            <div className="absolute inset-y-0 left-0 w-[40%] bg-red-500"></div>
            <div className="absolute inset-y-0 left-[40%] w-[40%] bg-yellow-500"></div>
            <div className="absolute inset-y-0 left-[80%] w-[20%] bg-green-500"></div>
            <div
              className="absolute inset-y-0 w-1 bg-foreground"
              style={{ left: `${(report.score / 10) * 100}%` }}
            >
              <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-foreground"></div>
            </div>
          </div>
          <div className="mt-2 flex w-full max-w-md justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>4</span>
            <span>7</span>
            <span>10</span>
          </div>
        </div>

        {/* Action Summary */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="border-border rounded-2xl">
            <CardContent className="p-6 text-center">
              <AlertCircle className="mx-auto mb-2 h-8 w-8 text-red-500" />
              <p className="mb-1 text-sm text-muted-foreground">
                Critical Issues Detected
              </p>
              <Badge variant="destructive" className="text-lg">
                {report.summary.critical} ISSUES
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl">
            <CardContent className="p-6 text-center">
              <Lightbulb className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
              <p className="mb-1 text-sm text-muted-foreground">Improvements</p>
              <Badge variant="secondary" className="text-lg">
                {report.summary.improvements}
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border rounded-2xl">
            <CardContent className="p-6 text-center">
              <ThumbsUp className="mx-auto mb-2 h-8 w-8 text-green-500" />
              <p className="mb-1 text-sm text-muted-foreground">
                What's Working
              </p>
              <Badge variant="secondary" className="text-lg">
                {report.summary.working}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Critical Issues & Next Steps */}
          <div className="space-y-8 lg:col-span-2">
            {/* Critical Issues */}
            <Card className="overflow-hidden border-l-4 border-l-red-500 border-border bg-card shadow-lg rounded-2xl">
              <div className="border-b border-border bg-gradient-to-r from-red-500/10 to-transparent p-6">
                <h2 className="flex items-center gap-2 text-2xl font-bold" data-testid="critical-issues-title">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                  Critical Issues (Fix Immediately)
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  These are blocking you from getting interviews
                </p>
              </div>

              <CardContent className="p-6">
                <div className="space-y-8">
                  {report.criticalIssues.map((issue) => (
                    <div key={issue.id} className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Badge variant="destructive" className="mt-1">
                          {issue.id}
                        </Badge>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold">
                            {issue.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {issue.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border-2 border-red-500/20 bg-red-500/5 p-4">
                          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-500">
                            <span>✕</span> BEFORE
                          </p>
                          <p className="text-sm">{issue.before}</p>
                        </div>

                        <div className="rounded-lg border-2 border-green-500/20 bg-green-500/5 p-4">
                          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-500">
                            <Check className="h-4 w-4" /> SUGGESTED
                          </p>
                          <p className="text-sm">{issue.suggested}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Improvements */}
            <Card className="overflow-hidden border-l-4 border-l-yellow-500 border-border bg-card shadow-lg rounded-2xl">
              <div className="border-b border-border bg-gradient-to-r from-yellow-500/10 to-transparent p-6">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  Improvements (Do This Next)
                </h2>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {report.improvements.map((improvement) => (
                    <div key={improvement.id}>
                      <h3 className="mb-2 font-semibold">{improvement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {improvement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Working */}
            <Card className="overflow-hidden border-l-4 border-l-green-500 border-border bg-card shadow-lg rounded-2xl">
              <div className="border-b border-border bg-gradient-to-r from-green-500/10 to-transparent p-6">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <ThumbsUp className="h-6 w-6 text-green-500" />
                  What's Working
                </h2>
              </div>

              <CardContent className="p-6">
                <ul className="space-y-3">
                  {report.whatsWorking.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="overflow-hidden border-l-4 border-l-blue-500 border-border bg-card shadow-lg rounded-2xl">
              <div className="border-b border-border bg-gradient-to-r from-blue-500/10 to-transparent p-6">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                  <FileText className="h-6 w-6 text-blue-500" />
                  Next Steps
                </h2>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  {report.nextSteps.map((step, index) => (
                    <label
                      key={index}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-border"
                      />
                      <span className="text-sm">{step}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="space-y-6">
            <Card className="border-border sticky top-6 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="mb-6 font-semibold">Quick Stats</h3>

                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>Impact Score</span>
                      <span className="font-medium">
                        {report.quickStats.impact}/10
                      </span>
                    </div>
                    <Progress
                      value={report.quickStats.impact * 10}
                      className="h-2"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>ATS Readability</span>
                      <span className="font-medium">
                        {report.quickStats.atsReadability}/10
                      </span>
                    </div>
                    <Progress
                      value={report.quickStats.atsReadability * 10}
                      className="h-2"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>Brevity</span>
                      <span className="font-medium">
                        {report.quickStats.brevity}/10
                      </span>
                    </div>
                    <Progress
                      value={report.quickStats.brevity * 10}
                      className="h-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="outline" size="lg" data-testid="download-pdf-button">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button size="lg" asChild data-testid="upload-new-version-button">
            <Link to="/resume-roaster">
              <Upload className="mr-2 h-4 w-4" />
              Upload New Version
            </Link>
          </Button>
        </div>
      </main>

      {/* Sticky Footer */}
      <div className="sticky bottom-6 z-10 px-4">
        <div className="container mx-auto">
          <Card className="border-white/10 bg-background/90 shadow-xl backdrop-blur-xl ring-1 ring-white/5 rounded-2xl">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12">
                  <svg className="h-full w-full -rotate-90 transform">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-border"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 20}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 20 * (1 - report.score / 10)
                      }`}
                      className={getScoreColor(report.score)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">{report.score}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Made 2 changes? Upload again to see improvement
                </p>
              </div>

              <Button asChild>
                <Link to="/resume-roaster">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Version
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
