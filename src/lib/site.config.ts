export type Lang = "fr" | "en";

export const SITE = {
  name: "JCI Yennèga Amazones Émergentes",
  shortName: "JCI Yennèga",
  taglineFr: "Nous révélons la guerrière, l'entrepreneure et la protectrice en chaque femme.",
  taglineEn: "We unleash the warrior, the entrepreneur and the protector in every woman.",
  email: "jciyenega.amazones@gmail.com",
  phoneDisplay: "+226 63 16 20 20",
  phoneRaw: "+22663162020",
  whatsapp: "https://wa.me/22663162020",
  address: "Ouagadougou, Burkina Faso",
  url: "https://jciyennega.org",
} as const;

// TODO: remplacer par la clé d'accès Web3Forms (https://web3forms.com)
export const FORM_ACCESS_KEY = "PLEASE_SET_YOUR_WEB3FORMS_ACCESS_KEY";

// TODO: remplacer par le lien de don CinetPay une fois créé
export const DONATION_URL = "";

/* TODO: coller ici les numéros qui reçoivent les dons.
   Laisser un numéro vide -> il n'est pas affiché du tout, et le bloc
   Mobile Money ne s'affiche que si au moins un numéro est renseigné.
   Format attendu : espaces autorisés, ex. "+226 70 00 00 00". */
export const MOBILE_MONEY: { id: "orange" | "moov"; label: string; number: string }[] = [
  { id: "orange", label: "Orange Money", number: "" },
  { id: "moov", label: "Moov Money", number: "" },
];

/* montants conseilles, indicatifs : le don reste libre.
   Ces puces ne sont pas des boutons de paiement, elles remplissent
   simplement le champ montant. Vider le tableau = champ libre seul. */
export const SUGGESTED_AMOUNTS = [1000, 2500, 5000];

/* plancher de saisie, purement affordant : aucun prestataire n'est
   implique, le transfert se fait ensuite dans l'app de l'operateur. */
export const MIN_DONATION_AMOUNT = 100;

export const DONOR_HOLDER = "JCI Yennèga Amazones Émergentes";

export const SOCIALS = [
  { id: "facebook", name: "Facebook", handle: "JCI YENNEGA AMAZONES ÉMERGENTES", url: "#" },
  { id: "tiktok", name: "TikTok", handle: "JCI YENNEGA AMAZONES ÉMERGENTES", url: "#" },
  { id: "linkedin", name: "LinkedIn", handle: "JCI YENNEGA AMAZONES ÉMERGENTES", url: "#" },
] as const;

export const NAV_LINKS: Record<Lang, { label: string; href: string }[]> = {
  fr: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Nos axes", href: "/nos-axes" },
    { label: "Devenir Amazone", href: "/devenir-amazone" },
    { label: "Contact", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/en/" },
    { label: "About", href: "/en/about" },
    { label: "Programs", href: "/en/programs" },
    { label: "Become an Amazone", href: "/en/join" },
    { label: "Contact", href: "/en/contact" },
  ],
};

/* mapping explicite FR <-> EN : les slugs ne se ressemblent pas
   (FR: /a-propos · EN: /en/about, /nos-axes · /en/programs, …) */
const PATH_ROUTES: Record<string, Record<Lang, string>> = {
  "/": { fr: "/", en: "/en/" },
  "/a-propos": { fr: "/a-propos", en: "/en/about" },
  "/nos-axes": { fr: "/nos-axes", en: "/en/programs" },
  "/devenir-amazone": { fr: "/devenir-amazone", en: "/en/join" },
  "/contact": { fr: "/contact", en: "/en/contact" },
  "/en/about": { fr: "/a-propos", en: "/en/about" },
  "/en/programs": { fr: "/nos-axes", en: "/en/programs" },
  "/en/join": { fr: "/devenir-amazone", en: "/en/join" },
  "/en/contact": { fr: "/contact", en: "/en/contact" },
};

export function altPath(path: string, lang: Lang): string {
  const route = PATH_ROUTES[path] ?? PATH_ROUTES["/"];
  const other: Lang = lang === "fr" ? "en" : "fr";
  return route[other];
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}