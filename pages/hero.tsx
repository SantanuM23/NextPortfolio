import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { Icons } from "./icons";
import { Dock, DockIcon } from "@/components/magicui/hordock";
import { BrainCircuit, Gamepad2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const dancing = Dancing_Script({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const [type] = useTypewriter({
    words: [
      " 3D Artist.",
      " Game Developer.",
      " Python Developer.",
      "n AI/ML Enthusiast",
    ],
    loop: 0,
    typeSpeed: 80,
    delaySpeed: 1000,
    deleteSpeed: 80,
  });

  return (
    <div className="section-home h-screen">
      <div className="content-home h-full flex flex-col items-center justify-center">
        <h3 className="text-7xl p">Hello!</h3>
        <h1 className={`text-9xl pb-4 bg-my-gradient bg-clip-text text-transparent ${dancing.className}`}>{`I'm Santanu,`}</h1>
        <h2 className="text-4xl p-1 font-light">
          A<span>{type}</span>
          <Cursor />
        </h2>
        <div>
          <div className="relative">
            <BorderBeam
              size={500}
              duration={12}
              delay={50}
              borderRadius={16}
              borderWidth={2}
            />
            <Dock magnification={60} distance={100}>
            <DockIcon className="bg-black/10 dark:bg-white/10 mr-1 ml-2 mt-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Gamepad2 className="size-full" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Game Dev</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DockIcon><DockIcon className="bg-black/10 dark:bg-white/10 mr-1 ml-2 mt-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BrainCircuit className="size-full" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Data Science</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DockIcon>
            </Dock>
          </div>
        </div>
        <p className="p-2 font-light text-lg">Download Resume</p>
      </div>
    </div>
  );
};

export default Hero;
