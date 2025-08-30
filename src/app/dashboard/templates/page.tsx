
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FilePlus2, FileText, Palmtree } from 'lucide-react';

export default function TemplatesPage() {
  const templates = [
    {
      name: 'Product Launch Announcement',
      description: 'A template for announcing a new product on social media.',
      icon: <FilePlus2 className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Weekly Blog Post Promo',
      description: 'Promote your latest blog post with this engaging template.',
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Holiday Sale Template',
      description: 'A festive template for your holiday sales and promotions.',
      icon: <Palmtree className="h-8 w-8 text-primary" />,
    },
     {
      name: 'Quote of the Day',
      description: 'Share an inspirational quote with a beautiful background.',
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Templates</h1>
        <Button>
          <FilePlus2 className="mr-2 h-4 w-4" />
          Create New Template
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.name}>
            <CardHeader className="flex flex-row items-center gap-4">
              {template.icon}
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{template.description}</CardDescription>
            </CardContent>
            <div className="p-6 pt-0">
               <Button variant="outline" className="w-full">
                Use Template
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
