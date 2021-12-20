import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aditya Sharan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello My name is',
  name: 'Aditya Sharan',
  subtitle: "I'm the caffeine☕ boosted Software Engineer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: ' I m a 24 year old Associate Technology L2 @ Publicis Sapient based in Bangalore,India. I describe myself as a passionate developer who loves coding and the web platform.',
  paragraphTwo: "I'm currently learning HOW TO BUILD App using MERN Stack as a side project for myself and have keen interest in how things work from inside.",
  paragraphThree: 'I like building new stuff and work with other people – nothing really interesting is ever built alone!',
  resume: 'https://drive.google.com/file/d/11zno6_RKmsgJcAjADoDehW_Fba8VQJIL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Balloon Poping Game',
    info: 'Game is to pop out the maximum number of ballons inorder to prevent them from reaching top with a joyful music in the background',
    info2: '',
    url: 'https://popgame.netlify.app/',
    repo: 'https://github.com/adityasharan01/balloonpop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Random Meal Recipe ',
    info: 'Application where User can search for receipes related to some particular ingridient or if user wants to cook something random,there is a feature to get a random meal receipe too.',
    info2: 'Api consumed : TheMealDB',
    url: 'https://khanapakao.netlify.app/',
    repo: 'https://github.com/adityasharan01/khana-pakao', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Weather Tracking ',
    info: 'Application in which we can input our location inorder to get present weather data',
    info2: 'Api consumed : openweathermap ',
    url: 'https://naturew.netlify.app/',
    repo: 'https://github.com/adityasharan01/Weather-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Music Lyrics Search ',
    info: 'Application where we can search about the lyrics of the song mainly english songs.',
    info2: 'Api consumed : lyrics.ovh ',
    url: 'https://lyyric.netlify.app/',
    repo: 'https://github.com/adityasharan01/Lyrics-search', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Implementation of AJAX Method',
    info: 'A simple CRUD application where user can add,delete and update the values of the items.',
    info2: '',
    url: 'http://shopkyun.herokuapp.com/',
    repo: 'https://github.com/adityasharan01/Simple_cRuD', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Connect",
  email: 'ranjan.aditya2009@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/aditya_sharan01/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aditya-sharan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/adityasharan01',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
