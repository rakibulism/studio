import { ColorPaletteClient } from "@/components/color-palette-client";

export default function ColorPalettePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">AI Color Palette Generator</h1>
            <p className="text-muted-foreground mt-2">Describe a vibe and get a stunning color palette in seconds.</p>
        </div>
        <ColorPaletteClient />
      </div>
    </div>
  );
}
