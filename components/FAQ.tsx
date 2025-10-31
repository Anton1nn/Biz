'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Comment mes clients vont-ils passer commande ?",
    answer: "Vos clients auront accès à une interface web simple et intuitive, accessible 24/7. Ils pourront consulter votre catalogue, sélectionner leurs produits, choisir l'heure de livraison et valider leur commande en quelques clics. Plus besoin de WhatsApp !"
  },
  {
    question: "Est-ce compatible avec mon logiciel de comptabilité ?",
    answer: "Oui ! Baguette & Bureau s'intègre avec les principaux logiciels de comptabilité français (Sage, Cegid, EBP, etc.). Les commandes sont automatiquement synchronisées, vous n'avez rien à saisir manuellement."
  },
  {
    question: "Combien de temps prend l'installation ?",
    answer: "L'installation complète prend généralement 24 à 48h. Notre équipe s'occupe de tout : paramétrage de votre catalogue, connexion à votre comptabilité, formation de votre équipe et mise en route de vos clients."
  },
  {
    question: "Mes clients devront-ils apprendre à utiliser un nouveau système ?",
    answer: "L'interface est ultra-simple, inspirée des sites de e-commerce grand public. Vos clients s'adaptent en quelques minutes. Nous fournissons également un guide rapide et un support dédié pour accompagner la transition."
  },
  {
    question: "Que se passe-t-il si un client veut modifier sa commande ?",
    answer: "Les clients peuvent modifier ou annuler leur commande jusqu'à la limite horaire que vous définissez (par exemple 18h la veille). Passé ce délai, ils doivent vous contacter directement. Vous gardez le contrôle total."
  },
  {
    question: "Comment sont imprimés les bons de préparation ?",
    answer: "Les bons sont automatiquement envoyés à votre imprimante selon l'horaire que vous configurez (par exemple à 20h chaque soir pour les commandes du lendemain). Vous pouvez aussi les imprimer manuellement à tout moment."
  },
  {
    question: "Quel est le coût de la solution ?",
    answer: "Nous proposons plusieurs formules adaptées à votre volume de commandes B2B, à partir de 99€/mois. L'installation et la formation sont comprises. Pas de frais cachés, pas d'engagement longue durée."
  },
  {
    question: "Y a-t-il un support client ?",
    answer: "Absolument ! Notre équipe support est disponible 7j/7 par téléphone, email et chat. Nous comprenons que votre activité ne s'arrête jamais, notre support non plus."
  },
  {
    question: "Puis-je tester avant de m'engager ?",
    answer: "Oui ! Nous offrons une démo personnalisée de 30 minutes et une période d'essai de 14 jours gratuite. Vous pouvez tester avec quelques clients pilotes avant de déployer à grande échelle."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "La sécurité est notre priorité. Vos données sont hébergées en France, cryptées et sauvegardées quotidiennement. Nous sommes conformes RGPD et nos serveurs bénéficient de certifications de sécurité européennes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
