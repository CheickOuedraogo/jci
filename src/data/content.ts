import type { Lang } from "../lib/site.config";

export const CREED: Record<Lang, string[]> = {
  en: [
    "That faith in God gives meaning and purpose to human life",
    "That the brotherhood of man transcends the sovereignty of nations",
    "That economic justice can best be won by free men through free enterprise",
    "That government should be of laws rather than of men",
    "That earth’s great treasure lies in human personality",
    "And that service to humanity is the best work of life",
  ],
  fr: [
    "Que la foi en Dieu donne un sens et un but à la vie humaine",
    "Que la fraternité entre les hommes transcende la souveraineté des nations",
    "Que la justice économique s'obtient mieux par des hommes libres, dans une entreprise libre",
    "Que le gouvernement doit être fait de lois et non d'hommes",
    "Que les grands trésors de la terre résident dans la personnalité humaine",
    "Et que le service de l'humanité est la meilleure œuvre de la vie",
  ],
};

export const AXES: {
  id: string;
  icon: string;
  tag: Record<Lang, string>;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  points: Record<Lang, string[]>;
}[] = [
  {
    id: "entrepreneurial",
    icon: "growth",
    tag: { fr: "Axe 1", en: "Axis 1" },
    name: {
      fr: "Leadership Entrepreneurial Féminin",
      en: "Women's Entrepreneurial Leadership",
    },
    desc: {
      fr: "Nous ne formons pas seulement des employées, nous créons des cheffes d'entreprise.",
      en: "We don't just train employees, we build business owners.",
    },
    points: {
      fr: [
        "Incubateur Amazone",
        "Formation business plan & pitch",
        "Accès au financement",
        "Mentorat avec des femmes modèles",
      ],
      en: [
        "Amazon Incubator",
        "Business plan & pitch training",
        "Access to funding",
        "Mentorship from role-model women",
      ],
    },
  },
  {
    id: "capacites",
    icon: "megaphone",
    tag: { fr: "Axe 2", en: "Axis 2" },
    name: { fr: "Renforcement des Capacités", en: "Capacity Building" },
    desc: {
      fr: "Pour que plus aucune femme ne s'excuse d'être ambitieuse.",
      en: "So that no woman ever apologises for being ambitious.",
    },
    points: {
      fr: ["Prise de parole en public", "Leadership", "Anglais & digital", "Confiance en soi"],
      en: ["Public speaking", "Leadership", "English & digital skills", "Self-confidence"],
    },
  },
  {
    id: "protection",
    icon: "shield-heart",
    tag: { fr: "Axe 3", en: "Axis 3" },
    name: { fr: "Protection des Personnes Vulnérables", en: "Protection of Vulnerable People" },
    desc: {
      fr: "Parce qu'on ne peut pas parler de futur sans protéger les enfants.",
      en: "Because there is no future without protecting children.",
    },
    points: {
      fr: [
        "Sensibilisation contre le travail des enfants",
        "Soutien scolaire",
        "Appui aux mères vulnérables",
      ],
      en: [
        "Awareness against child exploitation",
        "School support",
        "Support for vulnerable mothers",
      ],
    },
  },
];

