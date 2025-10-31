import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TredLines",
  description: "Stay updated with the latest news and trends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
