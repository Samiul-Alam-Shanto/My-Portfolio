export default function Loading() {
  return (
    <div className="h-screen w-full bg-[#030303] flex items-center justify-center">
      <div className="relative flex items-center gap-2">
        <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 bg-white rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}
