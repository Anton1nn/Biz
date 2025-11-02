'use client';

import { useState } from 'react';
import { ArrowRight, Check, Clock, Shield, Star, Zap, Users, Heart, TrendingUp, Phone, ChevronDown, Sparkles, Target, Award } from 'lucide-react';
import DemoModal from '@/components/DemoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Fixed */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🥖</div>
            <div>
              <div className="font-bold text-xl text-gray-900">Baguette & Bureau</div>
              <div className="text-xs text-gray-600">Automatisation pour boulangers</div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2.5 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Essayer gratuitement
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              547 boulangers nous font déjà confiance
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Arrêtez de gérer des
              <br />
              <span className="text-orange-500">messages WhatsApp</span>
            </h1>

            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Automatisez vos commandes B2B et récupérez <strong>3 heures par jour</strong>.
              Vos clients commandent en ligne, vous recevez les bons imprimés.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all hover:shadow-lg text-lg flex items-center gap-2 group"
              >
                Démarrer gratuitement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-all text-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Réserver une démo
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                14 jours gratuits
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                Sans carte bancaire
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                Installation en 24h
              </div>
            </div>
          </div>

          {/* Preview Image Placeholder */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-12 border-2 border-orange-200 shadow-xl">
            <div className="aspect-video bg-white rounded-2xl shadow-inner flex items-center justify-center text-gray-400 text-lg">
              Interface de démonstration
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">3h</div>
              <div className="text-orange-100">économisées / jour</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">547</div>
              <div className="text-orange-100">boulangers actifs</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">+25%</div>
              <div className="text-orange-100">de CA B2B moyen</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <div className="text-orange-100">erreur de commande</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Le problème que vous vivez
            </h2>
            <p className="text-xl text-gray-600">
              Chaque jour, le même cauchemar se répète
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">50+ messages par jour</h3>
              <p className="text-gray-600 leading-relaxed">
                Votre téléphone vibre sans arrêt. Impossible de vous concentrer sur votre production.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3 heures perdues</h3>
              <p className="text-gray-600 leading-relaxed">
                Entre répondre, noter, saisir, envoyer les confirmations... 3 heures de votre journée partent en fumée.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all">
              <div className="text-5xl mb-4">😰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stress permanent</h3>
              <p className="text-gray-600 leading-relaxed">
                Vous êtes toujours sur le qui-vive. Un message raté = un client mécontent.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-12 text-center">
            <div className="text-6xl mb-6">💸</div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              = 32 400€ perdus par an
            </h3>
            <p className="text-xl text-gray-600">
              En comptant votre temps à 25€/h, ces 3 heures quotidiennes représentent une fortune
            </p>
          </div>
        </div>
      </section>

      {/* Solution Tabs */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              La solution en 4 étapes
            </h2>
            <p className="text-xl text-gray-600">
              Simple, automatique, opérationnel en 24h
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {['Commande en ligne', 'Synchronisation auto', 'Impression auto', 'Production sereine'].map((title, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {idx + 1}. {title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl">
            {activeTab === 0 && (
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="text-6xl mb-6">📱</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Vos clients commandent en ligne
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Ils accèdent à votre catalogue personnalisé 24h/24, 7j/7. En 30 secondes, ils sélectionnent leurs produits, choisissent l'heure de livraison, et valident. Ils reçoivent une confirmation immédiate par email.
                  </p>
                  <ul className="space-y-3">
                    {['Disponible 24/7', 'Interface ultra-simple', 'Historique des commandes', 'Renouvellement en 1 clic'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-gray-400 text-center">Aperçu interface client</div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="text-6xl mb-6">⚡</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Synchronisation automatique
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Dès que le client valide, la commande arrive instantanément dans votre système. Elle se synchronise avec votre logiciel de comptabilité. Le bon de commande est généré et envoyé au client. Tout en 2 secondes.
                  </p>
                  <ul className="space-y-3">
                    {['Connexion à votre comptabilité', 'Génération automatique des documents', 'Email de confirmation envoyé', 'Mise à jour des stocks'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-gray-400 text-center">Schéma de synchronisation</div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="text-6xl mb-6">🖨️</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Impression automatique
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    À l'heure que vous définissez (par exemple 20h la veille), tous les bons de préparation du lendemain s'impriment automatiquement. Votre équipe sait exactement quoi produire, pour qui, et pour quelle heure.
                  </p>
                  <ul className="space-y-3">
                    {['Impression à l\'heure choisie', 'Bons clairs et organisés', 'Regroupement par client', 'Format professionnel'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-gray-400 text-center">Exemple de bon imprimé</div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="text-6xl mb-6">😊</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Vous produisez sereinement
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Le lendemain matin, vous arrivez. Les bons sont imprimés. Vous savez exactement ce que vous avez à faire. Pas de téléphone, pas d'interruption, pas de stress. Vous vous concentrez sur votre métier : faire du bon pain.
                  </p>
                  <ul className="space-y-3">
                    {['Planning optimisé', 'Zéro interruption', 'Clients satisfaits', 'Concentration maximale'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-gray-400 text-center">Boulanger au travail</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-8 h-8 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Ils ont transformé leur quotidien
            </h2>
            <p className="text-xl text-gray-600">
              547 boulangers utilisent déjà Baguette & Bureau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie Dubois',
                role: 'La Mie Dorée - Lyon',
                quote: 'Mes matinées sont enfin sereines. Je me concentre sur mon pain, mes clients commandent en ligne. C\'est incroyable.',
                metric: '3h15 économisées/jour'
              },
              {
                name: 'Thomas Martin',
                role: 'Aux Délices - Bordeaux',
                quote: 'Installation en 24h. Le lendemain j\'avais déjà mes premières commandes automatiques. Magique.',
                metric: '+30% de commandes'
              },
              {
                name: 'Sophie Laurent',
                role: 'Le Four à Bois - Marseille',
                quote: 'Zéro erreur depuis 8 mois. Tout est automatisé, clair, parfait. Je ne reviendrai jamais en arrière.',
                metric: '0 erreur en 8 mois'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mb-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  <Check className="w-4 h-4" />
                  {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Un investissement rentable dès le 5ᵉ jour
            </h2>
            <p className="text-xl text-gray-600">
              3h économisées × 25€/h = 75€/jour de valeur créée
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
            <div className="bg-orange-500 text-white px-10 py-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold mb-1">Prix tout compris</div>
                  <div className="text-6xl font-bold">199€<span className="text-2xl">/mois</span></div>
                </div>
                <div className="text-right">
                  <div className="text-sm mb-1">Soit seulement</div>
                  <div className="text-3xl font-bold">6,60€/jour</div>
                </div>
              </div>
            </div>

            <div className="p-10">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Commandes illimitées',
                  'Clients B2B illimités',
                  'Synchronisation comptable',
                  'Impression automatique',
                  'Support prioritaire 7j/7',
                  'Installation en 24h',
                  'Formation complète',
                  'Mises à jour gratuites'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-5 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all hover:shadow-lg flex items-center justify-center gap-2 group mb-6"
              >
                Démarrer l'essai gratuit de 14 jours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center space-y-2 text-sm text-gray-600">
                <div>✓ 14 jours gratuits • Sans carte bancaire • Sans engagement</div>
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <Shield className="w-5 h-5" />
                  Garantie satisfait ou remboursé 30 jours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Comment se passe l'installation ?",
                r: "Un appel de 30 minutes avec notre équipe. On s'occupe de tout : installation, paramétrage, connexion à votre comptabilité. 24h plus tard, c'est prêt."
              },
              {
                q: "Mes clients vont-ils l'utiliser ?",
                r: "92% des clients l'adoptent dès la première semaine. C'est plus simple pour eux : commander en 30 secondes vs attendre votre réponse."
              },
              {
                q: "C'est compatible avec mon logiciel comptable ?",
                r: "Oui : Sage, Ciel, EBP, Quadratus, Excel. Si vous utilisez un autre logiciel, contactez-nous."
              },
              {
                q: "Je peux arrêter quand je veux ?",
                r: "Oui. Pas d'engagement. Vous payez au mois. Un email suffit pour arrêter."
              }
            ].map((item, idx) => (
              <details key={idx} className="bg-white rounded-xl border-2 border-gray-200 hover:border-orange-300 transition-all group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                  {item.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.r}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Prêt à reprendre le contrôle ?
          </h2>
          <p className="text-2xl text-orange-100 mb-12">
            Rejoignez 547 boulangers qui ont transformé leur quotidien
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-5 bg-white text-orange-500 rounded-xl font-bold text-xl hover:bg-orange-50 transition-all hover:shadow-2xl inline-flex items-center gap-2 group"
          >
            Commencer gratuitement
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-8 text-orange-100">
            14 jours gratuits • Sans CB • Installation en 24h
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🥖</div>
              <div className="font-bold text-xl">Baguette & Bureau</div>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">À propos</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">CGU</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>

            <div className="text-sm text-gray-400">© 2024 Baguette & Bureau</div>
          </div>
        </div>
      </footer>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
