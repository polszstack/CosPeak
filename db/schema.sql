CREATE TABLE cosmic_ideas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  category VARCHAR(60) NOT NULL,
  scale_label VARCHAR(80) NOT NULL,
  image_path VARCHAR(255) NOT NULL,
  alt_text VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  trivia TEXT NOT NULL,
  experiment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cosmic_ideas
  (title, category, scale_label, image_path, alt_text, description, trivia, experiment)
VALUES
  ('Gravity Builds the Cosmic Web', 'Structure', 'Universe-wide', '/images/cosmic-web.svg', 'A glowing network of galaxy filaments across deep space', 'Gravity pulls matter into long filaments and dense knots. Galaxies tend to form along this web, while enormous voids open between the strands.', 'The largest structures are so vast that light can take hundreds of millions of years to cross them.', 'Map nearby galaxies as dots, then connect crowded regions to see how web-like structure emerges.'),
  ('Stars Are Element Forges', 'Stars', 'Solar systems', '/images/star-forge.svg', 'A bright young star surrounded by swirling gas and dust', 'Stars shine because fusion presses light atoms into heavier ones. Massive stars later explode and scatter many of the ingredients for planets, oceans, and life.', 'The calcium in bones and iron in blood came from earlier generations of stars.', 'Create a star life-cycle display that compares low-mass stars, Sun-like stars, and massive stars.'),
  ('Black Holes Curve Reality', 'Relativity', 'Extreme gravity', '/images/black-hole.svg', 'A black hole with a glowing accretion disk bending around it', 'When enough mass is packed into a small region, spacetime curves so strongly that even light cannot escape from inside the event horizon.', 'A black hole can be physically small but still contain millions or billions of Suns worth of mass.', 'Use a stretched fabric model with marbles to show how paths bend around a massive object.'),
  ('Dark Matter Leaves Footprints', 'Mystery', 'Galaxies', '/images/dark-matter.svg', 'A spiral galaxy wrapped in a subtle invisible halo', 'Dark matter does not glow, but its gravity changes how galaxies rotate and how light bends around galaxy clusters.', 'Most of a galaxy''s mass may sit in a wide halo that cannot be seen directly.', 'Compare expected and observed galaxy rotation curves to infer unseen mass.'),
  ('Expansion Stretches Space', 'Cosmology', 'Deep time', '/images/expansion.svg', 'Galaxies moving apart as space expands between them', 'Distant galaxies are not simply flying through space; the space between galaxy groups is expanding, stretching light toward redder wavelengths.', 'The farther a typical galaxy is from us, the faster it appears to recede because more expanding space lies between us.', 'Put dots on a balloon and inflate it to model how every dot sees other dots moving away.'),
  ('Exoplanets Broaden the Search', 'Life', 'Planetary systems', '/images/exoplanet.svg', 'A rocky exoplanet crossing in front of a warm star', 'Planets orbit many other stars. Astronomers find them by watching stars wobble or dim, then study atmospheres for clues about climate and chemistry.', 'Thousands of exoplanets are confirmed, including worlds unlike anything in our solar system.', 'Graph a star''s brightness over time and identify the dip caused by a planet transit.');
