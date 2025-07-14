'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Code2, Component, Layers, Bot, Rocket, Heart, Gamepad2, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const toolCategories = [
  {
    category: 'Design to Code',
    id: 'design-to-code',
    icon: <Code2 className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Locofy.ai', href: 'https://locofy.ai', description: 'Convert Figma designs to React/Next.js/Tailwind.', tags: ['#Frontend', '#Design'] },
      { name: 'Anima', href: 'https://animaapp.com', description: 'Figma to developer-ready React/HTML/CSS.', tags: ['#Frontend', '#Design'] },
      { name: 'Webflow', href: 'https://webflow.com', description: 'No-code/low-code visual builder.', tags: ['#NoCode', '#Design'] },
    ],
  },
  {
    category: 'UI Components & Templates',
    id: 'ui-components-templates',
    icon: <Component className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'shadcn/ui', href: 'https://ui.shadcn.com', description: 'Accessible components with Tailwind & Radix.', tags: ['#Free', '#Frontend'] },
      { name: 'Tailwind Components', href: 'https://tailwindcomponents.com', description: 'Community-made UI kits.', tags: ['#Free', '#Frontend'] },
      { name: 'Aceternity UI', href: 'https://aceternity.com', description: 'Trendy animated components.', tags: ['#Frontend', '#Animation'] },
      { name: 'Framer', href: 'https://framer.com', description: 'UI and motion design for devs.', tags: ['#Design', '#Prototyping'] },
    ],
  },
  {
    category: 'Frontend Starter Kits',
    id: 'frontend-starter-kits',
    icon: <Layers className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Vercel Templates', href: 'https://vercel.com/templates', description: 'Clean Next.js/Vercel setups.', tags: ['#Free', '#StarterKit'] },
      { name: 'Glen', href: 'https://glen.vercel.app', description: 'Stylish UI starters.', tags: ['#StarterKit', '#UI'] },
      { name: 'Super.so', href: 'https://www.super.so', description: 'Turn Notion pages into fast websites.', tags: ['#NoCode', '#Website'] },
    ],
  },
  {
    category: 'AI Tools for Devs',
    id: 'ai-tools-for-devs',
    icon: <Bot className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Cursor', href: 'https://cursor.sh', description: 'AI-powered VS Code alternative.', tags: ['#AI', '#Editor'] },
      { name: 'Codeium', href: 'https://codeium.com', description: 'Fast AI autocomplete.', tags: ['#AI', '#Free'] },
      { name: 'Stack AI', href: 'https://www.stack-ai.com', description: 'Build AI apps visually.', tags: ['#AI', '#NoCode'] },
      { name: 'FlowGPT', href: 'https://flowgpt.com', description: 'Prompt marketplace and AI templates.', tags: ['#AI', '#Prompts'] },
    ],
  },
  {
    category: 'Sandbox & Collaboration',
    id: 'sandbox-collaboration',
    icon: <Gamepad2 className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Replit', href: 'https://replit.com', description: 'Online IDE and deploy.', tags: ['#IDE', '#Collaboration'] },
      { name: 'StackBlitz', href: 'https://stackblitz.com', description: 'Instant dev environment.', tags: ['#IDE', '#Frontend'] },
      { name: 'CodeSandbox', href: 'https://codesandbox.io', description: 'Browser-based fullstack coding.', tags: ['#IDE', '#Fullstack'] },
    ],
  },
  {
    category: 'Deployment + BaaS',
    id: 'deployment-baas',
    icon: <Rocket className="h-6 w-6 text-primary" />,
    tools: [
      { name: 'Vercel', href: 'https://vercel.com', description: 'Best frontend deploy tool.', tags: ['#Deploy', '#Frontend'] },
      { name: 'Railway', href: 'https://railway.app', description: 'Simple infra & backend deploy.', tags: ['#Deploy', '#Backend'] },
      { name: 'Supabase', href: 'https://supabase.com', description: 'Firebase alternative, SQL-powered.', tags: ['#Backend', '#Database'] },
      { name: 'Xata', href: 'https://xata.io', description: 'Serverless DB meets search + analytics.', tags: ['#Backend', '#Database'] },
    ],
  },
  {
    category: 'Dev Vibes',
    id: 'dev-vibes',
    icon: <Heart className="h-6 w-6 text-primary" />,
    tools: [
        { name: 'Awesome Design Tools', href: 'https://awesome.design', description: 'Curated UI & dev tools.', tags: ['#Resources', '#Design'] },
        { name: 'ui.dev', href: 'https://ui.dev', description: 'Learn React in a chill way.', tags: ['#Learn', '#React'] },
        { name: 'Frontend Checklist', href: 'https://frontendchecklist.io', description: 'Don\'t ship junk, follow best practices.', tags: ['#Checklist', '#Frontend'] },
    ]
  }
];


export default function Home() {
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
       <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="relative w-full max-w-sm">
                <Input placeholder="Search tools..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
        </div>

      <div className="w-full space-y-12">
        {toolCategories.map((category) => (
          <section key={category.category} id={category.id}>
            <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold tracking-tight text-foreground">{category.category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool) => (
                <Card key={tool.name} className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">{tool.description}</p>
                       <div className="flex flex-wrap gap-2 mt-4">
                            {tool.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                    </CardContent>
                    <div className="p-6 pt-0">
                         <Link href={tool.href} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" className="w-full">
                                Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
