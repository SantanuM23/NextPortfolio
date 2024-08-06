import React from "react";
import Link from "next/link";
import { HomeIcon, MailIcon, PencilRuler, BriefcaseBusiness, UserRoundPen } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "./icons";
import { BorderBeam } from "@/components/magicui/border-beam";

export type IconProps = React.HTMLAttributes<SVGElement>;


const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#skills", icon: PencilRuler, label: "Skills" },
    { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "#contact", icon: UserRoundPen, label: "Contact" },
  ],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santanum23/",
        icon: Icons.linkedin,
      },
      ArtStation: {
        name: "ArtStation",
        url: "https://www.artstation.com/santanum23",
        icon: Icons.artstationb,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SantanuM23",
        icon: Icons.github,
      },
      X: {
        name: "X",
        url: "https://x.com/SantanuM23",
        icon: Icons.x,
      },
    },
  },
};

export function Navbar() {
  return (
    <div className="h-fit w-fit flex-col items-center justify-center overflow-hidden bg-background">
      <Dock direction="middle">
      <BorderBeam
              size={4000}
              duration={12}
              delay={50}
              borderRadius={20}
              borderWidth={2}
            />
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                const homeElement = document.getElementById(item.href.slice(1));
                if (homeElement) {
                  homeElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12 rounded-full"
              )}
            >
              <item.icon className="size-4" />
            </Link>
          </DockIcon>
        ))}
        <Separator orientation="horizontal" className="w-full" />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Link
              href={social.url}
              target="blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12 rounded-full"
              )}
            >
              <social.icon className="size-4" />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
