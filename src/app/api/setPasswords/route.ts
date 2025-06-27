import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("secure_vault_project");
    const collection = db.collection("passwords");

    const body = await request.json();
    const { userId, userName, website, password } = body;

    // Basic validation
    if (!userId || !userName || !website || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "❌ All fields (userName, website, password) are required.",
        },
        { status: 400 }
      );
    }

    const result = await collection.insertOne({ userId,  userName, website, password });

    return NextResponse.json(
      {
        success: true,
        message: "✅ Password added successfully",
        insertedId: result.insertedId.toString(), // Return inserted ID
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "❌ Failed to add password",
        error: error || "Unknown error",
      },
      { status: 500 }
    );
  }
}
