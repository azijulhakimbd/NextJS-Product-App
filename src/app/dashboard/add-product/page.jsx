"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    details: "",
    image: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/products", product); // your API route
      alert("Product added successfully!");
      setProduct({ name: "", description: "", price: "", details: "", image: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (!session) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Short Description</label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter short description"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Details</label>
            <textarea
              name="details"
              value={product.details}
              onChange={handleChange}
              placeholder="Enter full product details"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition resize-none h-32"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
