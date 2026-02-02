export const mockUser = {
  id: '1',
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  status: 'Premium User',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  currentGoal: 'Product Engineer',
  jobReadiness: 'Medium',
  aiCredits: 450,
  creditsRefillDays: 12,
};

export const mockStats = {
  tracksCompleted: 3,
  totalTracks: 12,
  weeklyProgress: 1,
  jobReadiness: 'Medium',
  jobReadinessNote: 'Needs improvement in System Design',
};

export const mockRoadmap = [
  {
    id: '1',
    title: 'DSA Foundation',
    status: 'completed',
    progress: 100,
  },
  {
    id: '2',
    title: 'System Design',
    status: 'in-progress',
    progress: 60,
  },
  {
    id: '3',
    title: 'LLMs & GenAI',
    status: 'in-progress',
    progress: 30,
  },
  {
    id: '4',
    title: 'Advanced Backend',
    status: 'locked',
    progress: 0,
  },
  {
    id: '5',
    title: 'Mock Interview',
    status: 'locked',
    progress: 0,
  },
];

export const mockTracks = [
  {
    id: '1',
    name: 'System Design Masterclass',
    progress: 60,
    timeLeft: '5h 30m',
    status: 'In Progress',
    slug: 'system-design',
  },
  {
    id: '2',
    name: 'LLM & Generative AI',
    progress: 30,
    timeLeft: '12h 15m',
    status: 'In Progress',
    slug: 'llm-gen-ai',
  },
  {
    id: '3',
    name: 'DSA Foundation',
    progress: 100,
    timeLeft: 'Completed',
    status: 'Completed',
    slug: 'dsa-foundation',
  },
  {
    id: '4',
    name: 'Advanced Backend Development',
    progress: 0,
    timeLeft: '18h 00m',
    status: 'Not Started',
    slug: 'advanced-backend',
  },
];

