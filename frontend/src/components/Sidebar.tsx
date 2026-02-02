import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Home,
  BookOpen,
  Bot,
  Video,
  Settings,
  LogOut,
} from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Tracks', path: '/tracks' },
    { icon: Bot, label: 'AI Chat', path: '/ai-chat' },
    { icon: Video, label: 'Mock Interviews', path: '/mock-interviews' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-border bg-background p-4">
      <Link to="/" className="mb-8 flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-primary"></div>
        <span className="text-xl font-bold text-primary">KODEXI</span>
      </Link>

      <nav className="mt-4 flex flex-1 flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              location.pathname === item.path
                ? 'bg-primary/10 text-primary border-l-2 border-primary'
                : 'text-muted-foreground hover:bg-card hover:text-foreground'
            )}
            data-testid={`sidebar-${item.label.toLowerCase().replace(' ', '-')}`}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <Button
        variant="outline"
        className="mt-auto w-full justify-start"
        data-testid="sidebar-logout-button"
      >
        <LogOut className="mr-2 h-5 w-5" />
        Log Out
      </Button>
    </aside>
  );
}
