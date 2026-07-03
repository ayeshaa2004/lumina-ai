import Container from "../ui/Container";
import Button from "../ui/Button";

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
            Grow Confidently
          </h1>

          {/* description */}

          {/* buttons */}

          {/* product preview */}
        </div>
      </Container>
    </section>
  );
}
