import PreviewHeader from "./PreviewHeader";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import TypingIndicator from "./TypingIndicator";

export default function HeroPreview() {
  return (
    <div
      id="works"
      className=" relative w-full max-w-4xl rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl"
    >
      <PreviewHeader />

      <div className="space-y-6 pt-6">
        <UserMessage
          avatar="A"
          name="You"
          message="Explain React Context API"
        />
        <TypingIndicator />
        <AIMessage
          avatar="AI"
          name="Lumina AI"
          title="Great question!"
          explanation="Most tutorials explain HOW React Context works. Let's first understand WHY React created it."
        />
      </div>
    </div>
  );
}
