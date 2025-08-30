import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Briefcase, Target, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center">
          <Briefcase className="h-6 w-6" />
          <span className="ml-2 font-bold text-lg">PostCraft</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Support
          </Link>
          <Button asChild>
            <Link href="#">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-gray-800 p-10 rounded-xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Craft Captivating Social Posts in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Elevate your social media presence with PostCraft. Generate
                  engaging content effortlessly and connect with your audience
                  like never before.
                </p>
                <div className="space-x-4 mt-6">
                  <Button asChild>
                    <Link href="#">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of Effortless Social Media Management
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  PostCraft empowers you to create impactful social media
                  content with ease and precision. Our intuitive tools and
                  AI-driven features streamline your workflow, ensuring your
                  message resonates with your audience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Briefcase className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold">
                    AI-Powered Content Generation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Leverage our advanced AI to generate compelling social media
                    posts tailored to your brand's voice and style.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Target className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold">
                    Targeted Audience Engagement
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reach the right audience with precision targeting tools that
                    optimize your content for maximum impact.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Clock className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold">Time-Saving Efficiency</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Streamline your social media workflow with automated
                    scheduling and content planning features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Image
                    src="https://picsum.photos/200/200?random=1"
                    alt="User 1"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "PostCraft has revolutionized my social media strategy. The
                    AI-generated posts are incredibly engaging and have
                    significantly boosted my reach."
                  </p>
                  <h4 className="font-bold mt-4">Sophia Bennett</h4>
                  <p className="text-xs text-gray-500">Marketing Manager</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Image
                    src="https://picsum.photos/200/200?random=2"
                    alt="User 2"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "As a small business owner, PostCraft has been a
                    game-changer. It saves me hours each week and helps me
                    connect with my customers more effectively."
                  </p>
                  <h4 className="font-bold mt-4">Ethan Carter</h4>
                  <p className="text-xs text-gray-500">Small Business Owner</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Image
                    src="https://picsum.photos/200/200?random=3"
                    alt="User 3"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "I love the simplicity and effectiveness of PostCraft. It's
                    the perfect tool for anyone looking to enhance their social
                    media presence."
                  </p>
                  <h4 className="font-bold mt-4">Olivia Hayes</h4>
                  <p className="text-xs text-gray-500">
                    Social Media Influencer
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of satisfied users and experience the power of
                PostCraft. Sign up today and start creating captivating social
                media content in minutes.
              </p>
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="#">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 PostCraft. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}
