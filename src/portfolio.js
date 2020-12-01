﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Swarna Ilamathy",
  title: "Hi all, I'm Swarna",
  subTitle: emoji("An Inquisitive CS Engineer 👩‍💻 with 2+ years of experience in Machine Learning | NLP | Data Analysis and Analytics | Python Automation | Web Development | Feature Engineering | Computer Vision."),
  resumeLink: "https://drive.google.com/file/d/14Vf_lvzgLaONqCuAs6OtIpXbFs7TY-zS/view?usp=sharing"
};  

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/swarna97",
  linkedin: "https://www.linkedin.com/in/swarna-ilamathy/",
  gmail: "swarna.ilas@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "AI enthusiast on the way to making AI breakthroughs",
  skills: [
    emoji("⚡ Experiment with state-of-the-art Machine Learning and Deep Learning Models"),
    emoji("⚡ Natural Language Processing(NLP) Engineer - filling the gap between human and machine through text"),
    emoji("⚡ Automating most of the manual software testing workflows")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C, C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fab fa-connectdevelop"
    },
    {
      skillName: "oracle database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Cloud ML",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "R.M.D. Engineering College (Affiliated to Anna University)",
      logo: require("./assets/images/rmd_logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering - CGPA - 8.25/10",
      duration: "August 2014 - April 2018",
      desc: "Built deep foundation in Data Structures, Programming, Algorithms, Big Data, and Web Development through various academic and extra-curricular activities such as Coding Contests, Hackathons, Training, and Symposiums.",
      descBullets: [
        "Department Student Committee Representative for 4 academic years",
        "Only member from the CS department of Big Data Center Of Excellence(BDCOE): Elite COE with a competitive selection process.",
        "Part of Infosys Campus Connect: A training Program to build a deep foundation in Python, Software Engineering, and Web Application Development.",
      ]
    },
    {
      schoolName: "Velammal Matriculation Higher Secondary School",
      logo: require("./assets/images/velammal.jpg"),
      subHeader: "12th Standard | Major: Computer Science | Percentage : 91%",
      duration: "June 2012 - May 2014",
      desc: "",
      descBullets: [
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Full-Stack Development",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Embedded Engineer Aerospace",
      company: "Honeywell",
      companylogo: require("./assets/images/honeywell-logo.png"),
      date: "April 2019 – Present",
      desc: "Improving the productivity of Cross Functional Teams using cutting-edge strategies and frameworks",
      descBullets: [
"Automating the generation of test scripts from requirement using state-of-the-art NLP models",
"Automated the tools for Structural Coverage Analysis of C/C++ builds",
"Developed Chat assistant which guides the test engineer and to improve engineers verification and validation skills.",
      ]
    },
    {
      role: "Associate Engineer-Big Data & Analytics",
      company: "8KMiles Software Services",
      companylogo: require("./assets/images/8k.png"),
      date: "June 2018 – April 2019",
      desc: "Performance Benchmarking of different machine learning cloud products of AWS, Azure,Google,H2O, Apple.",
      descBullets: [
        "Routinely used data cleaning, data preprocessing, and feature selection techniques on Kaggle datasets.",
        "Improved accuracy of Machine Learning models through automated hyperparameter tuning",
        "Developed proof of concept for Retail Chatbot using Dialogflow enabling the users to query and retrieve product information",
              ]
    },
    {
      role: "Intern - Big Data & Analytics ",
      company: "8KMiles Software Services",
      companylogo: require("./assets/images/8k.png"),
      date: "Nov 2017 – May 2018",
      desc: "Research on Object Recognition Models and develop prototypes for Home Appliance Recognition",
      descBullets: [
        "Developed proof of concept for home appliance recognition using tensorflow object recognition",
        "Assisted in evaluating performance of custom vision products of Clarifai, Google",
              ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "swarna97", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements that accelerates me to do more!",

  achievementsCards: [
    {
      title: "Smart India Hackathon 2017 Finalist",
      subtitle: "National-level 36-Hour Product Development | Project Idea selected from 6000 submissions",
      image: require("./assets/images/SIH_logo_17.jpg"),
      footerLink: [
        { name: "Developed Monitoring System for Drug Manufacturing Units"},
        { name: "Certification", url: "" },
      ]
    },
    {
      title: "Smart India Hackathon 2018 Finalist",
      subtitle: "National-level 36-Hour Product Development | Project Idea selected from 12000 submissions",
      image: require("./assets/images/sih18.png"),
      footerLink: [ { name: "'e-Healthcare' - A platform for health schemes management "},
      { name: "Certification", url: "" },]
    },

    {
      title: " Big Data Center Of Excellence(BDCOE)",
      subtitle: "Only Member from Undergrad CS department to be selected for the Excellence Center",
      image: require("./assets/images/big_data_1.jpe"),
      footerLink: [
        { name: "Recognition as Top Coder", url: "" },
        { name: "Website", url: "https://rmd.ac.in/coe/bigdata/cc.html" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Certification",
  subtitle: "",

  blogs: [
    {
      url: "http://coursera.org/verify/C5LZYFCG52GH",
      title: "Machine Learning Foundations: A Case Study Approach",
      description: "Certification by University of Washington in Coursera "
    },
    {
      url:"https://www.coursera.org/verify/95ZGKR35Q6PD",
      title: "Natural Language Processing with Probabilistic Models",
      description: "As part of NLP Specialization Certification by DeepLearning.ai in Coursera"
    },
    {
      url:"https://www.coursera.org/verify/7M2C8KSEUL7V",
      title: "Natural Language Processing with Classification and Vector Spaces",
      description: "As part of NLP Specialization Certification by DeepLearning.ai in Coursera"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Standalone UI components",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ]
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7708446162",
  email_address: "swarna.ilas@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection,talkSection, contactInfo , twitterDetails};