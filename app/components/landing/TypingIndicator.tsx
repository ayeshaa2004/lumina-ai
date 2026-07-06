export default function TypingIndicator() {
    return (
        <div>
            <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white">
                    AI
                </div>

                <span className="font-medium text-gray-200">
                    Lumina AI
                </span>
            </div>

            <div className="w-fit rounded-2xl border border-white/10 bg-zinc-800/80 px-5 py-4">
                <div className="flex gap-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]"></span>
                </div>
            </div>
        </div>
    );
}