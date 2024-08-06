import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Target } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export default function Expcard({
  title,
  description,
  dates,
  location,
  image,
  links = [],
}: Props) {
  // Ensure that title is not undefined or null and is a string
  const titleInitial = title ? title[0] : "N/A";

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-gray-900 rounded-full">
        <Avatar className="border size-12 m-auto p-1">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{titleInitial}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
        {links.length > 0 && (
          <div className="flex gap-2">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="flex items-center">
                {link.icon}
                <span className="ml-1">{link.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
