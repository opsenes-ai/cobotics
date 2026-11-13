import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/middleware";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  // Only the console requires a session; the public site, /auth/* and /legal/* stay open.
  matcher: ["/console/:path*"],
};
