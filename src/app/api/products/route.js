import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  const data = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("ProductApp");
    const result = await db.collection("products").insertOne(data);

    return new Response(JSON.stringify({ message: "Product added", result }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
