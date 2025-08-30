
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, FileEdit, Trash2, Copy } from 'lucide-react';
import Link from 'next/link';

export default function PostsPage() {
  const posts = [
    {
      name: 'Summer Sale Announcement',
      status: 'Published',
      platform: 'Instagram',
      lastModified: 'July 15, 2024',
    },
    {
      name: 'New Product Launch',
      status: 'Scheduled',
      platform: 'X',
      lastModified: 'July 14, 2024',
    },
    {
      name: 'Holiday Promotion',
      status: 'Published',
      platform: 'Facebook',
      lastModified: 'July 12, 2024',
    },
     {
      name: 'Tech Talk Webinar',
      status: 'Draft',
      platform: 'LinkedIn',
      lastModified: 'July 18, 2024',
    },
    {
      name: 'Behind the Scenes',
      status: 'Published',
      platform: 'TikTok',
      lastModified: 'July 17, 2024',
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
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Posts</h1>
        <Link href="/dashboard/create-post">
          <Button>Create New Post</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
          <CardDescription>Manage your posts across all platforms.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post Name</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.name}>
                  <TableCell className="font-medium">{post.name}</TableCell>
                   <TableCell>
                      <Badge variant="outline">{post.platform}</Badge>
                    </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(post.status) as any}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.lastModified}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <FileEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
