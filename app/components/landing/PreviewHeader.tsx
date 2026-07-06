export default function PreviewHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div className="flex items-center gap-2">
        <span className="text-xl">✨</span>

        <h3 className="font-semibold text-white">Lumina AI</h3>
      </div>

      <div className="flex items-center gap-2 text-sm text-emerald-400">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        Connected
      </div>
    </div>
  );
}
