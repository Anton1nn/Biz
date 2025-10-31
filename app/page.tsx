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
  ShoppingCart
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-orange-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🥖</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Baguette & Bureau</span>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
            Démo gratuite
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ La solution pour les boulangers modernes
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Arrêtez de perdre votre temps avec{' '}
                <span className="text-orange-600">WhatsApp</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatisez vos commandes B2B pour hôtels et restaurants.
                Fini les 50 interruptions par jour. Concentrez-vous sur ce que vous faites de mieux :
                <span className="font-semibold text-gray-900"> faire du bon pain</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Essayer gratuitement
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-gray-200">
                  Voir la démo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Installation en 24h</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-xl p-6 transform -rotate-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Commande #1247</div>
                        <div className="text-sm text-gray-600">Hôtel Le Gourmet - 50 baguettes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <CalendarClock className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Programmée pour 6h30</div>
                        <div className="text-sm text-gray-600">Restaurant La Table - 30 pains</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                      <ShoppingCart className="w-6 h-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-gray-900">En préparation</div>
                        <div className="text-sm text-gray-600">Café du Coin - 20 croissants</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
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
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
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
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
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
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
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

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-amber-600 text-white">
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
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
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
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
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
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
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

      {/* Benefits Section */}
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
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-600 mb-2">3h</div>
                <div className="text-xl text-gray-900 font-semibold mb-6">économisées par jour</div>
                <div className="h-px bg-orange-200 mb-6"></div>
                <div className="text-5xl font-bold text-orange-600 mb-2">15h</div>
                <div className="text-xl text-gray-900 font-semibold mb-6">gagnées par semaine</div>
                <div className="h-px bg-orange-200 mb-6"></div>
                <div className="text-5xl font-bold text-orange-600 mb-2">780h</div>
                <div className="text-xl text-gray-900 font-semibold">libérées par an</div>
                <div className="mt-8 bg-white rounded-lg p-4 border-2 border-orange-300">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">C'est l'équivalent de 97 jours de travail</span> que vous récupérez pour développer votre activité
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50">
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
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Votre client commande
              </h3>
              <p className="text-gray-600">
                Vos clients accèdent à votre catalogue en ligne et passent commande en quelques clics, à toute heure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Synchronisation auto
              </h3>
              <p className="text-gray-600">
                La commande est automatiquement enregistrée dans votre système de comptabilité. Zéro saisie manuelle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Impression cuisine
              </h3>
              <p className="text-gray-600">
                Les bons de préparation sont imprimés automatiquement en cuisine au bon moment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Toutes les fonctionnalités dont vous avez besoin
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "Catalogue en ligne", desc: "Vos produits toujours à jour" },
              { icon: CalendarClock, title: "Commandes programmées", desc: "Vos clients choisissent l'heure de livraison" },
              { icon: FileText, title: "Bons de commande auto", desc: "Générés et envoyés automatiquement" },
              { icon: Printer, title: "Impression automatique", desc: "Tickets cuisine sans intervention" },
              { icon: Users, title: "Multi-clients", desc: "Gérez tous vos pros au même endroit" },
              { icon: TrendingUp, title: "Statistiques", desc: "Suivez vos ventes B2B en temps réel" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
                <feature.icon className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl text-gray-900 font-medium mb-6">
            "Depuis que j'utilise Baguette & Bureau, je ne perds plus mon temps sur WhatsApp.
            Mes clients commandent en ligne et tout est automatisé.
            J'ai récupéré presque 3 heures par jour !"
          </blockquote>
          <div className="text-lg text-gray-600">
            <div className="font-semibold text-gray-900">Pierre Dubois</div>
            <div>Boulangerie Artisanale Le Pétrin d'Or, Paris</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prêt à automatiser votre activité B2B ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Rejoignez les boulangers qui ont déjà repris le contrôle de leur temps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Demander une démo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white/20">
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
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Démo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Baguette & Bureau. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
