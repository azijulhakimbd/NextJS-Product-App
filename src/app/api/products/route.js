import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions, req);
  
  if (!session) {
    return new Response(
      JSON.stringify({ message: "Unauthorized" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const data = await req.json();

    if (!data || Object.keys(data).length === 0) {
      return new Response(
        JSON.stringify({ message: "No product data provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("ProductApp");
    const result = await db.collection("products").insertOne({
      ...data,
      createdBy: session.user.email, 
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "Product added", result }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ message: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
