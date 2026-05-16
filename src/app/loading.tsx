export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="flex items-center gap-3 text-slate-500">
        <span className="h-3 w-3 rounded-full bg-primary-500 animate-pulse" />
        <span className="text-sm font-medium">Loading…</span>
      </div>
    </div>
  );
}
