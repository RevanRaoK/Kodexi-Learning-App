import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Upload,
  FileText,
  Briefcase,
  Rocket,
  Building2,
  Flame,
} from 'lucide-react';
import { mockResumeReports } from '@/data/mockData';

export default function ResumeRoaster() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [industry, setIndustry] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Mock submission - navigate to report
    navigate('/resume-roaster/report/abc123');
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

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/resume-roaster"
              className="text-sm font-medium text-primary"
            >
              Roast
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              History
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Login
            </Link>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 text-center">
        <Flame className="mx-auto mb-4 h-16 w-16 text-primary" />
        <h1 className="mb-4 text-4xl font-bold md:text-5xl" data-testid="roaster-title">
          Ready to get roasted?
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Get brutally honest AI feedback on your resume. We'll tell you what's
          wrong and how to fix it.
        </p>
      </section>

      {/* Upload Section */}
      <section className="container mx-auto max-w-3xl px-4 pb-16">
        <div className="space-y-8">
          {/* Step 1: Upload Resume */}
          <Card className="border-border bg-card shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold" data-testid="upload-step-title">
                1. Upload Resume
              </h2>

              <label
                htmlFor="resume-upload"
                className="group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary/20 bg-background px-6 py-12 transition-all hover:border-primary/50 hover:bg-card/50"
                data-testid="resume-dropzone"
              >
                <Upload className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <div className="text-center">
                  <p className="mb-1 text-sm font-medium">
                    Drag & drop or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports PDF, DOCX (Max 5MB)
                  </p>
                </div>
                {selectedFile && (
                  <Badge variant="secondary" className="mt-2">
                    <FileText className="mr-2 h-3 w-3" />
                    {selectedFile.name}
                  </Badge>
                )}
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                  data-testid="resume-file-input"
                />
              </label>
            </CardContent>
          </Card>

          {/* Step 2: Select Industry */}
          <Card className="border-border bg-card shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-6 text-xl font-bold" data-testid="industry-step-title">
                2. Select Target Industry
              </h2>

              <RadioGroup value={industry} onValueChange={setIndustry}>
                <div className="space-y-4">
                  <label
                    htmlFor="maang"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border-2 border-border p-4 transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <RadioGroupItem value="maang" id="maang" className="mt-1" />
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <span className="font-semibold">MAANG / Big Tech</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Optimized for Meta, Apple, Amazon, Netflix, Google, and
                        similar top-tier companies.
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="startup"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border-2 border-border p-4 transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <RadioGroupItem
                      value="startup"
                      id="startup"
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-primary" />
                        <span className="font-semibold">
                          Early Stage Startup
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Highlights versatility, ownership, and fast-paced work
                        experience.
                      </p>
                    </div>
                  </label>

                  <label
                    htmlFor="corporate"
                    className="flex cursor-pointer items-start gap-4 rounded-lg border-2 border-border p-4 transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                  >
                    <RadioGroupItem
                      value="corporate"
                      id="corporate"
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="font-semibold">
                          Corporate / Finance
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tailored for banks, consultancies, and enterprise
                        companies.
                      </p>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Step 3: Start Roasting */}
          <Card className="border-border bg-card shadow-xl rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-4 text-xl font-bold">3. Start Roasting</h2>

              <p className="mb-6 text-sm text-muted-foreground">
                Analysis typically takes 30-60 seconds. You'll get detailed
                feedback on what's good, what's bad, and how to fix it.
              </p>

              <Button
                size="lg"
                className="w-full"
                disabled={!selectedFile || !industry}
                onClick={handleSubmit}
                data-testid="roast-resume-button"
              >
                <Flame className="mr-2 h-5 w-5" />
                Roast My Resume
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                By uploading you agree to our{' '}
                <Link to="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Roasts */}
      <section className="container mx-auto max-w-3xl px-4 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold" data-testid="recent-roasts-title">
            Recent Roasts
          </h2>
          <Link to="#" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="space-y-4">
          {mockResumeReports.map((report) => (
            <Card
              key={report.id}
              className="border-border bg-card transition-colors hover:bg-card/80 rounded-2xl"
            >
              <CardContent className="p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="h-10 w-10 text-primary" />
                    <div>
                      <p className="font-medium">{report.filename}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.date} • {report.targetIndustry}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-500">
                        {report.score}
                      </p>
                      <p className="text-xs text-muted-foreground">/10</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/resume-roaster/report/${report.id}`}>
                        View Report
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
