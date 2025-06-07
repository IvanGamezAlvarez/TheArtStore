const paints = [
  {
    id: 0,
    title: "Mona Lisa",
    author: "Leonardo da Vinci",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    artStyle: "Renaissance",
    value: "$1,000,000,000",
    description:
      "Portrait of Lisa Gherardini, famous for her enigmatic smile and considered one of the most iconic Renaissance works.",
  },
  {
    id: 1,
    title: "The Starry Night",
    author: "Vincent van Gogh",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    artStyle: "Post-Impressionism",
    value: "$100,000,000",
    description:
      "A night landscape with swirling skies and a calm village, expressing Van Gogh’s emotional view of the world.",
  },
  {
    id: 2,
    title: "The Scream",
    author: "Edvard Munch",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
    artStyle: "Expressionism",
    value: "$120,000,000",
    description:
      "An androgynous figure screaming beneath a blood-red sky, symbolizing modern existential anxiety.",
  },
  {
    id: 3,
    title: "Girl with a Pearl Earring",
    author: "Johannes Vermeer",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    artStyle: "Baroque",
    value: "$100,000,000",
    description:
      "A portrait of a young girl with a pearl earring, known for its lighting and mysterious expression.",
  },
  {
    id: 4,
    title: "Las Meninas",
    author: "Diego Velázquez",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    artStyle: "Baroque",
    value: "$200,000,000",
    description:
      "A complex court scene that plays with perspective and includes the artist himself within the composition.",
  },
  {
    id: 5,
    title: "The Persistence of Memory",
    author: "Salvador Dalí",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    artStyle: "Surrealism",
    value: "$150,000,000",
    description:
      "A dreamlike landscape with melting clocks, exploring the fluidity of time and memory.",
  },
  {
    id: 6,
    title: "The Birth of Venus",
    author: "Sandro Botticelli",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1920px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    artStyle: "Renaissance",
    value: "$200,000,000",
    description:
      "Mythological scene of Venus emerging from the sea on a shell, representing idealized beauty.",
  },
  {
    id: 7,
    title: "The Creation of Adam",
    author: "Michelangelo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1920px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    artStyle: "Renaissance",
    value: "$300,000,000",
    description:
      "A fresco on the Sistine Chapel ceiling showing God giving life to Adam with a near-touch.",
  },
  {
    id: 8,
    title: "The Garden of Earthly Delights",
    author: "Hieronymus Bosch",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1920px-The_Garden_of_earthly_delights.jpg",
    artStyle: "Renaissance",
    value: "$150,000,000",
    description:
      "A triptych depicting paradise, earthly pleasures, and hell with rich symbolic imagery.",
  },
  {
    id: 9,
    title: "The Last Supper",
    author: "Leonardo da Vinci",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1920px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    artStyle: "Renaissance",
    value: "$450,000,000",
    description:
      "Depiction of Jesus and his apostles at the moment he reveals his upcoming betrayal.",
  },
  {
    id: 10,
    title: "Guernica",
    author: "Pablo Picasso",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mural_del_Gernika.jpg",
    artStyle: "Cubism",
    value: "$200,000,000",
    description:
      "A large mural depicting the tragedies of war and the suffering it inflicts upon individuals, especially innocent civilians.",
  },
  {
    id: 11,
    title: "American Gothic",
    author: "Grant Wood",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    artStyle: "Regionalism",
    value: "$10,000,000",
    description:
      "A farmer and his daughter standing in front of a house, symbolizing rural American values during the Great Depression.",
  },
  {
    id: 12,
    title: "Whistler’s Mother",
    author: "James McNeill Whistler",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/1151px-Whistlers_Mother_high_res.jpg",
    artStyle: "Realism",
    value: "$30,000,000",
    description:
      "A portrait of the artist's mother, representing maternal dignity and restraint.",
  },
  {
    id: 13,
    title: "The Kiss",
    author: "Gustav Klimt",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/1024px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    artStyle: "Symbolism / Art Nouveau",
    value: "$150,000,000",
    description:
      "A romantic embrace covered in elaborate patterns, emphasizing intimacy and passion.",
  },
  {
    id: 14,
    title: "Water Lilies",
    author: "Claude Monet",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Claude_Monet_-_The_Water_Lilies_-_Setting_Sun_-_Google_Art_Project.jpg/1920px-Claude_Monet_-_The_Water_Lilies_-_Setting_Sun_-_Google_Art_Project.jpg",
    artStyle: "Impressionism",
    value: "$80,000,000",
    description:
      "One of Monet’s many serene depictions of water lilies, light, and reflection.",
  },
  {
    id: 15,
    title: "The Night Watch",
    author: "Rembrandt",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1280px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
    artStyle: "Baroque",
    value: "$500,000,000",
    description:
      "A dynamic group portrait of a city militia, notable for its use of light and movement.",
  },
  {
    id: 16,
    title: "The Great Wave off Kanagawa",
    author: "Hokusai",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1920px-Tsunami_by_hokusai_19th_century.jpg",
    artStyle: "Ukiyo-e",
    value: "$150,000,000",
    description:
      "A famous Japanese woodblock print showing a giant wave threatening boats near Mount Fuji.",
  },
  {
    id: 17,
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    author: "Georges Seurat",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1920px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    artStyle: "Pointillism",
    value: "$100,000,000",
    description:
      "A serene park scene created using tiny dots of color in the pointillist style.",
  },
  {
    id: 18,
    title: "Liberty Leading the People",
    author: "Eugène Delacroix",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1280px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
    artStyle: "Romanticism",
    value: "$120,000,000",
    description:
      "An allegorical figure of Liberty leads the people forward during the French Revolution of 1830.",
  },
  {
    id: 19,
    title: "The Hay Wain",
    author: "John Constable",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/John_Constable_The_Hay_Wain.jpg/1280px-John_Constable_The_Hay_Wain.jpg",
    artStyle: "Romanticism",
    value: "$50,000,000",
    description:
      "A peaceful English countryside scene featuring a cart crossing a shallow river.",
  },
  {
    id: 20,
    title: "The Arnolfini Portrait",
    author: "Jan van Eyck",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/800px-The_Arnolfini_portrait_%281434%29.jpg",
    artStyle: "Northern Renaissance",
    value: "$150,000,000",
    description:
      "A wealthy couple captured in a richly detailed domestic scene, filled with symbolic objects.",
  },
  {
    id: 21,
    title: "Nighthawks",
    author: "Edward Hopper",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Nighthawks_by_Edward_Hopper_1942.jpg",
    artStyle: "Realism",
    value: "$80,000,000",
    description:
      "An iconic image of late-night diners in a downtown café, evoking loneliness and urban isolation.",
  },
  {
    id: 22,
    title: "The Dance",
    author: "Henri Matisse",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Henri_Matisse%2C_1910%2C_La_Danse%2C_oil_on_canvas%2C_260_x_391_cm%2C_The_Hermitage%2C_Saint_Petersburg.jpg",
    artStyle: "Fauvism",
    value: "$120,000,000",
    description:
      "A vibrant circular dance of figures, celebrating movement and joy through bold colors and simple forms.",
  },
  {
    id: 23,
    title: "Bal du moulin de la Galette",
    author: "Pierre-Auguste Renoir",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette.jpg",
    artStyle: "Impressionism",
    value: "$140,000,000",
    description:
      "A joyful snapshot of a Parisian dance hall, capturing the play of light and shadow.",
  },
  {
    id: 24,
    title: "Composition VIII",
    author: "Wassily Kandinsky",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Wassily_Kandinsky%2C_1923_-_Composition_8%2C_oil_on_canvas%2C_140_cm_x_201_cm%2C_Guggenheim_Museum.jpg",
    artStyle: "Abstract",
    value: "$90,000,000",
    description:
      "A bold composition of geometric forms and vibrant colors, expressing music through abstract shapes.",
  },
  {
    id: 25,
    title: "Portrait of Adele Bloch-Bauer I",
    author: "Gustav Klimt",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Gustav_Klimt_046.jpg",
    artStyle: "Symbolism",
    value: "$135,000,000",
    description:
      "A lavish gold-filled portrait, often called 'The Lady in Gold', exemplifying Klimt's golden phase.",
  },
  {
    id: 26,
    title: "Christina’s World",
    author: "Andrew Wyeth",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Christina%27s_World.jpg",
    artStyle: "Realism",
    value: "$75,000,000",
    description:
      "A poignant scene of a woman lying in a field, symbolizing resilience and longing.",
  },
  {
    id: 27,
    title: "Campbell’s Soup Cans",
    author: "Andy Warhol",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Warhol-Campbell_Soup-1-screenprint-1968.jpg",
    artStyle: "Pop Art",
    value: "$100,000,000",
    description:
      "A set of 32 paintings depicting soup cans, challenging the line between commercialism and fine art.",
  },
  {
    id: 28,
    title: "The Sleeping Gypsy",
    author: "Henri Rousseau",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Henri_Rousseau_-_The_Sleeping_Gypsy.jpg",
    artStyle: "Naïve Art",
    value: "$60,000,000",
    description:
      "A mysterious, dreamlike scene with a sleeping traveler and a curious lion under the moonlight.",
  },
  {
    id: 29,
    title: "Ophelia",
    author: "John Everett Millais",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
    artStyle: "Pre-Raphaelite",
    value: "$70,000,000",
    description:
      "A haunting depiction of Shakespeare’s Ophelia floating in a river, surrounded by symbolic flora.",
  },
];
export default paints;
