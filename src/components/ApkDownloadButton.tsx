export default function ApkDownloadButton() {
  return (
    <a
      href="/noiseport.apk"
      download
      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-neutral-950 font-bold shadow hover:bg-primary/90 transition-colors"
      style={{ textDecoration: "none" }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" rx="6" fill="#222" />
        <path
          d="M14 6v10m0 0l-4-4m4 4l4-4"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="7" y="20" width="14" height="2" rx="1" fill="#ffffff" />
      </svg>
      <span>Télécharger l'APK Android</span>
    </a>
  );
}
