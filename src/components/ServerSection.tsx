import wizardScreenshot from "../assets/wizard-screenshot.png";

export default function ServerSection() {
  return (
    <section>
      <div className="mb-6 p-5 bg-primary/10 border-l-4 border-primary rounded-lg">
        <h2 className="font-kode text-xl md:text-2xl lg:text-3xl mb-3 text-primary">
          🚀 Créer votre propre serveur NoisePort
        </h2>
        <p className="text-sm md:text-base text-neutral-200">
          Vous voulez héberger votre propre serveur de musique ? Déployez
          NoisePort Server et partagez votre bibliothèque avec vos proches.
        </p>
      </div>
      <div className="gap-4 mb-6 md:mb-8">
        <em>
          C'est l'étape la plus technique du projet&nbsp;: il faudra utiliser un
          peu le terminal de commandes.
          <br />
          Mais pas d'inquiétude&nbsp;: tout est expliqué pour que ce soit
          accessible à tou·te·s, même sans expérience. Et puis je sais que vous
          êtes doué·e·s, un coup de ton moteur de recherche préféré et c'est
          tipar !
          <br />
          <br />
        </em>
        <b>
          NoisePort Server peut être installé sur n'importe quel système
          d'exploitation
        </b>{" "}
        (Windows, macOS, Linux) et sur la machine de votre choix.
        <br />
      </div>
      <div
        id="choose-machine"
        className="bg-neutral-900/80 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>1. Choisir la machine pour héberger NoisePort Server</strong>
        <br />
        NoisePort Server peut être installé sur différents types de machines
        selon vos besoins et votre niveau technique&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            <b>Raspberry Pi</b> : idéal pour un serveur compact, silencieux et
            peu énergivore.
          </li>
          <li>
            <b>Ordinateur personnel</b> : un vieux PC ou Mac peut très bien
            faire l'affaire pour débuter ou tester.
          </li>
          <li>
            <b>Serveur cloud</b> : pour un accès permanent et distant, mais
            nécessite un peu plus de configuration.
          </li>
        </ul>
        <b>Conseil&nbsp;:</b> Pour commencer, un Raspberry Pi ou un ordinateur
        que vous avez déjà est souvent suffisant. L'essentiel est que la machine
        reste allumée et connectée à Internet pour accéder à votre musique
        partout.
        <br />
        N'oublie pas d'y attacher un disque dur ou SSD avec suffisamment
        d'espace pour ta bibliothèque musicale.
        <br />
        <div className="bg-neutral-900 p-4 rounded-lg mt-6">
          <p className="text-sm text-neutral-300">
            💡 Vous pouvez aussi héberger NoisePort sur votre propre machine
            pour tester, mais souvenez-vous : pour que le streaming fonctionne,
            le serveur doit rester connecté en permanence.
          </p>
        </div>
      </div>
      <div className="bg-primary/10 border-l-4 border-primary rounded p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-primary font-bold">
        <span>
          <b>Important&nbsp;:</b> À partir d'ici, toutes les étapes suivantes
          doivent être réalisées sur{" "}
          <u>la machine que vous avez choisie pour héberger NoisePort Server</u>{" "}
          (Raspberry Pi, serveur cloud, ordinateur, etc).
        </span>
      </div>
      <div
        id="install-docker"
        className="bg-neutral-900/80 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>2. Installer la dernière version de Docker</strong>
        <br />
        Docker est nécessaire pour faire tourner NoisePort Server facilement.
        <br />
        C'est un outil qui permet de lancer facilement des applications dans des
        "conteneurs", sans se soucier des réglages techniques de votre système.
        <br />
        <br />
        <a
          href="https://docs.docker.com/get-docker/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Docker
        </a>
        <br />
        <br />
        Sur la page officielle, choisissez votre système d'exploitation
        (Windows, macOS, Linux) et suivez les instructions.
        <br />
        <b>Astuce&nbsp;:</b> Docker Desktop est recommandé pour Windows et
        macOS, sur Linux suivez le guide pour votre distribution.
        <br />
        <br />
        <b>Important pour Linux&nbsp;:</b> Pour éviter d'avoir à exécuter Docker
        avec <code>sudo</code> à chaque fois, ajoutez votre utilisateur au groupe
        docker&nbsp;:
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary">
          sudo usermod -aG docker $USER
        </code>
        <br />
        Déconnectez-vous puis reconnectez-vous pour que les changements prennent
        effet.
        <br />
      </div>
      <div
        id="get-code"
        className="bg-neutral-900/80 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-xs md:text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>3. Récupérer le code de NoisePort Server</strong>
        <br />
        Deux méthodes sont possibles&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            <b>Via Git (recommandé)</b> :<br />
            Ouvrez le terminal et tapez&nbsp;:
            <br />
            <br />
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              git clone https://github.com/raxmou/noiseport-server.git
            </code>
            <br />
            <br />
            (Nécessite d'avoir{" "}
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Git
            </a>{" "}
            installé sur votre machine)
          </li>
          <li>
            <b>Via téléchargement ZIP</b> :<br />
            Rendez-vous sur la page{" "}
            <a
              href="https://github.com/raxmou/noiseport-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              NoisePort Server sur GitHub
            </a>
            , cliquez sur "Code" puis "Download ZIP".
            <br />
            Décompressez le dossier sur votre machine.
          </li>
        </ul>
        <b>Astuce&nbsp;:</b> La méthode Git permet de mettre à jour le serveur
        plus facilement par la suite.
        <br />
      </div>

      <div
        id="install-make"
        className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>
          4. Installer l'outil <code>make</code> (optionnel)
        </strong>
        <br />
        <b>make</b> est nécessaire pour certains scripts d'installation ou de
        gestion du serveur.
        <br />
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            <b>macOS</b> : Ouvrez le terminal et tapez&nbsp;:
            <br />
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              xcode-select --install
            </code>
            <br />
            Cela installera les outils de ligne de commande Xcode, incluant{" "}
            <b>make</b>.
          </li>
          <li>
            <b>Linux</b> : Ouvrez le terminal et tapez&nbsp;:
            <br />
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              sudo apt-get install make
            </code>
            <br />
            (ou la commande adaptée à votre distribution)
          </li>
          <li>
            <b>Windows</b> : Installez <b>make</b> via{" "}
            <a
              href="https://gnuwin32.sourceforge.net/packages/make.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              GnuWin32
            </a>{" "}
            ou via{" "}
            <a
              href="https://community.chocolatey.org/packages/make"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Chocolatey
            </a>
            .
          </li>
        </ul>
        <b>Astuce&nbsp;:</b> Vérifiez l'installation en tapant{" "}
        <code>make --version</code> dans le terminal.
      </div>
      <div
        id="run-wizard"
        className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24"
      >
        <strong>5. Lancer l'assistant d'installation</strong>
        <br />
        Cette étape va télécharger et initialiser les conteneurs nécessaires à
        l'assistant d'installation. Cela peut prendre un certain temps selon
        votre connexion Internet et les performances de votre machine.
        <br />
        <ul className="list-disc pl-5 mt-2 mb-2">
          Ces commandes doivent être lancées depuis le dossier où se trouve le
          code de NoisePort Server (ex: le dossier <code>noiseport-server</code>{" "}
          si vous avez utilisé Git).
          <li>
            <b>Avec make</b> :
            <br />
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              make wizard
            </code>
          </li>
          <li>
            <b>Sans make</b> :
            <br />
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              docker compose -f docker-compose.wizard.yml up
            </code>
          </li>
        </ul>
        Une fois lancé, l'assistant (interface web) sera accessible depuis votre
        navigateur à l'adresse&nbsp;:
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
          http://&lt;adresse_ip_de_la_machine&gt;:8000/wizard
        </code>
        <br />
        Remplacez <code>&lt;adresse_ip_de_la_machine&gt;</code> par l'adresse IP
        ou le nom de votre serveur.
        <br />
        Vous pourrez alors commencer la configuration de NoisePort Server via
        l'assistant.
      </div>
      <div
        id="wizard-preview"
        className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary scroll-mt-24"
      >
        <h2 className="font-kode text-2xl md:text-3xl mt-6 mb-4 text-neutral-100">
          Aperçu de l'assistant d'installation
        </h2>
        <img
          src={wizardScreenshot}
          alt="Aperçu de l'assistant d'installation NoisePort Server"
          className="rounded shadow mb-4 max-w-full h-auto"
        />
        <p>
          À partir de cette étape,{" "}
          <b>
            toute la configuration sera guidée par l'assistant d'installation
          </b>
          . Suivez simplement les instructions affichées dans l'interface web
          pour terminer l'installation et la configuration de votre serveur
          NoisePort.
        </p>
      </div>
    </section>
  );
}
