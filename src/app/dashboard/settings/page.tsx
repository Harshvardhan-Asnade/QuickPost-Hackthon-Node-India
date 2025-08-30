
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              This information will be displayed publicly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">Your Name</div>
                <div className="text-sm text-muted-foreground">your.email@example.com</div>
              </div>
              <Button variant="outline" className="ml-auto">
                Change Photo
              </Button>
            </div>
             <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Your Name" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="your.email@example.com" />
              </div>
          </CardContent>
          <CardFooter className="border-t pt-6">
             <Button>Save Changes</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Customize your QuickPost experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select name="language">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <Label htmlFor="notifications" className="font-semibold">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account activity.
                  </p>
                </div>
              <Switch id="notifications" defaultChecked />
            </div>
          </CardContent>
           <CardFooter className="border-t pt-6">
             <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
