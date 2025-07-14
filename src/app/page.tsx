'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Code2, Component, Bot, Rocket, Layers, Brain, Gamepad2, Palette } from 'lucide-react';

const toolCategories = [
  {
    category: 'Design to Code',
    icon: <Code2 className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Locofy.ai', href: 'https://locofy.ai', description: 'Convert Figma designs to React/Next.js/Tailwind.' },
      { name: 'Anima', href: 'https://animaapp.com', description: 'Figma to developer-ready React/HTML/CSS.' },
      { name: 'Webflow', href: 'https://webflow.com', description: 'Full no-code/low-code site builder, dev handoff.' },
    ],
  },
  {
    category: 'UI Components & Templates',
    icon: <Component className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'shadcn/ui', href: 'https://ui.shadcn.dev', description: 'Beautiful, accessible components using Tailwind & Radix.' },
      { name: 'TailwindComponents', href: 'https://tailwindcomponents.com', description: 'Ready Tailwind UI components.' },
      { name: 'Aceternity UI', href: 'https://aceternity.com', description: 'Trendy animated components (Next.js/Tailwind).' },
      { name: 'Framer', href: 'https://framer.com', description: 'UI & motion magic, easy for coders too.' },
    ],
  },
  {
    category: 'AI Tools for Devs',
    icon: <Bot className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Cursor', href: 'https://cursor.sh', description: 'AI-powered VS Code replacement.' },
      { name: 'Codeium', href: 'https://codeium.com', description: 'Fast, free AI autocompletion.' },
      { name: 'Stack AI', href: 'https://www.stack-ai.com', description: 'Build full-stack AI apps with no backend.' },
      { name: 'FlowGPT', href: 'https://flowgpt.com', description: 'Prebuilt AI prompts & tools for devs.' },
    ],
  },
  {
    category: 'Deployment + BaaS',
    icon: <Rocket className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Vercel', href: 'https://vercel.com', description: 'Best for frontend/Next.js deploys.' },
      { name: 'Railway', href: 'https://railway.app', description: 'Simple backend infra & deploys.' },
      { name: 'Supabase', href: 'https://supabase.com', description: 'Firebase alternative, SQL-powered.' },
      { name: 'Xata', href: 'https://xata.io', description: 'Serverless DB meets search + analytics.' },
    ],
  },
    {
    category: 'Frontend Starter Kits',
    icon: <Layers className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Vercel Templates', href: 'https://vercel.com/templates', description: 'Clean Next.js/Vercel templates.' },
      { name: 'Glen starter kits', href: 'https://glen.vercel.app', description: 'Vibe-heavy starter kits (modern UI kits).' },
      { name: 'Super', href: 'https://www.super.so', description: 'Turn Notion into a blazing-fast website.' },
    ],
  },
   {
    category: 'Sandbox & Collaboration',
    icon: <Gamepad2 className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Replit', href: 'https://replit.com', description: 'Code online, deploy, collaborate.' },
      { name: 'StackBlitz', href: 'https://stackblitz.com', description: 'Instant dev environment for web.' },
      { name: 'CodeSandbox', href: 'https://codesandbox.io', description: 'Build full-stack apps in the browser.' },
    ],
  },
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
          Vibe Forge
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          A curated directory of the best vibe coding tools to spark your creativity and streamline your workflow.
        </p>
      </div>
      <div className="w-full max-w-6xl space-y-12">
        {toolCategories.map((category) => (
          <section key={category.category}>
            <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold tracking-tight text-foreground">{category.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool) => (
                <Link href={tool.href} key={tool.name} target="_blank" rel="noopener noreferrer" className="group rounded-lg">
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
                         <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
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
