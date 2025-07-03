import type { Metadata } from "next";
import "../globals.css"; 
 
export const metadata: Metadata = {
  title: "Rainbow Theme",
  description: "Rainbow Theme for Next.js",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body
         className='font-inter font-normal'
      >
        {children}
      </body>
    </html>
  );
}
