import { NextResponse } from "next/server";
import { personJsonLd } from "@/lib/structured-data";

export function GET() {
  return NextResponse.json(personJsonLd(), {
    headers: {
      "Content-Type": "application/ld+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
