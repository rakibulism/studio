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
      return (pathname === basePath || basePath === '') && hash === `#${hashPath}`
    }
    return pathname === path && hash === ""
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Link href="/" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive("/")} tooltip="Dashboard">
            <div>
              <Home />
              Dashboard
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#all-tools" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#all-tools')} tooltip="All Tools">
            <div>
              <List />
              All Tools
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#design-to-code" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#design-to-code')} tooltip="Design to Code">
            <div>
              <Code2 />
              Design to Code
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#ui-components-templates" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#ui-components-templates')} tooltip="UI Components">
            <div>
              <Component />
              UI Components
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#frontend-starter-kits" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#frontend-starter-kits')} tooltip="Starter Kits">
            <div>
              <Layers />
              Starter Kits
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#ai-tools-for-devs" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#ai-tools-for-devs')} tooltip="AI Tools">
            <div>
              <Bot />
              AI Tools
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
       <SidebarMenuItem>
        <Link href="/#sandbox-collaboration" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#sandbox-collaboration')} tooltip="Sandbox">
            <div>
              <Gamepad2 />
              Sandbox
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#deployment-baas" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#deployment-baas')} tooltip="Deploy & Backend">
            <div>
              <Rocket />
              Deploy & Backend
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Link href="/#dev-vibes" legacyBehavior passHref>
          <SidebarMenuButton asChild isActive={isActive('/#dev-vibes')} tooltip="Dev Vibes">
            <div>
              <Heart />
              Dev Vibes
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
