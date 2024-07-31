const projects = [
  {
    id: 'maps',
    type: ['All', 'Web Dev'],
    src: 'neighborhood-maps.png',
    slides: [],
    video: {},
    title: 'Neighborhood Map',
    titleLink: [
      'https://neighborhood-map-neon.vercel.app/',
      'https://neighborhood-map-eprishb.herokuapp.com/',
    ],
    githubRepo: 'https://github.com/eprisr/neighborhood-map',
    clickable: true,
    date: 'Nov 2018',
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
    type: ['All', 'Web Dev'],
    src: 'my-reads.png',
    slides: [],
    video: {},
    title: 'My Reads',
    titleLink: ['https://my-reads-brown.vercel.app/'],
    githubRepo: 'https://github.com/eprisr/MyReads',
    clickable: true,
    date: 'Sep 2018',
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
    type: ['All', 'Web Dev'],
    src: 'memory-game.png',
    slides: [],
    video: {},
    title: 'Memory Game',
    titleLink: ['https://eprisr.github.io/Project-Memory_Game/'],
    githubRepo: 'https://github.com/eprisr/Project-Memory_Game',
    clickable: true,
    date: 'Aug 2018',
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
    type: ['All', 'Web Dev', 'Print', 'Branding'],
    src: 'SoSweet_Mockup.png',
    slides: [],
    video: {},
    title: 'So Sweet: Case Study',
    titleLink: [],
    githubRepo: '',
    clickable: false,
    date: 'Feb 2020',
    client: 'Personal Project',
    brief: 'Case study for a fictional bakery.',
    projDesc: 'Coming Soon',
    skills: {},
  },
]

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
]

module.exports = {
  projects,
}
