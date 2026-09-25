"use client";

import { useCampaign } from "@/components/campaign-provider";
import { Logo, MenuCloseIcon, MenuIcon } from "@/components/icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Discover", href: "#rewards" },
];

export default function SiteHeader() {
  const [, dispatch] = useCampaign();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuToggle.current?.focus();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const dismissMenu = () => {
    setMenuOpen(false);
    menuToggle.current?.focus();
  };

  const startPledge = () => {
    setMenuOpen(false);
    dispatch({ type: "pledgeOpened", rewardId: null });
  };

  return (
    <header className="v-hero-scrim absolute inset-x-0 top-0 z-30 h-32 px-6 pt-8 md:pt-12">
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={dismissMenu}
          className="from-ink/60 to-ink/0 fixed inset-0 bg-linear-to-b/srgb md:hidden"
        />
      )}

      <div className="max-w-header relative mx-auto flex items-center justify-between">
        <Link
          href="/"
          aria-label="crowdfund home"
          className="focus-visible:outline-white"
        >
          <Logo className="h-5 w-32 text-white" />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="text-2xs flex items-center gap-8 font-medium text-white">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-white/70 focus-visible:outline-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={startPledge}
                className="hover:text-white/70 focus-visible:outline-white"
              >
                Get Started
              </button>
            </li>
          </ul>
        </nav>

        <button
          ref={menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="-m-2 p-2 text-white focus-visible:outline-white md:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          {menuOpen ? (
            <MenuCloseIcon className="h-3.75 w-3.5" />
          ) : (
            <MenuIcon className="h-3.75 w-4" />
          )}
        </button>
      </div>

      <nav
        id="site-menu"
        aria-label="Primary"
        hidden={!menuOpen}
        className="border-hairline fixed inset-x-6 top-22 rounded-lg border bg-white py-6 md:hidden"
      >
        <ul className="divide-charcoal/10 divide-y text-lg font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={href} className="px-6 py-6 first:pt-0">
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="px-6 pt-6">
            <button
              type="button"
              onClick={startPledge}
              className="block w-full text-left"
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
