import { Header } from "@ui/Header";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-pokedex">
        <Header />
        {children}
      </body>
    </html>
  );
}
