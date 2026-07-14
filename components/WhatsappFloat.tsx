"use client";

import { useEffect, useState } from "react";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site";
import { trackLead } from "@/lib/track-lead";

export default function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappHref(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead()}
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/30 transition-all duration-500 ease-out hover:scale-110 md:h-16 md:w-16 ${
        visible ? "scale-100 opacity-100" : "pointer-events-none scale-50 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7 md:h-8 md:w-8">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.68a11.8 11.8 0 0 0 5.63 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.36-8.44ZM12.04 21.4h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.8 1 1.01-3.7-.23-.38a9.55 9.55 0 0 1-1.47-5.13c0-5.28 4.3-9.58 9.6-9.58 2.56 0 4.97 1 6.78 2.82a9.53 9.53 0 0 1 2.8 6.78c0 5.28-4.3 9.74-9.43 9.74Zm5.26-7.17c-.29-.14-1.7-.84-1.96-.94-.26-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.2-.44-2.29-1.4a8.6 8.6 0 0 1-1.58-1.96c-.17-.29-.02-.44.12-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.38s1.02 2.76 1.17 2.95c.14.19 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
      </svg>
    </a>
  );
}
