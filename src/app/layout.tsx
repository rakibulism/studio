import type { Metadata } from "next";
import Link from "next/link";
import { Home, Sparkles } from "lucide-react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import VibeToolsMenu from "@/components/vibe-tools-menu";

export const metadata: Metadata = {
  title: "Vibe Forge",
  description: "Creative tools for vibecoders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                 <h1 className="font-headline font-semibold text-lg md:text-xl flex-1">
                    <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                      Vibe Forge
                    </Link>
                  </h1>
                <SidebarTrigger />
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton href="/" tooltip="Home">
                    <Home />
                    Home
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <VibeToolsMenu />
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
