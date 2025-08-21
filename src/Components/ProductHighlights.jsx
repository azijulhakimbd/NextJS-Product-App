import clientPromise from "@/lib/mongodb";
import Image from "next/image";

export default async function ProductHighlights() {
  
  const client = await clientPromise;
  const db = client.db("ProductApp"); 
  const products = await db
    .collection("products")
    .find({})
    .limit(4)
    .toArray();

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Product Highlights</h2>
        <p className="text-base-600 mb-12">
          Discover some of our most popular products.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition-transform duration-300"
            >
              <div className="mb-4 w-32 h-32 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
