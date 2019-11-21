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
    name: 'Valentin Lambertson',
    age: 18,
  },
  {
    id: 2,
    name: 'Garth Carneck',
    age: 18,
  },
  {
    id: 3,
    name: 'Nanice Tomczykowski',
    age: 21,
  },
  {
    id: 4,
    name: 'Dante Worlidge',
    age: 19,
  },
  {
    id: 5,
    name: 'Mollie Dobbie',
    age: 19,
  },
  {
    id: 6,
    name: 'Desiree Dauber',
    age: 22,
  },
  {
    id: 7,
    name: 'Barb Tomankowski',
    age: 20,
  },
  {
    id: 8,
    name: 'Andi Dahlgren',
    age: 19,
  },
  {
    id: 9,
    name: 'Burlie Sykora',
    age: 18,
  },
  {
    id: 10,
    name: 'Hamnet Cheal',
    age: 18,
  },
  {
    id: 11,
    name: 'Jillane Hitcham',
    age: 19,
  },
  {
    id: 12,
    name: 'Sarina Heintz',
    age: 19,
  },
  {
    id: 13,
    name: 'Susannah Tolefree',
    age: 21,
  },
  {
    id: 14,
    name: 'Rudie Shutte',
    age: 21,
  },
  {
    id: 15,
    name: 'Lynelle Housley',
    age: 21,
  },
  {
    id: 16,
    name: 'Bran Pettersen',
    age: 25,
  },
  {
    id: 17,
    name: 'Giuditta Petti',
    age: 25,
  },
  {
    id: 18,
    name: 'Arturo Rickardsson',
    age: 19,
  },
  {
    id: 19,
    name: 'Amery Bygate',
    age: 24,
  },
  {
    id: 20,
    name: 'Mario Malecky',
    age: 23,
  },
  {
    id: 21,
    name: 'Keriann Bartleman',
    age: 25,
  },
  {
    id: 22,
    name: 'Babbette Vsanelli',
    age: 18,
  },
  {
    id: 23,
    name: 'Cordi Gidley',
    age: 22,
  },
  {
    id: 24,
    name: 'Ilyse Honnan',
    age: 22,
  },
  {
    id: 25,
    name: 'My Sheward',
    age: 21,
  },
  {
    id: 26,
    name: 'Averil Ianetti',
    age: 20,
  },
  {
    id: 27,
    name: 'Kissee Pawlowicz',
    age: 25,
  },
  {
    id: 28,
    name: 'Glennis Erb',
    age: 19,
  },
  {
    id: 29,
    name: 'Dimitry Donnachie',
    age: 22,
  },
  {
    id: 30,
    name: 'Philippa Divell',
    age: 23,
  },
  {
    id: 31,
    name: 'Kelsi Wakerley',
    age: 21,
  },
  {
    id: 32,
    name: 'Heidi Cheyney',
    age: 20,
  },
  {
    id: 33,
    name: 'Tedman Broun',
    age: 21,
  },
  {
    id: 34,
    name: 'Anna-diane Ertelt',
    age: 23,
  },
  {
    id: 35,
    name: 'Johanna Heasman',
    age: 19,
  },
  {
    id: 36,
    name: 'Rosalynd Olerenshaw',
    age: 20,
  },
  {
    id: 37,
    name: 'Mauricio Bandey',
    age: 22,
  },
  {
    id: 38,
    name: 'Jocko Sawers',
    age: 22,
  },
  {
    id: 39,
    name: 'Morty Basham',
    age: 20,
  },
  {
    id: 40,
    name: 'Bale Grocott',
    age: 18,
  },
  {
    id: 41,
    name: 'Austen Dimeloe',
    age: 24,
  },
  {
    id: 42,
    name: 'Morgun MacKill',
    age: 23,
  },
  {
    id: 43,
    name: 'Beatriz Croneen',
    age: 23,
  },
  {
    id: 44,
    name: 'Anica Ward',
    age: 19,
  },
  {
    id: 45,
    name: 'Biddie Lantaff',
    age: 22,
  },
  {
    id: 46,
    name: 'Buddie Beynkn',
    age: 23,
  },
  {
    id: 47,
    name: 'Nerissa Flewin',
    age: 21,
  },
  {
    id: 48,
    name: 'Paxton Gomery',
    age: 19,
  },
  {
    id: 49,
    name: 'Johna Prandin',
    age: 23,
  },
  {
    id: 50,
    name: 'Kirsti Paulo',
    age: 24,
  },
];
