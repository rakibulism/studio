"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
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
    return pathname === path
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/")} tooltip="Dashboard">
            <Home />
            Dashboard
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#all-tools" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#all-tools")} tooltip="All Tools">
            <List />
            All Tools
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#design-to-code" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#design-to-code")} tooltip="Design to Code">
            <Code2 />
            Design to Code
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#ui-components-templates" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#ui-components-templates")} tooltip="UI Components">
            <Component />
            UI Components
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#frontend-starter-kits" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#frontend-starter-kits")} tooltip="Starter Kits">
            <Layers />
            Starter Kits
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#ai-tools-for-devs" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#ai-tools-for-devs")} tooltip="AI Tools">
            <Bot />
            AI Tools
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#sandbox-collaboration" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#sandbox-collaboration")} tooltip="Sandbox">
            <Gamepad2 />
            Sandbox
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#deployment-baas" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#deployment-baas")} tooltip="Deploy & Backend">
            <Rocket />
            Deploy & Backend
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#dev-vibes" passHref legacyBehavior>
          <SidebarMenuButton isActive={isActive("/#dev-vibes")} tooltip="Dev Vibes">
            <Heart />
            Dev Vibes
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
