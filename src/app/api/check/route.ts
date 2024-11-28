import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("isLoggedIn");

  return NextResponse.json({ isLoggedIn });
};
