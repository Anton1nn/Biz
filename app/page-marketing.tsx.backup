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
  MapPin,
  Sparkles,
  Target,
  Rocket,
  AlertCircle
} from 'lucide-react';
import DemoModal from '@/components/DemoModal';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import ROICalculator from '@/components/ROICalculator';
import BeforeAfter from '@/components/BeforeAfter';
import VideoDemo from '@/components/VideoDemo';
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-orange-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🥖</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Baguette & Bureau</span>
                <div className="text-xs text-orange-600 font-semibold">L'automatisation B2B</div>
              </div>
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
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Démo Gratuite
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Ultra Marketing */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-5 py-2.5 rounded-full text-sm font-bold mb-8 border-2 border-orange-200 shadow-lg">
                <Sparkles className="w-4 h-4" />
                500+ BOULANGERS ONT DÉJÀ CHANGÉ LEUR VIE
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Arrêtez de <span className="text-red-600 relative inline-block">
                  <span className="relative z-10">perdre 3h par jour</span>
                  <svg className="absolute bottom-0 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,10 Q25,0 50,8 T100,10" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span> avec WhatsApp
              </h1>

              <p className="text-2xl text-gray-700 mb-10 leading-relaxed font-medium">
                Automatisez <span className="font-bold text-orange-600">100% de vos commandes B2B</span> hôtels & restaurants.
                <br />
                <span className="text-gray-600">Zéro interruption. Zéro saisie manuelle. Zéro stress.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-glow-orange flex items-center justify-center gap-3"
                >
                  <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  Démarrer Maintenant
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('video-demo')}
                  className="bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl border-2 border-gray-200 hover:border-orange-300 flex items-center justify-center gap-3"
                >
                  ▶️ Voir la Démo (2 min)
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">Essai gratuit 14 jours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">Sans CB</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold">Installation 24h</span>
                </div>
              </div>
            </div>

            <div className="relative lg:scale-110">
              <div className="relative">
                {/* Main card with orders */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Commandes du jour</div>
                        <div className="text-2xl font-bold text-gray-900">15 en cours</div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                      ✓ Tout automatisé
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Hôtel Le Gourmet", items: "50 baguettes", time: "6h30", color: "green" },
                      { name: "Restaurant La Table", items: "30 pains", time: "7h00", color: "blue" },
                      { name: "Café du Coin", items: "20 croissants", time: "7h30", color: "orange" }
                    ].map((order, idx) => (
                      <div key={idx} className={`flex items-center gap-3 p-4 bg-${order.color}-50 border-l-4 border-${order.color}-500 rounded-lg transform hover:scale-102 transition-all cursor-pointer`}>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">{order.name}</div>
                          <div className="text-sm text-gray-600">{order.items}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-900">{order.time}</div>
                          <div className={`text-xs text-${order.color}-600 font-medium`}>✓ Confirmée</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border-2 border-green-200 animate-bounce z-20">
                  <div className="text-center">
                    <div className="text-4xl font-black text-green-600">-3h</div>
                    <div className="text-xs text-gray-600 font-semibold">économisées</div>
                    <div className="text-xs text-gray-500">par jour</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl p-5 z-20">
                  <div className="text-center">
                    <div className="text-sm font-semibold mb-1">💰 Économies/an</div>
                    <div className="text-3xl font-black">32,400€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <AnimatedSection>
        <section className="py-6 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 animate-pulse" />
                <div>
                  <div className="font-bold text-lg">🔥 Offre de lancement : -30% les 3 premiers mois</div>
                  <div className="text-sm text-red-100">Plus que 7 places disponibles ce mois-ci</div>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all whitespace-nowrap shadow-xl"
              >
                J'en profite maintenant →
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trust Indicators */}
      <AnimatedSection>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y-2 border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gray-600 font-medium">Ils nous font déjà confiance</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl font-black text-orange-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Boulangeries</div>
                <div className="text-xs text-gray-500">actives en France</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl font-black text-orange-600 mb-2">10k+</div>
                <div className="text-gray-700 font-semibold">Commandes/jour</div>
                <div className="text-xs text-gray-500">traitées automatiquement</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl font-black text-orange-600 mb-2">3h</div>
                <div className="text-gray-700 font-semibold">Économisées/jour</div>
                <div className="text-xs text-gray-500">en moyenne par boulanger</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-700 font-semibold">4.9/5 étoiles</div>
                <div className="text-xs text-gray-500">247 avis vérifiés</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Problem Section - Agitation Marketing */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
                ⚠️ LE PROBLÈME QUE VOUS VIVEZ CHAQUE JOUR
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Votre journée <span className="text-red-600">avant</span> Baguette & Bureau
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reconnaissez-vous cette situation ? Vous n'êtes pas seul...
              </p>
            </div>

            <BeforeAfter />

            <div className="mt-16 bg-red-50 border-2 border-red-300 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Le coût réel de WhatsApp pour votre boulangerie
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>3 heures perdues par jour</strong> = 780h par an = 97 jours de travail gâchés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>32,400€ de manque à gagner par an</strong> (temps valorisé à 25€/h)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Stress permanent</strong>, erreurs de commandes, clients mécontents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Impossible de scaler</strong> votre activité B2B dans ces conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection>
        <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
                ✨ LA SOLUTION QUI CHANGE TOUT
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Automatisez 100% de vos<br />commandes B2B en 24h
              </h2>
              <p className="text-2xl text-orange-100 max-w-3xl mx-auto font-medium">
                Baguette & Bureau remplace WhatsApp par un système professionnel qui tourne tout seul
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Zap,
                  title: "1. Vos clients commandent en ligne",
                  desc: "Interface simple accessible 24/7. Fini WhatsApp, fini les appels, fini les interruptions.",
                  benefit: "+2h gagnées par jour"
                },
                {
                  icon: FileText,
                  title: "2. Tout se synchronise automatiquement",
                  desc: "Comptabilité, bons de commande, facturation : tout est généré et envoyé sans votre intervention.",
                  benefit: "+1h gagnée par jour"
                },
                {
                  icon: Printer,
                  title: "3. Production optimisée",
                  desc: "Bons de préparation imprimés automatiquement en cuisine à l'heure que vous choisissez.",
                  benefit: "Zéro erreur"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:border-white/40">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-orange-100 mb-6 text-lg">{item.desc}</p>
                  <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {item.benefit}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-orange-600 px-12 py-5 rounded-xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center gap-3 hover:scale-105"
              >
                <Rocket className="w-6 h-6" />
                Automatiser mes commandes maintenant
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-orange-100 mt-4">✓ 14 jours d'essai gratuit • Sans CB • Installation en 24h</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Demo Section */}
      <AnimatedSection>
        <section id="video-demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <VideoDemo />
          </div>
        </section>
      </AnimatedSection>

      {/* ROI Calculator */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
                💰 CALCULEZ VOS ÉCONOMIES
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Combien perdez-vous actuellement ?
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez le coût réel de WhatsApp pour votre boulangerie
              </p>
            </div>
            <ROICalculator />
          </div>
        </section>
      </AnimatedSection>

      {/* Social Proof - Testimonials */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
                ⭐ ILS ONT TRANSFORMÉ LEUR BUSINESS
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Ce que disent les boulangers qui sont passés à l'action
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Dubois",
                  bakery: "La Mie Dorée",
                  city: "Lyon",
                  quote: "J'étais sceptique au début. Maintenant je me demande comment j'ai pu vivre sans. Mes clients adorent commander en 30 secondes, moi j'ai récupéré 3h par jour que je passe avec ma famille au lieu d'être sur WhatsApp.",
                  result: "3h15 économisées/jour",
                  roi: "+18,000€/an"
                },
                {
                  name: "Thomas Martin",
                  bakery: "Aux Délices du Pain",
                  city: "Bordeaux",
                  quote: "Installation ultra-rapide, équipe au top. En 2 jours c'était opérationnel. Mes clients B2B commandent maintenant 25% plus souvent car c'est devenu si simple. ROI atteint en 1 mois.",
                  result: "+25% commandes B2B",
                  roi: "ROI en 1 mois"
                },
                {
                  name: "Sophie Laurent",
                  bakery: "Le Four à Bois",
                  city: "Marseille",
                  quote: "Fini les erreurs de commandes, fini les malentendus sur WhatsApp, fini le stress. Tout est clair, tout est automatisé. Je peux enfin me concentrer sur ce que j'aime : faire du bon pain.",
                  result: "0 erreur depuis 6 mois",
                  roi: "2,8h/jour économisées"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all hover:scale-105">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>

                  <div className="mb-4 flex gap-2">
                    <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-green-700 font-semibold mb-1">Résultat</div>
                      <div className="text-sm font-bold text-green-600">{testimonial.result}</div>
                    </div>
                    <div className="flex-1 bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-orange-700 font-semibold mb-1">Impact</div>
                      <div className="text-sm font-bold text-orange-600">{testimonial.roi}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.bakery}, {testimonial.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3"
              >
                <Target className="w-6 h-6" />
                Je veux les mêmes résultats
              </button>
              <p className="text-gray-600 mt-4">Rejoignez les 500+ boulangers qui ont déjà transformé leur activité B2B</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Grid */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Une solution <span className="gradient-text">tout-en-un</span> qui pense à tout
              </h2>
              <p className="text-xl text-gray-600">
                Toutes les fonctionnalités dont vous avez besoin, rien de superflu
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: "Catalogue en ligne", desc: "Vos produits toujours à jour, avec photos, descriptions et prix. Modifiable en 2 clics." },
                { icon: CalendarClock, title: "Commandes programmées", desc: "Vos clients choisissent l'heure de livraison précise. Vous planifiez votre production optimalement." },
                { icon: FileText, title: "Bons automatiques", desc: "Bon de commande, facture, bon de livraison : tout généré et envoyé automatiquement." },
                { icon: Printer, title: "Impression auto", desc: "Tickets cuisine imprimés directement dans votre fournil à l'heure définie. Zéro manipulation." },
                { icon: Users, title: "Multi-clients", desc: "Gérez tous vos pros (hôtels, restaurants, cafés) au même endroit. Vision centralisée." },
                { icon: TrendingUp, title: "Statistiques live", desc: "Suivez vos ventes B2B en temps réel. Identifiez vos meilleurs clients et produits." },
                { icon: Shield, title: "Sécurité maximale", desc: "Hébergement en France, certifié, conforme RGPD. Vos données sont protégées." },
                { icon: Award, title: "Ultra simple", desc: "Interface intuitive. Vos clients commandent en 30 secondes sans formation." },
                { icon: BarChart, title: "Rapports détaillés", desc: "Analyses de vos ventes, prévisions, tendances. Prenez de meilleures décisions." },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-200 hover:border-orange-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
                💰 TARIFS TRANSPARENTS
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Un investissement qui se rembourse seul
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Économisez jusqu'à 32,400€ par an. Nos tarifs sont ridiculement bas comparés au bénéfice.
              </p>
              <div className="inline-block bg-yellow-100 border-2 border-yellow-400 text-yellow-900 px-6 py-3 rounded-xl font-bold">
                🔥 -30% sur les 3 premiers mois • Offre limitée à 7 places
              </div>
            </div>
            <Pricing />
            <div className="mt-16 text-center">
              <p className="text-gray-700 mb-4 text-lg font-medium">
                💰 <strong>Toutes nos formules incluent :</strong> Installation complète • Formation équipe • Support 7j/7 • Mises à jour gratuites
              </p>
              <p className="text-gray-500">
                Prix HT • Sans engagement • Résiliable à tout moment • Satisfait ou remboursé 14 jours
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Vos questions, nos réponses
              </h2>
              <p className="text-xl text-gray-600">
                Tout ce que vous devez savoir avant de démarrer
              </p>
            </div>
            <FAQ />

            <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Vous avez encore des questions ?</h3>
              <p className="text-orange-100 mb-6">Notre équipe est disponible 7j/7 pour vous répondre</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Parler à un expert
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-6">
                📞 PARLONS DE VOTRE PROJET
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">
                Démarrez votre transformation dès aujourd'hui
              </h2>
              <p className="text-xl text-gray-600">
                Notre équipe vous répond sous 1h en semaine
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Contactez-nous directement
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Discutons de votre situation et voyons comment Baguette & Bureau peut transformer votre activité B2B.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Téléphone</div>
                      <a href="tel:+33123456789" className="text-xl font-bold text-orange-600 hover:text-orange-700">
                        01 23 45 67 89
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Lun-Ven 8h-20h • Sam 9h-18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Email</div>
                      <a href="mailto:contact@baguette-bureau.fr" className="text-xl font-bold text-blue-600 hover:text-blue-700 break-all">
                        contact@baguette-bureau.fr
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Réponse garantie sous 1h en semaine</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Adresse</div>
                      <p className="text-gray-700">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-green-900 mb-2">🎁 Garantie satisfait ou remboursé 14 jours</p>
                      <p className="text-sm text-green-700">
                        Testez Baguette & Bureau sans risque. Pas convaincu ? Nous vous remboursons intégralement, sans question.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Demandez votre démo personnalisée
                </h3>
                <p className="text-gray-600 mb-6">
                  Remplissez ce formulaire et commencez à économiser 3h dès demain
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA - Super Agressif */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/30 animate-pulse">
            🔥 DERNIÈRE CHANCE : Plus que 7 places ce mois-ci
          </div>

          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
            Vous avez 2 choix aujourd'hui
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-red-900/50 backdrop-blur-sm border-2 border-red-400 rounded-2xl p-8">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-2xl font-bold mb-4">Continuer comme avant</h3>
              <ul className="space-y-3 text-red-100">
                <li>✗ Perdre 3h par jour sur WhatsApp</li>
                <li>✗ 32,400€ de manque à gagner par an</li>
                <li>✗ Stress permanent et erreurs</li>
                <li>✗ Impossible de développer votre B2B</li>
                <li>✗ Voir vos concurrents prendre de l'avance</li>
              </ul>
            </div>

            <div className="bg-green-500/30 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-8 relative">
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-black rotate-12">
                CHOIX GAGNANT
              </div>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4">Automatiser maintenant</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Récupérer 3h par jour immédiatement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Économiser 32,400€ par an</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Zéro stress, zéro erreur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Scaler votre B2B sereinement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Prendre de l'avance sur vos concurrents</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-2xl font-bold mb-2">
              La question n'est pas "est-ce que ça va marcher ?"
            </p>
            <p className="text-xl text-white/90">
              La question c'est : "Combien de temps encore allez-vous perdre 3h par jour ?"
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group bg-white text-orange-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center gap-4 hover:scale-105 mb-6"
          >
            <Rocket className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            OUI, je veux économiser 3h dès demain
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Essai gratuit 14 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Sans CB</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Installation 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Satisfait ou remboursé</span>
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
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🥖</span>
                </div>
                <div>
                  <span className="text-white font-bold text-lg">Baguette & Bureau</span>
                  <div className="text-xs text-orange-400">L'automatisation B2B</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                La solution n°1 d'automatisation des commandes B2B pour les boulangers qui veulent récupérer leur temps.
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
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Hébergé en France</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Conforme RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 étoiles</span>
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
