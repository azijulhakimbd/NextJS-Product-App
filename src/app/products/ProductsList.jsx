"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsList({ products }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title with fade animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center text-base-content"
      >
        Our Products
      </motion.h1>

      {/* Grid with staggered animation */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product) => (
          <motion.div
            key={product._id.toString()}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-2xl"
          >
            {/* Product Image */}
            <figure className="relative w-full h-70">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 object-cover rounded-t-2xl"
              />
            </figure>

            {/* Product Info */}
            <div className="card-body">
              <h2 className="card-title text-base-content">{product.name}</h2>
              <p className="text-base-content/70">{product.description}</p>
              <p className="text-lg font-bold text-primary">${product.price}</p>

              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/products/${product._id.toString()}`}
                  className="btn btn-primary rounded-2xl btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
