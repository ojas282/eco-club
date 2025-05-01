export interface Tree {
  id: number;
  name_en: string;
  name_hi: string;
  scientific_name: string;
  family_en: string;
  family_hi: string;
  origin_en: string;
  origin_hi: string;
  planted_date: string;
  lifespan_en: string;
  lifespan_hi: string;
  description_en: string;
  description_hi: string;
  uses_en: string[];
  uses_hi: string[];
  image: string;
  gallery: string[];
  location: {
    area: string;
    coordinates: string;
  };
  type: 'tree' | 'shrub' | 'herb' | 'climber';
}

export const trees: Tree[] = [
  {
    id: 1,
    name_en: "Neem",
    name_hi: "नीम",
    scientific_name: "Azadirachta indica",
    family_en: "Meliaceae",
    family_hi: "मेलिएसी",
    origin_en: "Indian Subcontinent",
    origin_hi: "भारतीय उपमहाद्वीप",
    planted_date: "2018-06-15",
    lifespan_en: "150-200 years",
    lifespan_hi: "150-200 वर्ष",
    description_en: "Neem is a fast-growing tree that can reach up to 15–20 m tall, with a dense rounded crown of pinnate leaves.",
    description_hi: "नीम एक तेजी से बढ़ने वाला पेड़ है जो 15-20 मीटर तक ऊंचा हो सकता है।",
    uses_en: [
      "Medicinal: Used in traditional medicine",
      "Pesticide: Natural insect repellent",
      "Cosmetics: Used in soaps and skin care",
      "Environmental: Provides shade, improves air quality"
    ],
    uses_hi: [
      "औषधीय: पारंपरिक चिकित्सा में उपयोग",
      "कीटनाशक: प्राकृतिक कीट विकर्षक",
      "प्रसाधन: साबुन और त्वचा देखभाल में उपयोग",
      "पर्यावरण: छाया प्रदान करता है"
    ],
    image: "./neem2.jpg",
    gallery: [
      "/neem1.jpg",
      "/neem2.jpg",
      "/neem3.jpg"
    ],
    location: {
      area: "Main Entrance",
      coordinates: "26.8467° N, 80.8910° E"
    },
    type: "tree"
  },
  {
    id: 2,
    name_en: "Guava",
    name_hi: "अमरूद",
    scientific_name: "Psidium guajava",
    family_en: "Myrtaceae",
    family_hi: "मिर्टेसी",
    origin_en: "Central America",
    origin_hi: "मध्य अमेरिका",
    planted_date: "2019-07-20",
    lifespan_en: "30-40 years",
    lifespan_hi: "30-40 वर्ष",
    description_en: "Guava is a small tree with spreading branches and is cultivated for its edible fruits.",
    description_hi: "अमरूद एक छोटा पेड़ है जिसकी शाखाएं फैली हुई हैं और इसके खाने योग्य फलों के लिए उगाया जाता है।",
    uses_en: [
      "Fruit: Rich in Vitamin C",
      "Medicinal: Leaves used in traditional medicine",
      "Environmental: Provides shade",
      "Educational: Study of fruit development"
    ],
    uses_hi: [
      "फल: विटामिन सी से भरपूर",
      "औषधीय: पत्तियों का पारंपरिक चिकित्सा में उपयोग",
      "पर्यावरण: छाया प्रदान करता है",
      "शैक्षिक: फल विकास का अध्ययन"
    ],
    image: "./guava1.jpg",
    gallery: [
      "/guava1.jpg",
      "/guaba2.jpg"
    ],
    location: {
      area: "School Garden",
      coordinates: "26.8468° N, 80.8911° E"
    },
    type: "tree"
  },
  {
    "id": 3,
    "name_en": "Gudhal",
    "name_hi": "गुड़हल",
    "scientific_name": "Hibiscus rosa-sinensis",
    "family_en": "Malvaceae",
    "family_hi": "मालवेसी",
    "origin_en": "East Asia",
    "origin_hi": "पूर्वी एशिया",
    "planted_date": "2020-08-10",
    "lifespan_en": "10-15 years",
    "lifespan_hi": "10-15 वर्ष",
    "description_en": "Gudhal is a tropical flowering plant known for its large, bright-colored blossoms. It is often used in gardens for decorative purposes.",
    "description_hi": "गुड़हल एक उष्णकटिबंधीय फूलदार पौधा है जो अपने बड़े, चमकीले रंगों वाले फूलों के लिए जाना जाता है और इसे बगीचों में सजावट के लिए उगाया जाता है।",
    "uses_en": [
      "Medicinal: Used in hair and skin care remedies",
      "Cultural: Flowers offered in Hindu rituals",
      "Decorative: Garden landscaping and ornamental value"
    ],
    "uses_hi": [
      "औषधीय: बालों और त्वचा की देखभाल में उपयोग",
      "सांस्कृतिक: पूजा-पाठ में फूलों का उपयोग",
      "सजावटी: बागवानी और सजावटी महत्व"
    ],
    "image": "/gudhal.jpg",
    "gallery": [
      "/gudhal.jpg",
      "/gudhal2.jpg"
    ],
    "location": {
      "area": "Botanical Section",
      "coordinates": "26.8470° N, 80.8915° E"
    },
    "type": "shrub"
  },
  {
    "id": 4,
    "name_en": "Harsringar",
    "name_hi": "हरसिंगार",
    "scientific_name": "Nyctanthes arbor-tristis",
    "family_en": "Oleaceae",
    "family_hi": "ओलिएसी",
    "origin_en": "South Asia and Southeast Asia",
    "origin_hi": "दक्षिण एशिया और दक्षिण-पूर्व एशिया",
    "planted_date": "2017-09-25",
    "lifespan_en": "15-20 years",
    "lifespan_hi": "15-20 वर्ष",
    "description_en": "Harsringar is a small tree or shrub known for its fragrant white flowers with orange centers, which bloom at night and fall by morning.",
    "description_hi": "हरसिंगार एक छोटा पेड़ या झाड़ी है जिसे इसकी सुगंधित सफेद और नारंगी फूलों के लिए जाना जाता है जो रात में खिलते हैं और सुबह तक झड़ जाते हैं।",
    "uses_en": [
      "Medicinal: Flowers and leaves used in Ayurvedic medicine",
      "Cultural: Flowers used in religious offerings",
      "Aesthetic: Planted for its beauty and fragrance"
    ],
    "uses_hi": [
      "औषधीय: आयुर्वेदिक चिकित्सा में फूलों और पत्तियों का उपयोग",
      "सांस्कृतिक: धार्मिक पूजाओं में फूलों का उपयोग",
      "सौंदर्य: सुंदरता और सुगंध के लिए लगाया जाता है"
    ],
    "image": "./har1.png",
    "gallery": [
      "/har1.png"
    ],
    "location": {
      "area": "Near Temple Zone",
      "coordinates": "26.8472° N, 80.8917° E"
    },
    "type": "shrub"
  },
  {
    "id": 5,
    "name_en": "Kaner",
    "name_hi": "कनेर",
    "scientific_name": "Nerium oleander",
    "family_en": "Apocynaceae",
    "family_hi": "एपोसाइनेसी",
    "origin_en": "Mediterranean region and Asia",
    "origin_hi": "भूमध्य सागर क्षेत्र और एशिया",
    "planted_date": "2020-03-10",
    "lifespan_en": "20-25 years",
    "lifespan_hi": "20-25 वर्ष",
    "description_en": "Kaner is a hardy evergreen shrub or small tree with bright pink, white, or yellow flowers that bloom throughout the year.",
    "description_hi": "कनेर एक मजबूत सदाबहार झाड़ी या छोटा पेड़ है जिसमें चमकीले गुलाबी, सफेद या पीले फूल साल भर खिलते हैं।",
    "uses_en": [
      "Ornamental: Planted in gardens for beauty",
      "Environmental: Acts as a dust and noise barrier",
      "Cultural: Commonly used in Indian landscapes"
    ],
    "uses_hi": [
      "सज्जा: बाग-बगीचों में सौंदर्य के लिए लगाया जाता है",
      "पर्यावरण: धूल और शोर को रोकने में सहायक",
      "सांस्कृतिक: भारतीय दृश्यों में सामान्यतः पाया जाता है"
    ],
    "image": "./kaner1.png",
    "gallery": [
      "/kaner1.png"
    ],
    "location": {
      "area": "Pathway Divider",
      "coordinates": "26.8475° N, 80.8919° E"
    },
    "type": "shrub"
  },
  {
    "id": 6,
    "name_en": "Mehandi",
    "name_hi": "मेहंदी",
    "scientific_name": "Lawsonia inermis",
    "family_en": "Lythraceae",
    "family_hi": "लिथ्रेसी",
    "origin_en": "North Africa and South-West Asia",
    "origin_hi": "उत्तरी अफ्रीका और दक्षिण-पश्चिम एशिया",
    "planted_date": "2021-04-18",
    "lifespan_en": "5-10 years",
    "lifespan_hi": "5-10 वर्ष",
    "description_en": "Mehandi is a flowering shrub known for its leaves, which are dried and ground into a powder used as a natural dye for skin and hair.",
    "description_hi": "मेहंदी एक फूलदार झाड़ी है जिसके पत्तों को सुखाकर पीसकर त्वचा और बालों को रंगने के लिए प्राकृतिक रंग के रूप में उपयोग किया जाता है।",
    "uses_en": [
      "Cosmetic: Natural dye for hair and body art",
      "Medicinal: Cooling and antimicrobial properties",
      "Cultural: Widely used in festivals and weddings"
    ],
    "uses_hi": [
      "प्रसाधन: बालों और शरीर पर लगाने के लिए प्राकृतिक रंग",
      "औषधीय: ठंडक और रोगाणुरोधी गुण",
      "सांस्कृतिक: त्योहारों और शादियों में व्यापक उपयोग"
    ],
    "image": "./meh1.png",
    "gallery": [
      "/meh1.png"
    ],
    "location": {
      "area": "Cultural Garden",
      "coordinates": "26.8479° N, 80.8920° E"
    },
    "type": "shrub"
  },
  {
    "id": 7,
    "name_en": "Karipatta",
    "name_hi": "करी पत्ता",
    "scientific_name": "Murraya koenigii",
    "family_en": "Rutaceae",
    "family_hi": "रुटेसी",
    "origin_en": "Indian Subcontinent",
    "origin_hi": "भारतीय उपमहाद्वीप",
    "planted_date": "2020-07-12",
    "lifespan_en": "30-40 years",
    "lifespan_hi": "30-40 वर्ष",
    "description_en": "Karipatta is a small tropical tree, best known for its aromatic leaves that are widely used in Indian cuisine.",
    "description_hi": "करी पत्ता एक छोटा उष्णकटिबंधीय पेड़ है, जिसे इसकी सुगंधित पत्तियों के लिए जाना जाता है जो भारतीय व्यंजनों में व्यापक रूप से उपयोग होती हैं।",
    "uses_en": [
      "Culinary: Widely used as a flavoring agent in Indian cooking",
      "Medicinal: Aids digestion and controls blood sugar",
      "Environmental: Grows well in urban gardens and provides greenery"
    ],
    "uses_hi": [
      "खाद्य: भारतीय खाना पकाने में सुगंध देने के लिए उपयोग",
      "औषधीय: पाचन में सहायक और रक्त शर्करा नियंत्रित करता है",
      "पर्यावरण: शहरी बागवानी में उपयोगी और हरियाली प्रदान करता है"
    ],
    "image": "./karri.jpg",
    "gallery": [
      "/karri.jpg"
    ],
    "location": {
      "area": "Kitchen Garden",
      "coordinates": "26.8480° N, 80.8921° E"
    },
    "type": "tree"
  },
  {
    "id": 8,
    "name_en": "Karanj",
    "name_hi": "करंज",
    "scientific_name": "Pongamia pinnata",
    "family_en": "Fabaceae",
    "family_hi": "फैबेसी",
    "origin_en": "Tropical and Temperate Asia",
    "origin_hi": "उष्णकटिबंधीय और समशीतोष्ण एशिया",
    "planted_date": "2017-11-05",
    "lifespan_en": "80-100 years",
    "lifespan_hi": "80-100 वर्ष",
    "description_en": "Karanj is a fast-growing deciduous tree known for its use in biofuel production and soil enrichment.",
    "description_hi": "करंज एक तेजी से बढ़ने वाला पर्णपाती पेड़ है जो बायोफ्यूल और मिट्टी की उर्वरता बढ़ाने के लिए जाना जाता है।",
    "uses_en": [
      "Medicinal: Oil used for skin diseases and rheumatism",
      "Fuel: Seeds used for biodiesel production",
      "Environmental: Nitrogen-fixing tree that improves soil fertility",
      "Shade: Commonly planted for shade along roads"
    ],
    "uses_hi": [
      "औषधीय: त्वचा रोग और गठिया के लिए तेल का उपयोग",
      "ईंधन: बायोडीजल बनाने में बीजों का उपयोग",
      "पर्यावरण: मिट्टी की उर्वरता बढ़ाने वाला नाइट्रोजन युक्त पेड़",
      "छाया: सड़कों के किनारे छाया के लिए लगाया जाता है"
    ],
    "image": "./karanja.jpg",
    "gallery": [
      "/karanja.jpg"
    ],
    "location": {
      "area": "Back Fence Line",
      "coordinates": "26.8482° N, 80.8923° E"
    },
    "type": "tree"
  }


  // Add more trees here...
];