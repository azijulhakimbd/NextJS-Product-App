import clientPromise from "@/lib/mongodb";
import ProductsList from "./ProductsList";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("ProductApp");
  const products = await db.collection("products").find({}).toArray();

  // Pass products to client component
  return <ProductsList products={products} />;
}