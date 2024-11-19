"use client"
import NavBar from "@/components/NavBar";
import NavMobile from "@/components/NavMobile";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <NavBar />
         {/* <NavMobile /> */}
         {children}
      </>
   );
}
