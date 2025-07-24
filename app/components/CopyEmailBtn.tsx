"use client";

import { useState } from "react";

export default function CopyEmailBtn() {
  const [copied, setCopied] = useState(false);
  const email = "contact@netflows.xyz"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000) // Reset copied after 2s
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <div className="mt-4 flex flex-col items-start sm:flex-row sm:items-center gap-4">
      <p id="emailToCopy" className="text-black75 text-p font-inter">
        {email}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="bg-[#242424] text-[#f5f5f5] px-5 py-1 rounded-full transition-all cursor-pointer font-semibold text-sm/[30px] tracking-[0.016em] hover:bg-[hsl(0,0%,24%)] active:bg-[hsl(0,0%,34%)]"
      >
        {copied ? "Copied Email" : "Copy Email"}
      </button>
    </div>
  );
}