import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next()

  response.headers.append('Access-Control-Allow-Credentials', "true")
  response.headers.append('Access-Control-Allow-Origin', '*')
  response.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  response.headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  return response
}

export const config = {
  matcher: ['/:path*'],
}
