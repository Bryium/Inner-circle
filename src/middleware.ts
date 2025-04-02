import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { authRoutes, publicRoutes } from "./routes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function middleware(req: {
  nextUrl: any;
  headers: Headers;
}) {
  const token = await getToken({
    req: { headers: req.headers },
    secret: process.env.AUTH_SECRET,
  });

  const { nextUrl } = req;
  const isLoggedIn = !!token;
  const isPublic = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isPublic) return NextResponse.next();

  if (isAuthRoute) {
    return isLoggedIn
      ? NextResponse.redirect(new URL("/members", nextUrl))
      : NextResponse.next();
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