const fr = {
  meta: {
    tagline: "La première Organisation Locale 100% féminine de JCI Burkina Faso.",
  },
  seo: {
    home: {
      title: "JCI Yennèga Amazones Émergentes | Leadership Féminin & Entrepreneuriat au Burkina Faso",
      description: "Première Organisation Locale 100% féminine de JCI Burkina Faso. Nous révélons le leadership, l'entrepreneuriat et l'impact positif des jeunes femmes de 18 à 40 ans.",
    },
    about: {
      title: "À propos de JCI Yennèga | Organisation Locale 100% Féminine JCI Burkina Faso",
      description: "Découvrez l'histoire de JCI Yennèga Amazones Émergentes, inspirée par la princesse Yennenga. Notre vision, notre mission et notre engagement pour le leadership féminin.",
    },
    axes: {
      title: "Nos Axes d'Action : Entrepreneuriat, Leadership & Protection | JCI Yennèga",
      description: "Entreprendre, grandir, protéger : découvrez nos programmes d'incubation, formations au leadership et actions communautaires au Burkina Faso.",
    },
    join: {
      title: "Devenir Amazone | Rejoindre JCI Yennèga Amazones Émergentes",
      description: "Femme de 18 à 40 ans résidant au Burkina Faso ? Rejoins JCI Yennèga pour développer ton leadership, entreprendre et avoir un impact durable.",
    },
    contact: {
      title: "Contact & Siège à Ouagadougou | JCI Yennèga Amazones Émergentes",
      description: "Contactez JCI Yennèga Amazones Émergentes à Ouagadougou par email, téléphone ou WhatsApp. Échangeons sur vos projets, adhésions et partenariats.",
    },
  },
  home: {
    eyebrow: "JCI Burkina Faso · Organisation Locale 100% féminine",
    title: "Nous sommes les Amazones Émergentes",
    hook: "La première Organisation Locale 100% féminine de JCI Burkina Faso. Nous révélons la guerrière, l'entrepreneure et la protectrice en chaque jeune femme.",
    visualAlt: "Des membres de JCI Yennèga Amazones Émergentes réunies lors d'une activité",
    buttons: {
      discover: "Nous Découvrir",
      acts: "Nos Actions",
      join: "Rejoins-nous",
      donate: "Faire un Don",
    },
    pillarsEyebrow: "Nos trois piliers",
    pillarsTitle: "Révéler la guerrière, l'entrepreneure et la protectrice",
    pillarsIntro: "Trois engagements pour révéler le potentiel de chaque femme.",
    quote: "Nous ne formons pas seulement des employées, nous créons des cheffes d'entreprise.",
    quoteAuthor: "— Les Amazones Émergentes",
    metricsEyebrow: "Un réseau mondial",
    metricsTitle: "Un leadership sans limite, un impact local.",
    metrics: [
      { value: "100+", label: "pays JCI dans le monde" },
      { value: "18–40", label: "ans, âge des membres" },
      { value: "3", label: "piliers d'action" },
    ],
    aboutEyebrow: "Notre histoire",
    aboutTitle: "Nées en 2026 pour porter la voix des femmes",
    aboutText: "JCI Yennèga Amazones Émergentes est née de la vision du Président Mondial JCI : ne plus laisser les femmes en marge du leadership.",
    ctaEyebrow: "Rejoins le mouvement",
    ctaTitle: "Prête à entrer dans l'arène ?",
    ctaBody: "Rejoins une communauté de femmes qui mènent, entreprennent et protègent — au Burkina Faso et dans le monde.",
  },
  about: {
    eyebrow: "À propos",
    title: "JCI Yennèga Amazones Émergentes",
    lede: "JCI Yennèga Amazones Émergentes est née en 2026 de la vision du Président Mondial JCI : ne plus laisser les femmes en marge du leadership.",
    body: "Inspirées par la Princesse Yennenga, fondatrice du Royaume Mossi, nous sommes des femmes de 18 à 40 ans qui croyons que chaque femme peut embrasser son potentiel, définir son futur et changer le monde.",
    visualCaption: "Chaque activité est une rencontre : c'est là que le leadership se transmet.",
    visionTitle: "Notre Vision",
    visionText: "Être le principal réseau mondial de jeunes leaders.",
    missionTitle: "Notre Mission",
    missionText: "Offrir des opportunités de développement de leadership aux jeunes en leur donnant la capacité de créer des changements positifs.",
    creedEyebrow: "Notre Crédo",
    creedTitle: "Ce que nous croyons",
    creedIntro: "Le crédo officiel de la Junior Chamber International, adopté par tous les membres.",
    creedSign: "— Le Crédo JCI",
    timelineEyebrow: "L'étincelle",
    timelineTitle: "Les Amazones Émergentes",
    timelineText: "Inspirées par la guerrière Yennenga, fondatrice du Royaume Mossi, nous portons son héritage : des femmes fortes qui bâtissent, protègent et inspirent.",
  },
  axes: {
    eyebrow: "Nos 3 axes stratégiques",
    title: "Trois engagements pour révéler le potentiel des femmes",
    intro: "Entreprendre, grandir, protéger : chaque axe se transforme en actions concrètes au service des femmes et des communautés du Burkina Faso.",
    cardCta: "Agir avec nous",
    ctaEyebrow: "Passe à l'action",
    ctaTitle: "Deviens l'une de nous",
    ctaBody: "Une communauté d'action te tend la main. Rejoins un mouvement 100% féminin qui construit le Burkina Faso de demain.",
    ctaButton: "Rejoins-nous",
  },
  join: {
    eyebrow: "Devenir Amazone",
    title: "Rejoins les Amazones Émergentes",
    intro: "Tu peux nous rejoindre si :",
    criteria: [
      "Tu es une femme âgée de 18 à 40 ans",
      "Tu vis au Burkina Faso et tu partages nos valeurs",
      "Tu veux développer ton leadership et servir ta communauté",
      "Tu es prête à t'investir dans nos projets",
    ],
    feeLabel: "Cotisation annuelle",
    feeAmount: "35 000 FCFA / an",
    feeNote: "La cotisation finance les formations, l'incubateur, le mentorat et nos actions de protection.",
    formTitle: "Candidature",
    formNotice:
      "Le formulaire sera activé dès la configuration de la clé Web3Forms. Consulte ton fichier TODO.md.",
    formIntro:
      "Envoie-nous tes coordonnées et ta motivation. Nous reviendrons vers toi rapidement sur WhatsApp ou par email.",
    fields: {
      lastName: "Nom",
      firstName: "Prénom",
      phone: "Numéro de téléphone",
      dob: "Date de naissance",
      email: "Email",
      occupation: "Occupation (profession, études…)",
      motivation: "Qu'est-ce qui te motive à nous rejoindre ?",
      consent:
        "J'accepte que mes informations soient utilisées uniquement pour traiter ma candidature.",
    },
    submit: "Envoyer ma candidature",
    sending: "Envoi en cours…",
    success: "Ta candidature a bien été envoyée. Nous reviendrons vers toi très vite.",
    error: "Une erreur est survenue. Réessaie, ou écris-nous sur WhatsApp.",
    errorQuota:
      "Nos inscriptions sont momentanément saturées : nous rencontrons desdifficultés techniques. Écris-nous sur WhatsApp et nous traiterons ta candidature sans attendre.",
    errorNetwork:
      "Impossible de nous écrire depuis ce navigateur. Vérifie ta connexion internet, ou passe par WhatsApp.",
    whatsappFallback: "Passer par WhatsApp",
    whatsappAlt: "Postuler via WhatsApp",
    donateAlt: "Payer la cotisation",
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons de ton avenir",
    intro: "Une question, une envie de rejoindre le mouvement ou de soutenir nos actions ? Écris-nous.",
    emailLabel: "Email",
    phoneLabel: "Téléphone / WhatsApp",
    addressLabel: "Siège",
    followLabel: "Suivez-nous",
    socialIntro: "Retrouve-nous sur nos réseaux et suis nos actualités.",
    donateTitle: "Soutenir nos actions",
    donateBody: "Chaque contribution finance l'incubateur, les formations et la protection des enfants.",
    donateButton: "Faire un Don",
    whatsappButton: "Écrire sur WhatsApp",
    formPreparing: "Le lien de paiement sécurisé sera bientôt disponible. En attendant, écris-nous directement sur WhatsApp.",
    donateEyebrowMm: "Orange Money · Moov Money",
    /* le transfert direct laisse une seule information manquante : le nom de
       la donatrice. Le SMS de l'operateur fournit deja montant + numero. */
    declareTitle: "1. Déclare ton don",
    declareIntro:
      "Renseigne ces informations, on t'affiche ensuite le numéro vers lequel transférer.",
    declareFields: {
      name: "Ton nom",
      amount: "Montant du don",
      operator: "Ton opérateur",
      phone: "Ton numéro (facultatif)",
      message: "Message (facultatif)",
    },
    declareSubmit: "Envoyer ma déclaration",
    declareSending: "Envoi en cours…",
    declareSuccess: "Déclaration reçue, merci !",
    declareSuccessHint:
      "Effectue maintenant ton transfert vers le numéro ci-dessous, puis garde la référence : elle nous permet de te remercrier précisément.",
    declareError: "Une erreur est survenue. Réessaie, ou écris-nous sur WhatsApp.",
    declareErrorQuota:
      "Nos envois sont momentanément saturés : difficultés techniques. Écris-nous sur WhatsApp, on enregistre ton don sans attendre.",
    declareErrorNetwork:
      "Impossible d'envoyer depuis ce navigateur. Vérifie ta connexion, ou passe par WhatsApp.",
    declareMinAmount: "Minimum",
    declareNotConfigured:
      "Le service de déclaration sera actif dès la configuration de la clé Web3Forms. En attendant, écris-nous directement sur WhatsApp.",
    mmIntro: "Transfère au montant de ton choix vers ce numéro :",
    mmHolder: "Au nom de",
    mmFree: "Montant libre",
    mmConfirmTitle: "2. Effectue ton transfert",
    mmConfirm:
      "Après l'envoi, tu peux nous écrire sur WhatsApp : nous accusons réception et nous remercions chaque donatrice nominativement.",
    mmNoNumber:
      "Aucun numéro n'est encore configuré. Écris-nous sur WhatsApp, nous te transmettons les instructions de paiement.",
    mapNote: "Ouagadougou, Burkina Faso",
  },
  footer: {
    tagline: "La première Organisation Locale 100% féminine de JCI Burkina Faso. Nous révélons la guerrière, l'entrepreneure et la protectrice en chaque femme.",
    contactTitle: "Nous contacter",
    followTitle: "Suivez-nous",
    rights: "© 2026 JCI Yennèga Amazones Émergentes. Tous droits réservés.",
  },
};

