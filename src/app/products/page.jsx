import Link from "next/link";
import products from "@/app/data/products";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-base-800">
        Our Products
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col"
          >
            <div className="relative w-full h-56 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mb-6">
              ${product.price}
            </p>
            <Link
              href={`/products/${product.id}`}
              className="mt-auto inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
