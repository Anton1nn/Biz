import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baguette & Bureau - Automatisez vos commandes B2B pour boulangeries | Fini WhatsApp",
  description: "✓ Économisez 3h/jour ✓ Automatisez vos commandes B2B hôtels & restaurants ✓ Fini les interruptions WhatsApp ✓ Installation 24h ✓ Essai gratuit 14 jours. 500+ boulangeries nous font confiance.",
  keywords: ["commandes B2B boulangerie", "automatisation boulangerie", "gestion commandes hôtels restaurants", "alternative WhatsApp professionnel", "logiciel boulangerie"],
  authors: [{ name: "Baguette & Bureau" }],
  creator: "Baguette & Bureau",
  publisher: "Baguette & Bureau",
  openGraph: {
    title: "Baguette & Bureau - Automatisez vos commandes B2B",
    description: "Économisez 3h par jour en automatisant vos commandes B2B. Plus de 500 boulangeries nous font confiance.",
    siteName: 'Baguette & Bureau',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Baguette & Bureau - Automatisez vos commandes B2B",
    description: "Économisez 3h par jour. Fini les interruptions WhatsApp. 500+ boulangeries nous font confiance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
