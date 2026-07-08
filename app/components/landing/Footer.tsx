import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold text-white">Lumina AI</h2>
          <p className="max-w-md leading-7 text-gray-400">
            Learn, build, and debug with confidence using your AI-powered coding
            companion.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Benefits</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Lumina AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
