import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Play,
  RotateCcw,
  Settings,
  Check,
  X,
  Lightbulb,
  ChevronRight,
} from 'lucide-react';
import { mockChallengeData } from '@/data/mockData';

export default function CodePlayground() {
  const { trackSlug, challengeSlug } = useParams();
  const challenge =
    mockChallengeData[challengeSlug as keyof typeof mockChallengeData];
  const [code, setCode] = useState(challenge?.initialCode || '');

  if (!challenge) {
    return <div>Challenge not found</div>;
  }

  const passedTests = challenge.tests.filter((t) => t.status === 'passed').length;
  const totalTests = challenge.tests.length;

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Top Navigation */}
      <nav className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
        <div className="flex items-center gap-4">
          <Link
            to={`/tracks/${trackSlug}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {trackSlug?.replace('-', ' ')}
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium" data-testid="challenge-title">
            {challenge.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">⏱️ 0:00</span>
          <Button size="sm" data-testid="run-code-button">
            <Play className="mr-2 h-4 w-4" />
            Run Code
          </Button>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Problem Description */}
        <div className="w-[35%] overflow-y-auto border-r border-border bg-background p-6">
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-2xl font-bold">{challenge.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="destructive" data-testid="difficulty-badge">
                DIFFICULTY: {challenge.difficulty}
              </Badge>
              <Badge variant="secondary">{challenge.points} points</Badge>
            </div>
          </div>

          <Card className="mb-6 border-border">
            <CardContent className="p-6">
              <h2 className="mb-3 flex items-center gap-2 font-semibold">
                📝 {challenge.description}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {challenge.task}
              </p>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold">Requirements:</h3>
                {challenge.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="mt-0.5 h-4 w-4 rounded border border-border"></div>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <button
                className="mb-3 flex w-full items-center justify-between text-left font-semibold"
                data-testid="hints-toggle"
              >
                <span className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                  Hints
                </span>
              </button>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {challenge.hints.map((hint, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{hint}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" className="mt-4 w-full">
                <Lightbulb className="mr-2 h-4 w-4" />
                Need a hint?
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Editor & Output */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Code Editor */}
          <div className="flex flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
              <Tabs defaultValue="main" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="main" data-testid="file-tab-main">
                      cache-service.js
                    </TabsTrigger>
                    <TabsTrigger value="package">package.json</TabsTrigger>
                    <TabsTrigger value="readme">README.md</TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Play className="mr-2 h-4 w-4" />
                      Run Code
                    </Button>
                    <Button size="sm" variant="ghost">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Tabs>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Line Numbers */}
              <div className="w-12 shrink-0 select-none border-r border-border bg-card py-4 pr-2 text-right font-mono text-xs leading-6 text-muted-foreground">
                {code.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code Area */}
              <div className="flex-1 overflow-auto">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="h-full w-full resize-none bg-background p-4 font-mono text-sm leading-6 text-foreground outline-none"
                  spellCheck="false"
                  data-testid="code-editor"
                />
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="flex h-1/3 shrink-0 flex-col border-t border-border bg-background">
            <Tabs defaultValue="results" className="flex flex-1 flex-col">
              <div className="flex items-center justify-between border-b border-border bg-card px-4">
                <TabsList>
                  <TabsTrigger value="results" data-testid="tab-test-results">
                    TEST RESULTS
                  </TabsTrigger>
                  <TabsTrigger value="console">CONSOLE OUTPUT</TabsTrigger>
                  <TabsTrigger value="problems">PROBLEMS (0)</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="results" className="flex-1 overflow-auto p-4 m-0">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Running tests...
                  </p>

                  {challenge.tests.map((test) => (
                    <Card
                      key={test.id}
                      className={`border ${
                        test.status === 'passed'
                          ? 'border-green-500/20 bg-green-500/5'
                          : 'border-red-500/20 bg-red-500/5'
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {test.status === 'passed' ? (
                            <Check className="h-5 w-5 shrink-0 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 shrink-0 text-red-500" />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                Test {test.id}:{' '}
                                <span
                                  className={
                                    test.status === 'passed'
                                      ? 'text-green-500'
                                      : 'text-red-500'
                                  }
                                >
                                  {test.status.toUpperCase()}
                                </span>
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {test.message}
                            </p>
                            {test.details && (
                              <pre className="mt-2 rounded bg-card p-2 text-xs text-red-400">
                                {test.details}
                              </pre>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="mt-4 rounded-lg border border-border bg-card p-4">
                    <p className="text-sm">
                      <span className="font-semibold">Total Tests:</span>{' '}
                      {totalTests} |{' '}
                      <span className="text-green-500">
                        Passed: {passedTests}
                      </span>{' '}
                      |{' '}
                      <span className="text-red-500">
                        Failed: {totalTests - passedTests}
                      </span>
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="console" className="flex-1 p-4 m-0">
                <pre className="font-mono text-sm text-muted-foreground">
                  Console output will appear here...
                </pre>
              </TabsContent>

              <TabsContent value="problems" className="flex-1 p-4 m-0">
                <p className="text-sm text-muted-foreground">
                  No problems detected
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 border-t border-border bg-background p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {passedTests}/{totalTests} tests passed
            </span>
            <Progress value={(passedTests / totalTests) * 100} className="w-64" />
          </div>

          <Button
            disabled={passedTests !== totalTests}
            data-testid="next-challenge-button"
          >
            Next Challenge
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
