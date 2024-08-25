import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";


export const metadata: Metadata = {
  title: "Todo Application",
  description: "Todo app for learning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont text-gray-300">
      <Layout>
      {children}
      <Toaster 
        position='bottom-right'
        toastOptions={{
          duration:2000,
          style: {
            border: '1px solid #713200',
            background:'black',
            padding: '6px',
            color: '#ffffff',
          },
        }}
      />
      </Layout>
      </body>
    </html>
  );
}
