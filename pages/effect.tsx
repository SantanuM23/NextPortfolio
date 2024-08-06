"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Meteors from "@/components/magicui/meteors";

import Particles from "@/components/magicui/particles";

const Effect = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div>
    {/*<div className="fixed flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <Meteors number={10} />
      </div>*/}
    <div className="flex fixed h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
    </div>
  );
};

export default Effect;
