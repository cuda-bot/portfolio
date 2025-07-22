// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import aliste from './assets/company/aliste.png';
import salzaa from './assets/company/salzaa.png';
// project section logo
import selforal from './assets/work/selforal.png';
import buyit from './assets/work/buyit.png'
import Salzaa from './assets/work/Salzaa.png'


//education section logo
import srm from './assets/education/srm.png';
import ddps from './assets/education/ddps.png';





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: aliste,
      role: "Software Developer Intern",
      company: "Aliste technologies",
      date: "June 2022 - Nov 2022",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: salzaa,
      role: "Cheif Operating Officer",
      company: "Salzaa Quick Commerce Startup",
      date: "Aug 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];

   export const projects = [
    
     {
      id: 0,
      title: "Salzaa Fashion Quick Commerce ",
      description:
        "A sleek, mobile-first platform designed to bring the latest fashion from neighborhood stores to customers’ doorsteps in under an hour. Salzaa offers a smooth and intuitive user experience, real-time product availability, and smart logistics integration. By bridging the gap between offline retailers and online shoppers, it redefines how people discover and receive fashion—fast, local, and hassle-free.",
      image: Salzaa,
      tags: ["Next JS", "Typescript", "JavaScript", "React JS", "Bootstrap","FireBase","Flutter" ,"Node JS",],
      github: "https://www.salzaa.com/",
      webapp: "https://www.salzaa.com/",
    },
    {
      id: 1,
      title: "Self Oral Examination",
      description:
        "A modern, responsive web application that uses AI to analyze dental images and detect potential oral health conditions. The application features a beautiful, user-friendly interface with drag-and-drop functionality and real-time analysis.",
      image: selforal,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Python","AI/ML","NLP","Flask","Vercel","Railway"],
      github: "https://github.com/cuda-bot/oral-health.git",
      webapp: "https://oral-health.vercel.app/",
    },
    {
      id: 2,
      title: "BuyIt Ecommerce App",
      description:"BuyIt is a full-stack MERN (MongoDB, Express, React, Node.js) e-commerce platform. It provides a robust backend REST API and a modern React frontend for users and administrators to manage products, categories, orders, and more.",
      image: buyit,
      tags: ["MongoDB", "Express JS", "JavaScript", "React JS", "Node.js","react icons","Vercel","Render"],
      github: "https://github.com/cuda-bot/buy_it.git",
      webapp: "https://buy-it-two.vercel.app/",
    }
   
    
  ];  


  export const education = [
    {
      id: 0,
      img: srm,
      school: "SRM Institute of Science and Technology",
      date: "July 2021 - July 2025",
      grade: "7.91 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science & Buisness System (B.Tech) from SRM IST, kattankullatur(KTR). Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech",
    },
  
    {
      id: 1,
      img: ddps,
      school: "Disha Delphi Public School",
      date: "Apr 2019 - March 2020",
      grade: "73.8%",
      desc: "I completed my class 12 education from Disha Delphi Public School, Kota, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: ddps,
      school: "Disha Delphi Public School",
      date: "Apr 2015 - March 2016",
      grade: "79.8%",
      desc: "I completed my class 10 education from Disha Delphi Public School, Kota, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];