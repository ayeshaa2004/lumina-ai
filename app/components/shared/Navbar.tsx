"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import Container from "../ui/Container";
import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/900 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`
    fixed
    top-0
    right-0
    h-screen
    w-72
    bg-zinc-900
    border-l
    border-white/10
    z-50
    transform
    transition-transform
    duration-300
    lg:hidden
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-bold text-white">✨ Lumina AI</h2>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          <a
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-300 hover:text-white"
          >
            Features
          </a>

          <a
            href="#why-lumina"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-300 hover:text-white"
          >
            Why Lumina
          </a>

          <a
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg text-gray-300 hover:text-white"
          >
            FAQs
          </a>
        </div>

        <div className="flex justify-around mt-8 border-t border-white/10 pt-6">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button>Sign In</button>
            </SignInButton>
            <SignInButton mode="modal">
              <button>Get Started</button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
            <Link href="/chat">Get Started</Link>{" "}
          </Show>
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md py-6">
        <Container>
          <div className="  flex items-center justify-between">
            <Logo />
            <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-7 w-7 text-white" />
            </button>

            <div className="hidden items-center gap-8 lg:flex">
              <a href="#features">Features</a>
              <a href="#why-lumina">Why Lumina</a>
              <a href="#faq">FAQs</a>
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button>Sign In</button>
                </SignInButton>
                <SignInButton mode="modal">
                  <button>Get Started</button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <UserButton />
                <Link href="/chat">Get Started</Link>{" "}
              </Show>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
