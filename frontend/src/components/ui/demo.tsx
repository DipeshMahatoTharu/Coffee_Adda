"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import AboutSection3 from "@/components/ui/about-section";
import SearchWithCategory from "@/components/ui/search-with-category";

export function DemoOne() {
  return <SearchWithCategory />;
}

export function TextAnimateDefault() {
  const [run, setRun] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">
      <TextAnimate
        key={run}
        effect="typewriter"
        duration={2}
        className="text-foreground text-3xl font-semibold"
      >
        Ship beautiful interfaces, fast.
      </TextAnimate>
      <Button variant="outline" size="sm" onClick={() => setRun((n) => n + 1)}>
        Replay
      </Button>
    </div>
  );
}

export default DemoOne;
