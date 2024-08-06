"use client";

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import React, { forwardRef, useRef } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Icons } from "../../components/icons";
import { Meteors } from "@/components/magicui/meteors";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import BlurFade from "@/components/magicui/blur-fade";

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
  }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Python() {
  const { theme } = useTheme();
  const year = new Date().getFullYear() - 2024;

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-fit w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg bg-background m-5 p-2">
      <BlurFade delay={0.25} inView>
      <div className="fixed flex h-full w-full flex-col items-center justify-center overflow-hidden">
          <Meteors number={7} />
        </div>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl p-5"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div>
            <h1 className="bg-my-gradient bg-clip-text text-transparent">Python Developer</h1>
            <p className="text-xl mt-3">{year} Yrs+ Experience</p>
          </div>
          <div
            className="relative flex h-fit w-full items-center justify-center overflow-hidden bg-background"
            ref={containerRef}
          >
            <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between pt-5 gap-2">
            <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref} className="size-14">
                  <Icons.python />
                </Circle>
              <Circle ref={div2Ref}>
                  <Icons.numpy />
                </Circle>
                <Circle ref={div3Ref}>
                  <Icons.pandas />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div2Ref}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div1Ref}
              reverse
            />
          </div>
        </MagicCard>
      </BlurFade>
    </div>
  );
}
