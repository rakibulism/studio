import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Construction } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Typography Helper | Vibe Forge",
    description: "Find the perfect font pairings and styles for your projects.",
};

export default function TypographyHelperPage() {
  return (
    <div className="w-full">
       <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline text-primary">Typography Helper</h2>
        <p className="text-muted-foreground mt-2">Find the perfect font pairings and styles for your projects.</p>
      </div>
      <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed">
        <Construction className="h-16 w-16 text-muted-foreground mb-4" />
        <CardTitle className="text-2xl font-headline">Coming Soon</CardTitle>
        <CardDescription className="mt-2">This tool is under construction. Check back later!</CardDescription>
      </Card>
    </div>
  );
}
