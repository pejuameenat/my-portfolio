import html from './assets/html-5.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import redux from './assets/redux.png';
import git from './assets/git.png';
import tailwind from './assets/tailwind.jpeg'
import reactImg from './assets/atom.png';
import typeScript from './assets/Typescript_logo.png';
import guardScreenshot from './assets/guard-screenshot.jpg';
import blog from './assets/blog-project-screenshot.jpg';
import ecommerce from './assets/ecommerce-screenshot.jpg';
import developer from './assets/developer.io-screenshot.jpg';
import memoryGame from './assets/jobify.png';
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
    skill: 'GIT',
    img: git,
  },
  {
    id: 5,
    skill: 'Tailwind css',
    img: tailwind,
  },
  {
    id: 6,
    skill: 'REACT',
    img: reactImg,
  },
  {
    id: 7,
    skill: 'REDUX',
    img: redux,
  },
  {
    id: 8,
    skill: 'TYPESCRIPT',
    img: typeScript,
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
    p: 'A landing page replica of the coca cola website built with react.js, tailwind css, material ui',
    link: 'https://coca-cola-clone-git-master-aminats-projects.vercel.app/',
    gitHub: 'https://github.com/pejuameenat/Coca-Cola-clone',
  },

  {
    id: 3,
    image: ecommerce,
    altText: 'movie-image',
    h2: 'Artisan home',
    p: 'A Modern website for artisans and people who require their services built with vanilla, javascript, HTML, CSS.',
    link: 'https://artisan-home.vercel.app/index.html#',
    gitHub: 'https://github.com/pejuameenat/Artisan-home',
  },
  {
    id: 4,
    image: developer,
    altText: 'A man connecting image dots ',
    h2: 'Developer.io',
    p: 'A simple landing page for connecting early stage developers built with vanilla javascript, HTML, CSS.',
    link: 'https://pejuameenat.github.io/developer.io/',
    gitHub: 'https://github.com/pejuameenat/developer.io',
  },
  {
    id: 5,
    image: blog,
    altText: 'news-image',
    h2: 'News Blog',
    p: 'Blog landing page which updates on trending news!',
    link: 'https://news-blog-nine.vercel.app/index.html',
    gitHub: 'https://github.com/pejuameenat/News-Blog',
  },

  {
    id: 6,
    image: memoryGame,
    altText: 'movie-image',
    h2: 'Jobify',
    p: ' A simple landing page for a job posting platform',
    link: 'https://jobify-io.vercel.app/',
    gitHub: 'https://github.com/pejuameenat/jobify.io',
  },
]
