import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import Image from "next/image";
import { ObjectId } from "mongodb";

export default async function ProductDetails({ params }) {
  const { id } = params;

  // Connect to MongoDB and fetch the product
  const client = await clientPromise;
  const db = client.db("ProductApp"); 
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  // If product not found
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-blue-500 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center shadow-lg rounded-2xl p-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl shadow-md object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl text-gray-900 font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.details}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg font-medium transition"
            >
              Back to Products
            </Link>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
