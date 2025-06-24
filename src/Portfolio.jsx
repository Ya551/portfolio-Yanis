import React from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Github,
} from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "parcours", label: "Parcours" },
    { id: "competences", label: "Compétences" },
    { id: "projets", label: "Projets" },
    { id: "experience", label: "Expérience" },
    { id: "talents", label: "Talents" },
    { id: "contact", label: "Contact" },
    { id: "conclusion", label: "Conclusion" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-400/30">
      <main className="p-6 space-y-20">
        {/* Projets */}
        <section id="projets" className="space-y-10">
          <h2 className="text-3xl font-semibold tracking-tight text-amber-400">Projets académiques</h2>

          {/* Annotiverse visuel soutenance */}
          <img
            src="/images/soutenance-chat-annotiverse.png"
            alt="Annotiverse interface demo"
            className="rounded-xl border border-neutral-800 mx-auto"
          />

          {/* Annotiverse S3 */}
          <article className="grid md:grid-cols-2 gap-6 items-start">
            <img
              src="/images/annotiverse-s3.png"
              alt="Annotiverse S3"
              className="rounded-2xl border border-neutral-800 shadow"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                Annotiverse S3
                <a
                  href="https://github.com/RyanBUTINFO/SAE-Annotiverse"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400"
                >
                  <ArrowUpRight size={18} />
                </a>
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Projet phare de 3<sup>e</sup> semestre : une application de chat temps réel permettant
                d’annoter l’émotion associée à chaque message. Réalisé en trio avec GitHub collaboratif,
                nous avons mis en œuvre une architecture MVC et des WebSockets avec Socket.IO.
                J’ai pris en charge l’authentification, la validation des messages, la base MongoDB,
                et le suivi technique sur GitHub.
              </p>
              <pre className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-4 overflow-x-auto text-sm">
# Tester Annotiverse S3
git clone https://github.com/RyanBUTINFO/SAE-Annotiverse
cd SAE-Annotiverse && npm install && npm run dev
              </pre>
            </div>
          </article>

          {/* Annotiverse S4 */}
          <article className="grid md:grid-cols-2 gap-6 items-start">
            <img
              src="/images/annotiverse-s4.png"
              alt="Annotiverse S4"
              className="rounded-2xl border border-neutral-800 shadow"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                Annotiverse S4 (optimisé)
                <a
                  href="https://github.com/EnrikeChampion/SAE-S4"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400"
                >
                  <ArrowUpRight size={18} />
                </a>
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Dans le cadre du S4, nous avons refondu complètement Annotiverse pour l’orienter micro-services avec Docker.
                J’ai dirigé la migration vers une API REST, rédigé le docker-compose et ajouté une CI avec GitHub Actions.
                Ce projet m’a permis de prendre des responsabilités techniques et de travailler comme un vrai développeur pro.
              </p>
              <pre className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-4 overflow-x-auto text-sm">
# Docker version
git clone https://github.com/EnrikeChampion/SAE-S4
cd SAE-S4 && docker compose up -d
              </pre>
            </div>
          </article>
        </section>

        {/* Expérience */}
        <section id="experience" className="space-y-10">
          <h2 className="text-3xl font-semibold tracking-tight text-amber-400">Expérience professionnelle</h2>

          <div className="text-neutral-300 leading-relaxed space-y-4">
            <p>
              Mon stage de 8 semaines chez <strong className="text-amber-400">CM‑MP</strong> m’a plongé dans le monde
              professionnel avec un rôle de technicien réseau et système. J’ai débuté en binôme avec Pierre Dejandres
              pour rapidement monter en autonomie sur la gestion des sauvegardes, du support distant et des installations matérielles.
            </p>
            <p>
              J’ai notamment travaillé sur la plateforme OTRS pour traiter les tickets, supervisé les jobs de Veeam,
              et installé un serveur pro RAID 10 pour un cabinet d’avocats. L’un des cas concrets les plus marquants
              a été la reconfiguration du MFA d’un client VIP peu à l’aise, où j’ai dû adapter mon discours pour coordonner
              avec un support international.
            </p>
            <p>
              Cette expérience m’a permis de développer ma communication orale, ma réactivité, mon sang-froid,
              et surtout de confirmer mon attrait pour les infrastructures réseaux. J’ai aussi appris à manipuler
              des outils de pro (TrueNAS, VMware, Veeam) et à travailler dans une vraie dynamique d’équipe soudée.
            </p>
          </div>

          {/* Visuels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/veeam-soutenance.png" alt="Veeam backup interface" className="rounded-xl border border-neutral-800 shadow" />
            <img src="/images/mfa-case.png" alt="Cas MFA" className="rounded-xl border border-neutral-800 shadow" />
            <img src="/images/otrs-tickets.png" alt="OTRS tickets" className="rounded-xl border border-neutral-800 shadow" />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight text-amber-400">Contact</h2>
          <p className="text-neutral-300">
            Envie d’échanger ? Écrivez-moi à
            <a href="mailto:yanis.naitmakhlouf@gmail.com" className="text-amber-400 ml-1 inline-flex items-center gap-1 hover:underline">
              <Mail size={16} /> yanis.naitmakhlouf@gmail.com
            </a>
            ou consultez mon profil GitHub&nbsp;
            <a href="https://github.com/Ya551" className="text-amber-400 inline-flex items-center gap-1 hover:underline" target="_blank" rel="noreferrer">
              <Github size={16} /> @Ya551
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
