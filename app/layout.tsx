import "./globals.css";
import { PT_Serif } from "next/font/google";
import Providers from "./components/providers";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "YourPhotos",
  description: "Your Photos application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
