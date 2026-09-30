export type CosmicIdea = {
  title: string;
  category: string;
  scale: string;
  image: string;
  alt: string;
  description: string;
  trivia: string;
  experiment: string;
};

export const universeStats = [
  { value: "13.8B", label: "years since the hot, dense early universe began expanding" },
  { value: "2T+", label: "possible galaxies across the observable universe" },
  { value: "95%", label: "of cosmic content appears to be dark matter and dark energy" },
  { value: "1", label: "known planet with confirmed life, so far: Earth" }
];

export const cosmicIdeas: CosmicIdea[] = [
  {
    title: "Gravity Builds the Cosmic Web",
    category: "Structure",
    scale: "Universe-wide",
    image: "/images/cosmic-web.svg",
    alt: "A glowing network of galaxy filaments across deep space",
    description:
      "Gravity pulls matter into long filaments and dense knots. Galaxies tend to form along this web, while enormous voids open between the strands.",
    trivia:
      "The largest structures are so vast that light can take hundreds of millions of years to cross them.",
    experiment:
      "Map nearby galaxies as dots, then connect crowded regions to see how web-like structure emerges."
  },
  {
    title: "Stars Are Element Forges",
    category: "Stars",
    scale: "Solar systems",
    image: "/images/star-forge.svg",
    alt: "A bright young star surrounded by swirling gas and dust",
    description:
      "Stars shine because fusion presses light atoms into heavier ones. Massive stars later explode and scatter many of the ingredients for planets, oceans, and life.",
    trivia:
      "The calcium in bones and iron in blood came from earlier generations of stars.",
    experiment:
      "Create a star life-cycle display that compares low-mass stars, Sun-like stars, and massive stars."
  },
  {
    title: "Black Holes Curve Reality",
    category: "Relativity",
    scale: "Extreme gravity",
    image: "/images/black-hole.svg",
    alt: "A black hole with a glowing accretion disk bending around it",
    description:
      "When enough mass is packed into a small region, spacetime curves so strongly that even light cannot escape from inside the event horizon.",
    trivia:
      "A black hole can be physically small but still contain millions or billions of Suns worth of mass.",
    experiment:
      "Use a stretched fabric model with marbles to show how paths bend around a massive object."
  },
  {
    title: "Dark Matter Leaves Footprints",
    category: "Mystery",
    scale: "Galaxies",
    image: "/images/dark-matter.svg",
    alt: "A spiral galaxy wrapped in a subtle invisible halo",
    description:
      "Dark matter does not glow, but its gravity changes how galaxies rotate and how light bends around galaxy clusters.",
    trivia:
      "Most of a galaxy's mass may sit in a wide halo that cannot be seen directly.",
    experiment:
      "Compare expected and observed galaxy rotation curves to infer unseen mass."
  },
  {
    title: "Expansion Stretches Space",
    category: "Cosmology",
    scale: "Deep time",
    image: "/images/expansion.svg",
    alt: "Galaxies moving apart as space expands between them",
    description:
      "Distant galaxies are not simply flying through space; the space between galaxy groups is expanding, stretching light toward redder wavelengths.",
    trivia:
      "The farther a typical galaxy is from us, the faster it appears to recede because more expanding space lies between us.",
    experiment:
      "Put dots on a balloon and inflate it to model how every dot sees other dots moving away."
  },
  {
    title: "Exoplanets Broaden the Search",
    category: "Life",
    scale: "Planetary systems",
    image: "/images/exoplanet.svg",
    alt: "A rocky exoplanet crossing in front of a warm star",
    description:
      "Planets orbit many other stars. Astronomers find them by watching stars wobble or dim, then study atmospheres for clues about climate and chemistry.",
    trivia:
      "Thousands of exoplanets are confirmed, including worlds unlike anything in our solar system.",
    experiment:
      "Graph a star's brightness over time and identify the dip caused by a planet transit."
  }
];
