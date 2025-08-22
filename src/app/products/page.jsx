import clientPromise from "@/lib/mongodb";
import ProductsList from "./ProductsList";
import { ObjectId } from "mongodb";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("ProductApp");
  const products = await db.collection("products").find({}).toArray();

  // Convert _id to string for serialization
  const serializedProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return <ProductsList products={serializedProducts} />;
}
