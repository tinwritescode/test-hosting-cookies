import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { ORIGINS } from "../constant";

export const POST = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("isLoggedIn");

  const headersList = new Headers();

  const currentOrigin = (await headers()).get("origin");
  if (currentOrigin && ORIGINS.includes(currentOrigin)) {
    headersList.set("Access-Control-Allow-Origin", currentOrigin);
    headersList.set("Access-Control-Allow-Credentials", "true");
  }

  return NextResponse.json(
    { message: "Cookie deleted" },
    { headers: headersList },
  );
};
