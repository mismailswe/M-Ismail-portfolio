/* Central content for the academic portfolio.
 * Update publications, research interests and profile details here.
 * Visual tokens live in styles/globals.css. Original project archives are retained.
 */

// svg's imports
import reactjs from "./assets/images/react.svg";
import mysql from "./assets/images/mysql.svg";
import sql from "./assets/images/sql.svg";
import javascript from "./assets/images/javascript.svg";
import typescript from "./assets/images/typescript.svg";
import next from "./assets/images/next.svg";
import redux from "./assets/images/redux.svg";
import node from "./assets/images/node.svg";
import express from "./assets/images/express.svg";
import nestjs from "./assets/images/nestjs.svg";
import mongodb from "./assets/images/mongodb.svg";
import graphql from "./assets/images/graphql.svg";
import firebase from "./assets/images/firebase.svg";
import postman from "./assets/images/postman.svg";
import materialui from "./assets/images/material-ui.svg";
import tailwind from "./assets/images/tailwind.svg";
import materializecss from "./assets/images/materializecss.svg";
import reactnative from "./assets/images/react-native.svg";
import bootstrap from "./assets/images/bootstrap.svg";
import git from "./assets/images/git.svg";
import docker from "./assets/images/docker.svg";
import aws from "./assets/images/aws.svg";
import azure from "./assets/images/azure.svg";
import figma from "./assets/images/figmaicon.svg";

