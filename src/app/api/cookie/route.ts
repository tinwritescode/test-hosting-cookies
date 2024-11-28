import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();
  cookieStore.set("isLoggedIn", "true", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  const headersList = new Headers();
  headersList.set("Access-Control-Allow-Origin", "*");

  return NextResponse.json({ message: "Cookie set" }, { headers: headersList });
};
