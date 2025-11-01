'use client';

import { useState } from 'react';
import { ArrowRight, Check, Zap, Clock, Shield, Users, Star, Phone, ChevronDown, DollarSign } from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import { useInView } from '@/hooks/useAdvancedAnimations';

// Composant d'animation sobre
function FadeIn({ children, delay = 0 }: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation épurée */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥖</span>
              <span className="text-lg font-semibold text-gray-900">Baguette & Bureau</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Essayer gratuitement
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Épuré comme Loom */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Reprenez le contrôle<br />de vos matinées
            </h1>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Automatisez vos commandes B2B et économisez 3 heures par jour. Plus de messages WhatsApp, plus d'interruptions.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-all inline-flex items-center gap-2 group"
              >
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              547 boulangers nous font confiance
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats - Design Stripe */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '3h', label: 'économisées par jour' },
              { value: '50', label: 'interruptions évitées' },
              { value: '780h', label: 'récupérées par an' },
              { value: '+25%', label: 'de commandes B2B' }
            ].map((stat, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Le problème - Sobre et clair */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Le vrai coût des messages WhatsApp
              </h2>
              <p className="text-xl text-gray-600">
                Chaque jour, les mêmes problèmes vous font perdre un temps précieux
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '50+ interruptions par jour',
                description: 'Impossible de vous concentrer sur votre production quand votre téléphone vibre toutes les 10 minutes.'
              },
              {
                title: '8 minutes par commande',
                description: 'Prendre le téléphone, noter, saisir dans le système, créer le bon de commande, l\'envoyer...'
              },
              {
                title: 'Des erreurs coûteuses',
                description: 'Un message mal lu, une quantité mal notée. Chaque erreur vous coûte du temps et de l\'argent.'
              },
              {
                title: 'Des opportunités manquées',
                description: 'Un client commande à 22h, vous le voyez le lendemain à 7h. Trop tard, il a commandé ailleurs.'
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 50}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 bg-red-50 rounded-xl p-8 border border-red-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                = 32 400€ perdus par an
              </div>
              <div className="text-gray-600">
                En comptant votre temps à 25€/h
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* La solution - Claire et visuelle */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Une solution simple qui change tout
              </h2>
              <p className="text-xl text-gray-600">
                Automatisez vos commandes B2B en 4 étapes
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Vos clients commandent en ligne',
                description: 'Ils accèdent à votre catalogue personnalisé 24h/24, 7j/7. En 30 secondes, ils sélectionnent ce qu\'ils veulent et valident.',
                benefits: ['Disponible 24/7', 'Interface simple', 'Historique des commandes']
              },
              {
                step: '2',
                title: 'Tout se synchronise automatiquement',
                description: 'La commande arrive dans votre système, se synchronise avec votre comptabilité, et le bon de commande est envoyé au client.',
                benefits: ['Synchronisation comptable', 'Bons automatiques', 'Zéro saisie manuelle']
              },
              {
                step: '3',
                title: 'Les bons s\'impriment automatiquement',
                description: 'À l\'heure que vous définissez, tous les bons de préparation s\'impriment. Votre équipe sait exactement quoi préparer.',
                benefits: ['Impression automatique', 'Organisation claire', 'Planning optimisé']
              },
              {
                step: '4',
                title: 'Vous travaillez en toute sérénité',
                description: 'Le lendemain matin, vous arrivez. Les bons sont imprimés. Vous vous concentrez sur votre métier : faire du bon pain.',
                benefits: ['Zéro interruption', 'Production sereine', 'Clients satisfaits']
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.benefits.map((benefit, i) => (
                          <span key={i} className="inline-flex items-center gap-1 bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm">
                            <Check className="w-4 h-4 text-gray-900" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Avant / Après - Comparaison claire */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
              La différence
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold mb-2">
                    Avant
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    '50+ notifications WhatsApp par jour',
                    '3 heures perdues chaque jour',
                    'Erreurs de saisie fréquentes',
                    'Stress permanent',
                    'Impossible de se concentrer',
                    'Commandes manquées'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 mt-1">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold mb-2">
                    Après
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    '0 notification pendant vos heures de production',
                    '3 heures récupérées pour votre métier',
                    '0 erreur (tout est automatisé)',
                    'Sérénité totale',
                    'Concentration maximale sur votre pain',
                    '+25% de commandes (disponible 24/7)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 font-medium">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social proof - Témoignages */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ils ont franchi le pas
              </h2>
              <p className="text-xl text-gray-600">
                547 boulangers utilisent déjà Baguette & Bureau
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Mes matinées sont sereines, mes clients sont ravis, et j'ai enfin du temps pour développer de nouvelles recettes.",
                author: "Marie Dubois",
                role: "La Mie Dorée - Lyon",
                metric: "3h15 économisées par jour"
              },
              {
                quote: "L'installation a pris 24h. Le lendemain matin, je recevais déjà mes premières commandes automatiques.",
                author: "Thomas Martin",
                role: "Aux Délices du Pain - Bordeaux",
                metric: "+30% de commandes B2B"
              }
            ].map((testimonial, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-900 mb-4">"{testimonial.quote}"</p>
                  <div className="mb-3">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Check className="w-4 h-4" />
                    {testimonial.metric}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simple et clair */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Un investissement qui se rembourse seul
              </h2>
              <p className="text-xl text-gray-600">
                3 heures économisées par jour = 32 400€ par an
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200">
              <div className="mb-8">
                <div className="text-6xl font-bold text-gray-900 mb-2">199€</div>
                <div className="text-xl text-gray-600">par mois, tout inclus</div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <div className="text-sm font-semibold text-gray-900 mb-4">Inclus :</div>
                <ul className="space-y-3 text-left">
                  {[
                    'Commandes et clients illimités',
                    'Synchronisation comptable',
                    'Impression automatique',
                    'Support prioritaire 7j/7',
                    'Installation en 24h',
                    'Formation complète',
                    'Mises à jour gratuites'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 group mb-6"
              >
                Commencer l'essai gratuit de 14 jours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-600 mb-4">
                14 jours d'essai gratuit · Sans carte bancaire · Sans engagement
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-green-700 font-medium">
                  <Shield className="w-5 h-5" />
                  <span>Garantie satisfait ou remboursé 30 jours</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ - Simple */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Questions fréquentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Comment se passe l'installation ?",
                r: "Rendez-vous de 30 minutes avec notre équipe. On s'occupe de tout : installation, paramétrage, connexion à votre comptabilité. 24h plus tard, tout est prêt."
              },
              {
                q: "Est-ce compatible avec mon logiciel de comptabilité ?",
                r: "Oui, compatible avec Sage, Ciel, EBP, Quadratus, et Excel. Si vous utilisez un autre logiciel, contactez-nous."
              },
              {
                q: "Puis-je arrêter quand je veux ?",
                r: "Oui. Pas de contrat long terme. Vous payez au mois. Un email suffit pour arrêter."
              },
              {
                q: "Y a-t-il des frais cachés ?",
                r: "Non. 199€ par mois, tout inclus. Pas de frais de transaction, d'installation ou de support."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 30}>
                <details className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group">
                  <summary className="p-6 cursor-pointer font-medium text-gray-900 flex items-center justify-between">
                    {item.q}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {item.r}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Simple et efficace */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Prêt à reprendre le contrôle de vos matinées ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez 547 boulangers qui ont déjà franchi le pas
            </p>

            <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8">
              <div className="text-sm font-semibold mb-4">Les prochaines étapes :</div>
              <div className="space-y-3 text-left mb-6">
                {[
                  { time: 'Dans 2 minutes', action: 'Vous remplissez le formulaire' },
                  { time: 'Dans 1 heure', action: 'Notre équipe vous contacte' },
                  { time: 'Dans 24 heures', action: 'Tout est installé et prêt' },
                  { time: 'Demain matin', action: 'Vous travaillez en paix' }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{step.time}</div>
                      <div className="text-sm text-gray-600">{step.action}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Commencer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-6 space-y-1 text-sm text-gray-600">
                <div>✓ 14 jours d'essai gratuit</div>
                <div>✓ Sans carte bancaire</div>
                <div>✓ Garantie 30 jours</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-gray-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥖</span>
              <span className="font-semibold text-gray-900">Baguette & Bureau</span>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-gray-900 transition-colors">À propos</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="hover:text-gray-900 transition-colors">CGU</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            </div>

            <div className="text-sm">
              © 2024 Baguette & Bureau
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
