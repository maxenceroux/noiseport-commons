import DesktopSection from "./DesktopSection";
import MobileSection from "./MobileSection";

export default function DownloadSection() {
  return (
    <section>
      <h2 className="font-kode text-2xl md:text-3xl mb-4 text-neutral-100">
        Télécharger l'application NoisePort
      </h2>
      <div className="mb-8">
        <p className="text-neutral-200">
          NoisePort vous permet d'accéder à votre musique partout, depuis votre
          ordinateur ou votre téléphone.
          <br />
          <br />
          Une fois l'application installée, vous devrez{" "}
          <strong>rejoindre un serveur existant</strong> ou{" "}
          <strong>créer votre propre serveur</strong> pour commencer à écouter
          votre musique.
        </p>
      </div>

      <DesktopSection />
      <MobileSection />
    </section>
  );
}
