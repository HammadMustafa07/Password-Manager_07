// // import AddData from "@/components/AddData";
// // import ShowPassword from "@/components/ShowPassword";



// // export default function Dashboard() {
// //   return (
// //     <>
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
// //       <AddData />
// //       <ShowPassword/>
// //     </div>
// //     </>
// //   )
// // }


// // // components/Dashboard.jsx
// // import AddData from "@/components/AddData";
// // import ShowPassword from "@/components/ShowPassword";

// // export default function Dashboard() {
// //   return (
// //     <>
// //       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-8">
// //         <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6">
// //           <AddData />
// //         </div>
// //         <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
// //           <ShowPassword />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // components/Dashboard.jsx
// import AddData from "@/components/AddData";
// import ShowPassword from "@/components/ShowPassword";

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
//       {/* Optional: Add a header or title for the dashboard */}
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
//         My Secure Dashboard
//       </h1>

//       <div className="w-full max-w-2xl space-y-8"> {/* Increased max-w for a bit more space */}
//         {/* Card for AddData */}
//         <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Data</h2>
//           <AddData />
//         </div>

//         {/* Card for ShowPassword */}
//         <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">View Passwords</h2>
//           <ShowPassword />
//         </div>
//       </div>
//     </div>
//   );
// }

// components/Dashboard.jsx
import AddData from "@/components/AddData";
import ShowPassword from "@/components/ShowPassword";

export default function Dashboard() {
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">View Passwords</h2>
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
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
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