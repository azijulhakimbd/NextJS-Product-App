import clientPromise from "@/lib/mongodb";
import Image from "next/image";

export default async function ProductHighlights() {
  const client = await clientPromise;
  const db = client.db("ProductApp");
  const products = await db.collection("products").find({}).limit(4).toArray();

  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-base-content mb-4">
          Product Highlights
        </h2>
        <p className="text-base-content/70 mb-12">
          Discover some of our most popular products.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-xl hover:scale-105 transform transition-transform duration-300"
            >
              <figure className="px-6 pt-6">
                <div className="w-32 h-32 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw"
                    className="object-cover rounded-xl"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{product.name}</h3>
                <p className="text-sm opacity-70">{product.description}</p>
                <p className="text-primary font-bold mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
