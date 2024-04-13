import html from './assets/html-5.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import bootstrap from './assets/bootstrap.png';
import git from './assets/git.png';
import tailwid from './assets/tailwid.jpeg';
import reactImg from './assets/atom.png';
import API from './assets/api.png';
import guardScreenshot from './assets/guard-screenshot.jpg';
import blog from './assets/blog-project-screenshot.jpg';
import ecommerce from './assets/ecommerce-screenshot.jpg';
import developer from './assets/developer.io-screenshot.jpg';
import memoryGame from './assets/memory.jpg';
import cocaColaImage from './assets/cokeslider2.jpg'

export const Lists = [
    {
        id:1,
        heading: 'About',
        href: '#about'
    },
    {
        id:2,
        heading: 'Skills',
        href: '#skills'
    },
    {
        id:3,
        heading: 'Projects',
        href: '#projects'
    },
    {
        id:4,
        heading: 'Contact',
        href: '#contact'
    }
]

export const skills = [
  {
    id: 1,
    skill: 'HTML',
    img: html,
  },
  {
    id: 2,
    skill: 'CSS',
    img: css,
  },
  {
    id: 3,
    skill: 'JAVASCRIPT',
    img: javascript,
  },
  {
    id: 4,
    skill: 'BOOTSTRAP',
    img: bootstrap,
  },
  {
    id: 5,
    skill: 'GIT',
    img: git,
  },
  {
    id: 6,
    skill: 'Tailwind css',
    img: tailwid,
  },
  {
    id: 7,
    skill: 'REACT',
    img: reactImg,
  },
  {
    id: 8,
    skill: 'APIs',
    img: API,
  },
]


export const projects = [
  {
    id: 1,
    image: guardScreenshot,
    altText: 'movie-image',
    h2: 'Guarder-web',
    p: 'A react landing page website for requesting guardsmen services, built with react-js, HTML, CSS',
    link: 'https://guarder-three.vercel.app/',
    gitHub: 'https://github.com/pejuameenat/guarder',
  },

  {
    id: 2,
    image: cocaColaImage,
    altText: 'project-screenshot',
    h2: 'Coca cola clone',
    p: 'A landing page relpica of the coca cola website built with react.js, tailwind css',
    link: 'https://my-cocacola-app.vercel.app/',
    gitHub: 'https://github.com/pejuameenat/my-cocacola-app',
  },

  {
    id: 3,
    image: ecommerce,
    altText: 'movie-image',
    h2: 'Artisan home',
    p: 'A Modern wesite for artisans and people who require theeir services built with vanilla, javascript, HTML, CSS.',
    link: 'https://artisan-home.vercel.app/index.html#',
    gitHub: 'https://github.com/pejuameenat/Artisan-home',
  },
  {
    id: 4,
    image: developer,
    altText: 'travel-image',
    h2: 'Developer.io',
    p: 'A simple landing page for connecting early stage developers built with vanilla javascript, HTML, CSS.',
    link: 'https://pejuameenat.github.io/developer.io/',
    gitHub: 'https://github.com/pejuameenat/developer.io',
  },
  {
    id: 5,
    image: blog,
    altText: 'travel-image',
    h2: 'News Blog',
    p: 'Blog landing page which updates on trending news!',
    link: 'https://news-blog-nine.vercel.app/index.html',
    gitHub: 'https://github.com/pejuameenat/News-Blog',
  },

  {
    id: 6,
    image: memoryGame,
    altText: 'movie-image',
    h2: 'Memory Game',
    p: 'An exciting memory game made to task the brain! built with vanilla javascript, HTML and CSS.',
    link: 'https://memory-game-rosy-sigma.vercel.app/',
    gitHub: 'https://github.com/pejuameenat/memory-game',
  },
]
