"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full bg-[#030303] flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-4xl font-bold mb-4">System Malfunction</h2>
      <p className="text-neutral-400 mb-8">
        Something went wrong in the matrix.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
      >
        Reboot System
      </button>
    </div>
  );
}