import linux from "./assets/images/linux.svg";
import postgresql from "./assets/images/postgres.svg";
import hostinger from "./assets/images/hostinger.svg";
import gcp from "./assets/images/gcp.svg";
import php from "./assets/images/php.svg";
import laravel from "./assets/images/laravel.svg";
import angular from "./assets/images/angular.svg";
import django from "./assets/images/django.svg";
import fastapi from "./assets/images/fastapi.svg";
import swagger from "./assets/images/swagger.svg";
import blockchain from "./assets/images/blockchain.svg";
import excel from "./assets/images/excel.svg";
import seaborn from "./assets/images/seaborn.svg";
import tableau from "./assets/images/tableau.svg";
import powerbi from "./assets/images/powerbi.svg";
import scikitlearn from "./assets/images/scikit-learn.svg";
import beautifulsoup from "./assets/images/beautifulsoup.webp";
import scrapy from "./assets/images/scrapy.svg";
import langchain from "./assets/images/Langchain.svg";
import openai from "./assets/images/openai.svg";
import ollama from "./assets/images/ollama.svg";
import huggingface from "./assets/images/huggingface.svg";
import ocr from "./assets/images/ocr.svg";
const greeting = {
  username: "Muhammad Ismail",
  name: "Muhammad Ismail",
  firstLine: "Research · Engineering · Open science",
  roles: ["Researcher & Software Engineer"],
  tagline:
    "I study how intelligent systems remember, reason, and remain reliable — connecting empirical research in language models with the engineering of secure, real-world systems.",
  location: "Islamabad, Pakistan",
  availability: "Open to research collaborations",
  resumeLink:
    "https://drive.google.com/drive/folders/1xZ5FCYhLX81S8znQ8AouZWX42naGQsjc?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Numbers shown in the hero / about strip
const statsSection = {
  display: true,
  stats: [
    {value: 5, suffix: "+", label: "Years building software"},
    {value: 25, suffix: "+", label: "Products shipped"},
    {value: 3, suffix: "", label: "Peer-reviewed papers"},
    {value: 10, suffix: "+", label: "Engineers mentored"}
  ]
};

// About section copy
const aboutSection = {
  display: true,
  title: "About me",
  paragraphs: [
    "My research spans memory for large language model agents, the convergence of AI and blockchain, and security in connected healthcare systems. I am particularly interested in the conditions under which a more complex architecture provides a measurable benefit.",
    "I hold an MS in Computer Software Engineering from Riphah International University, Islamabad. Alongside my research, I lead software engineering at Rocksoft Tech, bringing experience in system architecture, implementation, and evaluation to my research practice."
  ],
  highlights: [
    "Empirical evaluation",
    "Reproducible experiments",
    "Research to implementation"
  ]
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mismailswe",
  linkedin: "https://www.linkedin.com/in/muhammad-ismail-72681b177",
  gmail: "m.ismail.swe@gmail.com",
  gitlab: "https://gitlab.com/m.ismail.swe",
  // facebook: "https://web.facebook.com/profile.php?id=100012248836824",
  // medium: "https://medium.com/@m.ismail.swe",
  // stackoverflow: "https://stackoverflow.com/users/14154844/lucky-boy",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subtitle:
    "Six things I get asked for most — and the stacks I reach for to deliver them.",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE DIFFERENT TECH",
  // "What I do" cards — `icon` maps to a key in sections/About.js
  skills: [
    {
      icon: "layout",
      title: "Interfaces that feel fast",
      text: "Responsive, accessible web and mobile front-ends built with React, Next.js and React Native."
    },
    {
      icon: "server",
      title: "Backends that scale",
      text: "Well-structured APIs and services in Node.js, NestJS, Django and FastAPI, designed for real traffic."
    },
    {
      icon: "database",
      title: "Data modelled properly",
      text: "Relational, document and cloud data stores tuned for the queries the product actually makes."
    },
    {
      icon: "cloud",
      title: "Shipped and observable",
      text: "Containerised deployments on AWS, Azure and GCP with CI/CD pipelines and monitoring in place."
    },
    {
      icon: "brain",
      title: "ML where it earns its place",
      text: "Forecasting, NLP, computer vision and LLM-powered features taken from notebook to production."
    },
    {
      icon: "users",
      title: "Teams that ship",
      text: "Architecture reviews, sprint planning and mentoring that keep delivery predictable and code healthy."
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Javascript",
      src: javascript
    },
    {
      skillName: "Typescript",
      src: typescript
    },
    {
      skillName: "Reactjs",
      src: reactjs
    },
    {
      skillName: "Nextjs",
      src: next
    },
    {
      skillName: "Redux",
      src: redux
    },
    {
      skillName: "React Native",
      src: reactnative
    },
    {
      skillName: "Nodejs",
      src: node
    },
    {
      skillName: "Nestjs",
      src: nestjs
    },
    {
      skillName: "Expressjs",
      src: express
    },
    {
      skillName: "Sql",
      src: sql
    },
    {
      skillName: "Mongodb",
      src: mongodb
    },
    {
      skillName: "MySql",
      src: mysql
    },
    {
      skillName: "PostgreSql",
      src: postgresql
    },
    {
      skillName: "Graphql",
      src: graphql
    },
    {
      skillName: "Firebase",
      src: firebase
    },
    {
      skillName: "Postman",
      src: postman
    },
    {
      skillName: "Material ui",
      src: materialui
    },
    {
      skillName: "Tailwind",
      src: tailwind
    },
    {
      skillName: "Materializecss",
      src: materializecss
    },
    {
      skillName: "Bootstrap",
      src: bootstrap
    },

    {
      skillName: "Figma",
      src: figma
    },
    {
      skillName: "Git",
      src: git
    },
    {
      skillName: "Docker",
      src: docker
    },
    {
      skillName: "Aws",
      src: aws
    },
    {
      skillName: "Azure",
      src: azure
    },
    {
      skillName: "GCP",
      src: gcp
    },
    {
      skillName: "Hostinger",
      src: hostinger
    },
    {
      skillName: "Linux",
      src: linux
    }
  ],
  // 🔹 Grouped by category
  skillsByCategory: {
    Frontend: [
      {skillName: "JavaScript", src: javascript},
      {skillName: "TypeScript", src: typescript},
      {skillName: "React.js", src: reactjs},
      {skillName: "Angular", src: angular},
      {skillName: "Next.js", src: next},
      {skillName: "Redux", src: redux},
      {skillName: "React Native", src: reactnative},

      {skillName: "Material UI", src: materialui},
      {skillName: "Tailwind", src: tailwind},
      {skillName: "Bootstrap", src: bootstrap},
      {skillName: "MaterializeCSS", src: materializecss}
    ],
    Backend: [
      {skillName: "Node.js", src: node},
      {skillName: "NestJS", src: nestjs},
      {skillName: "Express.js", src: express},
      {skillName: "Django", src: django},
      {skillName: "FastAPI", src: fastapi},
      {skillName: "PHP", src: php},
      {skillName: "Laravel", src: laravel},
      {skillName: "Blockchain", src: blockchain}
    ],
    Databases: [
      {skillName: "MongoDB", src: mongodb},
      {skillName: "MySQL", src: mysql},
      {skillName: "PostgreSQL", src: postgresql},
      {skillName: "SQL", src: sql},
      {skillName: "GraphQL", src: graphql},
      {skillName: "Firebase", src: firebase}
    ],
    "Cloud & Deployment": [
      {skillName: "AWS", src: aws},
      {skillName: "Azure", src: azure},
      {skillName: "GCP", src: gcp},
      {skillName: "Hostinger", src: hostinger},
      {skillName: "Docker", src: docker},
      {skillName: "Linux", src: linux}
    ],
    "Tools & Others": [
      {skillName: "Git", src: git},
      {skillName: "Postman", src: postman},
      {skillName: "Swagger", src: swagger},
      {skillName: "Figma", src: figma}
    ],
    "Data Science & ML": {
      "Data Analysis": [
        {
          skillName: "Python",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          skillName: "Pandas",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        },
        {
          skillName: "NumPy",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
        },
        {
          skillName: "BeautifulSoup",
          src: beautifulsoup
        },
        {
          skillName: "Scrapy",
          src: scrapy
        },
        {
          skillName: "Microsoft Excel",
          src: excel
        },
        {
          skillName: "Jupyter",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
        }
      ],
      "Data Visualization": [
        {
          skillName: "Matplotlib",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
        },
        {
          skillName: "Seaborn",
          src: seaborn
        },
        {
          skillName: "Tableau",
          src: tableau
        },
        {
          skillName: "Power BI",
          src: powerbi
        }
      ],

      "Machine Learning": [
        {
          skillName: "TensorFlow",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
        },
        {
          skillName: "PyTorch",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
        },
        {
          skillName: "Scikit-learn",
          src: scikitlearn
        },
        {
          skillName: "Keras",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
        },
        {
          skillName: "OpenCV",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
        },
        {
          skillName: "OCR",
          src: ocr
        }
      ],

      "AI & APIs": [
        {
          skillName: "Ollama",
          src: ollama
        },
        {
          skillName: "Hugging Face",
          src: huggingface
        },
        {
          skillName: "LangChain",
          src: langchain
        },
        {
          skillName: "OpenAI API",
          src: openai
        }
      ]
    }
  },
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Riphah International University Islamabad",
      logo: require("./assets/images/Riphah-Logo.jpg"),
      subHeader: "Master of Science in Computer Software Engineering",
      duration: "04 Sep 2023 - 07 Jul 2025",
      desc: "Graduate study in software engineering, including software architecture, cloud computing, language models, machine learning, NLP, and data science.",
      descBullets: [
        "In-depth exploration of advanced topics such as Software Architecture, Cloud Computing, LLM, ML, NLP, and Data Science",
        "Researching and applying innovative software development methodologies such as agile, DevOps",
        "Building a solid understanding of Blockchain, Docker, and Kubernetes, laying the groundwork for their practical application in upcoming projects"
      ]
    },
    {
      schoolName: "University of Engineering & Technology Mardan",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Software Engineering",
      duration: "June 2018 - June 2022",
      desc: "Completed a comprehensive curriculum covering Software Engineering, Web Security, Operating Systems, Computer Communication Networks, and Database Management.",
      descBullets: [
        "Developed strong problem-solving and critical-thinking skills through hands-on projects and real-world applications.",
        "Acquired proficiency in programming languages such as  C++, sql, Javascript, Typescript and applied them in various software development projects.",
        "Demonstrated a deep understanding of Web Security principles, implementing secure coding practices in software projects."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Team Lead - Software Engineering",
      company: "Rocksoft Tech",
      companylogo: require("./assets/images/rocksoft_tech_logo.png"),
      date: "Jan 2024 – Present",
      desc: "Leading development and delivery for TrueBidData, FastEstimator and the Projut system —  platforms for US/UK markets",
      descBullets: [
        "Lead end-to-end development for truebiddata.com, fastestimator.com (construction bidding platforms) and Projut (procurement & project-management system)",
        "Lead and mentor the engineering team, oversee architecture reviews, and drive sprint planning and code quality",
        "Work with stakeholders and product owners to deliver stable releases and continuous improvements"
      ]
    },

    {
      role: "MERN Stack Developer",
      company: "Codistan Ventures",
      companylogo: require("./assets/images/codistan.png"),
      date: "July 2022 – Jan 2024",
      desc: "Led successful development, expanded project portfolio, managed cross-functional teams, and spearheaded innovations for enhanced system performance",
      descBullets: [
        "Orchestrated successful delivery of Rancher Cafe, Dhartee.pk, Rezlist, and BodySlide projects, expanding Codistan Ventures' portfolio",
        "Led cross-functional teams in Agile development, ensuring timely and efficient delivery of software solutions",
        "Collaborated with diverse stakeholders, defining functionality for 10+ products, aligning solutions with industry standards"
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "SpotTroop",
      companylogo: require("./assets/images/spottroop.jpeg"),
      date: "Dec 2022 – Nov 2023 ",
      desc: "Contributed to SpotTroop, spearheading the development of an advanced website and mobile application for enhanced car parking experiences in Kial, Germany.",
      descBullets: [
        "Led React.js frontend and Node.js backend API implementation, with contributions to React Native for mobile app",
        "Utilized GitHub flow, Docker for containerization, and maintained code quality through API testing with Jest",
        "Served as Software Team Lead, overseeing bug resolutions and introducing features"
      ]
    },
    {
      role: "Reactjs & Nodejs Developer",
      company: "Grey Software",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Dec 2020 – June 2022 ",
      desc: "Contributed as a developer,participated in designing and implementing innovative software solutions",
      descBullets: [
        "Directed the creation of scalable reusable Component Craft System for React.js",
        "Ensured efficient collaboration and version control through streamlined Git workflows",
        "Played a key role in resolving bugs and seamlessly integrating new features",
        "Contributed to fostering a culture of code quality by improving coding standards and documentation"
      ]
    }
  ]
};

// Some big industry projects

const softwareProjects = {
  title: "Software Projects",
  subtitle: "Some of the software development projects that, I have worked on",

  projects: [
    {
      Id: 1,
      image: require("./assets/images/rancher.png"),
      projectName: "Rancher Cafe",
      projectDesc:
        "Rancher Cafe connects customers with Rancher Cafe branches that offer food delivery in their vicinity. Customers can browse the menus of available branches, send in food orders, and make payment accordingly",
      footerLink: [
        {
          name: "View ranchers cafe",
          url: "https://rancherscafe.com"
        }
      ]
    },

    {
      Id: 3,
      image: require("./assets/images/truebiddata.jpeg"),
      projectName: "TrueBidData",
      projectDesc:
        "TrueBidData provides quantity takeoff and cost estimation services for construction projects, while also helping users prepare and manage competitive bids to streamline the bidding process and improve their chances of winning",
      footerLink: [
        {
          name: "View truebiddata",
          url: "https://truebiddata.com"
        }
      ]
    },
    {
      Id: 5,
      image: require("./assets/images/fastestimator.png"),
      projectName: "FastEstimator",
      projectDesc:
        "FastEstimator provides takeoff and cost estimating services for construction projects, helping clients quantify materials and forecast expenses",
      footerLink: [
        {
          name: "View fastestimator",
          url: "https://fastestimator.com"
        }
      ]
    },
    {
      Id: 4,
      image: require("./assets/images/projut.png"),
      projectName: "Projut",
      projectDesc:
        "Procure construction software streamlines project procurement and tender management, allowing clients, contractors, and consultants to collaborate on bids, RFQs, and contract awards in one digital platform for greater efficiency and transparency",
      footerLink: [
        {
          name: "View projut",
          url: "https://projut.rocksofttech.com"
        }
      ]
    },
    {
      Id: 2,
      image: require("./assets/images/dhartee.png"),
      projectName: "Dhartee.pk",
      projectDesc:
        "Dhartee PK is an innovative real estate portal enabling purchase and sale of property. You get matchless property viewing experience through 360 interactive panoramic photos and virtual tours"
    },
    {
      Id: 6,
      image: require("./assets/images/bodyslide.png"),
      projectName: "Bodyslide",
      projectDesc:
        "BodySlide is a premier spa and massage center in Canada offering top-quality masseuse services. Bodyslide offering exceptional service to the clients, delivering a range of customized massage therapies to meet their unique needs"
    },
    {
      Id: 7,
      image: require("./assets/images/resturent.png"),
      projectName: "Restaurant Management System",
      projectDesc:
        "Engineered a comprehensive system overseeing end-to-end restaurant operations, optimizing food inventory management, order processing, and seamless integration with billing and accounting modules for enhanced overall efficiency"
    },
    {
      Id: 8,
      image: require("./assets/images/parking.png"),
      projectName: "SpotTroop",
      projectDesc:
        "A parking reservation website in Germany, Spot Troop simplifies the process for drivers to discover and book parking spots in advance within their vicinity, while also offering real-time availability tracking, digital payments, navigation assistance, and parking history management for a seamless parking experience"
    },
    {
      Id: 9,
      image: require("./assets/images/autohub_pos.png"),
      projectName: "Autohub pos",
      projectDesc:
        "A pos system manages sales transactions, billing, and payment processing for retail or service businesses. It also handles inventory tracking, customer management, reporting, and staff control to streamline daily operations and improve business efficiency"
    },

    {
      Id: 10,
      image: require("./assets/images/rezzlist.jpg"),
      projectName: "Rezzlist",
      projectDesc:
        "With rezzlist, you can easily make a reservation for your next dining experience. With just a few clicks, you can browse resuturents, available tables, select your preferred time and date, and secure your booking in no time at a specfic city"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const aiProjects = {
  title: "Data Science & ML Projects",
  subtitle:
    "Some of the data science and machine learning projects that I have worked on",
  projects: [
    {
      Id: 1,
      image: require("./assets/images/sales_forecast.png"),
      projectName: "Sales Forecasting",
      projectDesc:
        "Time-series forecasting system that predicts weekly sales per store using ARIMA, Prophet and LSTM ensembles. Includes data cleaning, feature engineering, and a dashboard for scenario analysis and KPI tracking."
    },
    {
      Id: 2,
      image: require("./assets/images/image_classifier.png"),
      projectName: "Image Classification (CNN)",
      projectDesc:
        "Convolutional Neural Network pipeline for multi-class image classification. Trained with transfer learning (ResNet/Inception), augmented dataset, and model explainability via Grad-CAM."
    },
    {
      Id: 3,
      image: require("./assets/images/churn_model.png"),
      projectName: "Customer Churn Prediction",
      projectDesc:
        "Supervised learning model to predict customer churn using XGBoost and stacked ensembles. Includes feature importance analysis, calibration, and business rules for targeted retention campaigns."
    },
    {
      Id: 4,
      image: require("./assets/images/recommender.jpeg"),
      projectName: "Recommendation System",
      projectDesc:
        "Hybrid recommender combining collaborative filtering and content-based methods to provide personalized product recommendations. Implemented offline training and real-time scoring endpoints."
    },
    {
      Id: 5,
      image: require("./assets/images/nlp_sentiment.png"),
      projectName: "NLP Sentiment Analyzer",
      projectDesc:
        "NLP pipeline for sentiment and intent analysis on user reviews using transformers (fine-tuned BERT). Includes entity extraction, topic modelling, and dashboarding of sentiment trends."
    },
    {
      Id: 6,
      image: require("./assets/images/anomaly_detection.png"),
      projectName: "Time-series Anomaly Detection",
      projectDesc:
        "Anomaly detection system for sensor/time-series data using Isolation Forests and LSTM-autoencoders. Built streaming alerts and root-cause analysis for operations teams."
    },
    {
      Id: 7,
      image: require("./assets/images/credit_scoring.png"),
      projectName: "Credit Scoring Model",
      projectDesc:
        "Risk-scoring model using logistic regression and tree-based methods for loan default prediction. Includes model monitoring, fairness checks, and explainability reports for compliance."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Personal projects. Not rendered by default — add another
// <Projects data={bigProjects} .../> in containers/Main.js to show them.
const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some of the personal projects that, I have worked so far",
  projects: [
    {
      image: require("./assets/images/socialNetwork.png"),
      projectName: "Social Media Website",
      projectDesc:
        "A Facebook-like social media app for seamless connection, content sharing, and interactive experiences. Enjoy a user-friendly interface, real-time updates, and personalized content feeds for an engaging social networking experience"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/Social-Network-Facebook"
      //   }
      // ]
    },

    {
      image: require("./assets/images/laundry.png"),
      projectName: "Laundry Provider",
      projectDesc:
        "Laundry Provider offers convenient cloth washing services at your doorstep. Simply visit the website to schedule pick-ups, choose services, and experience hassle-free laundry with easy online access"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/DhobiGaat-backend"
      //   }
      // ]
    },
    {
      image: require("./assets/images/ecommerece.png"),
      projectName: "Ecommerece Website",
      projectDesc:
        "Crafted and launched a dynamic ecommerce website, seamlessly connecting customers to a world of diverse products. With a user-friendly interface and secure transactions, the platform ensures a delightful and efficient shopping experience"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/ecommerce-project"
      //   }
      // ]
    },
    {
      image: require("./assets/images/burger-builder.png"),
      projectName: "Burger Builder",
      projectDesc:
        "Developed an online fast food ordering website. Create personalized burgers and enjoy efficient online ordering for a delightful culinary experience"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/Burger-builder"
      //   }
      //   //  you can add extra buttons here.
      // ]
    }
  ]
  // display: true // Set false to hide this section, defaults to true
};

// Achievement Section — certifications synced from LinkedIn profile.
// Run `npm run build` with USE_LINKEDIN_DATA=true to refresh via Apify,
// or edit `public/linkedin-certifications.json` directly.

const achievementSection = {
  display: true,
  title: "Achievements & Certifications",
  subtitle:
    "Licenses and certifications from my LinkedIn profile — AI, data science, and professional credentials.",
  profileUrl: socialMediaLinks.linkedin,
  certifications: [
    {
      id: "ai-foundations-ml",
      title: "Artificial Intelligence Foundations: Machine Learning",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/f2dfd55c24e68759ce6454e600289362f4d67c4ade03e87376b02137b39cff63",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "data-literacy",
      title: "Data Literacy: Exploring and Describing Data",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/dab4ef46889dcf8a99e58fbfebdb317300793213cbc00f35bb7293d7fbce91ea",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "data-science-foundations",
      title: "Data Science Foundations: Fundamentals",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/8d0b20fc5baad7fd20ca07a4a09e071a9f0fc884743d12df37ecb4538b8d7e3a",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "ml-python-decision-trees",
      title: "Machine Learning with Python: Decision Trees",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/b9e276d516d81f440f8267bd3669a05a5d7184b03bea108317088c4e0e7ff29d",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "ml-python-foundations",
      title: "Machine Learning with Python: Foundations",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/0440f32cccef0cbdd3fa770530c760972b87b586a3b08c7a46f126cf0ed97375",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "statistics-foundations-1",
      title: "Statistics Foundations 1: The Basics",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/78541eaa0ba199bbb61833d67309a6ad6ed85bcc52edfd9326f4bbffc5dd832f",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "statistics-foundations-2",
      title: "Statistics Foundations 2: Probability",
      issuer: "LinkedIn",
      issuedDate: "2026-02",
      credentialUrl:
        "https://www.linkedin.com/learning/certificates/4de10dd2fa42a053609e0d6d3b5aa7ab288d2e8fe8f3e483befd7f7eb5841b",
      logoUrl: "https://logo.clearbit.com/linkedin.com"
    },
    {
      id: "duolingo-english",
      title: "English Proficiency Certificate",
      issuer: "Duolingo English Test",
      issuedDate: "2026-01",
      expiresDate: "2027-07",
      credentialUrl:
        "https://www.linkedin.com/in/muhammad-ismail-72681b177/details/certifications/",
      logoUrl: "https://logo.clearbit.com/duolingo.com"
    }
  ]
};

// Research & Publications Section
// Append new entries to `publications` to add future papers.

const researchSection = {
  display: true,
  title: "Publications",
  subtitle:
    "Published work in language model memory, AI, and secure connected systems.",
  profileLinks: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=7FUk17EAAAAJ&hl=en",
      ariaLabel: "View Muhammad Ismail on Google Scholar"
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0009-0004-6319-9018",
      ariaLabel: "View Muhammad Ismail on ORCID"
    },
    {
      label: "GitHub",
      url: "https://github.com/mismailswe",
      ariaLabel: "View Muhammad Ismail on GitHub"
    }
  ],
  publications: [
    {
      id: "hygram",
      year: 2026,
      featured: true,
      title:
        "When Does Graph-Structured Memory Help Multi-Session LLM Agents? An Empirical Study of HyGRAM, A Hybrid Graph\u2013Vector Memory Architecture",
      authors: "Muhammad Ismail, Azeem Akram",
      venue:
        "Spectrum of Engineering Sciences, Vol. 4, Issue 6, pp. 2901\u20132914 (2026)",
      roleBadge: "First Author",
      description:
        "An empirical study of hybrid graph\u2013vector memory architectures for multi-session LLM agents, with fully reproducible open-source code and a calibrated negative finding.",
      links: [
        {
          label: "View Paper",
          url: "https://thesesjournal.com/index.php/1/article/view/3354"
        },
        {
          label: "Code (GitHub)",
          url: "https://github.com/mismailswe/HyGRAM"
        }
      ],
      tags: ["LLM Agents", "RAG", "Knowledge Graphs", "Reproducible Research"]
    },
    {
      id: "blockchain-ai-iot",
      year: 2025,
      featured: false,
      title:
        "Exploring the Potential of Blockchain and AI Convergence to Secure and Verify IoT Data Transmissions in High-Stakes Industries",
      authors: "Muhammad Ismail et al.",
      venue:
        "Spectrum of Engineering Sciences, Vol. 3, Issue 5, pp. 447\u2013467 (2025)",
      roleBadge: "First & Corresponding Author",
      description:
        "Research on converging blockchain and AI to secure and verify IoT data transmissions in healthcare and finance.",
      links: [
        {
          label: "View Paper",
          url: "https://doi.org/10.5281/zenodo.15429512"
        }
      ],
      tags: ["Blockchain", "AI Security", "IoT"]
    },
    {
      id: "iot-healthcare",
      year: 2025,
      featured: false,
      title: "Securing IoT Devices in Healthcare: Challenges and Solutions",
      authors: "Azeem Akram, Muhammad Ismail et al.",
      venue:
        "Spectrum of Engineering Sciences, Vol. 3, Issue 5, pp. 133\u2013142 (2025)",
      roleBadge: "Co-Author",
      description:
        "Analysis of security vulnerabilities and protective mechanisms for IoT devices in healthcare settings.",
      links: [
        {
          label: "View Paper",
          url: "https://doi.org/10.5281/zenodo.15348564"
        }
      ],
      tags: ["IoT Security", "Healthcare"]
    }
  ]
};

// LinkedIn Posts Section — latest posts shown on the site.
// Update `public/linkedin-posts.json` or the posts array below to refresh content.

const linkedinSection = {
  display: true,
  title: "Latest on LinkedIn",
  subtitle:
    "Thoughts on AI engineering, research, and building reliable software systems.",
  profileUrl: socialMediaLinks.linkedin,
  posts: [
    {
      id: "hygram-paper",
      date: "2026-06-29",
      text: 'I am excited to share my latest research paper titled "When Does Graph-Structured Memory Help Multi-Session LLM Agents? An Empirical Study of HyGRAM."\n\nThis research addresses whether incorporating a knowledge graph into an LLM agent enhances memory retention during long conversations. I built and evaluated HyGRAM, a hybrid graph-vector memory architecture, on the LoCoMo benchmark — with fully reproducible open-source results.',
      url: "https://www.linkedin.com/posts/muhammad-ismail-72681b177_when-does-graph-structured-memory-help-multi-session-activity-7477453204197265408-AowP",
      reactions: 6,
      comments: 1,
      tags: ["LLM", "AgenticAI", "Research", "KnowledgeGraphs"]
    },
    {
      id: "nla-gpt2",
      date: "2026-06-20",
      text: "I recently rebuilt Anthropic's Natural Language Autoencoders (NLA) research method — scaled down to GPT-2 Small and trained on a free Google Colab GPU in 25 minutes. A complete activation-to-text-to-activation pipeline, open and reproducible.",
      url: "https://www.linkedin.com/posts/muhammad-ismail-72681b177_github-mismailswenla-gpt2-reimplementation-activity-7473985445434060800-zDdZ",
      reactions: 3,
      tags: ["MechanisticInterpretability", "NLP", "AIResearch", "LLM"]
    },
    {
      id: "ai-systems",
      date: "2026-05-24",
      text: "Most people think AI products fail because of the model. In reality, many fail because of weak context engineering, poor retrieval pipelines, bad prompt structure, and no evaluation strategy. The model is only one part of the system.",
      url: "https://www.linkedin.com/posts/muhammad-ismail-72681b177_ai-machinelearning-llm-activity-7464353866575134720-Oqse",
      reactions: 3,
      tags: ["AI", "RAG", "SoftwareEngineering", "GenerativeAI"]
    },
    {
      id: "blockchain-ai-iot",
      date: "2025-05-18",
      text: 'Published another research paper: "Exploring Blockchain and AI Convergence to Secure IoT Data in Healthcare and Finance." It highlights how AI and blockchain can work together to ensure secure, verified data transmission in critical sectors.',
      url: "https://www.linkedin.com/posts/muhammad-ismail-72681b177_exploring-the-potential-of-block-chain-and-activity-7329909753306939393-uzg1",
      reactions: 8,
      tags: ["Blockchain", "AI", "IoT", "Research"]
    },
    {
      id: "iot-healthcare",
      date: "2025-05-09",
      text: 'Excited to share my recent publication: "Securing IoT Devices in Healthcare: Challenges and Solutions." This MS research focuses on security challenges and practical solutions for safeguarding IoT devices in healthcare.',
      url: "https://www.linkedin.com/posts/muhammad-ismail-72681b177_view-of-securing-iot-devices-in-healthcare-activity-7326490665414975488-aBZl",
      reactions: 5,
      comments: 2,
      tags: ["IoT", "Healthcare", "Cybersecurity", "Research"]
    }
  ]
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "For research collaborations, questions about my papers, or opportunities at the intersection of AI research and engineering.",
  number: "+923029463719",
  email_address: "m.ismail.swe@gmail.com"
};

// Academic presentation uses the verified records above; add affiliations only
// when confirmed. No PhD enrollment, citation counts or awards are inferred.
const academicProfile = {
  degree: "MS, Computer Software Engineering",
  institution: "Riphah International University",
  interests: [
    {
      title: "Language model memory",
      description:
        "Graph–vector memory, retrieval-augmented generation, and evaluation of multi-session LLM agents.",
      keywords: "LLM agents / RAG / Knowledge graphs"
    },
    {
      title: "Interpretability & evaluation",
      description:
        "Reproducing research methods and examining what model representations reveal about system behavior.",
      keywords: "Model representations / Reproducibility"
    },
    {
      title: "Secure intelligent systems",
      description:
        "AI and blockchain for data integrity, with a focus on IoT and connected healthcare systems.",
      keywords: "AI security / Blockchain / IoT"
    }
  ],
  updates: [
    {
      date: "2026-06",
      label: "June 2026",
      text: "HyGRAM: an empirical study of graph-structured memory for multi-session LLM agents.",
      href: "#publication-hygram",
      type: "Publication"
    },
    {
      date: "2026-06",
      label: "June 2026",
      text: "Reimplemented natural language autoencoders on GPT-2 Small.",
      href: linkedinSection.posts.find(post => post.id === "nla-gpt2").url,
      type: "Research software"
    },
    {
      date: "2025-07",
      label: "July 2025",
      text: "Completed my MS in Computer Software Engineering at Riphah International University.",
      href: "#education",
      type: "Education"
    }
  ]
};

const researchProjects = {
  display: true,
  title: "Research software",
  subtitle:
    "Implementations that connect research questions with working experiments.",
  projects: [
    {
      Id: "hygram",
      projectName: "HyGRAM",
      category: "Language model memory",
      projectDesc:
        "A hybrid graph–vector memory architecture for multi-session LLM agents. The implementation accompanies an empirical study with reproducible experiments and a calibrated negative finding.",
      tags: ["LLM agents", "Graph–vector retrieval", "Evaluation"],
      footerLink: [
        {name: "Repository", url: researchSection.publications[0].links[1].url},
        {
          name: "Read the paper",
          url: researchSection.publications[0].links[0].url
        }
      ]
    },
    {
      Id: "nla-gpt2",
      projectName: "Natural language autoencoders",
      category: "Mechanistic interpretability",
      projectDesc:
        "A reimplementation of the natural language autoencoder method using GPT-2 Small: an activation-to-text-to-activation pipeline designed to make the experiment accessible on a free Colab GPU.",
      tags: ["GPT-2", "Model representations", "Reimplementation"],
      footerLink: [
        {
          name: "Implementation notes",
          url: linkedinSection.posts.find(post => post.id === "nla-gpt2").url
        }
      ]
    }
  ]
};

export {
  academicProfile,
  researchProjects,
  softwareProjects,
  statsSection,
  aboutSection,
  researchSection,
  aiProjects,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  linkedinSection,
  contactInfo
};
