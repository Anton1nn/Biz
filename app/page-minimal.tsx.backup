'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation minimaliste */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🥖</span>
              <span className="text-lg font-semibold text-gray-900">Baguette & Bureau</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Démarrer
            </button>
          </div>
        </div>
      </nav>

      {/* Hero épuré */}
      <section className="pt-32 pb-24 section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
              Votre boulangerie.<br />
              <span className="text-gray-400">Entièrement automatisée.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Gérez toutes vos commandes B2B en un seul endroit. Simple. Automatique. Sans interruption.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gray-900 text-white rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
              >
                Essayer gratuitement
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 text-gray-900 text-base font-medium hover:text-gray-600 transition-colors">
                En savoir plus
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              14 jours d'essai · Sans carte bancaire
            </p>
          </AnimatedSection>

          {/* Visual hero - Interface mockup épuré */}
          <AnimatedSection delay={200} className="mt-20 max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-32 bottom-0"></div>

              <div className="bg-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  {/* Simple order cards */}
                  {[
                    { name: "Hôtel Le Gourmet", qty: "50 baguettes", time: "06:30" },
                    { name: "Restaurant La Table", qty: "30 pains", time: "07:00" },
                    { name: "Café du Coin", qty: "20 croissants", time: "07:30" }
                  ].map((order, idx) => (
                    <div key={idx} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div>
                        <div className="font-semibold text-gray-900">{order.name}</div>
                        <div className="text-sm text-gray-500">{order.qty}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{order.time}</div>
                        <div className="text-xs text-green-600 flex items-center gap-1 justify-end mt-1">
                          <Check className="w-3 h-3" />
                          Confirmée
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats minimalistes */}
      <AnimatedSection>
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">3h</div>
                <div className="text-gray-600">économisées par jour</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">boulangeries utilisent notre solution</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">0</div>
                <div className="text-gray-600">interruption pendant votre travail</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features épurées */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tout ce dont vous avez besoin.<br />
              <span className="text-gray-400">Rien de plus.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Une solution complète pour automatiser vos commandes B2B sans effort.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Commandes automatiques",
                description: "Vos clients commandent en ligne 24/7. Vous recevez tout directement dans votre système.",
                icon: "📱"
              },
              {
                title: "Synchronisation comptable",
                description: "Connectez votre logiciel de comptabilité. Les commandes se synchronisent automatiquement.",
                icon: "🔄"
              },
              {
                title: "Impression automatique",
                description: "Les bons de préparation s'impriment tout seuls au bon moment. Zéro manipulation.",
                icon: "🖨️"
              },
              {
                title: "Catalogue en ligne",
                description: "Vos produits toujours à jour. Modifiez prix et disponibilités en temps réel.",
                icon: "📋"
              }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="p-10 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial minimaliste */}
      <AnimatedSection>
        <section className="section-padding bg-gray-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-3xl md:text-4xl font-medium mb-12 leading-relaxed">
                "Depuis que j'utilise Baguette & Bureau, je ne perds plus mon temps sur WhatsApp.
                Mes clients adorent la simplicité, et moi j'ai récupéré 3 heures par jour."
              </p>
              <div>
                <div className="font-semibold text-lg">Marie Dubois</div>
                <div className="text-gray-400">La Mie Dorée, Lyon</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing minimaliste */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple et transparent.
            </h2>
            <p className="text-xl text-gray-600">
              Un seul tarif. Tout inclus.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-lg mx-auto">
              <div className="bg-gray-50 rounded-3xl p-12 text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">199€</div>
                <div className="text-gray-600 mb-8">par mois</div>

                <ul className="space-y-4 text-left mb-10">
                  {[
                    "Commandes illimitées",
                    "Clients B2B illimités",
                    "Synchronisation comptable",
                    "Impression automatique",
                    "Support prioritaire 7j/7",
                    "Installation incluse"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:scale-105"
                >
                  Commencer l'essai gratuit
                </button>

                <p className="text-sm text-gray-500 mt-6">
                  14 jours d'essai gratuit · Sans engagement
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final épuré */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Prêt à automatiser<br />
              votre boulangerie ?
            </h2>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              Essayer gratuitement
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-gray-600 mt-8">
              Rejoignez les 500+ boulangers qui ont déjà fait le choix de l'automatisation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer minimaliste */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥖</span>
              <span className="font-semibold text-gray-900">Baguette & Bureau</span>
            </div>

            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">À propos</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="hover:text-gray-900 transition-colors">CGU</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            </div>

            <div className="text-sm text-gray-500">
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
