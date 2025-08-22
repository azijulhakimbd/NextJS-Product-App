import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    const data = await req.json();
    if (!data || Object.keys(data).length === 0) {
      return new Response(JSON.stringify({ message: "No product data provided" }), { status: 400 });
    }

    const price = Number(data.price);
    if (isNaN(price)) {
      return new Response(JSON.stringify({ message: "Price must be a number" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("ProductApp");
    const result = await db.collection("products").insertOne({
      ...data,
      price,
      createdBy: session.user.email,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Product added", result }), { status: 201 });
  } catch (err) {
    console.error("API /products error:", err);
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
