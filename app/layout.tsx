import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baguette & Bureau - Automatisez vos commandes B2B",
  description: "Fini les interruptions WhatsApp ! Automatisez la gestion de vos commandes B2B pour hôtels et restaurants. Gagnez du temps, concentrez-vous sur votre métier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
