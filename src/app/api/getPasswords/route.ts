import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
  try {
    const {searchParams} = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("secure_vault_project");
    const collection = db.collection("passwords");

    const user_passwords = await collection.find({userId}).toArray();
    return NextResponse.json({ success: true, data: user_passwords });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: err || "Unknown error" },
      { status: 500 }
    );
  }
}
