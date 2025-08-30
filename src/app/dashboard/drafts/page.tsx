
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
import Link from 'next/link';
import { FileEdit, Trash2 } from 'lucide-react';

export default function DraftsPage() {
  const drafts = [
    {
      name: 'Q3 Marketing Blitz',
      lastEdited: 'August 5, 2024',
      platform: 'Instagram',
    },
    {
      name: 'Weekly Newsletter Ideas',
      lastEdited: 'August 2, 2024',
      platform: 'LinkedIn',
    },
    {
      name: 'Funny Friday Meme',
      lastEdited: 'July 31, 2024',
      platform: 'X',
    },
  ];

  return (
    <div className="flex-1 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Drafts</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Draft Posts</CardTitle>
            <CardDescription>
              Continue where you left off. Here are the posts you're still working on.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Draft Name</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Last Edited</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drafts.map((draft) => (
                  <TableRow key={draft.name}>
                    <TableCell className="font-medium">{draft.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{draft.platform}</Badge>
                    </TableCell>
                    <TableCell>{draft.lastEdited}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href="/dashboard/create-post">
                          <FileEdit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
