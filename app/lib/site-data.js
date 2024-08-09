const projects = [
  {
    id: 'maps',
    src: 'neighborhood-maps.png',
    title: 'Neighborhood Map',
    titleLink: [
      'https://neighborhood-map-eprishb.herokuapp.com/',
      'https://neighborhood-map-neon.vercel.app/',
    ],
    githubRepo: 'https://github.com/eprisr/neighborhood-map',
    clickable: true,
    client: 'Personal Project',
    brief:
      'Discover refreshment around every corner: Find a smoothie joint near you!',
    projDesc:
      'Maps is a smoothie locator with a predetermined list of smoothie shop locations in certain cities. This intermediate project teaches the ins and outs of React and how to use APIs. The planning of the project required a layout of the components and knowing which components rely on one another. The next problem was connecting the API to the map and getting the location pointers to match the geographical location.',
    skills: {
      Frontend: ['React', 'Sweet Alert', 'Material UI'],
      Backend: ['Node.js', 'Heroku'],
      'Relevant Packages': ['Google Maps', 'Foursquare API'],
    },
  },
  {
    id: 'reads',
    src: 'my-reads.png',
    title: 'My Reads',
    titleLink: ['https://my-reads-brown.vercel.app/'],
    githubRepo: 'https://github.com/eprisr/MyReads',
    clickable: true,
    client: 'Personal Project',
    brief:
      'Your personalized digital bookshelf for empowering your reading journey.',
    projDesc:
      'My Reads allows a user to browse a digital library and add different books to their lists. The primary challenge was dynamically rendering content and working with query inputs.',
    skills: {
      Frontend: ['React'],
      Backend: ['Node.js'],
    },
  },
  {
    id: 'mem',
    src: 'memory-game.png',
    title: 'Memory Game',
    titleLink: ['https://eprisr.github.io/Project-Memory_Game/'],
    githubRepo: 'https://github.com/eprisr/Project-Memory_Game',
    clickable: true,
    client: 'Personal Project',
    brief: 'Flip. Remember. Match.',
    projDesc:
      'We all scream for better memory. No one likes to experience brain fog. Have fun with this mentally stimulating and sweet memory game.',
    skills: {
      Frontend: ['HTML5', 'CSS3', 'Javascript'],
    },
  },
  {
    id: 'sweet',
    src: 'SoSweet_Mockup.png',
    title: 'So Sweet: Case Study',
    titleLink: [],
    githubRepo: '',
    clickable: false,
    client: 'Personal Project',
    brief: 'Case study for a fictional bakery.',
    projDesc: 'Coming Soon',
    skills: {},
  },
];

const archive = [
  {
    id: 'gmpower',
    type: ['All', 'Motion'],
    src: 'GM-Power-305x320.png',
    slides: [],
    video: {
      url: 'https://youtu.be/o4aBO8hHzq8',
      id: 'video',
      width: 'fit-content',
      height: '100%',
    },
    title: 'GM Powertrain',
    titleLink: '',
    clickable: true,
    date: 'Sep 2013',
    client: 'General Motors Powertrain | Continental Services',
    brief:
      'Having a cafe on the jobsite provides great benefits. Why not snag the best deals?',
    projDesc:
      'Nothing beats having a cafe inside the workplace. Digital menus are a great way to display regular prices and great deals at the same time. This digital menu was created as a way to increase sales by offering the best deals up front.',
    skills: {
      Software: ['After Effects', 'Photoshop'],
    },
  },
  {
    id: 'bala',
    type: ['All', 'Print'],
    src: 'Balaboosta-305x320.png',
    slides: [],
    video: {},
    title: 'Balaboosta',
    titleLink: '',
    clickable: true,
    date: 'Nov 2013',
    client: 'Continental Services',
    brief: 'A mediterranian grill promo',
    projDesc: '',
    skills: {
      Software: ['Adobe CC'],
    },
  },
  {
    id: 'eddine',
    type: ['All', 'Print', 'Branding'],
    src: 'Ed-Dining-305x320.png',
    slides: [
      '/assets/images/projects/ed-dining-brochure.png',
      '/assets/images/projects/ed-dining-folder.png',
      '/assets/images/projects/ed-dining-pos.png',
    ],
    video: {},
    title: 'Educational Dining',
    titleLink: '',
    clickable: true,
    date: 'Sep 2013',
    client: 'Educational Dining | Continental Services',
    brief:
      'Collateral pieces are a great way to leave behind important information for potiential clients.',
    projDesc: 'Branded collateral pieces',
    skills: {
      Software: ['Adobe CC'],
    },
  },
  {
    id: 'cont',
    type: ['All', 'Motion'],
    src: 'Cont-Client-305x320.png',
    slides: [],
    video: {
      url: 'https://youtu.be/aVkRW2K-fRo',
      id: 'video',
      width: 'fit-content',
      height: '100%',
    },
    title: 'Client Movie',
    titleLink: '',
    clickable: true,
    date: 'Feb 2014',
    client: 'Continental Serivces',
    brief: 'A digital display of services offered under various subsidaries.',
    projDesc: '',
    skills: {
      Software: ['After Effects'],
    },
  },
  {
    id: 'lucca',
    type: ['All', 'Motion'],
    src: 'Lucca-305x320.png',
    slides: [],
    video: {
      url: 'https://youtu.be/vxCD96BGkdw',
      id: 'video',
      width: 'fit-content',
      height: '100%',
    },
    title: 'Lucca | Italian Street Food',
    titleLink: '',
    clickable: true,
    date: 'Jan 2014',
    client: 'Continental Services',
    brief: 'An Italian street food promo.',
    projDesc: '',
    skills: {
      Sofware: ['After Effects'],
    },
  },
  {
    id: 'rofpasta',
    type: ['All', 'Print'],
    src: 'Rise-of-Fall-305x320.png',
    slides: [],
    video: {},
    title: 'The Rise of Fall Pasta',
    titleLink: '',
    clickable: true,
    date: 'Oct 2013',
    client: 'Continental Services',
    brief: 'A comfort food promo.',
    projDesc: '',
    skills: {
      Software: ['Adobe CC'],
    },
  },
  {
    id: 'apmag',
    type: ['All', 'Print', 'Branding'],
    src: 'Andre-Port-305x320.png',
    slides: [
      '/assets/images/projects/AP_04.jpg',
      '/assets/images/projects/AP_05.jpg',
      '/assets/images/projects/AP_07.jpg',
      '/assets/images/projects/AP_08.jpg',
      '/assets/images/projects/AP_10.jpg',
      '/assets/images/projects/AP_11.jpg',
    ],
    video: {},
    title: 'Portfolio Magazine',
    titleLink: '',
    clickable: true,
    date: 'May 2013',
    client: 'Andre Morton | I AM Creative LLC',
    brief: 'Collaborative graduation portfolio project',
    projDesc:
      'As a part of portfolio show, students have to showcase their work. With aspirations of being a creative director, I had the opportunity to be under his direction. I was given an idea of what the content and topics would be and we went out and took photos based off of those concepts. After that, we began strategizing the order and layout of the piece.',
    skills: {
      Software: ['Indesign', 'Photoshop', 'Lightroom'],
      Equipment: ['Canon Rebel T3'],
    },
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

module.exports = {
  projects,
  customers,
  invoices,
};
