
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';


export default function TemplatesPage() {
  const templates = [
    {
      title: 'Summer Sale Campaign',
      type: 'Draft',
      image: 'https://picsum.photos/300/200',
      hint: 'summer sale'
    },
    {
      title: 'Product Launch Announcement',
      type: 'Template',
      image: 'https://picsum.photos/300/201',
      hint: 'product launch'
    },
    {
      title: 'Holiday Promotion',
      type: 'Draft',
      image: 'https://picsum.photos/300/202',
      hint: 'holiday promotion'
    },
    {
      title: 'Weekly Newsletter',
      type: 'Template',
      image: 'https://picsum.photos/300/203',
      hint: 'newsletter'
    },
    {
      title: 'Customer Testimonial',
      type: 'Draft',
      image: 'https://picsum.photos/300/204',
      hint: 'testimonial'
    },
    {
      title: 'Event Invitation',
      type: 'Template',
      image: 'https://picsum.photos/300/205',
      hint: 'event invitation'
    },
    {
      title: 'Blog Post Teaser',
      type: 'Draft',
      image: 'https://picsum.photos/300/206',
      hint: 'blog post'
    },
    {
      title: 'Social Media Ad',
      type: 'Template',
      image: 'https://picsum.photos/300/207',
      hint: 'social media'
    },
    {
      title: 'Email Marketing Campaign',
      type: 'Draft',
      image: 'https://picsum.photos/300/208',
      hint: 'email marketing'
    },
    {
      title: 'Website Banner',
      type: 'Template',
      image: 'https://picsum.photos/300/209',
       hint: 'website banner'
    },
    {
      title: 'Infographic',
      type: 'Draft',
      image: 'https://picsum.photos/300/210',
      hint: 'infographic'
    },
    {
      title: 'Presentation Slide',
      type: 'Template',
      image: 'https://picsum.photos/300/211',
      hint: 'presentation'
    },
  ];

  return (
    <div className="flex-1 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Content Library</h1>
        <p className="text-muted-foreground">
          Manage your saved drafts, templates, and media assets.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search content" className="pl-10" />
      </div>

      <Tabs defaultValue="templates">
        <TabsList>
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        <TabsContent value="templates" className="mt-6">
            <div className="flex items-center gap-4 mb-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Content Type <ChevronDown className="h-4 w-4 ml-2" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>All</DropdownMenuItem>
                        <DropdownMenuItem>Draft</DropdownMenuItem>
                        <DropdownMenuItem>Template</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Date <ChevronDown className="h-4 w-4 ml-2" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Newest</DropdownMenuItem>
                        <DropdownMenuItem>Oldest</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Status <ChevronDown className="h-4 w-4 ml-2" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Published</DropdownMenuItem>
                        <DropdownMenuItem>Draft</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {templates.map((template, index) => (
                <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-muted">
                         <Image
                            src={template.image}
                            alt={template.title}
                            width={300}
                            height={225}
                            className="object-cover w-full h-full"
                            data-ai-hint={template.hint}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold">{template.title}</h3>
                        <p className="text-sm text-muted-foreground">{template.type}</p>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
             <Pagination className="mt-8">
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                     <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                     <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </TabsContent>
         <TabsContent value="all" className="mt-6">
            <p>All content will be displayed here.</p>
        </TabsContent>
         <TabsContent value="drafts" className="mt-6">
            <p>Drafts will be displayed here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
