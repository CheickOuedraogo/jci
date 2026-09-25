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

export function altPath(path: string, lang: Lang): string {
  if (lang === "fr") {
    return path === "/" ? "/en/" : `/en${path}`;
  }
  if (path === "/en/") return "/";
  return path.replace(/^\/en/, "") || "/";
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path}`;
}