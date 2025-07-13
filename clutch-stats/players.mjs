const players = [
  {
    name: 'Tariq Maddox',
    age: 26,
    team: 'Denver Stormhawks',
    position: 'PG',
    height: "6'2\"",
    stats: {
      ppg: 18.4,
      rpg: 3.1,
      apg: 7.8,
      bpg: 0.2,
      spg: 1.9
    },
    image: './images/tariq-maddox.jpg',
    bio: 'Tariq Maddox is the heartbeat of the Denver Stormhawks. Known for his pinpoint vision and unshakeable calm under pressure, Tariq has become one of the most respected point guards in the league. Standing at 6\'2\", he\'s not the tallest player on the court, but his basketball IQ and leadership make him larger than life. Raised in a tough Philadelphia neighborhood, Tariq went undrafted out of a mid-major school and grinded his way through European leagues before earning a roster spot in Denver. He\'s become known for orchestrating complex offenses like a maestro, turning average players into threats.',
    featuredReason: 'Tariq led the league in assists for three consecutive weeks and posted a 20–20 double-double last night.'
  },
  {
    name: 'Jalen Reed',
    age: 24,
    team: 'Orlando Blaze',
    position: 'SG',
    height: "6'5\"",
    stats: {
      ppg: 21.0,
      rpg: 4.5,
      apg: 3.2,
      bpg: 0.5,
      spg: 1.4
    },
    image: './images/jalen-reed.jpg',
    bio: 'Jalen Reed is a natural-born scorer who can light up the scoreboard from anywhere on the court. With a silky-smooth jumper, creative finishes at the rim, and a deadly fadeaway, he\'s a problem for defenders on every possession. His quick first step and ability to change pace make him nearly impossible to guard one-on-one. A former top-5 draft pick, Jalen has embraced the pressure that comes with stardom and is now the undisputed face of the Blaze franchise.',
    featuredReason: 'Dropped 45 points in a single game and nailed a game-winner from the corner last week.'
  },
  {
    name: 'Malik Benson',
    age: 27,
    team: 'Seattle Comets',
    position: 'SF',
    height: "6'7\"",
    stats: {
      ppg: 16.7,
      rpg: 6.2,
      apg: 2.5,
      bpg: 0.8,
      spg: 1.1
    },
    image: './images/malik-benson.jpg',
    bio: 'Malik Benson is the definition of highlight-reel material. Known for thunderous dunks, insane verticals, and clutch chase-down blocks, he\'s a true athletic marvel. At 6\'7\", he combines length, speed, and strength to dominate both ends of the floor. Defensively, he regularly takes on the assignment of the opposing team\'s top scorer, and offensively, he\'s deadly slashing through the lane. Malik came up through the JUCO system before transferring to a Division I powerhouse, where he shocked scouts with his motor and work ethic.',
    featuredReason: 'Earned Player of the Week for a double-double and two highlight-reel dunks.'
  },
  {
    name: 'Darius Knox',
    age: 30,
    team: 'Chicago Sentinels',
    position: 'PF',
    height: "6'9\"",
    stats: {
      ppg: 14.3,
      rpg: 8.9,
      apg: 1.9,
      bpg: 1.3,
      spg: 0.7
    },
    image: './images/darius-knox.jpg',
    bio: 'A throwback to the old-school big man, Darius Knox has built a career on grit, fundamentals, and heart. At 6\'9\", Darius isn\'t the flashiest player, but his rebounding, screen-setting, and defensive instincts make him indispensable. Nicknamed "The Hammer" by fans, Darius thrives on doing the dirty work—diving for loose balls, boxing out elite centers, and banging in the post.',
    featuredReason: 'Recently passed 7,000 career rebounds and is a locker room leader.'
  },
  {
    name: 'Eli Vance',
    age: 29,
    team: 'Austin Rattlers',
    position: 'C',
    height: "7'1\"",
    stats: {
      ppg: 11.5,
      rpg: 11.2,
      apg: 1.3,
      bpg: 2.6,
      spg: 0.4
    },
    image: './images/eli-vance.jpg',
    bio: 'Eli Vance is a towering rim protector with the wingspan of a small aircraft and the instincts of a veteran chess master. At 7\'1\", his presence in the paint alters the behavior of entire offenses. Known for his shot-blocking prowess and rebounding dominance, Eli anchors the Austin Rattlers’ defense like a fortress.',
    featuredReason: 'Recorded a season-high 8 blocks and 18 rebounds in a single game.'
  },
  {
    name: 'Keon Cross',
    age: 25,
    team: 'Miami Cyclones',
    position: 'SF',
    height: "6'6\"",
    stats: {
      ppg: 19.1,
      rpg: 5.8,
      apg: 2.0,
      bpg: 0.6,
      spg: 1.5
    },
    image: './images/keon-cross.jpg',
    bio: 'Keon Cross is a smooth, confident scorer with a polished offensive toolkit. His mid-range jumper is textbook, his three-point shot is reliable, and his ability to finish through contact has improved each season. He thrives in transition and has become known for clutch performances, regularly hitting game-winners with ice in his veins.',
    featuredReason: 'Hit three buzzer-beaters this season and leads his team in efficiency.'
  },
  {
    name: 'Zion Hartley',
    age: 22,
    team: 'New York Guardians',
    position: 'SG',
    height: "6'4\"",
    stats: {
      ppg: 17.8,
      rpg: 3.7,
      apg: 4.1,
      bpg: 0.3,
      spg: 1.3
    },
    image: './images/zion-hartley.jpg',
    bio: 'At just 22, Zion Hartley is already being hailed as the future of the league. A dynamic ball handler with elite acceleration, Zion lives in the lane and constantly pressures defenses. His crafty dribbling, fearless drives, and ability to create space make him an offensive weapon.',
    featuredReason: 'Youngest player in the league with a 30–5–5 stat line this year.'
  },
  {
    name: 'Kendrick Rowe',
    age: 28,
    team: 'San Diego Burn',
    position: 'PG',
    height: "6'1\"",
    stats: {
      ppg: 13.6,
      rpg: 2.9,
      apg: 6.5,
      bpg: 0.1,
      spg: 2.0
    },
    image: './images/kendrick-rowe.jpg',
    bio: 'Kendrick Rowe is the kind of player every coach loves: tough, gritty, and reliable. He plays with relentless energy and is always one step ahead on defense, often picking pockets and diving for loose balls. His court vision and passing make him a trustworthy point guard.',
    featuredReason: 'Leads the league in steals per 36 minutes and had a 15-assist night.'
  },
  {
    name: 'Javon Briggs',
    age: 31,
    team: 'Phoenix Talons',
    position: 'PF',
    height: "6'10\"",
    stats: {
      ppg: 15.2,
      rpg: 9.0,
      apg: 2.2,
      bpg: 1.0,
      spg: 0.6
    },
    image: './images/javon-briggs.jpg',
    bio: 'Javon Briggs is a steady, experienced power forward with a fundamentally sound game and a veteran presence. With over a decade in the league, he’s seen every defensive scheme and knows how to pick his spots. Known for his reliable mid-range jumper, rebounding, and leadership, Javon mentors younger players and is an extension of the coach on the court.',
    featuredReason: 'Scored his 10,000th career point and was honored with a mid-season veteran award.'
  },
  {
    name: 'Niko Santiago',
    age: 23,
    team: 'Las Vegas Orbit',
    position: 'SF',
    height: "6'8\"",
    stats: {
      ppg: 20.5,
      rpg: 5.4,
      apg: 3.0,
      bpg: 0.7,
      spg: 1.2
    },
    image: './images/niko-santiago.jpg',
    bio: 'Niko Santiago is electric. Bursting onto the scene in just his second year, Niko has become a must-watch player thanks to his highlight dunks, step-back threes, and impossible finishes. At 6\'8\", he’s a matchup nightmare who can shoot over guards and blow past forwards.',
    featuredReason: 'Averaging 27 points over the last 5 games and voted into the All-Star game.'
  }
];
export default players;