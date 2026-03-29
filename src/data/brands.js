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
    origin: "Maranello, Olaszország",
    blurb: "Ikonikus verseny-DNS időtlen utcai dizájnnal.",
    accent: "from-[#162521] to-[#3C474B]",
    logo: ferrariLogo,
  },
  {
    slug: "porsche",
    name: "Porsche",
    origin: "Stuttgart, Németország",
    blurb: "Precíz mérnöki munka és legendás endurance verseny teljseítmény.",
    accent: "from-[#3C474B] to-[#162521]",
    logo: porscheLogo,
  },
  {
    slug: "lamborghini",
    name: "Lamborghini",
    origin: "Sant'Agata, Olaszország",
    blurb: "Merész sziluettek, drámai arányok, tiszta teljesítmény.",
    accent: "from-[#3C474B] via-[#88A2AA] to-[#162521]",
    logo: lamborghiniLogo,
  },
  {
    slug: "mercedes",
    name: "Mercedes",
    origin: "Stuttgart, Németország",
    blurb: "Prémium örökség és precíz innováció egyben.",
    accent: "from-[#88A2AA] to-[#3C474B]",
    logo: mercedesLogo,
  },
  {
    slug: "bmw",
    name: "BMW",
    origin: "München, Németország",
    blurb: "Vezetőközpontú dinamika motorsport örökséggel.",
    accent: "from-[#162521] via-[#3C474B] to-[#88A2AA]",
    logo: bmwLogo,
  },
  {
    slug: "mclaren",
    name: "McLaren",
    origin: "Woking, Egyesült Királyság",
    blurb: "Könnyűsúlyú felépítés és pályáról örökölt aerodinamika.",
    accent: "from-[#3C474B] to-[#162521]",
    logo: mclarenLogo,
  },
];
