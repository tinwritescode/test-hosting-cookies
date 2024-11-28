import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("isLoggedIn");

  // Access-Control-Allow-Origin
  const headersList = await headers();
  headersList.set("Access-Control-Allow-Origin", "*");

  return NextResponse.json(
    { message: "Cookie deleted" },
    { headers: headersList },
  );
};
