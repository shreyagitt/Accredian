import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Lead Received");

  console.log(body);

  await new Promise((resolve) =>
    setTimeout(resolve, 1500)
  );

  return NextResponse.json({
    success: true,
    message: "Lead submitted successfully!",
  });
}