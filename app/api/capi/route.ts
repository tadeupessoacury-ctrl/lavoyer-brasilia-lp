import { NextRequest, NextResponse } from "next/server";

type CapiPayload = {
  event_id?: string;
  fbp?: string;
  fbc?: string;
  page_url?: string;
};

export async function POST(request: NextRequest) {
  let body: CapiPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const webhook = process.env.N8N_CAPI_WEBHOOK;

  if (!webhook) {
    return NextResponse.json(
      { ok: false, error: "n8n_webhook_not_configured" },
      { status: 500 }
    );
  }

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "";

  const payload = {
    event_id: body.event_id ?? "",
    fbp: body.fbp ?? "",
    fbc: body.fbc ?? "",
    page_url: body.page_url ?? "",
    client_ip_address: clientIp,
    client_user_agent: request.headers.get("user-agent") ?? "",
    meta_capi_token: process.env.META_CAPI_TOKEN ?? "",
    test_event_code: process.env.META_TEST_EVENT_CODE ?? "",
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "webhook_error", status: res.status },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "webhook_unreachable" }, { status: 502 });
  }
}
