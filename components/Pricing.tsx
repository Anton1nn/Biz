import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "99",
    description: "Idéal pour démarrer avec le B2B",
    features: [
      "Jusqu'à 20 clients B2B",
      "Catalogue produits illimité",
      "Interface de commande web",
      "Synchronisation comptable",
      "Impression automatique",
      "Support email",
      "Historique 3 mois"
    ],
    cta: "Commencer",
    popular: false
  },
  {
    name: "Professionnel",
    price: "199",
    description: "La solution la plus populaire",
    features: [
      "Jusqu'à 100 clients B2B",
      "Tout du plan Starter",
      "Commandes récurrentes",
      "Multi-utilisateurs (3)",
      "Statistiques avancées",
      "Support prioritaire 7j/7",
      "Historique illimité",
      "API d'intégration",
      "Formation personnalisée"
    ],
    cta: "Essayer gratuitement",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    description: "Pour les grandes boulangeries",
    features: [
      "Clients B2B illimités",
      "Tout du plan Pro",
      "Multi-établissements",
      "Utilisateurs illimités",
      "Intégrations sur mesure",
      "Account manager dédié",
      "SLA garantie 99.9%",
      "Formation sur site",
      "Développements spécifiques"
    ],
    cta: "Nous contacter",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all hover:shadow-2xl hover:scale-105 ${
            plan.popular
              ? 'border-orange-500 ring-4 ring-orange-100'
              : 'border-gray-200'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Le plus populaire
              </div>
            </div>
          )}

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>

            <div className="mb-6">
              {plan.price === "Sur mesure" ? (
                <div className="text-3xl font-bold text-gray-900">Sur mesure</div>
              ) : (
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-600 ml-2">/mois</span>
                </div>
              )}
            </div>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all mb-8 ${
                plan.popular
                  ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300'
              }`}
            >
              {plan.cta}
            </button>

            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
