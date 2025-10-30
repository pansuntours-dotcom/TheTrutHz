// Force Node.js runtime and prevent build-time pre-rendering
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Example webhook logging (optional)
    console.log("🔔 Webhook received:", body);

    // Example of using fetch (Node 18+ global)
    const response = await fetch("https://api.example.com/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return NextResponse.json(
      { message: "Webhook processed successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}
