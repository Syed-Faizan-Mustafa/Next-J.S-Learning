import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
