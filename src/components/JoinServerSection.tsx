export default function JoinServerSection() {
  return (
    <section>
      <h2 className="font-kode text-2xl md:text-3xl mb-4 text-neutral-100">
        Rejoindre un serveur NoisePort
      </h2>
      <div className="gap-4 mb-8">
        <p className="text-neutral-200">
          Pour rejoindre un serveur NoisePort existant, vous devez vous connecter
          au réseau privé sécurisé qui héberge le serveur.
          <br />
          <br />
          NoisePort utilise <strong>Tailscale</strong> pour créer un réseau privé
          virtuel (VPN) sécurisé, géré par <strong>Headscale</strong>. Cela permet
          d'accéder à votre serveur NoisePort de manière sécurisée, où que vous
          soyez.
        </p>
      </div>

      <div id="prerequisites" className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24">
        <strong>Informations nécessaires</strong>
        <br />
        Avant de commencer, vous devez demander à l'administrateur du serveur
        NoisePort les informations suivantes&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            <b>L'adresse IP du serveur NoisePort</b> dans le réseau Headscale/Tailscale
          </li>
          <li>
            <b>Un identifiant d'utilisateur</b> (créé par l'administrateur sur
            Headscale)
          </li>
          <li>
            <b>L'URL du serveur Headscale</b> pour l'inscription (ex&nbsp;:{" "}
            <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
              https://headscale.mondomaine.com
            </code>
            )
          </li>
        </ul>
      </div>

      <div id="tailscale-macos" className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24">
        <strong>Installation sur macOS</strong>
        <br />
        <br />
        <b>1. Installer Tailscale</b>
        <br />
        Téléchargez et installez Tailscale depuis le site officiel&nbsp;:
        <br />
        <a
          href="https://tailscale.com/download/mac"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Tailscale pour macOS
        </a>
        <br />
        <br />
        <b>2. Se connecter au serveur Headscale</b>
        <br />
        Ouvrez le terminal et tapez la commande suivante en remplaçant l'URL par
        celle fournie par votre administrateur&nbsp;:
        <br />
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
          tailscale up --login-server https://headscale.mondomaine.com
        </code>
        <br />
        <br />
        Cette commande ouvrira votre navigateur pour finaliser l'authentification.
        <br />
        <br />
        <b>3. Vérifier la connexion</b>
        <br />
        Une fois connecté, vérifiez que vous pouvez accéder au serveur NoisePort
        en tapant&nbsp;:
        <br />
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
          ping &lt;adresse_ip_serveur_noiseport&gt;
        </code>
        <br />
        <br />
        Si vous recevez des réponses, vous êtes connecté avec succès&nbsp;!
      </div>

      <div id="tailscale-windows" className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24">
        <strong>Installation sur Windows</strong>
        <br />
        <br />
        <b>1. Installer Tailscale</b>
        <br />
        Téléchargez et installez Tailscale depuis le site officiel&nbsp;:
        <br />
        <a
          href="https://tailscale.com/download/windows"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Tailscale pour Windows
        </a>
        <br />
        <br />
        <b>2. Configurer le serveur Headscale</b>
        <br />
        Une fois Tailscale installé, vous devez configurer l'URL du serveur
        Headscale. Cela se fait via l'interface de Tailscale&nbsp;:
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            Ouvrez l'application Tailscale depuis la barre des tâches (icône dans
            le coin inférieur droit)
          </li>
          <li>Cliquez sur les paramètres (Settings)</li>
          <li>
            Dans la section "Login Server", entrez l'URL fournie par votre
            administrateur (ex&nbsp;:{" "}
            <code className="bg-neutral-800 px-1 rounded text-primary font-mono text-xs">
              https://headscale.mondomaine.com
            </code>
            )
          </li>
          <li>Cliquez sur "Login" pour finaliser la connexion</li>
        </ul>
        <br />
        <b>3. Vérifier la connexion</b>
        <br />
        Ouvrez l'invite de commandes (cmd) et tapez&nbsp;:
        <br />
        <br />
        <code className="bg-neutral-800 px-2 py-1 rounded text-primary font-mono">
          ping &lt;adresse_ip_serveur_noiseport&gt;
        </code>
        <br />
        <br />
        Si vous recevez des réponses, vous êtes connecté avec succès&nbsp;!
      </div>

      <div id="tailscale-android" className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 scroll-mt-24">
        <strong>Installation sur Android</strong>
        <br />
        <br />
        <b>1. Installer Tailscale</b>
        <br />
        Téléchargez et installez Tailscale depuis Google Play&nbsp;:
        <br />
        <a
          href="https://play.google.com/store/apps/details?id=com.tailscale.ipn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Télécharger Tailscale sur Google Play
        </a>
        <br />
        <br />
        <b>2. Se connecter au serveur Headscale</b>
        <br />
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>Ouvrez l'application Tailscale</li>
          <li>Appuyez sur les trois points (menu) en haut à droite</li>
          <li>Sélectionnez "Use alternate server"</li>
          <li>
            Entrez l'URL du serveur Headscale fournie par votre administrateur
          </li>
          <li>Appuyez sur "Login" pour finaliser la connexion</li>
        </ul>
        <br />
        <b>3. Vérifier la connexion</b>
        <br />
        Une fois connecté, l'application affichera "Connected" et vous pourrez
        voir votre adresse IP Tailscale.
      </div>

      <div id="connect-noiseport" className="bg-neutral-900/80 rounded-lg p-4 mb-6 text-sm text-neutral-200 border border-primary scroll-mt-24">
        <strong>Connexion à NoisePort</strong>
        <br />
        <br />
        Une fois Tailscale configuré et connecté, vous pouvez accéder à votre
        serveur NoisePort&nbsp;:
        <br />
        <ul className="list-disc pl-5 mt-2 mb-2">
          <li>
            Ouvrez l'application NoisePort (Desktop ou Mobile) que vous avez
            téléchargée
          </li>
          <li>
            Dans les paramètres de connexion, entrez l'adresse IP du serveur
            NoisePort fournie par votre administrateur
          </li>
          <li>
            Le format de l'adresse sera généralement&nbsp;:{" "}
            <code className="bg-neutral-800 px-1 rounded text-primary font-mono text-xs">
              http://&lt;adresse_ip&gt;:4533
            </code>
          </li>
          <li>
            Entrez vos identifiants utilisateur (nom d'utilisateur et mot de
            passe fournis par l'administrateur)
          </li>
          <li>Connectez-vous et profitez de votre musique&nbsp;!</li>
        </ul>
        <br />
        <b>Astuce&nbsp;:</b> Gardez Tailscale activé en arrière-plan pour rester
        connecté à votre serveur NoisePort où que vous soyez.
      </div>
    </section>
  );
}
