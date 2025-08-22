"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    Swal.fire({
      title: "Adding Product...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await axios.post("/api/products", product);
      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: "The product was successfully added.",
        timer: 2000,
        showConfirmButton: false,
      });
      setProduct({ name: "", description: "", price: "", details: "", image: "" });
    } catch (err) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Failed",
        text:
          err?.response?.data?.message ||
          "Could not add the product. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading")
    return <p className="text-center mt-10">Loading...</p>;
  if (!session) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-300 p-4">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-base-100 dark:bg-base-200 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 transition-colors">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-base-content">
          Add New Product
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block mb-2 font-medium text-base-content">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              placeholder="Enter product name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-base-content">
              Short Description
            </label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              placeholder="Enter short description"
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-base-content">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-base-content">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={handleChange}
                placeholder="Paste image URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-base-content">
              Details
            </label>
            <textarea
              name="details"
              value={product.details}
              onChange={handleChange}
              required
              placeholder="Enter full product details"
              className="textarea textarea-bordered w-full h-28 sm:h-32 resize-none"
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
