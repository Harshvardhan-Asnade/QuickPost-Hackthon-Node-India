'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, Target, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <Link href="#" className="flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="ml-3 font-bold text-xl">PostCraft</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-8 items-center">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Button variant="outline" className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Login
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                  Craft Captivating Social Posts in Minutes
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Elevate your social media presence with PostCraft. Generate
                  engaging content effortlessly and connect with your audience
                  like never before.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="space-x-4 mt-6"
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#">Get Started for Free</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <AnimatedSection>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose PostCraft?</h2>
                        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                            PostCraft empowers you with AI-driven tools to streamline your workflow and amplify your message.
                        </p>
                    </div>
                </AnimatedSection>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <AnimatedSection>
                        <Card className="bg-gray-900/50 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Briefcase className="h-8 w-8 text-primary" />
                                <CardTitle>AI Content Generation</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400">
                                Leverage our advanced AI to generate compelling social media posts tailored to your brand's voice.
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                    <AnimatedSection>
                        <Card className="bg-gray-900/50 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                             <CardHeader className="flex flex-row items-center gap-4">
                                <Target className="h-8 w-8 text-primary" />
                                <CardTitle>Audience Targeting</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400">
                                Reach the right people with precision targeting tools that optimize your content for maximum impact.
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                     <AnimatedSection>
                        <Card className="bg-gray-900/50 border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                             <CardHeader className="flex flex-row items-center gap-4">
                                <Clock className="h-8 w-8 text-primary" />
                                <CardTitle>Time-Saving Efficiency</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-400">
                                Streamline your social media workflow with automated scheduling and content planning features.
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                Loved by creators worldwide
              </h2>
            </AnimatedSection>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Sophia Bennett', title: 'Marketing Manager', quote: 'PostCraft has revolutionized my social media strategy. The AI-generated posts are incredibly engaging!', image: '1' },
                { name: 'Ethan Carter', title: 'Small Business Owner', quote: "As a small business owner, PostCraft has been a game-changer. It saves me hours each week.", image: '2' },
                { name: 'Olivia Hayes', title: 'Social Media Influencer', quote: "I love the simplicity and effectiveness of PostCraft. It's the perfect tool for my brand.", image: '3' },
              ].map((testimonial) => (
                <AnimatedSection key={testimonial.name}>
                  <Card className="bg-gray-900/50 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={`https://picsum.photos/200/200?random=${testimonial.image}`}
                          alt={`User ${testimonial.name}`}
                          width={48}
                          height={48}
                          className="rounded-full"
                          data-ai-hint="person portrait"
                        />
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-xs text-gray-400">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
            <AnimatedSection>
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                            Ready to Transform Your Social Media?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed">
                            Join thousands of satisfied users. Start creating captivating content in minutes.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="#">
                                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </AnimatedSection>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border">
        <p className="text-xs text-gray-400">
          © 2024 PostCraft. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
