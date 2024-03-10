import "./globals.css";

export const metadata = {
  title: "Xtasy 2024",
  description: "OUTR annual fest is loading.....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-[100vw] bg-paper bg-cover bg-center">
          {children}
      </body>
    </html>
  );
}
