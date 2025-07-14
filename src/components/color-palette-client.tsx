"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  generateColorPalette,
  type GenerateColorPaletteOutput,
} from "@/ai/flows/generate-color-palette";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Copy, Loader2, Wand2 } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

const formSchema = z.object({
  prompt: z
    .string()
    .min(3, "Prompt must be at least 3 characters.")
    .max(100, "Prompt must be 100 characters or less."),
});

type ColorBlockProps = {
  color: string;
};

function ColorBlock({ color }: ColorBlockProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    toast({
      title: "Copied to clipboard!",
      description: `Color ${color} is now in your clipboard.`,
    });
  };

  return (
    <div
      className="group relative h-32 w-full rounded-lg transition-all duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
        <div className="text-center text-white">
          <p className="font-mono font-bold">{color}</p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-1 text-white hover:bg-white/20"
            onClick={copyToClipboard}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ColorPaletteClient() {
  const [palette, setPalette] = useState<GenerateColorPaletteOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "A futuristic city at night, with neon lights.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setPalette(null);

    try {
      const result = await generateColorPalette({ prompt: values.prompt });
      setPalette(result);
    } catch (e) {
      setError("Failed to generate palette. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Your Vibe</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., 'serene beach sunset', 'cyberpunk alleyway'"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate Palette
          </Button>
        </form>
      </Form>

      {isLoading && (
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))}
          </div>
        </div>
      )}

      {error && <p className="mt-8 text-center text-destructive">{error}</p>}

      {palette && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Your Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {palette.colors.map((color) => (
              <ColorBlock key={color} color={color} />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
