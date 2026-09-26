export const EVENT_DATA = {
  edition: "14th Edition",
  eyebrow: "THE REFINED CHAPTER",
  title: "ARCHINET SUMMIT 2027",
  date: "20 FEBRUARY 2027",
  targetDateISO: "2027-02-20T09:00:00+05:30",
  venue: "THE ST. REGIS, MUMBAI",
  accessType: "BY INVITATION ONLY",
  introStatement: "THE ARCHINET SUMMIT 2027 IS SET TO BRING MORE VISIONARIES TOGETHER FROM AROUND THE WORLD TO EXPLORE THE LATEST TRENDS AND ADVANCEMENTS IN DESIGN AND WILL CREATE A PLACE OF HARMONY AND CREATIVITY.",
  ctaPrimary: "REQUEST AN INVITATION",
  ctaSecondary: "EXHIBIT WITH US",
};

export interface Edition {
  id: string;
  number: string;
  city: string;
  venue: string;
  date: string;
  year: string;
  image: string;
  highlights: string;
}

export const EDITIONS_DATA: Edition[] = [
  {
    id: "edition-ritz",
    number: "11TH EDITION",
    city: "BANGALORE",
    venue: "The Ritz-Carlton",
    date: "22 Jul 2025",
    year: "2025",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    highlights: "Luxury Resort Architecture & Vernacular Design Innovations"
  },
  {
    id: "edition-kohinoor",
    number: "12TH EDITION",
    city: "HYDERABAD",
    venue: "ITC Kohinoor",
    date: "14 Nov 2025",
    year: "2025",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    highlights: "Biophilic Hospitality Interiors & Modern Structural Glass"
  },
  {
    id: "edition-westin",
    number: "13TH EDITION",
    city: "GOA",
    venue: "The Westin",
    date: "15 Mar 2026",
    year: "2026",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    highlights: "Coastal Modernism & Sustainable Luxury Planning"
  },
  {
    id: "edition-14",
    number: "14TH EDITION",
    city: "MUMBAI",
    venue: "The St. Regis",
    date: "20 Feb 2027",
    year: "2027",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
    highlights: "Future of Parametric High-Rise & Ultra-Luxury Hospitality"
  },
  {
    id: "edition-leela",
    number: "10TH EDITION",
    city: "BENGALURU",
    venue: "The Leela Palace",
    date: "18 Apr 2025",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    highlights: "Tech-Infused Workspaces & Next-Gen Spatial Systems"
  }
];

export interface Leader {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export const LEADERS_DATA: Leader[] = [
  {
    id: "leader-1",
    name: "Sanjay Puri",
    role: "Principal Architect",
    company: "Sanjay Puri Architects",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "leader-2",
    name: "Sonali Rastogi",
    role: "Co-Founder & Director",
    company: "Morphogenesis",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "leader-3",
    name: "Ambrish Arora",
    role: "Design Principal",
    company: "Studio Lotus",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "leader-4",
    name: "Patricia Urquiola",
    role: "Creative Director",
    company: "Studio Urquiola Milan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "leader-5",
    name: "Manit Rastogi",
    role: "Founder Principal",
    company: "Morphogenesis",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop"
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Working with Archinet transformed our network. Their strategic insights improved our operations and boosted our overall efficiency. We saw a 30% increase in meaningful connections within six months!",
    author: "AR. KHOZEMA CHITALWALA",
    title: "PRINCIPAL ARCHITECT",
    company: "DESIGN MATRIX",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-2",
    quote: "The curated environment is engineered for absolute focus of conversation and bespoke dialogue at Archinet is simply in the entire industry.",
    author: "ID. SONIA PODDAR",
    title: "LEAD INTERIOR DESIGNER",
    company: "STUDIO PODDAR",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-3",
    quote: "ArchiNet Summit is unequivocally the finest architectural congregation in Asia. The level of dialogue and curated networking is unmatched.",
    author: "AR. SANJAY PURI",
    title: "PRINCIPAL ARCHITECT",
    company: "SANJAY PURI ARCHITECTS",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-4",
    quote: "An extraordinary convergence of visionary architects, structural innovators, and top-tier luxury brands under one pristine roof.",
    author: "AR. MANIT RASTOGI",
    title: "FOUNDER PRINCIPAL",
    company: "MORPHOGENESIS",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

export const STATISTICS_DATA = [
  { value: "2500+", label: "ARCHITECTS & DESIGNERS" },
  { value: "150+", label: "LEADING BRANDS" },
  { value: "13", label: "COMPLETED EDITIONS" },
  { value: "5", label: "MAJOR CITIES" },
];

export const BRANDS_DATA = [
  "FOSTER + PARTNERS",
  "ZAHA HADID ARCHITECTS",
  "GENSLER",
  "STUDIO LOTUS",
  "MORPHOGENESIS",
  "HAFELE",
  "KOHLER",
  "POLIFORM",
  "MINOTTI",
  "B&B ITALIA",
  "BENTLEY HOME",
  "LUALDI",
  "RIMADESIO",
  "FLOS"
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
];
