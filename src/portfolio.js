
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Swarna Ilamathy",
  title: "Hi all, I'm Swarna",
  subTitle: emoji("An Inquisitive CS Engineer 👩‍💻 with 2+ years of experience in Machine Learning | NLP | Data Analysis and Analytics | Python Automation | Web Development | Feature Engineering | Computer Vision."),
  resumeLink: "https://drive.google.com/file/d/1XPRgO5ooAQkB4ctjCiwav52vzeGErlcu/view?usp=sharing"
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
    emoji("⚡ Automating most of the manual software testing workflows using the powerful Python")
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
      schoolName: "New York University",
      logo: require("./assets/nyu.jpg"),
      subHeader: "Incoming Computer Science Graduate Student, Fall 2021",
      duration: "September 2021 - May 2023",
      desc: "",
      descBullets: [
      ]
    },
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
  githubConvertedToken: "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",
  githubUserName: "swarna97", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Volunteer Experience",
  subtitle: "For the love of teaching!",
  projects: [
    {
      image: require("./assets/images/main_logo.png") ,
      link: "https://talentquestforindia.org/"
    },
    {
      image: require("./assets/images/rmd_logo.jpg"),
      link: "https://rmd.ac.in/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements that accelerates me to do more!",

  achievementsCards: [
    {
      title: "Strategic Innovation Award",
      url: "https://drive.google.com/file/d/1lpqRrlPQkmUje3VathLQaNe6oes7lmQN/view?usp=sharing",
      subtitle: "For developing and deploying Quality Improvement Frameworks \n Machine Learning and AI capabilities",
      image: require("./assets/images/honeywell-logo.png"),
      footerLink: [
        { name: "Award", url: "https://drive.google.com/file/d/1lpqRrlPQkmUje3VathLQaNe6oes7lmQN/view?usp=sharing" },
      ]
    },
    {
      title: "Smart India Hackathon 2017 Finalist",
      url: "https://drive.google.com/file/d/1A7Y5aQaMG9G2IxxtO5nrIGo1tsFem1wC/view?usp=sharing",
      subtitle: "National-level 36-Hour Product Development \n Project Idea selected from 6000 submissions",
      image: require("./assets/images/SIH_logo_17.jpg"),
      footerLink: [
        { name: "Monitoring System for Drug Manufacturing Units"},
        { name: "Certification", url: "https://drive.google.com/file/d/1A7Y5aQaMG9G2IxxtO5nrIGo1tsFem1wC/view?usp=sharing" },
      ]
    },
    {
      title: "Smart India Hackathon 2018 Finalist",
      url: "https://drive.google.com/file/d/1NzWfnTegV6a3ttgP-4NOAosJkeQ6_LHm/view?usp=sharing",
      subtitle: "National-level 36-Hour Product Development \n Project Idea selected from 12000 submissions",
      image: require("./assets/images/sih18.png"),
      footerLink: [ { name: "A platform for health schemes management "},
      { name: "Certification", url: "https://drive.google.com/file/d/1NzWfnTegV6a3ttgP-4NOAosJkeQ6_LHm/view?usp=sharing" },]
    },
    {
      title: "Publication",
      url: "https://drive.google.com/file/d/18HUSxor4ZzJmeV-miGtYcRo_uO_o6BGG/view?usp=sharing",
      subtitle: "Project Guidance Portal with Plagiarism Detection",
      image: require("./assets/images/ijesc.png"),
      footerLink: [
        { name: "International Journal of Engineering Science & Computing"},
        { name: "Publication", url: "https://drive.google.com/file/d/18HUSxor4ZzJmeV-miGtYcRo_uO_o6BGG/view?usp=sharing" },
      ]
    },
    {
      title: " Big Data Center Of Excellence(BDCOE)",
      url: "https://drive.google.com/file/d/1d71-fHIGzMEIM96j16NirFzwfDTVdhCP/view?usp=sharing",
      subtitle: "Only Member from Undergrad CS department to be selected for the Excellence Center",
      image: require("./assets/images/big_data_1.jpe"),
      footerLink: [
        { name: "Website", url: "https://rmd.ac.in/coe/bigdata/cc.html" },
        { name: "Recognition as Top Coder", url: "https://drive.google.com/file/d/1d71-fHIGzMEIM96j16NirFzwfDTVdhCP/view?usp=sharing" }
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
      url:"http://coursera.org/verify/specialization/SQ8XH4SZ9G6H",
      title: "Natural Language Processing Specialization",
      description: "Certification by DeepLearning.ai in Coursera"
    },
    {
      url: "http://coursera.org/verify/C5LZYFCG52GH",
      title: "Machine Learning Foundations: A Case Study Approach",
      description: "Certification by University of Washington in Coursera "
    },
    {
      url:"https://drive.google.com/file/d/0B-ggdl8FMW8cVXc0ZXpaNi1MRFE/view?usp=sharing",
      title: "Oracle JAVA Certification",
      description: "JAVA and Advanced JAVA Course Completion Certificate"
    },
    {
      url:"https://www.coursera.org/verify/WNLUEXPZV76W",
      title: "Programming for Everybody ",
      description: "Getting Started with Python"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Webinar on Desktop app development",
      subtitle: "Java SWING",
      slides_url: "https://www.canva.com/design/DAEJFr4MaVM/XuGfTUO-ppnTViJXcIlqKQ/edit#",
      event_url: "https://www.linkedin.com/posts/rmd-eie-9818971a8_rmdec-engineering-instrumentation-activity-6718547483913547777-z2wA"
    },
    {
      title: "Guest Lecture on Machine Learning",
      subtitle: "Hands-on session for undergraduate students",
      slides_url: "https://docs.google.com/presentation/d/1zWzOXCy_PCPjxd2rpEl3eBCkXX70erjEzAdSRnAn_4w/edit?usp=sharing",
      event_url: ""
    }
  ]
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [""]
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
