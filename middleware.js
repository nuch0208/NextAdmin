import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/staic|_next/image|.png).*)"],
};