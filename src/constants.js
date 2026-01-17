// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import awsLogo from './assets/tech_logo/aws.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import npmLogo from './assets/work_logo/npm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'AWS', logo: awsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "IT Department",
    company: "Tata Advanced Systems Limited (TASL)",
    date: "01st July 2025 – 08th August 2025",
    desc: "Contributed to internal web-based solutions using HTML, CSS, JavaScript, and Node.js to improve workflow efficiency. Gained hands-on experience in system management and support, working on IT infrastructure and software-related tasks.",
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
    img: agcLogo,
    role: "Machine Learning",
    company: "THE ANNUAL TECHNO-MANAGEMENT FEST, IIT(BHU) VARANASI",
    date: "5 JULY TO 18 AUGUST OF 2025",
    desc: "Completed a 6-week internship focused on Machine Learning fundamentals and practical implementation. Worked on a Stock Price Prediction project involving data preprocessing, model training, and evaluation. Gained hands-on experience in predictive analytics, problem-solving, and real-world application of ML concepts.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Analysis",
      "Model Training",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Nodejs",

    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Prasad Institute of Technology Jaunpur",
    date: "Sept 2022 - July 2026",
    grade: "7.81 CGPA",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering. During my academic journey, I have been building a strong foundation in programming, data structures, algorithms, and software engineering. Alongside academics, I actively work on web development projects and continuously enhance my practical skills through hands-on learning and real-world applications.",
    degree: "B.Tech - Computer Science and Engineering ",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "T R N S I C CHANDIGAHANA JAUNPUR",
    date: "May 2021 - June 2022",
    grade: "80%",
    desc: "Passed Class XII in 2022 with an overall score of 80%, securing Rank 1 in the class. Studied core subjects including Mathematics, Physics, and Chemistry, developing strong analytical and academic excellence.",
    degree: "Class 12th (Intermediate) – UP Board (2022)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "T R N S I C CHANDIGAHANA JAUNPUR",
    date: "May 2019 - June 2020",
    grade: "79.5%",
    desc: "I completed my Class 10th under the UP Board with subjects including Hindi, English, Mathematics, Science, and Social Science, developing strong analytical thinking and academic discipline.",
    degree: "Class 10th (High School) – UP Board (2020)",
  },

];

export const projects = [
  {
    id: 3,
    title: "Flight Management MCDU Simulator",
    description:
      "This project is a web-based aircraft MCDU simulator that replicates the interface and functional behavior of a real cockpit system. It is developed using HTML, CSS, and JavaScript for the frontend, with Node.js and Python used for backend logic, data handling, and system simulation. The project focuses on realistic UI behavior, user input processing, and avionics-style interaction flow.",
    image: npmLogo,
    tags: ["HTML", "CSS", "JavaScript", "Nodejs","Python"],
    github: "https://github.com/adarshscript/Flight_Management_MCDU_Simulator.git",
    webapp: "https://ndc-vad-mcdu.netlify.app/",
  },
  {
    id: 0,
    title: "Restaurant Seat Booking System",
    description:
      "Restaurant Seat Booking System is a full-stack web application that allows users to book restaurant seats online by selecting the number of guests and providing booking details. The system ensures a smooth reservation experience with a user-friendly interface and efficient backend handling.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/adarshscript/restaurant-seat-booking-system",
    webapp: "https://restaurant-seat-booking.netlify.app/",
  },
  {
    id: 1,
    title: "Dual ID Attendance System",
    description:
      "Revolutionary dual authentication system combining RFID cards and fingerprint sensors with AI-powered behavior analytics. Built for enterprise-level attendance tracking and predictive insights. Every plan includes professional-grade Arduino-based hardware with RFID readers, fingerprint sensors, LED indicators, buzzers, and real-time clock modules. All components are enterprise-tested and come with full technical documentation",
    image: csprepLogo,
   tags: ["Arduino","Embedded C","RFID","Fingerprint","RTC","Attendance System"],
    github: "https://github.com/adarshscript/Dual-ID-Smart-Attendance-Behaviour-Analytics.git",
    webapp: "https://ailandingpage.ai/share/cGFnZS00ZjQ2ZWFjOA==",
  },
  {
    id: 2,
    title: "Jarvis-virtual-assistant",
    description:
      "Jarvis is a web-based virtual assistant inspired by futuristic AI systems.This project focuses on creating an interactive, visually rich, and responsive assistant interface using modern web technologies.",
    image: movierecLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/adarshscript/jarvis-virtual-assistant.git",
    webapp: "https://github.com/adarshscript/jarvis-virtual-assistant.git",
  },
  
  
];  