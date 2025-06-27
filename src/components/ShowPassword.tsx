"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";

type PasswordItem = {
  _id: string;
  userName: string;
  website: string;
  password: string;
};

function isPasswordItemArray(data: unknown): data is PasswordItem[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "userName" in item &&
        typeof item.userName === "string" &&
        "website" in item &&
        typeof item.website === "string" &&
        "password" in item &&
        typeof item.password === "string"
    )
  );
}

export default function ShowPassword() {
  const [passwords, setPasswords] = useState<PasswordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(
    new Set()
  );

  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user?.id) return;

    console.log("User ID =", user.id);

    const fetchPasswords = async () => {
      try {
        const res = await fetch(`/api/getPasswords?userId=${user.id}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        if (isPasswordItemArray(data.data)) {
          setPasswords(data.data);
        } else {
          console.log("Invalid format:", data.data);
          throw new Error("Received data is not in the expected format.");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred while fetching passwords.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPasswords();
  }, [isLoaded, isSignedIn, user?.id]); // ✅ added user.id as dependency

  const togglePasswordVisibility = (index: number) => {
  const newVisiblePasswords = new Set(visiblePasswords);

  if (newVisiblePasswords.has(index)) {
    newVisiblePasswords.delete(index);
  } else {
    newVisiblePasswords.add(index);
  }

  setVisiblePasswords(newVisiblePasswords);
};

  const deleteTodo = async (id: string) => {
    try {
      const res = await fetch(`/api/deleteTodos?id=${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);

      setPasswords((prev) => prev.filter((todo) => todo._id != id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log(`${type} copied to clipboard!`);
    } catch  {
      alert(`Failed to copy ${type}. Please try again.`);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <p className="mt-6 text-white/80 font-semibold text-lg">
          Loading your secure data...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[300px] flex flex-col items-center justify-center bg-red-900/20 backdrop-blur-xl border border-red-900/30 rounded-2xl p-8 text-red-300">
        <p className="text-xl font-semibold mb-3">Error:</p>
        <p className="text-center">{error}</p>
        <p className="text-sm mt-2">Please try reloading the page.</p>
      </div>
    );
  }

  if (passwords.length === 0) {
    return (
      <div className="min-h-[300px] flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-xl border border-white/10">
            <svg
              className="w-10 h-10 text-purple-300"
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
          <h3 className="text-2xl font-bold text-white mb-3">
            No Passwords Found
          </h3>
          <p className="text-white/60 text-lg max-w-md">
            Your secure vault is empty. Add your first password to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Your Secure Passwords
        </h2>
        <p className="text-white/60">
          {passwords.length}{" "}
          {passwords.length === 1 ? "credential" : "credentials"} stored
          securely
        </p>
      </div>

      {/* Password Cards Grid */}
      <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {passwords.map((password, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Credential #{index + 1}
              </h3>
              <button onClick={() => deleteTodo(password._id)} className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>

            {/* Card Content */}
            <div className="space-y-3">
              {/* Username */}
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-blue-300"
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
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-blue-300 mb-1">
                      Username
                    </p>
                    <p className="text-white text-sm break-all overflow-hidden">
                      {password.userName}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(password.userName, "username")}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  title="Copy username"
                >
                  <svg
                    className="w-4 h-4 text-white/60 hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Password */}
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-300"
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
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-green-300 mb-1">
                      Password
                    </p>
                    <p className="text-white text-sm font-mono whitespace-nowrap overflow-hidden text-ellipsis">
                      {visiblePasswords.has(index)
                        ? password.password
                        : "••••••••••••"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => togglePasswordVisibility(index)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    title={
                      visiblePasswords.has(index)
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {visiblePasswords.has(index) ? (
                      <svg
                        className="w-4 h-4 text-white/60 hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-white/60 hover:text-white"
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
                    )}
                  </button>
                  <button
                    onClick={() =>
                      copyToClipboard(password.password, "password")
                    }
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    title="Copy password"
                  >
                    <svg
                      className="w-4 h-4 text-white/60 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m-9 9a9 9 0 019-9"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-purple-300 mb-1">
                      Website
                    </p>
                    <a
                      href={password.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-purple-300 transition-colors duration-200 flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                      <span className="truncate">{password.website}</span>
                      <svg
                        className="w-3 h-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(password.website, "website")}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  title="Copy website"
                >
                  <svg
                    className="w-4 h-4 text-white/60 hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
