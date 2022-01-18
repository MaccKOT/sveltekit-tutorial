// import db

export async function get({ params }) {
  // connect to db to fetch & parse data

  const guides = [
    {
      id: 1,
      title: '1985: The Day After',
      body: "The control of Big Brother (referring to George Orwell's novel 1984, hence the game's title) has been overthrown, and mankind is self-reliant again. The first task in achieving this is to find the required quantity of energy pods. Big Brother stored them on caverns under the surface of four planets, and it's your job to go and find them. You will have to negotiate through tight sections, using rotational controls where left and right changes the ship's direction and up and down change its speed. When you find a pod you must engage the ship's tractor beam to claim it.",
      imageUrl:
        'https://classicreload.com/sites/default/files/styles/game_image/public/c64-1985-the-day-after-screen.png',
    },
    {
      id: 2,
      title: '1942',
      body: "1942 is a vertically scrolling shoot 'em up made by Capcom that was released for the arcade in 1984. It was later ported to the NES, MSX, Amstrad CPC, ZX Spectrum, NEC PC-8801, Commodore 64 and Game Boy Color. It was included as part of Capcom Classics Collection for the Xbox and PlayStation 2 in 2005. 1942 is the first game in the 194x series, followed by 1943: The Battle of Midway. The NES Version was developed by Micronics.",
      imageUrl:
        'https://classicreload.com/sites/default/files/styles/game_image/public/1942-screen.png',
    },
    {
      id: 3,
      title: 'ACE: Air Combat Emulator',
      body: 'A huge enemy fleet has invaded the southern shore of the U.S. Dozens of tanks and helicopter gun-ships are rolling over Tampa, Florida and through Atlanta, Georgia. Squadrons of enemy fighters are swarming through the air over South Carolina and are heading for Washington, D.C. For the first time in more than 100 years, a foreign power is invading our proud land!',
      imageUrl:
        'https://classicreload.com/sites/default/files/styles/game_image/public/c64-ace-air-combat-emulator-screen.png',
    },
    {
      id: 4,
      title: 'Double Dragon',
      body: "Double Dragon (双截龍 or ダブルドラゴン?) is a classic beat 'em up video game series initially developed by Technos Japan Corporation, who also developed the Nekketsu Koha Kunio-kun series. The original game was designed by Yoshihisa Kishimoto, who originally conceived the game as a Kunio-kun sequel using the localized version (Renegade) as a basis. The game was heavily influenced by martial arts films, especially those of Bruce Lee's such as Enter the Dragon, with the post apocalyptic setting based on the popular anime Hokuto No Ken. The recently released Double Dragon Advance was planned by Muneki Ebinuma, who previously designed Super Double Dragon and was also involved in Double Dragon '95 as a fight choreographer.",
      imageUrl:
        'https://classicreload.com/sites/default/files/styles/game_image/public/c64-double-dragon-screenshot.png',
    },
    {
      id: 5,
      title: 'Elite',
      body: "Elite is a seminal space trading computer game, originally published by Acornsoft in 1984 for the BBC Micro and Acorn Electron computers. The game's title derives from one of the player's goals of raising their combat rating to the exalted heights of 'Elite.' It was written and developed by David Braben and Ian Bell, who had met while they were both undergraduates at Jesus College, Cambridge. Non-Acorn versions of the game were published by Firebird, Imagineer and Hybrid Technology.",
      imageUrl:
        'https://classicreload.com/sites/default/files/styles/game_image/public/c64-elite-screendhot.png?itok=BN6dLHIy',
    },
  ];

  const guide = guides.find((g) => g.id == params.id);

  if (guide) {
    return {
      status: 200,
      body: { guide },
    };
  }

  return {
    status: 404,
  };
}
