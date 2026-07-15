import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroPreview from "./HeroPreview";
import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            ✨ AI-Powered Learning Platform
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-zinc-100">
            Learn Faster.
            <br />
            Code Smarter.
            <br />
            Grow Confidently.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Master programming with an AI mentor that explains concepts, reviews
            your code, and helps you think like a developer—not just copy
            solutions.
          </p>
          <div className="mt-10 flex gap-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="primary">Start Learning Free</Button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <Link href="/chat">
                <Button variant="primary">Start Learning Free</Button>
              </Link>
            </Show>
            <a href="#works">
              <Button variant="secondary">See How It Works</Button>
            </a>
          </div>
          <div className="relative mt-16 flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-violet-600/40 blur-3xl" />
            </div>

            <HeroPreview />
          </div>{" "}
        </div>
      </Container>
    </section>
  );
}
