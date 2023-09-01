import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
 flutter,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  bootstrap,
  dart,
  android,
  firebase,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
 
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developement',
    icon: frontend,
  },
  {
    title: 'Backend Developement',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Project Management',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
 
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Bootstrap CSS',
    icon: bootstrap
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Flutter',
    icon: flutter
  },
  {
    name: 'Dart',
    icon: dart
  },
  {
    name:'Android',
    icon: android
  },
  {
    name: 'Firebase',
    icon: firebase
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  
];

const experiences = [
  {
    title: 'Software Engineer/ Technical lead',
    company_name: 'Eastern Tech Hub',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Present',
  },
  {
    title: 'Software Engineer',
    company_name: 'Freelancer',
    icon: microverse,
    iconBg: '#333333',
    date: 'June 2020 - Present',
  },
  {
    title: 'Junior Software Developer',
    company_name: 'Ghana Armed Forces',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2019 - Aug 2020',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pharmacy System',
    description: 'A pharmacy management system that helps you to manage your inventory,expenses, employees and track your daily sales.',
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'Boostrap',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://pos.easterntechhub.com/public/login',
  },
  {
    id: 'project-2',
    name: 'Mobile Management System',
    description:
      'This is a custom mobile shop management system.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://play.google.com/store/apps/details?id=com.ayiks.edcoldstore',
  },
  {
    id: 'project-3',
    name: 'Eastern Tech Hub Website',
    description: 'This is a website built with raw HTML & CSS',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://www.easterntechhub.com/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
