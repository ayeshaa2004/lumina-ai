import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 px-8 py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white">
              Ready to Supercharge Your Coding Journey?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-400">
              Learn faster, build confidently, and debug smarter with Lumina AI.
            </p>

            <Button className="mt-10" variant="primary">
              Start Learning Now →{" "}
            </Button>
          </div>{" "}
        </div>
      </Container>
    </section>
  );
}
