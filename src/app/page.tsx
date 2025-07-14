"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Pipette, Type, Shapes, ArrowRight } from 'lucide-react';

const tools = [
  {
    title: 'Color Palette Generator',
    description: 'Create harmonious color schemes from a text prompt using AI.',
    href: '/color-palette',
    icon: <Palette className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Gradient Creator',
    description: 'Combine colors to generate, customize, and export CSS gradients.',
    href: '/gradient-creator',
    icon: <Pipette className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Typography Helper',
    description: 'Find the perfect font pairings and styles for your projects.',
    href: '/typography-helper',
    icon: <Type className="h-8 w-8 text-primary" />,
  },
  {
    title: 'SVG Shape Builder',
    description: 'Design and export custom SVG shapes for your web designs.',
    href: '/svg-shape-builder',
    icon: <Shapes className="h-8 w-8 text-primary" />,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background to-[#111122]">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
          Vibe Forge
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          A suite of creative tools for vibecoders. Unleash your creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {tools.map((tool) => (
          <Link href={tool.href} key={tool.title} className="group rounded-lg">
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
              <CardHeader>
                {tool.icon}
                <CardTitle className="mt-4 text-xl font-bold">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground">{tool.description}</p>
                <div className="flex items-center justify-end text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 self-end">
                  Open Tool <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
       <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </main>
  );
}
