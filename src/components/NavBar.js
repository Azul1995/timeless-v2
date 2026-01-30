"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ href, children }) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href)); // activa subrutas tipo /teams/...

  return (
    <Link
      href={href}
      className={[
        "rounded-xl px-3 py-2 text-sm transition",
        isActive
          ? "bg-white/12 text-white border border-white/15"
          : "text-white/80 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
            <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.55),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.45),transparent_60%),radial-gradient(circle_at_50%_90%,rgba(139,0,45,0.35),transparent_60%)]" />
          </div>

          <div className="leading-tight">
            <div className="t-kicker">TIMELESS CORP</div>
            <div className="font-semibold tracking-wide">LIGA TIMELESS</div>
          </div>
        </Link>

        <nav className="flex gap-1">
          <NavItem href="/ranking">Ranking</NavItem>
          <NavItem href="/teams">Teams</NavItem>
          <NavItem href="/games">Games</NavItem>
          <NavItem href="/rules">Rules</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </nav>
      </div>
    </div>
  );
}
