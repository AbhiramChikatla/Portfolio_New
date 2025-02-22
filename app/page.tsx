// "use client"
// import { navItems } from "@/data"; 

// import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects"; 
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

// const Home = () => {
//   return ( 
//     // <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
//     <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects />
//         <Clients />
//         <Experience />
//         {/* <Approach /> */}
//         <Footer />
//       </div>
//     </main>
//   );
// };

// export default Home;
"use client";
import dynamic from "next/dynamic";

// Dynamically import the Home component and disable SSR
const page = dynamic(() => import("@/components/Home"), { ssr: false });

export default page;

