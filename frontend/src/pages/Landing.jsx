import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  Clock,
  MapPinOff,
  Skull,
  Target,
  BookOpen,
  Code,
  Users,
  Sparkles,
} from 'lucide-react';
import { mockPricingPlans } from '@/data/mockData';

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-primary"></div>
        <span className="text-xl font-bold text-primary">KODEXI</span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <Link
          to="#curriculum"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Curriculum
        </Link>
        <Link
          to="#how-it-works"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          How it works
        </Link>
        <Link
          to="#pricing"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Pricing
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Log in
        </Link>
        <Button asChild>
          <Link to="/signup">Sign up</Link>
        </Button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="container mx-auto px-4 py-16 sm:py-24">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      <div className="space-y-8">
        <Badge
          variant="secondary"
          className="bg-primary/10 text-primary hover:bg-primary/20"
        >
          <Sparkles className="mr-1 h-3 w-3" />
          New: System Design Added
        </Badge>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          The{' '}
          <span className="text-primary">Text-First</span> Placement OS
        </h1>

        <p className="text-lg text-muted-foreground">
          Stop wasting time on 50-hour video courses. Read curated content,
          solve real problems, and land your dream job 10x faster.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link to="/signup">Start Learning for Free</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="#curriculum">View Curriculum</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-background bg-card"
                style={{
                  backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${i})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by 10,500+ students
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 rounded-xl bg-primary/20 blur-2xl"></div>
        <Card className="relative aspect-[4/3] overflow-hidden border-border bg-card shadow-2xl rounded-2xl">
          <CardContent className="flex h-full flex-col p-6">
            <div className="mb-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="overflow-hidden text-xs leading-relaxed">
              <code>
                <span className="text-purple-400">function</span>{' '}
                <span className="text-blue-400">designSystem</span>() {'{\n'}
                {'  '}<span className="text-purple-400">const</span> cache ={' '}
                <span className="text-green-400">'Redis'</span>;{'\n'}
                {'  '}<span className="text-purple-400">const</span> db ={' '}
                <span className="text-green-400">'PostgreSQL'</span>;{'\n'}
                {'  '}<span className="text-purple-400">return</span> {'{\n'}
                {'    '}loadBalancer,{'\n'}
                {'    '}microservices,{'\n'}
                {'    '}messageQueue{'\n'}
                {'  }'}; {'\n'}
                {'}'}
              </code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />

      {/* Why Video Courses Fail */}
      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Why Video Courses Fail You
            </h2>
            <p className="text-muted-foreground">
              Traditional learning is broken. Here's why text wins.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Clock, title: 'Video Marathons', desc: '50-hour courses with 90% filler content. You can read the same in 5 hours.' },
              { icon: MapPinOff, title: 'No Roadmap', desc: 'Random tutorials with no structure. Lost after 10 videos.' },
              { icon: Skull, title: 'Outdated Content', desc: '2020 tutorials teaching you deprecated tech. The job market moved on.' },
            ].map((item, i) => (
              <Card key={i} className="group border-border bg-card transition-colors hover:border-primary/50 rounded-2xl">
                <CardContent className="p-8">
                  <item.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground">
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {mockPricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className="relative overflow-hidden border-border bg-card shadow-lg"
              >
                {plan.badge && (
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-primary/10 text-primary">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" asChild>
                    <Link to="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
            <p>© 2024 KODEXI. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
