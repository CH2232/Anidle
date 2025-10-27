const characters = [
    // Provided List (20)
    {
        name: "Monkey D. Luffy",
        anime: "One Piece",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1997,
    },
    {
        name: "Naruto Uzumaki",
        anime: "Naruto",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 1999,
    },
    {
        name: "Son Goku",
        anime: "Dragon Ball",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1984,
    },
    {
        name: "Sailor Moon (Usagi Tsukino)",
        anime: "Sailor Moon",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 1991,
    },
    {
        name: "Eren Yeager",
        anime: "Attack on Titan",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2009,
    },
    {
        name: "Anya Forger",
        anime: "Spy x Family",
        gender: "Female",
        hairColor: "Pink",
        firstAppearanceYear: 2019,
    },
    {
        name: "Gojo Satoru",
        anime: "Jujutsu Kaisen",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2018,
    },
    {
        name: "Nezuko Kamado",
        anime: "Demon Slayer",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2016,
    },
    {
        name: "Light Yagami",
        anime: "Death Note",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2003,
    },
    {
        name: "Asuka Langley Soryu",
        anime: "Neon Genesis Evangelion",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 1995,
    },
    {
        name: "Levi Ackerman",
        anime: "Attack on Titan",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2010, // Manga chapter 10
    },
    {
        name: "Rem",
        anime: "Re:Zero",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 2014, // Light Novel Vol 2
    },
    {
        name: "Saitama",
        anime: "One-Punch Man",
        gender: "Male",
        hairColor: "Bald",
        firstAppearanceYear: 2009, // Webcomic
    },
    {
        name: "Mikasa Ackerman",
        anime: "Attack on Titan",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2009,
    },
    {
        name: "Edward Elric",
        anime: "Fullmetal Alchemist",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2001,
    },
    {
        name: "Tanjiro Kamado",
        anime: "Demon Slayer",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 2016,
    },
    {
        name: "Violet Evergarden",
        anime: "Violet Evergarden",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2015, // Light Novel
    },
    {
        name: "Killua Zoldyck",
        anime: "Hunter x Hunter",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1998,
    },
    {
        name: "Spike Spiegel",
        anime: "Cowboy Bebop",
        gender: "Male",
        hairColor: "Green",
        firstAppearanceYear: 1997, // Manga adaptation started before anime
    },
    {
        name: "Makima",
        anime: "Chainsaw Man",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2018,
    },

    // --- Added Characters ---

    // One Piece (Continued)
    {
        name: "Roronoa Zoro",
        anime: "One Piece",
        gender: "Male",
        hairColor: "Green",
        firstAppearanceYear: 1997,
    },
    {
        name: "Nami",
        anime: "One Piece",
        gender: "Female",
        hairColor: "Orange",
        firstAppearanceYear: 1997,
    },
    {
        name: "Sanji",
        anime: "One Piece",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 1998,
    },
    {
        name: "Tony Tony Chopper",
        anime: "One Piece",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2000,
    },
    {
        name: "Nico Robin",
        anime: "One Piece",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2001,
    },
    {
        name: "Trafalgar D. Water Law",
        anime: "One Piece",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2008,
    },
    {
        name: "Portgas D. Ace",
        anime: "One Piece",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2000,
    },

    // Naruto (Continued)
    {
        name: "Sasuke Uchiha",
        anime: "Naruto",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1999,
    },
    {
        name: "Sakura Haruno",
        anime: "Naruto",
        gender: "Female",
        hairColor: "Pink",
        firstAppearanceYear: 1999,
    },
    {
        name: "Kakashi Hatake",
        anime: "Naruto",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1999,
    },
    {
        name: "Itachi Uchiha",
        anime: "Naruto",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2002,
    },
    {
        name: "Jiraiya",
        anime: "Naruto",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2001,
    },
    {
        name: "Gaara",
        anime: "Naruto",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 2000,
    },
    {
        name: "Hinata Hyuga",
        anime: "Naruto",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 2000,
    },

    // Dragon Ball (Continued)
    {
        name: "Vegeta",
        anime: "Dragon Ball",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1988,
    },
    {
        name: "Gohan",
        anime: "Dragon Ball",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1988,
    },
    {
        name: "Trunks",
        anime: "Dragon Ball",
        gender: "Male",
        hairColor: "Purple",
        firstAppearanceYear: 1991,
    },
    {
        name: "Piccolo",
        anime: "Dragon Ball",
        gender: "Male",
        hairColor: "Bald",
        firstAppearanceYear: 1988,
    },
    {
        name: "Frieza",
        anime: "Dragon Ball",
        gender: "Male",
        hairColor: "None",
        firstAppearanceYear: 1989,
    },
    {
        name: "Bulma",
        anime: "Dragon Ball",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 1984,
    },

    // Bleach
    {
        name: "Ichigo Kurosaki",
        anime: "Bleach",
        gender: "Male",
        hairColor: "Orange",
        firstAppearanceYear: 2001,
    },
    {
        name: "Rukia Kuchiki",
        anime: "Bleach",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2001,
    },
    {
        name: "Sosuke Aizen",
        anime: "Bleach",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2002,
    },
    {
        name: "Toshiro Hitsugaya",
        anime: "Bleach",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2002,
    },
    {
        name: "Kenpachi Zaraki",
        anime: "Bleach",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2002,
    },
    {
        name: "Ulquiorra Cifer",
        anime: "Bleach",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2005,
    },

    // My Hero Academia
    {
        name: "Izuku Midoriya",
        anime: "My Hero Academia",
        gender: "Male",
        hairColor: "Green",
        firstAppearanceYear: 2014,
    },
    {
        name: "Katsuki Bakugo",
        anime: "My Hero Academia",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2014,
    },
    {
        name: "Shoto Todoroki",
        anime: "My Hero Academia",
        gender: "Male",
        hairColor: "White/Red",
        firstAppearanceYear: 2014,
    },
    {
        name: "All Might (Toshinori Yagi)",
        anime: "My Hero Academia",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2014,
    },
    {
        name: "Ochaco Uraraka",
        anime: "My Hero Academia",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2014,
    },
    {
        name: "Shota Aizawa",
        anime: "My Hero Academia",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2014,
    },
    {
        name: "Tomura Shigaraki",
        anime: "My Hero Academia",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2014,
    },

    // JoJo's Bizarre Adventure
    {
        name: "Jonathan Joestar",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 1987,
    },
    {
        name: "Joseph Joestar",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 1987,
    },
    {
        name: "Jotaro Kujo",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1989,
    },
    {
        name: "Josuke Higashikata",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1992,
    },
    {
        name: "Giorno Giovanna",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 1995,
    },
    {
        name: "Jolyne Cujoh",
        anime: "JoJo's Bizarre Adventure",
        gender: "Female",
        hairColor: "Green/Blonde",
        firstAppearanceYear: 2000,
    },
    {
        name: "Dio Brando",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 1987,
    },
    {
        name: "Rohan Kishibe",
        anime: "JoJo's Bizarre Adventure",
        gender: "Male",
        hairColor: "Green",
        firstAppearanceYear: 1992,
    },

    // Hunter x Hunter (Continued)
    {
        name: "Gon Freecss",
        anime: "Hunter x Hunter",
        gender: "Male",
        hairColor: "Green",
        firstAppearanceYear: 1998,
    },
    {
        name: "Kurapika",
        anime: "Hunter x Hunter",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 1998,
    },
    {
        name: "Leorio Paradinight",
        anime: "Hunter x Hunter",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1998,
    },
    {
        name: "Hisoka Morow",
        anime: "Hunter x Hunter",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 1998,
    },
    {
        name: "Chrollo Lucilfer",
        anime: "Hunter x Hunter",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1999,
    },

    // Jujutsu Kaisen (Continued)
    {
        name: "Yuji Itadori",
        anime: "Jujutsu Kaisen",
        gender: "Male",
        hairColor: "Pink",
        firstAppearanceYear: 2018,
    },
    {
        name: "Megumi Fushiguro",
        anime: "Jujutsu Kaisen",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2018,
    },
    {
        name: "Nobara Kugisaki",
        anime: "Jujutsu Kaisen",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2018,
    },
    {
        name: "Ryomen Sukuna",
        anime: "Jujutsu Kaisen",
        gender: "Male",
        hairColor: "Pink",
        firstAppearanceYear: 2018,
    },
    {
        name: "Kento Nanami",
        anime: "Jujutsu Kaisen",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2018,
    },
    {
        name: "Toji Fushiguro",
        anime: "Jujutsu Kaisen",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2020,
    },

    // Demon Slayer (Continued)
    {
        name: "Zenitsu Agatsuma",
        anime: "Demon Slayer",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2016,
    },
    {
        name: "Inosuke Hashibira",
        anime: "Demon Slayer",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2016,
    },
    {
        name: "Giyu Tomioka",
        anime: "Demon Slayer",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2016,
    },
    {
        name: "Kyojuro Rengoku",
        anime: "Demon Slayer",
        gender: "Male",
        hairColor: "Yellow/Red",
        firstAppearanceYear: 2017,
    },
    {
        name: "Shinobu Kocho",
        anime: "Demon Slayer",
        gender: "Female",
        hairColor: "Black/Purple",
        firstAppearanceYear: 2017,
    },
    {
        name: "Muzan Kibutsuji",
        anime: "Demon Slayer",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2016,
    },

    // Chainsaw Man (Continued)
    {
        name: "Denji",
        anime: "Chainsaw Man",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2018,
    },
    {
        name: "Power",
        anime: "Chainsaw Man",
        gender: "Female",
        hairColor: "Blonde/Pink",
        firstAppearanceYear: 2018,
    },
    {
        name: "Aki Hayakawa",
        anime: "Chainsaw Man",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2018,
    },

    // Spy x Family (Continued)
    {
        name: "Loid Forger",
        anime: "Spy x Family",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2019,
    },
    {
        name: "Yor Forger",
        anime: "Spy x Family",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2019,
    },

    // Fullmetal Alchemist (Continued)
    {
        name: "Alphonse Elric",
        anime: "Fullmetal Alchemist",
        gender: "Male",
        hairColor: "None", // Armor
        firstAppearanceYear: 2001,
    },
    {
        name: "Roy Mustang",
        anime: "Fullmetal Alchemist",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2001,
    },
    {
        name: "Winry Rockbell",
        anime: "Fullmetal Alchemist",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2001,
    },
    {
        name: "Riza Hawkeye",
        anime: "Fullmetal Alchemist",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2002,
    },

    // Death Note (Continued)
    {
        name: "L",
        anime: "Death Note",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2004,
    },
    {
        name: "Ryuk",
        anime: "Death Note",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2003,
    },
    {
        name: "Misa Amane",
        anime: "Death Note",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2004,
    },

    // Code Geass
    {
        name: "Lelouch vi Britannia",
        anime: "Code Geass",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2006, // Anime-original, manga followed
    },
    {
        name: "C.C.",
        anime: "Code Geass",
        gender: "Female",
        hairColor: "Green",
        firstAppearanceYear: 2006,
    },
    {
        name: "Suzaku Kururugi",
        anime: "Code Geass",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2006,
    },
    {
        name: "Kallen Stadtfeld",
        anime: "Code Geass",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2006,
    },

    // Neon Genesis Evangelion (Continued)
    {
        name: "Shinji Ikari",
        anime: "Neon Genesis Evangelion",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 1994, // Manga
    },
    {
        name: "Rei Ayanami",
        anime: "Neon Genesis Evangelion",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 1994,
    },
    {
        name: "Kaworu Nagisa",
        anime: "Neon Genesis Evangelion",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1996, // Anime episode 24
    },

    // Cowboy Bebop (Continued)
    {
        name: "Faye Valentine",
        anime: "Cowboy Bebop",
        gender: "Female",
        hairColor: "Purple",
        firstAppearanceYear: 1997,
    },
    {
        name: "Jet Black",
        anime: "Cowboy Bebop",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1997,
    },
    {
        name: "Ed (Edward Wong Hau Pepelu Tivrusky IV)",
        anime: "Cowboy Bebop",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 1998, // Anime episode 9
    },
    
    // Attack on Titan (Continued)
    {
        name: "Armin Arlert",
        anime: "Attack on Titan",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2009,
    },
    {
        name: "Reiner Braun",
        anime: "Attack on Titan",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2009,
    },
    {
        name: "Zeke Yeager",
        anime: "Attack on Titan",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2015,
    },
    {
        name: "Historia Reiss",
        anime: "Attack on Titan",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2010,
    },
    
    // Tokyo Ghoul
    {
        name: "Ken Kaneki",
        anime: "Tokyo Ghoul",
        gender: "Male",
        hairColor: "Black/White",
        firstAppearanceYear: 2011,
    },
    {
        name: "Touka Kirishima",
        anime: "Tokyo Ghoul",
        gender: "Female",
        hairColor: "Purple",
        firstAppearanceYear: 2011,
    },
    {
        name: "Juuzou Suzuya",
        anime: "Tokyo Ghoul",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2012,
    },
    
    // Steins;Gate
    {
        name: "Rintaro Okabe",
        anime: "Steins;Gate",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2009, // Visual Novel
    },
    {
        name: "Kurisu Makise",
        anime: "Steins;Gate",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2009,
    },
    {
        name: "Mayuri Shiina",
        anime: "Steins;Gate",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2009,
    },

    // Sword Art Online
    {
        name: "Kirito (Kazuto Kirigaya)",
        anime: "Sword Art Online",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2009, // Light Novel
    },
    {
        name: "Asuna (Asuna Yuuki)",
        anime: "Sword Art Online",
        gender: "Female",
        hairColor: "Orange",
        firstAppearanceYear: 2009,
    },
    {
        name: "Sinon (Shino Asada)",
        anime: "Sword Art Online",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 2011, // Light Novel Vol 5
    },

    // Re:Zero (Continued)
    {
        name: "Subaru Natsuki",
        anime: "Re:Zero",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2012, // Web Novel
    },
    {
        name: "Emilia",
        anime: "Re:Zero",
        gender: "Female",
        hairColor: "Silver",
        firstAppearanceYear: 2012,
    },
    {
        name: "Ram",
        anime: "Re:Zero",
        gender: "Female",
        hairColor: "Pink",
        firstAppearanceYear: 2014, // Light Novel Vol 2
    },

    // Berserk
    {
        name: "Guts",
        anime: "Berserk",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1989,
    },
    {
        name: "Griffith",
        anime: "Berserk",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1990,
    },
    {
        name: "Casca",
        anime: "Berserk",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 1990,
    },
    
    // Vinland Saga
    {
        name: "Thorfinn",
        anime: "Vinland Saga",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2005,
    },
    {
        name: "Askeladd",
        anime: "Vinland Saga",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2005,
    },
    {
        name: "Canute",
        anime: "Vinland Saga",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2006,
    },
    
    // Mob Psycho 100
    {
        name: "Shigeo Kageyama (Mob)",
        anime: "Mob Psycho 100",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2012,
    },
    {
        name: "Arataka Reigen",
        anime: "Mob Psycho 100",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2012,
    },
    {
        name: "Dimple",
        anime: "Mob Psycho 100",
        gender: "Male",
        hairColor: "None", // Spirit
        firstAppearanceYear: 2012,
    },

    // One-Punch Man (Continued)
    {
        name: "Genos",
        anime: "One-Punch Man",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2009,
    },
    {
        name: "Tatsumaki",
        anime: "One-Punch Man",
        gender: "Female",
        hairColor: "Green",
        firstAppearanceYear: 2012, // Murata Manga Remake
    },
    {
        name: "Garou",
        anime: "One-Punch Man",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2013,
    },
    
    // Gintama
    {
        name: "Gintoki Sakata",
        anime: "Gintama",
        gender: "Male",
        hairColor: "Silver",
        firstAppearanceYear: 2003,
    },
    {
        name: "Shinpachi Shimura",
        anime: "Gintama",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2003,
    },
    {
        name: "Kagura",
        anime: "Gintama",
        gender: "Female",
        hairColor: "Orange",
        firstAppearanceYear: 2003,
    },
    {
        name: "Toshiro Hijikata",
        anime: "Gintama",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2004,
    },
    {
        name: "Sougo Okita",
        anime: "Gintama",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2004,
    },
    
    // Fairy Tail
    {
        name: "Natsu Dragneel",
        anime: "Fairy Tail",
        gender: "Male",
        hairColor: "Pink",
        firstAppearanceYear: 2006,
    },
    {
        name: "Lucy Heartfilia",
        anime: "Fairy Tail",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2006,
    },
    {
        name: "Gray Fullbuster",
        anime: "Fairy Tail",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2006,
    },
    {
        name: "Erza Scarlet",
        anime: "Fairy Tail",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2006,
    },
    
    // Haikyuu!!
    {
        name: "Shoyo Hinata",
        anime: "Haikyuu!!",
        gender: "Male",
        hairColor: "Orange",
        firstAppearanceYear: 2012,
    },
    {
        name: "Tobio Kageyama",
        anime: "Haikyuu!!",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2012,
    },
    {
        name: "Toru Oikawa",
        anime: "Haikyuu!!",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2012,
    },
    {
        name: "Kenma Kozume",
        anime: "Haikyuu!!",
        gender: "Male",
        hairColor: "Blonde/Black",
        firstAppearanceYear: 2012,
    },
    
    // Black Clover
    {
        name: "Asta",
        anime: "Black Clover",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2015,
    },
    {
        name: "Yuno",
        anime: "Black Clover",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2015,
    },
    {
        name: "Yami Sukehiro",
        anime: "Black Clover",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2015,
    },
    {
        name: "Noelle Silva",
        anime: "Black Clover",
        gender: "Female",
        hairColor: "Silver",
        firstAppearanceYear: 2015,
    },
    
    // Dr. Stone
    {
        name: "Senku Ishigami",
        anime: "Dr. Stone",
        gender: "Male",
        hairColor: "White/Green",
        firstAppearanceYear: 2017,
    },
    {
        name: "Taiju Oki",
        anime: "Dr. Stone",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2017,
    },
    {
        name: "Kohaku",
        anime: "Dr. Stone",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2017,
    },

    // Tokyo Revengers
    {
        name: "Takemichi Hanagaki",
        anime: "Tokyo Revengers",
        gender: "Male",
        hairColor: "Blonde/Black",
        firstAppearanceYear: 2017,
    },
    {
        name: "Manjiro Sano (Mikey)",
        anime: "Tokyo Revengers",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2017,
    },
    {
        name: "Ken Ryuguji (Draken)",
        anime: "Tokyo Revengers",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2017,
    },
    
    // Kaguya-sama: Love is War
    {
        name: "Kaguya Shinomiya",
        anime: "Kaguya-sama: Love is War",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2015,
    },
    {
        name: "Miyuki Shirogane",
        anime: "Kaguya-sama: Love is War",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2015,
    },
    {
        name: "Chika Fujiwara",
        anime: "Kaguya-sama: Love is War",
        gender: "Female",
        hairColor: "Pink",
        firstAppearanceYear: 2015,
    },

    // The Promised Neverland
    {
        name: "Emma",
        anime: "The Promised Neverland",
        gender: "Female",
        hairColor: "Orange",
        firstAppearanceYear: 2016,
    },
    {
        name: "Norman",
        anime: "The Promised Neverland",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2016,
    },
    {
        name: "Ray",
        anime: "The Promised Neverland",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2016,
    },

    // That Time I Got Reincarnated as a Slime
    {
        name: "Rimuru Tempest",
        anime: "That Time I Got Reincarnated as a Slime",
        gender: "Male", // Genderless, but was Male
        hairColor: "Blue",
        firstAppearanceYear: 2013, // Web Novel
    },
    {
        name: "Milim Nava",
        anime: "That Time I Got Reincarnated as a Slime",
        gender: "Female",
        hairColor: "Pink",
        firstAppearanceYear: 2014, // Light Novel Vol 2
    },

    // Konosuba
    {
        name: "Kazuma Sato",
        anime: "Konosuba",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2012, // Web Novel
    },
    {
        name: "Aqua",
        anime: "Konosuba",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 2012,
    },
    {
        name: "Megumin",
        anime: "Konosuba",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2012,
    },
    {
        name: "Darkness (Lalatina Dustiness Ford)",
        anime: "Konosuba",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2012,
    },
    
    // Bungo Stray Dogs
    {
        name: "Atsushi Nakajima",
        anime: "Bungo Stray Dogs",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 2012,
    },
    {
        name: "Osamu Dazai",
        anime: "Bungo Stray Dogs",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2012,
    },
    {
        name: "Chuuya Nakahara",
        anime: "Bungo Stray Dogs",
        gender: "Male",
        hairColor: "Orange",
        firstAppearanceYear: 2013,
    },
    
    // Fire Force
    {
        name: "Shinra Kusakabe",
        anime: "Fire Force",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2015,
    },
    {
        name: "Arthur Boyle",
        anime: "Fire Force",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2015,
    },
    {
        name: "Maki Oze",
        anime: "Fire Force",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2015,
    },
    
    // Noragami
    {
        name: "Yato",
        anime: "Noragami",
        gender: "Male",
        hairColor: "Black/Purple",
        firstAppearanceYear: 2010,
    },
    {
        name: "Hiyori Iki",
        anime: "Noragami",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2010,
    },
    {
        name: "Yukine",
        anime: "Noragami",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2011,
    },

    // Rurouni Kenshin
    {
        name: "Kenshin Himura",
        anime: "Rurouni Kenshin",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 1994,
    },
    {
        name: "Kaoru Kamiya",
        anime: "Rurouni Kenshin",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 1994,
    },
    {
        name: "Sanosuke Sagara",
        anime: "Rurouni Kenshin",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 1994,
    },
    {
        name: "Makoto Shishio",
        anime: "Rurouni Kenshin",
        gender: "Male",
        hairColor: "None", // Covered in bandages
        firstAppearanceYear: 1995,
    },

    // Yu Yu Hakusho
    {
        name: "Yusuke Urameshi",
        anime: "Yu Yu Hakusho",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1990,
    },
    {
        name: "Kazuma Kuwabara",
        anime: "Yu Yu Hakusho",
        gender: "Male",
        hairColor: "Orange",
        firstAppearanceYear: 1990,
    },
    {
        name: "Kurama",
        anime: "Yu Yu Hakusho",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 1991,
    },
    {
        name: "Hiei",
        anime: "Yu Yu Hakusho",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1991,
    },

    // Trigun
    {
        name: "Vash the Stampede",
        anime: "Trigun",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 1995,
    },
    {
        name: "Nicholas D. Wolfwood",
        anime: "Trigun",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1996,
    },
    
    // Gurren Lagann
    {
        name: "Simon",
        anime: "Gurren Lagann",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2007, // Anime-original
    },
    {
        name: "Kamina",
        anime: "Gurren Lagann",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2007,
    },
    {
        name: "Yoko Littner",
        anime: "Gurren Lagann",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2007,
    },
    
    // Blue Lock
    {
        name: "Yoichi Isagi",
        anime: "Blue Lock",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2018,
    },
    {
        name: "Meguru Bachira",
        anime: "Blue Lock",
        gender: "Male",
        hairColor: "Black/Yellow",
        firstAppearanceYear: 2018,
    },
    {
        name: "Rin Itoshi",
        anime: "Blue Lock",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2019,
    },
    
    // Chainsaw Man - Part 2
    {
        name: "Asa Mitaka",
        anime: "Chainsaw Man",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2022,
    },
    
    // Frieren: Beyond Journey's End
    {
        name: "Frieren",
        anime: "Frieren: Beyond Journey's End",
        gender: "Female",
        hairColor: "White",
        firstAppearanceYear: 2020,
    },
    {
        name: "Fern",
        anime: "Frieren: Beyond Journey's End",
        gender: "Female",
        hairColor: "Purple",
        firstAppearanceYear: 2020,
    },
    {
        name: "Stark",
        anime: "Frieren: Beyond Journey's End",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 2020,
    },

    // Oshi no Ko
    {
        name: "Ai Hoshino",
        anime: "Oshi no Ko",
        gender: "Female",
        hairColor: "Purple",
        firstAppearanceYear: 2020,
    },
    {
        name: "Aqua Hoshino",
        anime: "Oshi no Ko",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2020,
    },
    {
        name: "Ruby Hoshino",
        anime: "Oshi no Ko",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2020,
    },
    {
        name: "Kana Arima",
        anime: "Oshi no Ko",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2020,
    },
    
    // More Classics & Popular Series
    {
        name: "Kenshiro",
        anime: "Fist of the North Star",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1983,
    },
    {
        name: "Alucard",
        anime: "Hellsing",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1997,
    },
    {
        name: "Saber (Artoria Pendragon)",
        anime: "Fate/stay night",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2004, // Visual Novel
    },
    {
        name: "Gilgamesh",
        anime: "Fate/stay night",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2004,
    },
    {
        name: "Shirou Emiya",
        anime: "Fate/stay night",
        gender: "Male",
        hairColor: "Red",
        firstAppearanceYear: 2004,
    },
    {
        name: "Rin Tohsaka",
        anime: "Fate/stay night",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2004,
    },
    {
        name: "Inuyasha",
        anime: "Inuyasha",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1996,
    },
    {
        name: "Kagome Higurashi",
        anime: "Inuyasha",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 1996,
    },
    {
        name: "Sesshomaru",
        anime: "Inuyasha",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1997,
    },
    {
        name: "Motoko Kusanagi",
        anime: "Ghost in the Shell",
        gender: "Female",
        hairColor: "Purple",
        firstAppearanceYear: 1989,
    },
    {
        name: "Haruhi Suzumiya",
        anime: "The Melancholy of Haruhi Suzumiya",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2003, // Light Novel
    },
    {
        name: "Kyon",
        anime: "The Melancholy of Haruhi Suzumiya",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2003,
    },
    {
        name: "Yagami Taichi",
        anime: "Digimon Adventure",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 1999, // Anime
    },
    {
        name: "Agumon",
        anime: "Digimon Adventure",
        gender: "Male",
        hairColor: "None",
        firstAppearanceYear: 1999,
    },
    {
        name: "Ash Ketchum",
        anime: "Pokémon",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1997, // Anime
    },
    {
        name: "Pikachu",
        anime: "Pokémon",
        gender: "Male",
        hairColor: "Yellow",
        firstAppearanceYear: 1996, // Game
    },
    {
        name: "Yugi Muto",
        anime: "Yu-Gi-Oh!",
        gender: "Male",
        hairColor: "Multi-colored",
        firstAppearanceYear: 1996,
    },
    {
        name: "Seto Kaiba",
        anime: "Yu-Gi-Oh!",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 1996,
    },
    {
        name: "Doraemon",
        anime: "Doraemon",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 1969,
    },
    {
        name: "Astro Boy",
        anime: "Astro Boy",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1952,
    },
    {
        name: "Shotaro Kaneda",
        anime: "Akira",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1982,
    },
    {
        name: "Tetsuo Shima",
        anime: "Akira",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1982,
    },
    {
        name: "Clare",
        anime: "Claymore",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2001,
    },
    {
        name: "Teresa",
        anime: "Claymore",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2003,
    },
    {
        name: "Isaac 'Zack' Foster",
        anime: "Angels of Death",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2015, // Game
    },
    {
        name: "Rachel Gardner",
        anime: "Angels of Death",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2015,
    },
    {
        name: "Tohru Honda",
        anime: "Fruits Basket",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 1998,
    },
    {
        name: "Kyo Sohma",
        anime: "Fruits Basket",
        gender: "Male",
        hairColor: "Orange",
        firstAppearanceYear: 1998,
    },
    {
        name: "Yuki Sohma",
        anime: "Fruits Basket",
        gender: "Male",
        hairColor: "Grey",
        firstAppearanceYear: 1998,
    },
    {
        name: "Shigeo Tokuda", // Just kidding
        name: "Shinichi Kudo",
        anime: "Detective Conan",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1994,
    },
    {
        name: "Ran Mouri",
        anime: "Detective Conan",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 1994,
    },
    {
        name: "Kaito Kid",
        anime: "Magic Kaito / Detective Conan",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1987, // Magic Kaito manga
    },
    {
        name: "Ciel Phantomhive",
        anime: "Black Butler",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2006,
    },
    {
        name: "Sebastian Michaelis",
        anime: "Black Butler",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2006,
    },
    {
        name: "Natsuhi Ushiromiya", // Just kidding
        name: "Kyoko Mogami",
        anime: "Skip Beat!",
        gender: "Female",
        hairColor: "Brown/Orange",
        firstAppearanceYear: 2002,
    },
    {
        name: "Ren Tsuruga",
        anime: "Skip Beat!",
        gender: "Male",
        hairColor: "Brown/Black",
        firstAppearanceYear: 2002,
    },
    {
        name: "Nana Osaki",
        anime: "Nana",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2000,
    },
    {
        name: "Nana Komatsu",
        anime: "Nana",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2000,
    },
    {
        name: "Mugen",
        anime: "Samurai Champloo",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2004, // Anime-original
    },
    {
        name: "Jin",
        anime: "Samurai Champloo",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2004,
    },
    {
        name: "Fuu",
        anime: "Samurai Champloo",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2004,
    },
    {
        name: "Erin",
        anime: "Kemono no Souja Erin",
        gender: "Female",
        hairColor: "Green",
        firstAppearanceYear: 2006, // Novel
    },
    {
        name: "Ginko",
        anime: "Mushishi",
        gender: "Male",
        hairColor: "White",
        firstAppearanceYear: 1999,
    },
    {
        name: "Vivy",
        anime: "Vivy: Fluorite Eye's Song",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 2021, // Anime-original
    },
    {
        name: "Bojji",
        anime: "Ranking of Kings",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2017,
    },
    {
        name: "Kage",
        anime: "Ranking of Kings",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2017,
    },
    {
        name: "Phosphophyllite",
        anime: "Land of the Lustrous",
        gender: "Agender",
        hairColor: "Mint Green",
        firstAppearanceYear: 2012,
    },
    {
        name: "Yona",
        anime: "Yona of the Dawn",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2009,
    },
    {
        name: "Hak Son",
        anime: "Yona of the Dawn",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2009,
    },
    {
        name: "Legoshi",
        anime: "Beastars",
        gender: "Male",
        hairColor: "Grey",
        firstAppearanceYear: 2016,
    },
    {
        name: "Haru",
        anime: "Beastars",
        gender: "Female",
        hairColor: "White",
        firstAppearanceYear: 2016,
    },
    {
        name: "Chise Hatori",
        anime: "The Ancient Magus' Bride",
        gender: "Female",
        hairColor: "Red",
        firstAppearanceYear: 2013,
    },
    {
        name: "Elias Ainsworth",
        anime: "The Ancient Magus' Bride",
        gender: "Male",
        hairColor: "None", // Skull head
        firstAppearanceYear: 2013,
    },
    {
        name: "Takumi Fujiwara",
        anime: "Initial D",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 1995,
    },
    {
        name: "Joe Yabuki",
        anime: "Ashita no Joe",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 1968,
    },
    {
        name: "Revy",
        anime: "Black Lagoon",
        gender: "Female",
        hairColor: "Maroon",
        firstAppearanceYear: 2002,
    },
    {
        name: "Rock (Rokuro Okajima)",
        anime: "Black Lagoon",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2002,
    },
    {
        name: "Goblin Slayer",
        anime: "Goblin Slayer",
        gender: "Male",
        hairColor: "Unknown",
        firstAppearanceYear: 2016, // Light Novel
    },
    {
        name: "Satoru Fujinuma",
        anime: "Erased",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2012,
    },
    {
        name: "Meliodas",
        anime: "The Seven Deadly Sins",
        gender: "Male",
        hairColor: "Blonde",
        firstAppearanceYear: 2012,
    },
    {
        name: "Ban",
        anime: "The Seven Deadly Sins",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2012,
    },
    {
        name: "Tatsumi",
        anime: "Akame ga Kill!",
        gender: "Male",
        hairColor: "Brown",
        firstAppearanceYear: 2010,
    },
    {
        name: "Akame",
        anime: "Akame ga Kill!",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2010,
    },
    {
        name: "Esdeath",
        anime: "Akame ga Kill!",
        gender: "Female",
        hairColor: "Blue",
        firstAppearanceYear: 2011,
    },
    {
        name: "Naofumi Iwatani",
        anime: "The Rising of the Shield Hero",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2012, // Web Novel
    },
    {
        name: "Raphtalia",
        anime: "The Rising of the Shield Hero",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2012,
    },
    {
        name: "Miyamura Izumi",
        anime: "Horimiya",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2011,
    },
    {
        name: "Hori Kyouko",
        anime: "Horimiya",
        gender: "Female",
        hairColor: "Brown",
        firstAppearanceYear: 2011,
    },
    {
        name: "Yuu Ishigami",
        anime: "Kaguya-sama: Love is War",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2016,
    },
    {
        name: "Ai Hayasaka",
        anime: "Kaguya-sama: Love is War",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2015,
    },
    {
        name: "Marin Kitagawa",
        anime: "My Dress-Up Darling",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2018,
    },
    {
        name: "Wakana Gojo",
        anime: "My Dress-Up Darling",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2018,
    },
    {
        name: "Echidna",
        anime: "Re:Zero",
        gender: "Female",
        hairColor: "White",
        firstAppearanceYear: 2016, // Light Novel Vol 10
    },
    {
        name: "Roswaal L. Mathers",
        anime: "Re:Zero",
        gender: "Male",
        hairColor: "Blue",
        firstAppearanceYear: 2012,
    },
    {
        name: "Anos Voldigoad",
        anime: "The Misfit of Demon King Academy",
        gender: "Male",
        hairColor: "Black",
        firstAppearanceYear: 2017, // Web Novel
    },
    {
        name: "Ainz Ooal Gown",
        anime: "Overlord",
        gender: "Male",
        hairColor: "None", // Skeleton
        firstAppearanceYear: 2010, // Web Novel
    },
    {
        name: "Albedo",
        anime: "Overlord",
        gender: "Female",
        hairColor: "Black",
        firstAppearanceYear: 2012, // Light Novel
    },
    {
        name: "Tanya von Degurechaff",
        anime: "Saga of Tanya the Evil",
        gender: "Female",
        hairColor: "Blonde",
        firstAppearanceYear: 2011, // Web Novel
    },
];