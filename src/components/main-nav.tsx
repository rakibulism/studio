"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

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
  const [hash, setHash] = useState("")

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    // Set initial hash
    handleHashChange()
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const isActive = (path: string) => {
    if (path.includes("#")) {
      const [basePath, hashPath] = path.split("#")
      // Check if the base path matches and the hash matches
      return pathname === basePath && hash === `#${hashPath}`
    }
    return pathname === path && hash === ""
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/">
            <SidebarMenuButton isActive={isActive("/")} tooltip="Dashboard">
                <Home />
                Dashboard
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#all-tools">
            <SidebarMenuButton isActive={hash ==='#all-tools'} tooltip="All Tools">
                <List />
                All Tools
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#design-to-code">
            <SidebarMenuButton isActive={hash ==='#design-to-code'} tooltip="Design to Code">
                <Code2 />
                Design to Code
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#ui-components-templates">
            <SidebarMenuButton isActive={hash ==='#ui-components-templates'} tooltip="UI Components">
                <Component />
                UI Components
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#frontend-starter-kits">
            <SidebarMenuButton isActive={hash ==='#frontend-starter-kits'} tooltip="Starter Kits">
                <Layers />
                Starter Kits
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#ai-tools-for-devs">
            <SidebarMenuButton isActive={hash ==='#ai-tools-for-devs'} tooltip="AI Tools">
                <Bot />
                AI Tools
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#sandbox-collaboration">
            <SidebarMenuButton isActive={hash ==='#sandbox-collaboration'} tooltip="Sandbox">
                <Gamepad2 />
                Sandbox
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#deployment-baas">
            <SidebarMenuButton isActive={hash ==='#deployment-baas'} tooltip="Deploy & Backend">
                <Rocket />
                Deploy & Backend
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#dev-vibes">
            <SidebarMenuButton isActive={hash ==='#dev-vibes'} tooltip="Dev Vibes">
                <Heart />
                Dev Vibes
            </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
