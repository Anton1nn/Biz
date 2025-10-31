'use client';

import { useState } from 'react';
import {
  Clock,
  Smartphone,
  Printer,
  FileText,
  CheckCircle,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  CalendarClock,
  ShoppingCart,
  Shield,
  Award,
  BarChart,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-orange-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-2xl">🥖</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Baguette & Bureau</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Solution
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Tarifs
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Démo gratuite
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                ✨ La solution pour les boulangers modernes
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Arrêtez de perdre votre temps avec{' '}
                <span className="text-orange-600 relative">
                  WhatsApp
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0,7 Q50,0 100,7" stroke="#f97316" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatisez vos commandes B2B pour hôtels et restaurants.
                Fini les 50 interruptions par jour. Concentrez-vous sur ce que vous faites de mieux :
                <span className="font-semibold text-gray-900"> faire du bon pain</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Essayer gratuitement
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-md border-2 border-gray-200 hover:border-orange-300"
                >
                  Voir la démo
                </button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Installation en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Support 7j/7</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 shadow-2xl transform hover:rotate-0 rotate-2 transition-transform">
                <div className="bg-white rounded-xl p-6 transform -rotate-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 border-l-4 border-green-500 rounded transform hover:scale-105 transition-transform cursor-pointer">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Commande #1247</div>
                        <div className="text-sm text-gray-600">Hôtel Le Gourmet - 50 baguettes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded transform hover:scale-105 transition-transform cursor-pointer">
                      <CalendarClock className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Programmée pour 6h30</div>
                        <div className="text-sm text-gray-600">Restaurant La Table - 30 pains</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded transform hover:scale-105 transition-transform cursor-pointer">
                      <ShoppingCart className="w-6 h-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">En préparation</div>
                        <div className="text-sm text-gray-600">Café du Coin - 20 croissants</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                <div className="text-2xl font-bold text-orange-600">-3h</div>
                <div className="text-xs text-gray-600">par jour</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <AnimatedSection>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Boulangeries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">10k+</div>
                <div className="text-gray-600">Commandes/jour</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600">Disponibilité</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600 flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Problem Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                La réalité d'un boulanger aujourd'hui
              </h2>
              <p className="text-xl text-gray-600">
                Une journée rythmée par les interruptions constantes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  50 interruptions/jour
                </h3>
                <p className="text-gray-600">
                  Votre téléphone ne cesse de sonner. Chaque message WhatsApp vous arrache à votre travail.
                </p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Saisie manuelle
                </h3>
                <p className="text-gray-600">
                  Chaque commande doit être rentrée à la main dans votre logiciel de comptabilité.
                </p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Impression répétée
                </h3>
                <p className="text-gray-600">
                  Bon de commande pour le client, ticket pour la cuisine... Toujours au même endroit : l'imprimante.
                </p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3h perdues/jour
                </h3>
                <p className="text-gray-600">
                  Entre la gestion des messages et la saisie administrative, c'est du temps qui n'est pas à la production.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection>
        <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-amber-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Baguette & Bureau automatise tout pour vous
              </h2>
              <p className="text-xl text-orange-100">
                Une solution complète qui transforme votre manière de gérer les commandes B2B
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Commandes automatisées
                </h3>
                <p className="text-orange-100">
                  Vos clients commandent en ligne 24/7. Plus besoin de répondre aux messages WhatsApp.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Synchronisation comptable
                </h3>
                <p className="text-orange-100">
                  Les commandes sont automatiquement intégrées à votre logiciel de comptabilité.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Impression automatique
                </h3>
                <p className="text-orange-100">
                  Bons de commande et tickets cuisine imprimés automatiquement au bon moment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Les bénéfices concrets pour votre boulangerie
              </h2>
              <p className="text-xl text-gray-600">
                Gagnez en productivité, en sérénité et en chiffre d'affaires
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Économisez 3h par jour
                      </h3>
                      <p className="text-gray-600">
                        Plus d'interruptions, plus de saisie manuelle. 15h gagnées par semaine pour vous concentrer sur la production.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Augmentez votre CA B2B
                      </h3>
                      <p className="text-gray-600">
                        Commande simplifiée = clients plus satisfaits. Ils commandent plus facilement et plus souvent.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Fidélisez vos clients pro
                      </h3>
                      <p className="text-gray-600">
                        Interface simple, historique de commandes, favoris : vos clients adorent la facilité d'utilisation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Réduisez les erreurs
                      </h3>
                      <p className="text-gray-600">
                        Plus de malentendu sur WhatsApp, plus d'erreur de saisie. Chaque commande est claire et précise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-xl">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-600 mb-2">3h</div>
                  <div className="text-xl text-gray-900 font-semibold mb-6">économisées par jour</div>
                  <div className="h-px bg-orange-200 mb-6"></div>
                  <div className="text-5xl font-bold text-orange-600 mb-2">15h</div>
                  <div className="text-xl text-gray-900 font-semibold mb-6">gagnées par semaine</div>
                  <div className="h-px bg-orange-200 mb-6"></div>
                  <div className="text-5xl font-bold text-orange-600 mb-2">780h</div>
                  <div className="text-xl text-gray-900 font-semibold">libérées par an</div>
                  <div className="mt-8 bg-white rounded-lg p-4 border-2 border-orange-300 shadow-md">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">C'est l'équivalent de 97 jours de travail</span> que vous récupérez pour développer votre activité
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How it Works Section */}
      <AnimatedSection>
        <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-gray-600">
                Simple, rapide et efficace
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Votre client commande
                </h3>
                <p className="text-gray-600">
                  Vos clients accèdent à votre catalogue en ligne et passent commande en quelques clics, à toute heure.
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Synchronisation auto
                </h3>
                <p className="text-gray-600">
                  La commande est automatiquement enregistrée dans votre système de comptabilité. Zéro saisie manuelle.
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Impression cuisine
                </h3>
                <p className="text-gray-600">
                  Les bons de préparation sont imprimés automatiquement en cuisine au bon moment.
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Vous produisez
                </h3>
                <p className="text-gray-600">
                  Concentrez-vous sur votre savoir-faire : faire du bon pain. Le reste est automatisé.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Grid */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Toutes les fonctionnalités dont vous avez besoin
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MessageSquare, title: "Catalogue en ligne", desc: "Vos produits toujours à jour, avec photos et prix" },
                { icon: CalendarClock, title: "Commandes programmées", desc: "Vos clients choisissent l'heure de livraison précise" },
                { icon: FileText, title: "Bons de commande auto", desc: "Générés et envoyés automatiquement par email" },
                { icon: Printer, title: "Impression automatique", desc: "Tickets cuisine sans aucune intervention manuelle" },
                { icon: Users, title: "Multi-clients", desc: "Gérez tous vos pros au même endroit facilement" },
                { icon: TrendingUp, title: "Statistiques", desc: "Suivez vos ventes B2B en temps réel avec graphiques" },
                { icon: Shield, title: "Sécurité maximale", desc: "Hébergement en France, certifié et conforme RGPD" },
                { icon: Award, title: "Facile à utiliser", desc: "Interface intuitive, vos clients adorent la simplicité" },
                { icon: BarChart, title: "Rapports détaillés", desc: "Analyses de vos meilleures ventes et tendances" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 group">
                  <feature.icon className="w-8 h-8 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ils ont repris le contrôle de leur temps
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Avant je passais mes journées sur WhatsApp. Maintenant mes clients commandent seuls et je me concentre enfin sur mon métier. Un vrai game-changer !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    MD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Marie Dubois</div>
                    <div className="text-sm text-gray-600">La Mie Dorée, Lyon</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "L'installation a été hyper rapide. En 2 jours c'était opérationnel. Mes clients B2B adorent, ils commandent même plus qu'avant !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    TM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Thomas Martin</div>
                    <div className="text-sm text-gray-600">Aux Délices du Pain, Bordeaux</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Fini les erreurs de commandes et les allers-retours par message. Tout est clair, automatisé. Je gagne facilement 3h par jour. Merci !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    SL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sophie Laurent</div>
                    <div className="text-sm text-gray-600">Le Four à Bois, Marseille</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Des tarifs adaptés à votre activité
              </h2>
              <p className="text-xl text-gray-600">
                Choisissez la formule qui correspond à vos besoins
              </p>
            </div>
            <Pricing />
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                💰 Toutes nos formules incluent : installation, formation, support et mises à jour
              </p>
              <p className="text-sm text-gray-500">
                Prix HT • Sans engagement • Résiliable à tout moment
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600">
                Tout ce que vous devez savoir sur Baguette & Bureau
              </p>
            </div>
            <FAQ />
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Prêt à automatiser votre activité B2B ?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Demandez une démo personnalisée et découvrez comment Baguette & Bureau peut transformer votre quotidien.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Téléphone</div>
                      <a href="tel:+33123456789" className="text-orange-600 hover:text-orange-700">
                        01 23 45 67 89
                      </a>
                      <p className="text-sm text-gray-600">Lun-Ven 9h-18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <a href="mailto:contact@baguette-bureau.fr" className="text-orange-600 hover:text-orange-700">
                        contact@baguette-bureau.fr
                      </a>
                      <p className="text-sm text-gray-600">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Adresse</div>
                      <p className="text-gray-600">
                        123 Avenue des Champs<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900 mb-1">Garantie satisfait ou remboursé</p>
                      <p className="text-sm text-green-700">
                        Essayez Baguette & Bureau pendant 14 jours. Pas convaincu ? Nous vous remboursons intégralement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Demandez votre démo gratuite
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prêt à reprendre le contrôle de votre temps ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Rejoignez les 500+ boulangers qui ont déjà automatisé leurs commandes B2B
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Demander une démo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white/20"
            >
              Nous contacter
            </button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Installation en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Support 7j/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Satisfait ou remboursé</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🥖</span>
                </div>
                <span className="text-white font-bold">Baguette & Bureau</span>
              </div>
              <p className="text-sm">
                La solution d'automatisation pour les boulangers professionnels.
              </p>
              <div className="mt-4 flex gap-3">
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-white transition-colors">Fonctionnalités</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Tarifs</button></li>
                <li><button onClick={() => setIsModalOpen(true)} className="hover:text-white transition-colors">Démo</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Baguette & Bureau. Tous droits réservés.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Hébergé en France</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Conforme RGPD</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
