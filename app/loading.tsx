"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Loader2 className="w-12 h-12 text-pink-600 animate-spin" />
    </div>
  );
}
