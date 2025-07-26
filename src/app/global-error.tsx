"use client";
import { Button } from "@/components/ui/button";
import "./globals.css";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const message = error?.message;
  return (
    <html>
      <body className="flex h-dvh flex-col items-center justify-center gap-5">
        <h2 className="text-xl font-semibold">{message || "Something went wrong!"}</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
