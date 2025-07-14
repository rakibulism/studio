import { ColorPaletteClient } from "@/components/color-palette-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Color Palette Generator | Vibe Forge",
    description: "Generate color palettes from a text prompt using AI.",
};

export default function ColorPalettePage() {
  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Color Palette Generator</h2>
        <p className="text-muted-foreground mt-2">Describe a mood, a scene, or a concept, and let AI craft a unique color palette for you.</p>
      </div>
      <ColorPaletteClient />
    </div>
  );
}
