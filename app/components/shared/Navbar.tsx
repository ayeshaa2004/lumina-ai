import Logo from "./Logo";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <nav className="py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-8">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <button>Sign In</button>
            <button>Get Started</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
