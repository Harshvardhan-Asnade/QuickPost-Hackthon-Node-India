
'use client';
import {
  Home,
  FileText,
  LayoutTemplate,
  FileEdit,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/dashboard/posts', icon: FileText, label: 'Posts' },
    { href: '/dashboard/templates', icon: LayoutTemplate, label: 'Templates' },
    { href: '/dashboard/drafts', icon: FileEdit, label: 'Drafts' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex flex-col h-full w-64 bg-card border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">QuickPost</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              pathname === item.href ? 'bg-accent text-primary' : ''
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <Link href="/dashboard/create-post">
          <Button className="w-full">Create New Post</Button>
        </Link>
      </div>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-background">{children}</main>
    </div>
  );
}
