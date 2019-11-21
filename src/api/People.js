const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
const randomInternval = () => Math.random() * 500 + 100;

export const fetchPeopleAsync = async (pageIndex, pageSize) => {
  const internval = randomInternval();

  await delay(internval);

  const skip = (pageIndex - 1) * pageSize;
  const take = skip + pageSize;
  const items = data.slice(skip, take);

  return {
    pageIndex,
    pageSize,
    totalPages: Math.ceil(data.length / pageSize),
    items,
  };
};

export const fetchPersonAsync = async id => {
  const internval = randomInternval();

  await delay(internval);

  const intId = parseInt(id);
  const person = data.find(p => p.id === intId);

  return person;
};

const data = [
  {
    id: 1,
    name: 'Alexandros Oylett',
    page: 29,
  },
  {
    id: 2,
    name: 'Alix Bampkin',
    page: 29,
  },
  {
    id: 3,
    name: 'Bay Merricks',
    page: 18,
  },
  {
    id: 4,
    name: 'Gennie Glentworth',
    page: 19,
  },
  {
    id: 5,
    name: 'Elladine Scurrer',
    page: 26,
  },
  {
    id: 6,
    name: 'Harper McGuggy',
    page: 29,
  },
  {
    id: 7,
    name: 'Elston Mateescu',
    page: 24,
  },
  {
    id: 8,
    name: 'Franz McElhinney',
    page: 21,
  },
  {
    id: 9,
    name: 'Georgianna Shasnan',
    page: 29,
  },
  {
    id: 10,
    name: 'Glenine Cleaveland',
    page: 22,
  },
  {
    id: 11,
    name: 'Rozanne Dollard',
    page: 23,
  },
  {
    id: 12,
    name: 'Moselle Bellay',
    page: 22,
  },
  {
    id: 13,
    name: 'Luigi Minci',
    page: 19,
  },
  {
    id: 14,
    name: 'Bram Philipson',
    page: 26,
  },
  {
    id: 15,
    name: 'Anet Norheny',
    page: 19,
  },
  {
    id: 16,
    name: 'Des Whiten',
    page: 19,
  },
  {
    id: 17,
    name: 'Winni Coxen',
    page: 24,
  },
  {
    id: 18,
    name: 'Hughie Dumberrill',
    page: 18,
  },
  {
    id: 19,
    name: 'Katrine Magister',
    page: 20,
  },
  {
    id: 20,
    name: 'Johan Creed',
    page: 26,
  },
  {
    id: 21,
    name: 'Evvie Cady',
    page: 21,
  },
  {
    id: 22,
    name: 'Jacintha Ellerby',
    page: 24,
  },
  {
    id: 23,
    name: 'Johnny Eck',
    page: 28,
  },
  {
    id: 24,
    name: 'Willie Thynn',
    page: 24,
  },
  {
    id: 25,
    name: 'Barbie Meyrick',
    page: 27,
  },
  {
    id: 26,
    name: "Fredra O'Scully",
    page: 26,
  },
  {
    id: 27,
    name: 'Scottie Gullivan',
    page: 21,
  },
  {
    id: 28,
    name: 'Giacopo Davidge',
    page: 20,
  },
  {
    id: 29,
    name: 'Jinny Aleksandrev',
    page: 28,
  },
  {
    id: 30,
    name: 'Agatha Bohden',
    page: 28,
  },
  {
    id: 31,
    name: 'Prentiss Breydin',
    page: 21,
  },
  {
    id: 32,
    name: 'Harmonia Sherel',
    page: 25,
  },
  {
    id: 33,
    name: 'Scotti Chatto',
    page: 23,
  },
  {
    id: 34,
    name: 'Cybil Hinnerk',
    page: 18,
  },
  {
    id: 35,
    name: 'Appolonia Lanaway',
    page: 24,
  },
  {
    id: 36,
    name: 'Goldi Andrini',
    page: 20,
  },
  {
    id: 37,
    name: 'Annie Iwanczyk',
    page: 20,
  },
  {
    id: 38,
    name: 'Cairistiona Seakes',
    page: 19,
  },
  {
    id: 39,
    name: 'Farlie Fulbrook',
    page: 25,
  },
  {
    id: 40,
    name: 'Tyler Harnott',
    page: 24,
  },
  {
    id: 41,
    name: 'Morena Ivanenkov',
    page: 25,
  },
  {
    id: 42,
    name: 'Jillie Gloyens',
    page: 20,
  },
  {
    id: 43,
    name: 'Tomlin Dahlberg',
    page: 28,
  },
  {
    id: 44,
    name: 'Karel Bottom',
    page: 26,
  },
  {
    id: 45,
    name: 'Raychel Bleythin',
    page: 27,
  },
  {
    id: 46,
    name: 'Ariela Sharer',
    page: 25,
  },
  {
    id: 47,
    name: 'Maryellen Mandrey',
    page: 23,
  },
  {
    id: 48,
    name: 'Dorrie Celle',
    page: 25,
  },
  {
    id: 49,
    name: 'Cornall Avramov',
    page: 20,
  },
  {
    id: 50,
    name: 'Catina Hiscoke',
    page: 23,
  },
  {
    id: 51,
    name: 'Marlena Jurczyk',
    page: 28,
  },
  {
    id: 52,
    name: 'Laughton Jindacek',
    page: 26,
  },
  {
    id: 53,
    name: 'Shani Nutman',
    page: 20,
  },
  {
    id: 54,
    name: 'Sansone Carles',
    page: 24,
  },
  {
    id: 55,
    name: 'Freddie Kikke',
    page: 23,
  },
  {
    id: 56,
    name: 'Christyna Jennens',
    page: 23,
  },
  {
    id: 57,
    name: 'Boone Dumphries',
    page: 26,
  },
  {
    id: 58,
    name: 'Pollyanna Wallwood',
    page: 29,
  },
  {
    id: 59,
    name: 'Becca Swigg',
    page: 21,
  },
  {
    id: 60,
    name: 'Lorenza Massenhove',
    page: 18,
  },
  {
    id: 61,
    name: 'Lalo Eldershaw',
    page: 24,
  },
  {
    id: 62,
    name: 'Selma MacDermid',
    page: 21,
  },
  {
    id: 63,
    name: 'Devon Dabner',
    page: 24,
  },
  {
    id: 64,
    name: 'Dougie Alfonsetti',
    page: 28,
  },
  {
    id: 65,
    name: 'Winnah Byles',
    page: 28,
  },
  {
    id: 66,
    name: 'Garold Moulds',
    page: 19,
  },
  {
    id: 67,
    name: 'Stacia Worpole',
    page: 22,
  },
  {
    id: 68,
    name: 'Carrie Geraldini',
    page: 23,
  },
  {
    id: 69,
    name: 'Thia Whittington',
    page: 27,
  },
  {
    id: 70,
    name: 'Arv Myrick',
    page: 19,
  },
  {
    id: 71,
    name: 'Jeanelle Boorer',
    page: 23,
  },
  {
    id: 72,
    name: 'Aristotle Debrett',
    page: 20,
  },
  {
    id: 73,
    name: 'Baryram Gopsill',
    page: 26,
  },
  {
    id: 74,
    name: 'Weber Floris',
    page: 29,
  },
  {
    id: 75,
    name: 'Myrtia Sweeting',
    page: 18,
  },
  {
    id: 76,
    name: 'Elka Malkinson',
    page: 22,
  },
  {
    id: 77,
    name: 'Nellie Brimman',
    page: 28,
  },
  {
    id: 78,
    name: 'Karlie Ricardot',
    page: 28,
  },
  {
    id: 79,
    name: 'Fianna Bradbury',
    page: 19,
  },
  {
    id: 80,
    name: 'Bar Tidridge',
    page: 24,
  },
  {
    id: 81,
    name: 'Court McKinn',
    page: 26,
  },
  {
    id: 82,
    name: 'Asia Aucutt',
    page: 25,
  },
  {
    id: 83,
    name: 'Layney Stobbes',
    page: 23,
  },
  {
    id: 84,
    name: 'Daniella Hanigan',
    page: 19,
  },
  {
    id: 85,
    name: 'Steven Doughartie',
    page: 24,
  },
  {
    id: 86,
    name: 'Tilly Gerard',
    page: 22,
  },
  {
    id: 87,
    name: 'Hakeem Padbury',
    page: 18,
  },
  {
    id: 88,
    name: 'Karrah Solman',
    page: 20,
  },
  {
    id: 89,
    name: 'Nannie Heinke',
    page: 21,
  },
  {
    id: 90,
    name: 'Camile McCue',
    page: 27,
  },
  {
    id: 91,
    name: 'Nina Bodycombe',
    page: 20,
  },
  {
    id: 92,
    name: 'Willow Tinklin',
    page: 26,
  },
  {
    id: 93,
    name: 'Wolfgang Romney',
    page: 19,
  },
  {
    id: 94,
    name: 'Marsha Hegel',
    page: 26,
  },
  {
    id: 95,
    name: 'Carilyn Chastenet',
    page: 27,
  },
  {
    id: 96,
    name: 'Paulie Masterman',
    page: 28,
  },
  {
    id: 97,
    name: 'Sibylla Clyde',
    page: 27,
  },
  {
    id: 98,
    name: 'Tate Kilfeder',
    page: 29,
  },
  {
    id: 99,
    name: 'Magnum Malter',
    page: 21,
  },
  {
    id: 100,
    name: 'Caryn Sainte Paul',
    page: 27,
  },
];
