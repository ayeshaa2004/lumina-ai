type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-zinc-900">
      <div className="mb-4 text-3xl">{icon}</div>

      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

      <p className="leading-7 text-gray-400">{description}</p>
    </div>
  );
}
