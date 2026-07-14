declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

export function trackLead() {
  const eventId = `lead_${Date.now()}`;

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { event_id: eventId });
  }

  const payload = {
    event_id: eventId,
    fbp: readCookie("_fbp"),
    fbc: readCookie("_fbc"),
    page_url: typeof window !== "undefined" ? window.location.href : "",
  };

  fetch("/api/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    /* fail silently — lead capture must never block the WhatsApp redirect */
  });
}