export const mockCourseContent = {
  'system-design': {
    title: 'System Design',
    description: 'Master the art of building scalable systems for MAANG+ interviews',
    level: 'Advanced Level',
    stats: {
      chapters: 10,
      duration: '12h 30m',
      learners: '2.4k',
    },
    progress: 60,
    timeSpent: '7h 15m',
    weeklyProgress: '1.5h',
    modulesCompleted: 6,
    totalModules: 10,
    estimatedRemaining: '5h 15m',
    whatYouLearn: [
      'Design distributed systems at scale',
      'Build fault-tolerant architectures',
      'Optimize for performance and reliability',
      'Master database sharding strategies',
      'Implement caching layers effectively',
    ],
    instructors: [
      {
        name: 'Sarah Chen',
        role: 'Ex-Google SWE',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
      {
        name: 'Raj Patel',
        role: 'Meta Tech Lead',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Raj',
      },
    ],
    chapters: [
      {
        id: '1',
        number: 1,
        title: 'Introduction to System Design',
        duration: '45m',
        status: 'completed',
        type: 'reading',
      },
      {
        id: '2',
        number: 2,
        title: 'Load Balancing Strategies',
        duration: '1h 10m',
        status: 'completed',
        type: 'reading',
      },
      {
        id: '3',
        number: 3,
        title: 'Microservices vs. Monolithic',
        duration: '1h 30m',
        status: 'current',
        type: 'reading',
        slug: 'microservices',
      },
      {
        id: '4',
        number: 4,
        title: 'Message Queues & Async Processing',
        duration: '1h 15m',
        status: 'locked',
        type: 'reading',
      },
      {
        id: '5',
        number: 5,
        title: 'Database Sharding',
        duration: '1h 45m',
        status: 'locked',
        type: 'reading',
      },
      {
        id: '6',
        number: 6,
        title: 'Caching Strategies',
        duration: '1h 20m',
        status: 'locked',
        type: 'reading',
      },
      {
        id: '7',
        number: 7,
        title: 'Redis Challenge',
        duration: '2h 00m',
        status: 'locked',
        type: 'challenge',
        slug: 'redis-caching',
      },
      {
        id: '8',
        number: 8,
        title: 'CDN & Edge Computing',
        duration: '1h 05m',
        status: 'locked',
        type: 'reading',
      },
      {
        id: '9',
        number: 9,
        title: 'Case Study: Netflix',
        duration: '50m',
        status: 'locked',
        type: 'reading',
      },
      {
        id: '10',
        number: 10,
        title: 'Final Assessment',
        duration: '1h 30m',
        status: 'locked',
        type: 'challenge',
      },
    ],
  },
};

export const mockChapterContent = {
  microservices: {
    title: 'Microservices vs. Monolithic Architecture',
    readTime: '15 min read',
    level: 'Advanced',
    progress: 70,
    currentPart: 7,
    totalParts: 10,
    tableOfContents: [
      { id: '1', title: 'Introduction', status: 'completed', slug: 'intro' },
      {
        id: '2',
        title: 'Monolith Architecture',
        status: 'completed',
        slug: 'monolith',
      },
      {
        id: '3',
        title: 'Microservices',
        status: 'current',
        slug: 'microservices',
      },
      {
        id: '4',
        title: 'Case Study',
        status: 'pending',
        slug: 'case-study',
      },
      { id: '5', title: 'Summary', status: 'pending', slug: 'summary' },
    ],
    content: `# Microservices vs. Monolithic Architecture

## The Monolith

A monolithic architecture is the traditional unified model for software programs. In this approach, all components of an application are tightly coupled and run as a single service.

**Key Characteristics:**
- Single codebase
- Shared database
- Tightly coupled components
- Deployed as one unit

### Example Monolith Structure

\`\`\`javascript
// A typical monolithic Express.js application
const express = require('express');
const app = express();

// All routes in one place
app.get('/users', (req, res) => {
  // User logic
});

app.get('/orders', (req, res) => {
  // Order logic
});

app.get('/payments', (req, res) => {
  // Payment logic
});

app.listen(3000);
\`\`\`

## Microservices Architecture

Microservices break down the application into smaller, independent services that communicate via APIs. Each service:
- Has its own database
- Can be deployed independently
- Uses lightweight protocols (HTTP/REST, gRPC)
- Is built around business capabilities

### Example Microservices Structure

\`\`\`javascript
// User Service (runs on port 3001)
const express = require('express');
const userApp = express();

userApp.get('/users', async (req, res) => {
  const users = await UserDB.find();
  res.json(users);
});

userApp.listen(3001);

// Order Service (runs on port 3002)
const orderApp = express();

orderApp.post('/orders', async (req, res) => {
  const user = await fetch('http://user-service:3001/users/' + req.body.userId);
  const order = await OrderDB.create({ userId: user.id, ...req.body });
  res.json(order);
});

orderApp.listen(3002);
\`\`\`

## When to Choose What?

**Choose Monolith when:**
- Building an MVP or small application
- Team is small (< 10 developers)
- Simple deployment requirements

**Choose Microservices when:**
- Large, complex applications
- Need independent scaling
- Multiple teams working in parallel
- Polyglot persistence requirements`,
  },
};

export const mockResumeReports = [
  {
    id: 'abc123',
    filename: 'alex_morgan_resume_v2.pdf',
    date: '2024-03-15',
    targetIndustry: 'MAANG / Big Tech',
    score: 6.5,
    status: 'Needs Improvement',
  },
  {
    id: 'def456',
    filename: 'alex_morgan_resume_v1.pdf',
    date: '2024-03-10',
    targetIndustry: 'Early Stage Startup',
    score: 5.8,
    status: 'Needs Improvement',
  },
];

export const mockResumeAnalysis = {
  id: 'abc123',
  score: 6.5,
  status: 'Needs Improvement',
  filename: 'alex_morgan_resume_v2.pdf',
  date: '2024-03-15',
  targetIndustry: 'MAANG / Big Tech',
  summary: {
    critical: 3,
    improvements: 2,
    working: 4,
  },
  criticalIssues: [
    {
      id: 1,
      title: 'Weak Action Verbs',
      description:
        'Using passive or generic verbs like "Responsible for" or "Worked on" diminishes impact. Action verbs like "Led", "Architected", "Optimized" show initiative.',
      before:
        'Responsible for improving the API performance and worked on database optimization.',
      suggested:
        'Architected and optimized API endpoints, reducing response time by 40% through database indexing and query optimization.',
    },
    {
      id: 2,
      title: 'Missing Quantifiable Metrics',
      description:
        'Every achievement should be backed by numbers. Recruiters want to see measurable impact, not vague claims.',
      before: 'Improved user engagement on the platform.',
      suggested:
        'Increased user engagement by 35% (from 2M to 2.7M MAU) by implementing personalized content recommendations.',
    },
    {
      id: 3,
      title: 'No Tech Stack Mentioned',
      description:
        'Your resume lacks specific technologies used. Recruiters filter by keywords—missing them means your resume might not even be seen.',
      before: 'Built a web application for e-commerce.',
      suggested:
        'Developed a full-stack e-commerce platform using React, Node.js, PostgreSQL, and AWS, handling 10k+ daily transactions.',
    },
  ],
  improvements: [
    {
      id: 1,
      title: 'Consistency Check',
      description:
        'Ensure consistent formatting: bullet styles, date formats, and spacing.',
    },
    {
      id: 2,
      title: 'Length Optimization',
      description:
        'Your resume is 2.5 pages. Aim for 1-2 pages max. Remove redundant details.',
    },
  ],
  whatsWorking: [
    'Clean layout with good readability',
    'Appropriate font choice (ATS-friendly)',
    'Education section is well-structured',
    'Contact information is complete and professional',
  ],
  nextSteps: [
    'Rewrite Summary Section with stronger action verbs',
    'Add Technical Skills Section prominently',
    'Proofread Formatting for consistency',
  ],
  quickStats: {
    impact: 7,
    atsReadability: 9,
    brevity: 5,
  },
};

export const mockChallengeData = {
  'redis-caching': {
    title: 'Redis Caching Strategy',
    difficulty: 'HARD',
    points: 150,
    description: 'Implement Redis Caching Layer',
    task: 'You need to modify the existing Express API to implement a Redis caching layer that reduces database load and improves response times.',
    requirements: [
      'Implement cache-aside pattern for GET requests',
      'Set appropriate TTL (Time To Live) values',
      'Handle cache invalidation on POST/PUT/DELETE',
    ],
    hints: [
      'Use Redis SET with EX flag for automatic expiration',
      'Cache keys should be descriptive (e.g., "user:123")',
      'Always handle Redis connection errors gracefully',
    ],
    initialCode: `const express = require('express');
const redis = require('redis');
const app = express();

const client = redis.createClient({
  host: 'localhost',
  port: 6379
});

client.on('error', (err) => console.log('Redis Client Error', err));

// TODO: Implement caching for this endpoint
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  
  // Your code here
  
  res.json({ user });
});

app.listen(3000);`,
    tests: [
      {
        id: 1,
        name: 'Cache Hit Test',
        status: 'passed',
        message: 'Successfully returns cached data on second request',
      },
      {
        id: 2,
        name: 'Cache Miss Test',
        status: 'passed',
        message: 'Fetches from database when cache is empty',
      },
      {
        id: 3,
        name: 'TTL Test',
        status: 'failed',
        message: 'Expected cache to expire after 300s, but it persists',
        details: 'Error: Cache key "user:123" still exists after 301 seconds',
      },
    ],
  },
};

export const mockPricingPlans = [
  {
    id: '1',
    name: 'Pro Yearly',
    badge: 'Best Value',
    price: '₹999',
    period: '/year',
    features: [
      'Access to all tracks & modules',
      'AI Resume Roaster (Unlimited)',
      'Mock Interviews (10/month)',
      'Code Playground',
      'Priority Support',
      'Community Access',
    ],
  },
  {
    id: '2',
    name: 'Lifetime',
    badge: 'One-time',
    price: '₹4,999',
    period: 'forever',
    features: [
      'Everything in Pro',
      'Lifetime Updates',
      'Exclusive Masterclasses',
      '1-on-1 Mentorship Sessions (2/month)',
      'Early Access to New Features',
      'Career Guidance',
    ],
  },
];
