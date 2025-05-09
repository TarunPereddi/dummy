import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Store country in request headers for API routes
  const requestHeaders = new Headers(request.headers)
  // The geo property is no longer available on NextRequest
  // You may need to use a geolocation service with the IP address
  const country = "US" // Default fallback value
  requestHeaders.set("x-country", country)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ["/api/:path*"],
}

