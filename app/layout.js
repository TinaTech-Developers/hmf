import "./globals.css";

export const metadata = {
  title: "Hiraya Manawari Foundation",
  description:
    "Empowering children and supporting the elderly through compassion and community care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 pt-20">
        <main>{children}</main>
      </body>
    </html>
  );
}
