"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  Code2,
  Component,
  Gamepad2,
  Heart,
  Home,
  Layers,
  Rocket,
  Bot,
  List,
} from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    // For hash links, we just want to check the base path.
    if (path.includes("#")) {
      return pathname === path.split("#")[0]
    }
    return pathname === path
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={isActive("/")} tooltip="Dashboard">
          <Link href="/">
            <Home />
            Dashboard
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#all-tools'} tooltip="All Tools">
          <Link href="/#all-tools">
            <List />
            All Tools
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#design-to-code'} tooltip="Design to Code">
          <Link href="/#design-to-code">
            <Code2 />
            Design to Code
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#ui-components-templates'} tooltip="UI Components">
          <Link href="/#ui-components-templates">
            <Component />
            UI Components
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#frontend-starter-kits'} tooltip="Starter Kits">
          <Link href="/#frontend-starter-kits">
            <Layers />
            Starter Kits
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#ai-tools-for-devs'} tooltip="AI Tools">
          <Link href="/#ai-tools-for-devs">
            <Bot />
            AI Tools
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#sandbox-collaboration'} tooltip="Sandbox">
          <Link href="/#sandbox-collaboration">
            <Gamepad2 />
            Sandbox
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#deployment-baas'} tooltip="Deploy & Backend">
          <Link href="/#deployment-baas">
            <Rocket />
            Deploy & Backend
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={pathname.endsWith("/") && typeof window !== 'undefined' && window.location.hash === '#dev-vibes'} tooltip="Dev Vibes">
          <Link href="/#dev-vibes">
            <Heart />
            Dev Vibes
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
