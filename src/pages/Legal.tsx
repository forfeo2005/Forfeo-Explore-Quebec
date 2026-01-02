import React from 'react';

export default function Legal() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">Mentions Légales et Politique de Confidentialité</h1>
      
      <div className="space-y-8 text-gray-700">
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center">⚖️ Conformité Loi 25 (Québec)</h2>
          <p>
            Conformément à la Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Loi 25), 
            Forfeo Explore s'engage à protéger la confidentialité de vos données.
          </p>
          <p className="mt-2 font-semibold">Responsable de la protection des renseignements personnels :</p>
          <p>Ibrahim Matthieu Yeo<br/>Contact : support@forfeo.com</p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Utilisation des Cookies et Géolocalisation</h2>
          <p>
            Nous utilisons votre position uniquement pour afficher les services (restaurants, taxis) autour de vous via l'API Google Maps.
            Aucune donnée de déplacement n'est enregistrée sur nos serveurs.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Clause de non-responsabilité</h2>
          <p>
            Forfeo Explore agit en tant qu'intermédiaire d'information. Nous ne sommes pas responsables des services fournis par Uber, 
            les hôtels ou les restaurants tiers affichés sur la carte.
          </p>
        </section>
      </div>
    </div>
  );
}
