
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Check } from 'lucide-react';


const Logo = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
    <path
      d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
      fill="currentColor"
    ></path>
  </svg>
);

const MagicWand = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"
      ></path>
    </svg>
)

const Target = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path
        d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
        ></path>
    </svg>
)

const Clock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
        ></path>
    </svg>
)

export default function LandingPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3 sticky top-0 bg-slate-50/80 backdrop-blur-lg z-20">
          <div className="flex items-center gap-4 text-[#0d141b]">
            <Logo />
            <h2 className="text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">QuickPost</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-primary">Features</Link>
            <Link href="#pricing" className="hover:text-primary">Pricing</Link>
            <Link href="#testimonials" className="hover:text-primary">Testimonials</Link>
             <Link href="#faq" className="hover:text-primary">FAQ</Link>
          </nav>
          <div className="flex flex-1 justify-end">
            <Link href="/dashboard">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Get Started</span>
              </button>
            </Link>
          </div>
        </header>
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://picsum.photos/1200/800")'}}
                  data-ai-hint="social media hero"
                >
                  <div className="flex flex-col gap-2">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
                    >
                      Craft Captivating Social Posts in Minutes
                    </h1>
                    <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base max-w-2xl">
                      Elevate your social media presence with QuickPost. Generate engaging content effortlessly and connect with your audience like never before.
                    </h2>
                  </div>
                  <Link href="/dashboard">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Get Started</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div id="features" className="flex flex-col gap-10 px-4 py-10 @container scroll-mt-20">
              <div className="flex flex-col gap-4">
                <h1
                  className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  Unlock the Power of Effortless Social Media Management
                </h1>
                <p className="text-[#0d141b] text-base font-normal leading-normal max-w-[720px]">
                  QuickPost empowers you to create impactful social media content with ease and precision. Our intuitive tools and AI-driven features streamline your workflow,
                  ensuring your message resonates with your audience.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-border bg-slate-50 p-4 flex-col">
                  <div className="text-primary"><MagicWand /></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-foreground text-base font-bold leading-tight">AI-Powered Content Generation</h2>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Leverage our advanced AI to generate compelling social media posts tailored to your brand's voice and style.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-border bg-slate-50 p-4 flex-col">
                  <div className="text-primary"><Target /></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-foreground text-base font-bold leading-tight">Targeted Audience Engagement</h2>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">
                      Reach the right audience with precision targeting tools that optimize your content for maximum impact.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-border bg-slate-50 p-4 flex-col">
                  <div className="text-primary"><Clock /></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-foreground text-base font-bold leading-tight">Time-Saving Efficiency</h2>
                    <p className="text-muted-foreground text-sm font-normal leading-normal">Streamline your social media workflow with automated scheduling and content planning features.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="pricing" className="flex flex-col gap-10 px-4 py-10 @container scroll-mt-20">
              <div className="flex flex-col gap-4 text-center">
                <h1
                  className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto"
                >
                  Pricing Plans
                </h1>
                <p className="text-muted-foreground text-base font-normal leading-normal max-w-[720px] mx-auto">
                  Choose the plan that's right for you and your team.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">Free</h3>
                    <p className="text-4xl font-bold my-4">$0<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    <p className="text-muted-foreground text-sm mb-6">For individuals and hobbyists.</p>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />10 AI Generations</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />1 Social Profile</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Basic Analytics</li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
                <Card className="border-primary">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">Pro</h3>
                      <div className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">Most Popular</div>
                    </div>
                    <p className="text-4xl font-bold my-4">$19<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    <p className="text-muted-foreground text-sm mb-6">For professionals and small teams.</p>
                     <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Unlimited AI Generations</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />5 Social Profiles</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Advanced Analytics</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Priority Support</li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">Enterprise</h3>
                    <p className="text-4xl font-bold my-4">$49<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                    <p className="text-muted-foreground text-sm mb-6">For large organizations.</p>
                     <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Unlimited AI Generations</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Unlimited Social Profiles</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Advanced Analytics & Reporting</li>
                        <li className="flex items-center gap-2"><Check className="size-4 text-primary" />Dedicated Account Manager</li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div id="testimonials" className="scroll-mt-20">
                <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What Our Users Say</h2>
                <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                        style={{backgroundImage: 'url("https://picsum.photos/400/400?1")'}}
                        data-ai-hint="person portrait"
                    ></div>
                    <div>
                        <p className="text-[#0d141b] text-base font-medium leading-normal">
                        QuickPost has revolutionized my social media strategy. The AI-generated posts are incredibly engaging and have significantly boosted my reach.
                        </p>
                        <p className="text-[#4c739a] text-sm font-normal leading-normal">Sophia Bennett, Marketing Manager</p>
                    </div>
                    </div>
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                         style={{backgroundImage: 'url("https://picsum.photos/400/400?2")'}}
                         data-ai-hint="person portrait"
                    ></div>
                    <div>
                        <p className="text-[#0d141b] text-base font-medium leading-normal">
                        As a small business owner, QuickPost has been a game-changer. It saves me hours each week and helps me connect with my customers more effectively.
                        </p>
                        <p className="text-[#4c739a] text-sm font-normal leading-normal">Ethan Carter, Small Business Owner</p>
                    </div>
                    </div>
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                         style={{backgroundImage: 'url("https://picsum.photos/400/400?3")'}}
                         data-ai-hint="person portrait"
                    ></div>
                    <div>
                        <p className="text-[#0d141b] text-base font-medium leading-normal">
                        I love the simplicity and effectiveness of QuickPost. It's the perfect tool for anyone looking to enhance their social media presence.
                        </p>
                        <p className="text-[#4c739a] text-sm font-normal leading-normal">Olivia Hayes, Social Media Influencer</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

             <div id="faq" className="flex flex-col gap-10 px-4 py-10 @container scroll-mt-20">
                <div className="flex flex-col gap-4 text-center">
                    <h1
                    className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto"
                    >
                    Frequently Asked Questions
                    </h1>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is QuickPost?</AccordionTrigger>
                        <AccordionContent>
                        QuickPost is an AI-powered social media management tool designed to help you create, schedule, and analyze your social media content effortlessly.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What platforms do you support?</AccordionTrigger>
                        <AccordionContent>
                        We support all major social media platforms including Instagram, X (formerly Twitter), Facebook, LinkedIn, TikTok, and Pinterest.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                        <AccordionContent>
                        Yes, you can cancel your subscription at any time. You will continue to have access to your plan's features until the end of your billing cycle.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-4">
                        <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
                        <AccordionContent>
                        We offer a free plan with limited features so you can try out QuickPost. No credit card is required to sign up for the free plan.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1
                    className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto"
                  >
                    Ready to Transform Your Social Media Presence?
                  </h1>
                  <p className="text-[#0d141b] text-base font-normal leading-normal max-w-[720px] mx-auto">
                    Join thousands of satisfied users and experience the power of QuickPost. Sign up today and start creating captivating social media content in minutes.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <Link href="/dashboard">
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                      >
                        <span className="truncate">Get Started</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center border-t">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#4c739a] text-base font-normal leading-normal min-w-40" href="#features">Features</a>
                <a className="text-[#4c739a] text-base font-normal leading-normal min-w-40" href="#pricing">Pricing</a>
                <a className="text-[#4c739a] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
                <a className="text-[#4c739a] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                <a className="text-[#4c739a] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              </div>
               <div className="flex justify-center items-center gap-4 text-[#0d141b]">
                <Logo />
                <h2 className="text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">QuickPost</h2>
              </div>
              <p className="text-[#4c739a] text-base font-normal leading-normal">© 2024 QuickPost. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
