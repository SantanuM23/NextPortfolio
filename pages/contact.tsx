import React from "react";
import { Dock, DockIcon } from "@/components/magicui/hordock";
import { Icons } from "./icons";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { useRouter } from "next/router";
import { Target } from "lucide-react";

export default function Contact() {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=freelancer.san23@gmail.com"
    );
  };

  return (
    <center>
      <BlurFade delay={0.25} inView>
        <div id="contact">
          <h1 className="p-8 text-6xl bg-my-gradient bg-clip-text text-transparent">Contact</h1>
          <p>
            If you have a <span className=" bg-my-gradient bg-clip-text text-transparent">project</span> that you want to <span className=" bg-my-gradient bg-clip-text text-transparent">get started,</span>
            <br /> think you need my help with something or just fancy saying hey,
            <br />then<span className="bg-my-gradient bg-clip-text text-transparent">&nbsp;get in touch</span>.
          </p>
          <div>
            <div className="relative h-fit w-fit">
              <Dock magnification={60} distance={100}>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <button onClick={handleEmailClick}>
                    <Icons.mail className="size-full" />
                  </button>
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Link href={"https://www.fiverr.com/users/santanum23"} target="blank" >
                    <Icons.fiverr className="size-full" />
                  </Link>
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Link href={"https://www.upwork.com/freelancers/~011cff18d3c83e4660"} target="blank">
                    <Icons.upwork className="size-full" />
                  </Link>
                </DockIcon>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Link href={"https://www.artstation.com/santanum23"} target="blank">
                    <Icons.artstation className="size-full" />
                  </Link>
                </DockIcon>
              </Dock>
            </div>
          </div>
          <div>
            <p className="p-5">
              Click mail icon to drop a <span className=" bg-my-gradient bg-clip-text text-transparent">mail</span>, or drop a message on <span className=" bg-my-gradient bg-clip-text text-transparent">LinkedIn, Fiverr or UpWork</span>
            </p>
          </div>
        </div>
      </BlurFade>
    </center>
  );
}
