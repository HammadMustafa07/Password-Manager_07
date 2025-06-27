import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing ID in query params" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("secure_vault_project");
    const collection = db.collection("passwords");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json(
        { success: true, message: "Password deleted successfully" }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "No matching password found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
