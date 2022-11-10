import { Header } from "@ui/Header";
import { Layout } from "@ui/Layout";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-pokedex">
        <Layout>
          <Header />
          {children}
        </Layout>
      </body>
    </html>
  );
}
