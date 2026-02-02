import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Circle,
  Bot,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { mockChapterContent } from '@/data/mockData';

export default function NoteReader() {
  const { trackSlug, chapterSlug } = useParams();
  const chapter =
    mockChapterContent[chapterSlug];

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Table of Contents */}
      <aside className="w-64 shrink-0 border-r border-border bg-background p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Table of Contents
        </h3>

        <nav className="space-y-2">
          {chapter.tableOfContents.map((item) => (
            <Link
              key={item.id}
              to={`#${item.slug}`}
              className={`flex items-start gap-2 rounded-2xl p-2 text-sm transition-colors ${
                item.status === 'current'
                  ? 'bg-primary/10 text-primary font-medium'
                  : item.status === 'completed'
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-muted-foreground/60'
              }`}
              data-testid={`toc-${item.slug}`}
            >
              {item.status === 'completed' ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              ) : item.status === 'current' ? (
                <FileText className="mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          className="mt-6 w-full"
          size="sm"
          data-testid="ask-ai-button"
        >
          <Bot className="mr-2 h-4 w-4" />
          Ask AI Assistant
        </Button>

        <div className="mt-6 text-sm text-muted-foreground">
          {chapter.progress}% complete
        </div>
        <Progress value={chapter.progress} className="mt-2" />
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to={`/tracks/${trackSlug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {trackSlug?.replace('-', ' ')}
              </Link>
            </Button>

            <h2 className="text-sm font-medium" data-testid="chapter-header-title">
              Chapter {chapter.currentPart}: {chapter.title.split(' ').slice(0, 4).join(' ')}
            </h2>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Part {chapter.currentPart} of {chapter.totalParts}
              </span>
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <article className="mx-auto max-w-3xl px-8 py-12">
            <h1 className="mb-4 text-4xl font-bold" data-testid="chapter-title">
              {chapter.title}
            </h1>

            <div className="mb-8 flex items-center gap-4">
              <Badge variant="secondary">
                <span className="mr-1">⏱️</span>
                {chapter.readTime}
              </Badge>
              <Badge variant="secondary">
                <span className="mr-1">📊</span>
                {chapter.level}
              </Badge>
            </div>

            <div className="h-px bg-border"></div>

            <div className="prose prose-invert mt-8 max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ node, ...props }) => (
                    <h2
                      className="mb-4 mt-8 border-l-4 border-primary pl-4 text-2xl font-bold"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="mb-3 mt-6 text-xl font-semibold" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-4 leading-7 text-foreground/90" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="mb-4 ml-6 list-disc space-y-2" {...props} />
                  ),
                  code: ({ node, inline, ...props }) =>
                    inline ? (
                      <code
                        className="rounded bg-card px-1.5 py-0.5 font-mono text-sm text-primary"
                        {...props}
                      />
                    ) : (
                      <div className="relative my-6">
                        <div className="overflow-x-auto rounded-lg border-l-4 border-primary bg-card p-6">
                          <pre className="font-mono text-sm leading-relaxed">
                            <code {...props} />
                          </pre>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          👆 Highlight any line to ask AI!
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          data-testid="try-in-playground"
                        >
                          🚀 Try in Code Playground →
                        </Button>
                      </div>
                    ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-foreground" {...props} />
                  ),
                }}
              >
                {chapter.content}
              </ReactMarkdown>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              <Button variant="outline" asChild>
                <Link to="#previous">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous: Load Balancing
                </Link>
              </Button>

              <Button asChild data-testid="next-chapter-button">
                <Link to="#next">
                  Next: Message Queues
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        </main>

        {/* Sticky Footer */}
        <footer className="sticky bottom-0 border-t border-border bg-background p-4">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Chapter Progress
            </span>
            <div className="flex items-center gap-4">
              <Progress value={chapter.progress} className="w-64" />
              <span className="text-sm font-medium">{chapter.progress}%</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
