import * as React from "react";
import { motion } from "framer-motion";
import DesktopSection from "../components/DesktopSection";
import MobileSection from "../components/MobileSection";
import ServerSection from "../components/ServerSection";

export default function Installer() {
  const [tab, setTab] = React.useState<"apps" | "server">("apps");

  return (
    <motion.main
      className="prose prose-invert mx-auto px-4 py-12 font-syne pt-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="font-kode text-3xl md:text-5xl mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Installer NoisePort
      </motion.h1>
      <div className="flex gap-4 mb-8">
        <section>
          <p>
            NoisePort est un écosystème libre et open-source pour reprendre le
            contrôle de sa musique. Il se compose de deux éléments&nbsp;:
            <br />
            <br />
          </p>
          <ul>
            <li>
              <strong>NoisePort</strong> — l'application <em>desktop</em> et{" "}
              <em>mobile</em> qui permet d'écouter, gérer votre bibliothèque
              musicale auto-hébergée, explorer des discographies et télécharger
              des albums via le réseau Soulseek.
            </li>
            <li>
              <strong>NoisePort Server</strong> — le serveur à déployer sur un{" "}
              <em>Raspberry Pi</em>, un vieil ordinateur, ou un hébergement
              cloud pour rendre votre musique accessible partout.
            </li>
          </ul>
        </section>
      </div>
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
            tab === "apps"
              ? "bg-primary text-neutral-950"
              : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
          }`}
          onClick={() => setTab("apps")}
        >
          NoisePort
        </button>
        <button
          className={`px-4 py-2 rounded font-kode text-lg transition-colors duration-200 ${
            tab === "server"
              ? "bg-primary text-neutral-950"
              : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
          }`}
          onClick={() => setTab("server")}
        >
          NoisePort Server
        </button>
      </div>

      {tab === "apps" && (
        <>
          <DesktopSection />
          <MobileSection />
        </>
      )}
      {tab === "server" && <ServerSection />}
    </motion.main>
  );
}
