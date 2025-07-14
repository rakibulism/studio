"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  Palette,
  Pipette,
  Shapes,
  Sparkles,
  Type,
  ChevronRight,
  ImageIcon,
  Crop,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import { cn } from "@/lib/utils";

const tools = [
  {
    title: "Color Palette",
    href: "/color-palette",
    icon: <Palette className="size-4" />,
  },
  {
    title: "Gradient Creator",
    href: "/gradient-creator",
    icon: <Pipette className="size-4" />,
  },
  {
    title: "Typography Helper",
    href: "/typography-helper",
    icon: <Type className="size-4" />,
  },
  {
    title: "SVG Shape Builder",
    href: "/svg-shape-builder",
    icon: <Shapes className="size-4" />,
  },
  {
    title: "Image Resizer",
    href: "/image-resizer",
    icon: <Crop className="size-4" />,
  },
  {
    title: "Image Inspiration",
    href: "/image-inspiration",
    icon: <ImageIcon className="size-4" />,
  },
];

export default function VibeToolsMenu() {
  const pathname = usePathname();
  const isToolsPath = tools.some((tool) => pathname.startsWith(tool.href));
  const [isOpen, setIsOpen] = React.useState(isToolsPath);

  React.useEffect(() => {
    setIsOpen(isToolsPath);
  }, [isToolsPath]);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip="Vibe Tools" isActive={isToolsPath}>
            <Sparkles />
            Vibe Tools
            <ChevronRight
              className={cn(
                "ml-auto size-4 transition-transform",
                isOpen && "rotate-90"
              )}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
      </SidebarMenuItem>
      <CollapsibleContent asChild>
        <SidebarMenuSub>
          {tools.map((tool) => (
            <SidebarMenuSubItem key={tool.title}>
              <SidebarMenuSubButton
                asChild
                isActive={pathname.startsWith(tool.href)}
              >
                <Link href={tool.href}>
                  {tool.icon}
                  <span>{tool.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
}
