import { FaCheckCircle, FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function ProductHighlights() {
  const highlights = [
    {
      icon: <FaRocket size={28} className="text-blue-500" />,
      title: "Fast Performance",
      description: "Experience lightning-fast load times and seamless interactions."
    },
    {
      icon: <FaShieldAlt size={28} className="text-green-500" />,
      title: "Secure",
      description: "Top-notch security features to protect your data and privacy."
    },
    {
      icon: <FaUsers size={28} className="text-purple-500" />,
      title: "User Friendly",
      description: "Intuitive design and easy-to-use interface for everyone."
    },
    {
      icon: <FaCheckCircle size={28} className="text-yellow-500" />,
      title: "Reliable",
      description: "Consistent and dependable performance you can count on."
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Highlights</h2>
        <p className="text-gray-600 mb-12">
          Discover what makes our product stand out from the competition.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition-transform duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
