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
        <Link href="/products" className="link link-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row bg-base-100 shadow-xl rounded-xl overflow-hidden">
        {/* Product Image */}
        <div className="flex-shrink-0 lg:w-1/2 w-full relative h-74 lg:h-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover w-full h-64"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-base-content/80 mb-4">{product.details}</p>
            <p className="text-2xl font-bold text-primary mb-6">${product.price}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Link href="/products" className="btn btn-ghost w-full sm:w-auto text-center">
              Back to Products
            </Link>
            <button className="btn btn-primary w-full sm:w-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
