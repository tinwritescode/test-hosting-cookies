import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();
  cookieStore.set("isLoggedIn", "true", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return NextResponse.json({ message: "Cookie set" });
};
