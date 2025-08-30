import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FileEdit, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const posts = [
    {
      name: 'Summer Sale Announcement',
      status: 'Published',
      scheduled: 'July 15, 2024',
    },
    {
      name: 'New Product Launch',
      status: 'Draft',
      scheduled: 'Not Scheduled',
    },
    {
      name: 'Holiday Promotion',
      status: 'Scheduled',
      scheduled: 'December 1, 2024',
    },
  ];

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Published':
        return 'default';
      case 'Draft':
        return 'secondary';
      case 'Scheduled':
        return 'outline';
      default:
        return 'default';
    }
  };
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.name}>
                  <TableCell className="font-medium">{post.name}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(post.status) as any}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.scheduled}</TableCell>
                  <TableCell>
                    <Link href="#">
                      <Button variant="link" className="p-0 h-auto">
                        {post.status === 'Draft' ? 'Edit' : 'View'}
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <LayoutTemplate className="w-8 h-8 text-muted-foreground" />
              <div>
                <h3 className="text-lg font-semibold">Templates</h3>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <FileEdit className="w-8 h-8 text-muted-foreground" />
              <div>
                <h3 className="text-lg font-semibold">Drafts</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
