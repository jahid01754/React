// export default function SwitchTheme(){
//     return(
//         <div>Switch Theme</div>
//     );
// }

// import { useState } from "react";


// import { HiHome } from "react-icons/hi";
// import Link from "next/link";

// export default function Breadcrumb() {
//   return (
//     <div className="flex items-center justify-center mt-10 mb-10">
//         <nav className="bg-white shadow-md p-3 rounded-full inline-flex items-center space-x-4 ">
//             {/* Home Icon */}
//             <Link href="/" className="text-gray-500 hover:text-blue-600 flex items-center">
//                 <HiHome size={20} />
//             </Link>

//             {/* Arrow */}
//             <span className="text-gray-300">{'>'}</span>

//             {/* Projects */}
//             <a href="/projects" className="text-gray-600 font-medium hover:text-blue-600">
//                 Projects
//             </a>

//             {/* Arrow */}
//             <span className="text-gray-300">{'>'}</span>

//             {/* Project Nero (current page) */}
//             <span className="text-gray-500 font-medium">
//                 Project Nero
//             </span>
//         </nav>
//     </div>
//   );
// }


// import { HiHome } from "react-icons/hi";
// import Link from "next/link";

// export default function Breadcrumb({ items = [] }) {
//   return (
//     <div className="flex items-center justify-center my-10">
//       <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-3 rounded-full inline-flex items-center space-x-2 sm:space-x-4 overflow-x-auto text-sm">
        
//         {/* Home Link */}
//         <Link href="/" className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
//           <HiHome size={20} />
//         </Link>

//         {items.map((item, index) => (
//           <div key={index} className="flex items-center space-x-2">
//             {/* Arrow */}
//             <svg className="w-3 h-3 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//             </svg>

//             {/* Breadcrumb Item */}
//             {item.href ? (
//               <Link
//                 href={item.href}
//                 className="text-gray-600 hover:text-blue-600 font-medium dark:text-gray-300 dark:hover:text-blue-400"
//               >
//                 {item.label}
//               </Link>
//             ) : (
//               <span className="text-gray-500 font-medium dark:text-gray-400">
//                 {item.label}
//               </span>
//             )}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// }


// import Link from "next/link";

// export default function Breadcrumb() {
//   return (
//     <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
//       <ol className="flex items-center space-x-2">
//         <li>
//           <Link href="/projects" className="hover:text-gray-900 hover:underline">
//             Projects
//           </Link>
//         </li>
//         <li>
//           <span className="text-gray-400">/</span>
//         </li>
//         <li className="font-medium text-gray-900">
//           Project Nero
//         </li>
//       </ol>
//     </nav>
//   );
// }

"use client"
import { useState } from "react";

export default function SwitchTheme(){

    const [isOn, setIsOn] = useState(false);

    const toggleButton = () => {
        setIsOn(!isOn);
    }
    return(
        <div className="flex justify-center items-center mt-10 mb-10">
            <button onClick={toggleButton} className={`w-20 h-10 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${isOn ? "bg-green-500" : "bg-gray-300"}`}>
                <div className={`bg-white w-8 h-8 rounded-full shadow-md trasnform transition duration-300 ease-in-out ${isOn ? "translate-x-10" : "translate-x-0"}`}></div>
            </button>
        </div>
    );
}