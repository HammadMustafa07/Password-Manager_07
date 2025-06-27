// components/AddData.jsx or .tsx if you're using TypeScript
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export default function AddData() {
  const [userName, setUserName] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isSignedIn, user, isLoaded } = useUser();

  // Optional: show a loading fallback or null
  if (!isLoaded || !isSignedIn || !user?.id) return null;

  const userId = user.id;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/setPasswords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, userName, website, password }),
      });

      if (res.ok) {
        setUserName("");
        setWebsite("");
        setPassword("");
        toast.success("Password saved successfully!", { duration: 2000 });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        alert("Failed to save password.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Static background gradient */}

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-40"></div>

        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-out">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Secure Vault
            </h2>
            <p className="text-gray-600 text-sm">
              Store your credentials safely
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input Field 1: User Name */}
            <div className="group">
              <label
                htmlFor="userName"
                className=" text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <span>User Name</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  className="block w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base text-gray-900 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:outline-none hover:border-indigo-300"
                  placeholder="e.g., JohnDoe"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Input Field 2: Website */}
            <div className="group">
              <label
                htmlFor="website"
                className=" text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
                <span>Website</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="block w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base text-gray-900 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:outline-none hover:border-indigo-300"
                  placeholder="e.g., example.com"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Input Field 3: Password */}
            <div className="group">
              {/* block */}{" "}
              <label
                htmlFor="password"
                className=" text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <span>Password</span>
              </label>
              <div className="relative">
                <textarea
                  id="password"
                  name="password"
                  rows={4}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base text-gray-900 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:outline-none hover:border-indigo-300 resize-y min-h-[120px]"
                  placeholder="Enter your strong password here..."
                  required
                ></textarea>
                <div className="absolute top-4 right-0 pr-4 flex items-center pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-colors duration-200 ease-in-out transform active:scale-[0.98]"
              >
                {/* Button background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Button content */}
                <svg
                  className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
                <span className="relative z-10">Save Credentials</span>
              </button>
            </div>
          </form>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </>
  );
}
