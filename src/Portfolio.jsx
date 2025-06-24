import React from "react";

/**
 * Portfolio principal — version minimaliste.
 * Affiche un message « Portfolio en cours de construction ».
 * Le but : passer le build Vercel sans erreur.
 */
export default function Portfolio() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100">
      <h1 className="text-4xl font-bold text-amber-400">
        Portfolio en cours de construction
      </h1>
    </main>
  );
}
