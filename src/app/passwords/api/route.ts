import { NextRequest, NextResponse } from "next/server";

type PasswordItem = {
  userName: string,
  website: string,
  password: string,
}

// In-memory array to store passwords
const passwords: PasswordItem[] = [];

// Corrected GET handler
export async function GET() {
  return NextResponse.json(passwords);
}

// POST handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userName, website, password } = body;

    // Check for missing fields
    if (!userName || !website || !password) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // Save the data
    passwords.push({ userName, website, password });
    console.log("Ho gya behns ki taang")
    console.log(passwords)
    return NextResponse.json(
      { message: "Password saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
