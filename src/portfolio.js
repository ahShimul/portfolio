/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'Abul Hasnat',
  title: "Hi all, I'm Hasnat",
  subTitle: emoji(
    'A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / TypeScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
  ),
  resumeLink:
    'https://drive.google.com/file/d/1F5Wv4ClZUwcz06vIhYS0Dxu0CQ9jYw_W/view?usp=sharing',
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/ahShimul',
  linkedin: 'https://www.linkedin.com/in/a-hasnat-shimul/',
  gmail: 'ah.shimul04@gmail.com',
  facebook: 'https://www.facebook.com/shimul014481',
};

// Your Skills Section

const skillsSection = {
  title: 'What i do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop efficient APIs using NodeJS, TypeScript, Serverless framework and other AWS tools',
    ),
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web applications',
    ),
    emoji('⚡ Integration of third party services such as AWS'),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: 'fab fa-swift',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Backend',
      progressPercentage: '90%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80%',
    },
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '60%', //Insert relative proficiency in percentage
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Development Engineer I',
      company: 'Craftsmenltd',
      companylogo: require('./assets/images/craftsmen.png'),
      date: 'September 2019 – Present',
      desc: '',
      descBullets: [
        'Part of the development team in Craftsmen Limited ensuring development of the new features of the client’s product.',
        'Writing, refactoring and maintaining readable and bug-free code.',
        'Development using NodeJS, REST API and AWS server.',
      ],
    },
    {
      role: 'Quality Assurance Engineer',
      company: 'Shohoz',
      companylogo: require('./assets/images/shohoz.png'),
      date: 'January 2019 – September 2019',
      desc: '',
      descBullets: [
        'Part of the QA team in Shohoz Limited ensuring the quality of the software.',
        'The only person handling the quality assurance process of the Shohoz-Food section.',
        'Quality control through manual and automated testing',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'ahShimul', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: '',
//   subtitle: '',
//   projects: [],
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achivementsCards: [
    {
      title: 'Participated in National Hackathon',
      subtitle:
        'National Hackathon is a competition where students from all across the country participate to solve some real world problem. I with my team participated in 2016 hackathon',
      image: require('./assets/images/hackathon.jfif'),
      footerLink: [],
    },
    {
      title: 'Participated in IEEE app development contest',
      subtitle:
        'Participated in IEEE app development contest where our team won the 5th prize',
      image: require('./assets/images/ieee.png'),
      footerLink: [],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://medium.com/craftsmenltd/lambda-edge-a-different-way-to-configure-spa-client-side-routing-like-reactjs-angular-js-or-vue-d2425924b7be',
      title:
        'Lambda@Edge, a different way to configure SPA client side routing (like ReactJS, Angular JS or Vue JS) with S3 and CloudFront',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
  ],
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅',
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+8801679014481',
  email_address: 'ah.shimul04@gmail.com',
};

//Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