const en: typeof fr = {
  meta: {
    tagline: "The first 100% women-led Local Organization of JCI Burkina Faso.",
  },
  seo: {
    home: {
      title: "JCI Yennèga Emerging Amazons | Women Leadership & Entrepreneurship in Burkina Faso",
      description: "The first 100% women-led Local Organization of JCI Burkina Faso. Empowering young women aged 18 to 40 to lead, innovate, and create positive change.",
    },
    about: {
      title: "About JCI Yennèga | 100% Women-Led Organization in JCI Burkina Faso",
      description: "Discover the story of JCI Yennèga Emerging Amazons, inspired by Princess Yennenga. Our vision, mission, and creed for female leadership.",
    },
    axes: {
      title: "Our Action Pillars : Entrepreneurship, Leadership & Protection | JCI Yennèga",
      description: "Build, grow, protect: explore our business incubator, leadership workshops, and community protection programs in Burkina Faso.",
    },
    join: {
      title: "Become an Amazone | Join JCI Yennèga Emerging Amazons",
      description: "Are you a woman aged 18 to 40 living in Burkina Faso? Apply to join JCI Yennèga and unleash your potential as an impactful leader.",
    },
    contact: {
      title: "Contact Us & Headquarters in Ouagadougou | JCI Yennèga Emerging Amazons",
      description: "Get in touch with JCI Yennèga Emerging Amazons in Ouagadougou via email, phone, or WhatsApp for memberships, inquiries, and partnerships.",
    },
  },
  home: {
    eyebrow: "JCI Burkina Faso · 100% women-led Local Organization",
    title: "We Are The Emerging Amazons",
    hook: "The first 100% women-led Local Organization of JCI Burkina Faso. We unleash the warrior, the entrepreneur and the protector in every young woman.",
    visualAlt: "JCI Yennèga Amazones Émergentes members taking part in an activity",
    buttons: {
      discover: "Discover Us",
      acts: "Our Programs",
      join: "Join Us",
      donate: "Donate",
    },
    pillarsEyebrow: "Our three pillars",
    pillarsTitle: "Unleash the warrior, the entrepreneur and the protector",
    pillarsIntro: "Three commitments to unveil every woman's potential.",
    quote: "We don't just train employees, we build business owners.",
    quoteAuthor: "— The Emerging Amazons",
    metricsEyebrow: "A global network",
    metricsTitle: "Limitless leadership, local impact.",
    metrics: [
      { value: "100+", label: "JCI countries worldwide" },
      { value: "18–40", label: "years old, members' age" },
      { value: "3", label: "areas of action" },
    ],
    aboutEyebrow: "Our story",
    aboutTitle: "Born in 2026 to amplify women's voices",
    aboutText: "JCI Yennèga Amazones Émergentes was born from the JCI World President's call: to no longer leave women on the margins of leadership.",
    ctaEyebrow: "Join the movement",
    ctaTitle: "Ready to step into the arena?",
    ctaBody: "Join a community of women who lead, build and protect — in Burkina Faso and around the world.",
  },
  about: {
    eyebrow: "About",
    title: "JCI Yennèga Amazones Émergentes",
    lede: "Founded in 2026 following the World President's call to boost female leadership in Burkina Faso.",
    body: "Inspired by Princess Yennenga, we empower women aged 18-40 to lead, innovate and create positive change.",
    visualCaption: "Every activity is a meeting place — that is where leadership is passed on.",
    visionTitle: "Our Vision",
    visionText: "To be the leading global network of young leaders.",
    missionTitle: "Our Mission",
    missionText: "To provide development opportunities that empower young people to create positive change.",
    creedEyebrow: "Our Creed",
    creedTitle: "What we believe",
    creedIntro: "The official creed of the Junior Chamber International, embraced by every member.",
    creedSign: "— The JCI Creed",
    timelineEyebrow: "The spark",
    timelineTitle: "The Emerging Amazons",
    timelineText: "Inspired by the warrior Yennenga, founder of the Mossi Kingdom, we carry her legacy: strong women who build, protect and inspire.",
  },
  axes: {
    eyebrow: "Our 3 strategic axes",
    title: "Three commitments to unveil women's potential",
    intro: "Build, grow, protect: each axis turns into concrete action for women and communities in Burkina Faso.",
    cardCta: "Act with us",
    ctaEyebrow: "Take action",
    ctaTitle: "Become one of us",
    ctaBody: "An action-driven community is reaching out to you. Join a 100% women-led movement building tomorrow's Burkina Faso.",
    ctaButton: "Join us",
  },
  join: {
    eyebrow: "Become an Amazone",
    title: "Join the Emerging Amazons",
    intro: "You can join us if:",
    criteria: [
      "You are a woman aged 18 to 40",
      "You live in Burkina Faso and share our values",
      "You want to grow your leadership and serve your community",
      "You are ready to get involved in our projects",
    ],
    feeLabel: "Annual membership fee",
    feeAmount: "35,000 FCFA / year",
    feeNote: "The fee funds our training, incubator, mentorship and child-protection actions.",
    formTitle: "Application",
    formNotice:
      "The form will be enabled once the Web3Forms access key is configured. Check your TODO.md file.",
    formIntro:
      "Send us your details and motivation. We'll get back to you quickly on WhatsApp or by email.",
    fields: {
      lastName: "Last name",
      firstName: "First name",
      phone: "Phone number",
      dob: "Date of birth",
      email: "Email",
      occupation: "Occupation (job, studies…)",
      motivation: "What motivates you to join us?",
      consent:
        "I agree that my information will be used solely to process my application.",
    },
    submit: "Send my application",
    sending: "Sending…",
    success: "Your application has been sent. We will get back to you very soon.",
    error: "Something went wrong. Please try again, or message us on WhatsApp.",
    errorQuota:
      "Our application system is temporarily at capacity due to technical difficulties. Message us on WhatsApp and we will process your application right away.",
    errorNetwork:
      "We could not reach our form from this browser. Check your internet connection, or use WhatsApp instead.",
    whatsappFallback: "Switch to WhatsApp",
    whatsappAlt: "Apply via WhatsApp",
    donateAlt: "Pay the membership fee",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your future",
    intro: "A question, a desire to join the movement or to support our actions? Write to us.",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    addressLabel: "Headquarters",
    followLabel: "Follow us",
    socialIntro: "Find us on social media and follow our news.",
    donateTitle: "Support our actions",
    donateBody: "Every contribution funds the incubator, the trainings and the protection of children.",
    donateButton: "Donate",
    whatsappButton: "Write on WhatsApp",
    formPreparing: "The secure payment link will be available soon. Meanwhile, write to us directly on WhatsApp.",
    donateEyebrowMm: "Orange Money · Moov Money",
    declareTitle: "1. Declare your gift",
    declareIntro:
      "Fill in these details and we will show you the number to transfer to.",
    declareFields: {
      name: "Your name",
      amount: "Gift amount",
      operator: "Your operator",
      phone: "Your number (optional)",
      message: "Message (optional)",
    },
    declareSubmit: "Send my declaration",
    declareSending: "Sending…",
    declareSuccess: "Declaration received, thank you!",
    declareSuccessHint:
      "Now make your transfer to the number below and keep the reference: it lets us thank you accurately.",
    declareError: "Something went wrong. Try again, or message us on WhatsApp.",
    declareErrorQuota:
      "Our submissions are temporarily saturated: technical difficulties. Message us on WhatsApp and we will record your gift right away.",
    declareErrorNetwork:
      "We could not send from this browser. Check your connection, or switch to WhatsApp.",
    declareMinAmount: "Minimum",
    declareNotConfigured:
      "The declaration service will be live once the Web3Forms key is configured. Meanwhile, message us directly on WhatsApp.",
    mmIntro: "Transfer any amount you wish to this number:",
    mmHolder: "Account name",
    mmFree: "Any amount",
    mmConfirmTitle: "2. Make your transfer",
    mmConfirm:
      "Once sent, you can message us on WhatsApp: we acknowledge receipt and thank every donor by name.",
    mmNoNumber:
      "No number is configured yet. Message us on WhatsApp and we will send you the payment instructions.",
    mapNote: "Ouagadougou, Burkina Faso",
  },
  footer: {
    tagline: "The first 100% women-led Local Organization of JCI Burkina Faso. We unleash the warrior, the entrepreneur and the protector in every woman.",
    contactTitle: "Contact us",
    followTitle: "Follow us",
    rights: "© 2026 JCI Yennèga Amazones Émergentes. All rights reserved.",
  },
};

export const COPY: Record<Lang, typeof fr> = { fr, en };