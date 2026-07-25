export const site = {
  name: "Roaring Tigers Shotokan Karate Club",
  shortName: "Roaring Tigers",
  tagline: "Empowering Minds • Strengthening Bodies",
  location: "Sheikhupura, Punjab, Pakistan",
  yearsActive: 8,
  phones: ["0315-4241680", "0343-4010016", "0301-4570915"],
  email: "waqasdogar545@gmail.com",
  address: {
    lines: [
      "Bank Plaza",
      "Near White Castle",
      "Basement of MCB Bank",
      "Ghang Road",
      "Sheikhupura",
      "Punjab, Pakistan",
    ],
  },
  schedule: {
    days: "Monday – Saturday",
    time: "2:00 PM – 8:00 PM",
  },
  pricing: {
    registration: "PKR 5,000",
    monthly: "PKR 5,000",
  },
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const coreValues = [
  "Discipline",
  "Respect",
  "Confidence",
  "Self Control",
  "Leadership",
  "Physical Fitness",
  "Integrity",
  "Perseverance",
] as const;

export type Program = {
  title: string;
  age?: string;
  intro: string;
  focus: string[];
  icon: "kids" | "teen" | "adult" | "women" | "kata" | "kumite";
};

export const programs: Program[] = [
  {
    title: "Kids Karate",
    age: "Ages 5+",
    intro: "Playful, structured classes that build character from the ground up.",
    focus: ["Confidence", "Coordination", "Respect", "Discipline", "Fitness"],
    icon: "kids",
  },
  {
    title: "Teen Karate",
    intro: "Channel energy into strength, focus and real-world capability.",
    focus: ["Self Defense", "Strength", "Leadership", "Character Building"],
    icon: "teen",
  },
  {
    title: "Adult Karate",
    intro: "Traditional training for fitness, resilience and peace of mind.",
    focus: ["Fitness", "Traditional Karate", "Stress Relief", "Practical Self Defense"],
    icon: "adult",
  },
  {
    title: "Women's Self Defense",
    intro: "A supportive space to build awareness and defensive skill.",
    focus: ["Awareness", "Confidence", "Defensive Techniques", "Fitness"],
    icon: "women",
  },
  {
    title: "Kata Training",
    intro: "Traditional Shotokan forms emphasizing mastery of movement.",
    focus: ["Precision", "Balance", "Timing", "Focus"],
    icon: "kata",
  },
  {
    title: "Kumite Training",
    intro: "Competitive sparring that sharpens instinct and control.",
    focus: ["Speed", "Distance", "Strategy", "Reaction", "Control"],
    icon: "kumite",
  },
];

export const benefits = [
  "Improve physical fitness",
  "Learn practical self-defense",
  "Increase confidence",
  "Better focus",
  "Improved flexibility",
  "Stronger discipline",
  "Tournament opportunities",
  "Belt progression",
  "Healthy lifestyle",
];

export type Belt = { name: string; className: string; dark?: boolean };

export const belts: Belt[] = [
  { name: "White", className: "belt-white", dark: true },
  { name: "Yellow", className: "belt-yellow", dark: true },
  { name: "Orange", className: "belt-orange" },
  { name: "Green", className: "belt-green" },
  { name: "Purple", className: "belt-purple" },
  { name: "Brown", className: "belt-brown" },
  { name: "Black", className: "belt-black" },
];

export const galleryCategories = [
  {
    id: "training",
    title: "Training",
    desc: "Warm-ups, stretching, kihon practice and group training.",
  },
  {
    id: "kata",
    title: "Kata",
    desc: "Individual kata, belt examinations and traditional stances.",
  },
  {
    id: "kumite",
    title: "Kumite",
    desc: "Controlled sparring, tournament practice and protective gear.",
  },
  {
    id: "kids",
    title: "Kids Program",
    desc: "Young students, group classes and belt promotions.",
  },
  {
    id: "women",
    title: "Women's Classes",
    desc: "Self-defense practice, group sessions and confidence building.",
  },
  {
    id: "events",
    title: "Events",
    desc: "Belt ceremonies, competitions, medal winners and team photos.",
  },
] as const;

export const facilities = [
  "Spacious dojo",
  "Professional instructors",
  "Family-friendly environment",
  "Morning and evening classes",
];

export const testimonials = [
  {
    quote:
      "A wonderful environment for children to learn discipline and confidence.",
    author: "Parent of a Junior Student",
  },
  {
    quote:
      "The instructors are patient and professional. My daughter looks forward to every class.",
    author: "Sheikhupura Parent",
  },
  {
    quote:
      "I joined for fitness and stayed for the discipline. Genuinely life-changing training.",
    author: "Adult Student",
  },
];

export const faqs = [
  {
    q: "What age can join?",
    a: "Kids, teenagers, adults, and women are all welcome to train with us.",
  },
  {
    q: "Do I need experience?",
    a: "No. Beginners are welcome and every class is structured for all experience levels.",
  },
  {
    q: "Do you teach self-defense?",
    a: "Yes. Practical self-defense is a core part of our curriculum for every program.",
  },
  {
    q: "Is karate good for fitness?",
    a: "Yes. Training improves endurance, flexibility, coordination and strength.",
  },
];
