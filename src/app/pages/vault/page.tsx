"use client";
import AddData from "@/components/AddData";
import Loading from "@/components/Loading";
import ShowPassword from "@/components/ShowPassword";
import { SignInButton, useUser } from "@clerk/nextjs";

export default function Vault() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <Loading/>
    );
  }

  if (!isSignedIn) {
    return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 md:left-6 sm:left-4 w-72 h-72 md:w-60 md:h-60 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 md:right-6 sm:right-4 w-96 h-96 md:w-80 md:h-80 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[450px] md:h-[450px] sm:w-[300px] sm:h-[300px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 md:left-8 sm:left-4 w-8 h-8 md:w-6 md:h-6 sm:w-5 sm:h-5 text-purple-400/30 animate-bounce delay-300">
          🛡️
        </div>
        <div className="absolute top-48 right-32 md:right-8 sm:right-4 w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-purple-300/40 animate-bounce delay-700">
          🔒
        </div>
        <div className="absolute bottom-40 left-32 md:left-8 sm:left-4 w-7 h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 text-purple-500/35 animate-bounce delay-500">
          🔑
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6 md:space-y-5 sm:space-y-4 max-w-md mx-auto">
        <div className="inline-flex items-center space-x-2 md:space-x-1.5 sm:space-x-1 bg-red-900/30 border border-red-500/30 rounded-full px-4 py-2 md:px-3 md:py-1.5 sm:px-3 sm:py-1 backdrop-blur-sm mb-6 md:mb-5 sm:mb-4">
          <div className="w-2 h-2 md:w-1.5 md:h-1.5 sm:w-1.5 sm:h-1.5 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-red-200 text-sm md:text-xs sm:text-xs">
            Authentication Required
          </span>
        </div>

        <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white mb-4 md:mb-3 sm:mb-3">
          🔒 Access{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
            Denied
          </span>
        </h1>

        <p className="text-lg md:text-base sm:text-sm text-purple-200/70 max-w-md mx-auto leading-relaxed">
          You must be signed in to view your secure dashboard.
        </p>

        <SignInButton>
          <button className="mt-6 md:mt-5 sm:mt-4 flex items-center justify-center space-x-2 md:space-x-1.5 sm:space-x-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 md:px-5 md:py-2.5 sm:px-5 sm:py-2.5 rounded-xl md:rounded-lg sm:rounded-lg font-semibold md:text-sm sm:text-sm transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-full md:w-auto">
            <span>Sign In</span>
          </button>
        </SignInButton>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-24 sm:h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>

    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
          <span className="text-white">🔐</span> MyVault
        </h1>
        <p className="text-purple-200/80 text-lg max-w-md mx-auto">
          Manage your data and passwords with enhanced security
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Data Card */}
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Add New Data</h2>
              </div>
              <AddData />
            </div>
          </div>

          {/* Show Password Card */}
          <div className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <h2 className="text-2xl font-bold text-white">
                  View Passwords
                </h2>
              </div>
              <ShowPassword />
            </div>
          </div>
        </div>

        {/* Optional: Quick Stats or Status Bar */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-8">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm">System Online</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-purple-400"
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
              <span className="text-white/80 text-sm">Secure Connection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
