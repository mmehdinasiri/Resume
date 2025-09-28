import Image from "next/image";
import Link from "next/link";
import type { ResumeData } from "@/data/resume";

type HeaderProps = {
  data: Pick<
    ResumeData,
    "name" | "title" | "location" | "email" | "phone" | "links" | "photo"
  >;
};

export function Header({ data }: HeaderProps) {
  const { name, title, location, email, phone, links, photo } = data;

  return (
    <header className="flex flex-col gap-6 border-b border-emerald-900/30 pb-8 text-emerald-50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/30 shadow-lg shadow-black/40 sm:h-32 sm:w-32">
          <Image
            src={photo}
            alt={`${name} profile photo`}
            fill
            sizes="128px"
            priority
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {name}
          </h1>
          <p className="mt-2 text-base text-emerald-400 sm:text-lg">{title}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm text-emerald-200/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
        <span>{location}</span>
        <span className="hidden sm:inline">•</span>
        <Link
          className="transition-colors hover:text-emerald-200"
          href={`mailto:${email}`}
        >
          {email}
        </Link>
        <span className="hidden sm:inline">•</span>
        <Link
          className="transition-colors hover:text-emerald-200"
          href={`tel:${phone.replace(/\s+/g, "")}`}
        >
          {phone}
        </Link>
        {links.map((link) => (
          <span key={link.label} className="flex items-center gap-2 sm:gap-1">
            <span className="hidden sm:inline">•</span>
            <Link
              className="underline decoration-emerald-500/60 underline-offset-4 transition-colors hover:text-emerald-200"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </header>
  );
}
