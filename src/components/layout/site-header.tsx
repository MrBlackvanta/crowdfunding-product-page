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
      <div
        aria-hidden="true"
        hidden={!menuOpen}
        data-open={menuOpen || undefined}
        onClick={dismissMenu}
        className="v-reveal from-ink/60 to-ink/0 fixed inset-0 bg-linear-to-b/srgb md:hidden"
      />

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
        data-open={menuOpen || undefined}
        className="v-reveal inset-ring-hairline fixed inset-x-6 top-22 rounded-lg bg-white inset-ring md:hidden starting:-translate-y-2"
      >
        <ul className="divide-charcoal/10 divide-y text-lg font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-6 focus-visible:-outline-offset-2"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={startPledge}
              className="block w-full px-6 py-6 text-left focus-visible:-outline-offset-2"
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
