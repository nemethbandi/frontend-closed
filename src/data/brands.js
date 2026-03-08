import bmwLogo from "../assets/bmw-logo.svg";
import ferrariLogo from "../assets/ferrari-logo.svg";
import lamborghiniLogo from "../assets/lamborghini-logo.svg";
import mclarenLogo from "../assets/mclaren-logo.svg";
import mercedesLogo from "../assets/mercedes-logo.svg";
import porscheLogo from "../assets/porsche-logo.svg";

export const brands = [
  {
    slug: "ferrari",
    name: "Ferrari",
    origin: "Maranello, Italy",
    blurb: "Iconic racing DNA with timeless road-car design.",
    accent: "from-[#162521] to-[#3C474B]",
    logo: ferrariLogo,
  },
  {
    slug: "porsche",
    name: "Porsche",
    origin: "Stuttgart, Germany",
    blurb: "Precision engineering and endurance legend status.",
    accent: "from-[#3C474B] to-[#162521]",
    logo: porscheLogo,
  },
  {
    slug: "lamborghini",
    name: "Lamborghini",
    origin: "Sant'Agata, Italy",
    blurb: "Bold silhouettes, dramatic proportions, pure theater.",
    accent: "from-[#3C474B] via-[#88A2AA] to-[#162521]",
    logo: lamborghiniLogo,
  },
  {
    slug: "mercedes",
    name: "Mercedes",
    origin: "Stuttgart, Germany",
    blurb: "Luxury heritage fused with performance innovation.",
    accent: "from-[#88A2AA] to-[#3C474B]",
    logo: mercedesLogo,
  },
  {
    slug: "bmw",
    name: "BMW",
    origin: "Munich, Germany",
    blurb: "Driver-focused dynamics with motorsport lineage.",
    accent: "from-[#162521] via-[#3C474B] to-[#88A2AA]",
    logo: bmwLogo,
  },
  {
    slug: "mclaren",
    name: "McLaren",
    origin: "Woking, United Kingdom",
    blurb: "Lightweight engineering and track-bred aerodynamics.",
    accent: "from-[#3C474B] to-[#162521]",
    logo: mclarenLogo,
  },
];
