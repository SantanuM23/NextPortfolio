"use client";

import React, { useRef, useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useAnimation } from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 70;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-5 w-fit h-fit p-2 flex gap-2 rounded-3xl supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-lg flex-col",
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "right",
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {children}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  className?: string;
  children?: React.ReactNode;
  props?: any;
}

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (hover) {
        controls.start({ height: magnification });
      } else {
        controls.start({ height: 40 });
      }
    } else {
      controls.start({ height: 40 });
    }
  }, [controls, hover, magnification, loading]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "flex w-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };  