// // // "use client";
// // // import { useState, useEffect } from "react";

// // // type PasswordItem = {
// // //   userName: string;
// // //   website: string;
// // //   password: string;
// // // };

// // // export default function ShowPassword() {
// // //   const [passwords, setPasswords] = useState<PasswordItem[]>([]);
// // //   const [loading, setLoading] = useState<boolean>(true);

// // //   useEffect(() => {
// // //     fetch("/passwords/api")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         setPasswords(data);
// // //         setLoading(false);
// // //         console.log("Fetched data:", data);
// // //         // window.location.reload();
// // //       })
// // //       .catch((err) => {
// // //         console.error("Error fetching data:", err);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center min-h-screen">
// // //         <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (passwords.length === 0) {
// // //     return (
// // //       <div className="min-h-[90vh] mt-[10vh] flex items-center justify-center bg-gray-100">
// // //         <p className="text-gray-600 text-xl font-semibold">
// // //           No password entries found.
// // //         </p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center bg-gray-100 p-4">
// // //       {passwords.map((password, index) => (
// // //         <div
// // //           key={index}
// // //           className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200"
// // //         >
// // //           <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
// // //             Account Details
// // //           </h2>
// // //           <div className="space-y-4">
// // //             <div className="flex items-center  gap-2 p-4 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
// // //               <span className="font-semibold text-blue-700 w-1/3">
// // //                 Username:
// // //               </span>
// // //               <span className="text-gray-800 break-words w-2/3">
// // //                 {" "}
// // //                 {password.userName}
// // //               </span>
// // //             </div>

// // //             <div className="flex items-center p-4 bg-green-50 rounded-lg shadow-sm border border-green-200">
// // //               <span className="font-semibold text-green-700 w-1/3">
// // //                 Password:
// // //               </span>
// // //               <span className="text-gray-800 break-words w-2/3">
// // //                 {password.password}
// // //               </span>
// // //             </div>

// // //             <div className="flex items-center p-4 bg-purple-50 rounded-lg shadow-sm border border-purple-200">
// // //               <span className="font-semibold text-purple-700 w-1/3">
// // //                 Website:
// // //               </span>
// // //               <span className="text-blue-600 hover:underline break-words w-2/3">
// // //                 <a
// // //                   href={password.website}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   {password.website}
// // //                 </a>
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }



// // "use client";
// // import { useState, useEffect } from "react";

// // type PasswordItem = {
// //   userName: string;
// //   website: string;
// //   password: string;
// // };

// // export default function ShowPassword() {
// //   const [passwords, setPasswords] = useState<PasswordItem[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);

// //   useEffect(() => {
// //     fetch("/passwords/api")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setPasswords(data);
// //         setLoading(false);
// //         console.log("Fetched data:", data);
// //         // window.location.reload();
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching data:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="flex flex-col justify-center items-center min-h-[300px] bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl">
// //         <div className="relative">
// //           <div className="w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin"></div>
// //           <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
// //         </div>
// //         <p className="mt-6 text-indigo-600 font-semibold text-lg">Loading your secure data...</p>
// //       </div>
// //     );
// //   }

// //   if (passwords.length === 0) {
// //     return (
// //       <div className="min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl p-8">
// //         <div className="text-center">
// //           <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center mb-6 mx-auto">
// //             <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
// //             </svg>
// //           </div>
// //           <h3 className="text-2xl font-bold text-gray-700 mb-3">No Passwords Found</h3>
// //           <p className="text-gray-500 text-lg max-w-md">
// //             Your secure vault is empty. Add your first password to get started.
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="space-y-6 p-4">
// //       {/* Header */}
// //       <div className="text-center mb-8">
// //         <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
// //           Your Secure Passwords
// //         </h2>
// //         <p className="text-gray-600">
// //           {passwords.length} {passwords.length === 1 ? 'credential' : 'credentials'} stored securely
// //         </p>
// //       </div>

// //       {/* Password Cards Grid */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {passwords.map((password, index) => (
// //           <div
// //             key={index}
// //             className="relative group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
// //           >
// //             {/* Card Header */}
// //             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-xl font-bold">Credential #{index + 1}</h3>
// //                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
// //                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card Content */}
// //             <div className="p-6 space-y-4">
// //               {/* Username */}
// //               <div className="group/item">
// //                 <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors duration-200">
// //                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
// //                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
// //                     </svg>
// //                   </div>
// //                   <div className="flex-1 min-w-0">
// //                     <p className="text-sm font-semibold text-blue-700 mb-1">Username</p>
// //                     <p className="text-gray-900 font-medium break-words">{password.userName}</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Password */}
// //               <div className="group/item">
// //                 <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:border-green-200 transition-colors duration-200">
// //                   <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
// //                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
// //                     </svg>
// //                   </div>
// //                   <div className="flex-1 min-w-0">
// //                     <p className="text-sm font-semibold text-green-700 mb-1">Password</p>
// //                     <p className="text-gray-900 font-medium break-words font-mono text-sm bg-white/60 px-3 py-2 rounded-lg">
// //                       {password.password}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Website */}
// //               <div className="group/item">
// //                 <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:border-purple-200 transition-colors duration-200">
// //                   <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
// //                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m-9 9a9 9 0 019-9"></path>
// //                     </svg>
// //                   </div>
// //                   <div className="flex-1 min-w-0">
// //                     <p className="text-sm font-semibold text-purple-700 mb-1">Website</p>
// //                     <a
// //                       href={password.website}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="text-indigo-600 hover:text-indigo-800 font-medium break-words hover:underline transition-colors duration-200 flex items-center gap-1"
// //                     >
// //                       {password.website}
// //                       <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
// //                       </svg>
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Decorative element */}
// //             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// "use client";
// import { useState, useEffect } from "react";

// type PasswordItem = {
//   userName: string;
//   website: string;
//   password: string;
// };

// export default function ShowPassword() {
//   const [passwords, setPasswords] = useState<PasswordItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(new Set());

//   useEffect(() => {
//     fetch("/passwords/api")
//       .then((res) => res.json())
//       .then((data) => {
//         setPasswords(data);
//         setLoading(false);
//         console.log("Fetched data:", data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setLoading(false);
//       });
//   }, []);

//   const togglePasswordVisibility = (index: number) => {
//     const newVisiblePasswords = new Set(visiblePasswords);
//     if (newVisiblePasswords.has(index)) {
//       newVisiblePasswords.delete(index);
//     } else {
//       newVisiblePasswords.add(index);
//     }
//     setVisiblePasswords(newVisiblePasswords);
//   };

//   const copyToClipboard = async (text: string, _type: string) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       // You could add a toast notification here
//     } catch (err) {
//       console.error('Failed to copy:', err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
//         <div className="relative">
//           <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin"></div>
//           <div className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
//         </div>
//         <p className="mt-6 text-white/80 font-semibold text-lg">Loading your secure data...</p>
//       </div>
//     );
//   }

//   if (passwords.length === 0) {
//     return (
//       <div className="min-h-[300px] flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
//         <div className="text-center">
//           <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-xl border border-white/10">
//             <svg className="w-10 h-10 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//             </svg>
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-3">No Passwords Found</h3>
//           <p className="text-white/60 text-lg max-w-md">
//             Your secure vault is empty. Add your first password to get started.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-bold text-white mb-2">
//           Your Secure Passwords
//         </h2>
//         <p className="text-white/60">
//           {passwords.length} {passwords.length === 1 ? 'credential' : 'credentials'} stored securely
//         </p>
//       </div>

//       {/* Password Cards Grid */}
//       <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
//         {passwords.map((password, index) => (
//           <div
//             key={index}
//             className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
//           >
//             {/* Card Header */}
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-white">Credential #{index + 1}</h3>
//               <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
//                 <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//                 </svg>
//               </div>
//             </div>

//             {/* Card Content */}
//             <div className="space-y-3">
//               {/* Username */}
//               <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
//                 <div className="flex items-center gap-3 flex-1 min-w-0">
//                   <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//                     </svg>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-xs font-medium text-blue-300 mb-1">Username</p>
//                     <p className="text-white text-sm break-all overflow-hidden">{password.userName}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => copyToClipboard(password.userName, 'username')}
//                   className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//                   title="Copy username"
//                 >
//                   <svg className="w-4 h-4 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
//                   </svg>
//                 </button>
//               </div>

//               {/* Password */}
//               <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
//                 <div className="flex items-center gap-3 flex-1 min-w-0">
//                   <div className="w-8 h-8 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//                     </svg>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-xs font-medium text-green-300 mb-1">Password</p>
//                     <p className="text-white text-sm font-mono whitespace-nowrap overflow-hidden text-ellipsis">
//                       {visiblePasswords.has(index) ? password.password : '••••••••••••'}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <button
//                     onClick={() => togglePasswordVisibility(index)}
//                     className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//                     title={visiblePasswords.has(index) ? "Hide password" : "Show password"}
//                   >
//                     {visiblePasswords.has(index) ? (
//                       <svg className="w-4 h-4 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
//                       </svg>
//                     ) : (
//                       <svg className="w-4 h-4 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
//                       </svg>
//                     )}
//                   </button>
//                   <button
//                     onClick={() => copyToClipboard(password.password, 'password')}
//                     className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//                     title="Copy password"
//                   >
//                     <svg className="w-4 h-4 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Website */}
//               <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200">
//                 <div className="flex items-center gap-3 flex-1 min-w-0">
//                   <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m-9 9a9 9 0 019-9"></path>
//                     </svg>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-xs font-medium text-purple-300 mb-1">Website</p>
//                     <a
//                       href={password.website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white text-sm hover:text-purple-300 transition-colors duration-200 flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap"
//                     >
//                       <span className="truncate">{password.website}</span>
//                       <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => copyToClipboard(password.website, 'website')}
//                   className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//                   title="Copy website"
//                 >
//                   <svg className="w-4 h-4 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

// Define the type for a single password item
type PasswordItem =  {
  userName: string;
  website: string;
  password: string;
};

// Type guard to validate incoming data from the API
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State to handle fetch errors
  // Using a Set to store indices of visible passwords for independent toggling
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const res = await fetch("/passwords/api");
        if (!res.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        // Validate the fetched data using the type guard
        if (isPasswordItemArray(data)) {
          setPasswords(data);
        } else {
          // If data format is unexpected, set an error message
          throw new Error("Received data is not in the expected format.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        // Ensure err is treated as an Error object or string
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
  }, []);

  const togglePasswordVisibility = (index: number) => {
    // Create a new Set to ensure immutability for state update
    const newVisiblePasswords = new Set(visiblePasswords);
    if (newVisiblePasswords.has(index)) {
      newVisiblePasswords.delete(index);
    } else {
      newVisiblePasswords.add(index);
    }
    setVisiblePasswords(newVisiblePasswords);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Optional: Add a toast notification or visual feedback here
      console.log(`${type} copied to clipboard!`);
    } catch (err) {
      console.error(`Failed to copy ${type}:`, err);
      // Optional: Show an error message to the user
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
          {passwords.length} {passwords.length === 1 ? "credential" : "credentials"}{" "}
          stored securely
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
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white/70"
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
                      visiblePasswords.has(index) ? "Hide password" : "Show password"
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
                    onClick={() => copyToClipboard(password.password, "password")}
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