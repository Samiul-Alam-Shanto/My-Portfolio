export default function TechBadge({ name }) {
  return (
    <span className="px-3 py-1 text-xs font-medium text-neutral-400 bg-neutral-800/50 border border-neutral-700/50 rounded-full hover:text-white hover:border-neutral-500 transition-colors cursor-default">
      {name}
    </span>
  );
}
