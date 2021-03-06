const introDetails = {
    image: "images/natallia.jpg",
    name: "Natallia Akulenka",
    profession: "Web Design & Development",
    message: "Hi! I am a junior web developer looking for a new role. My expertise is in designing and developing user-friendly web applications using modern technologies: HTML, CSS, Bootstrap, React, JavaScript, ES6, and Node.js. Next to my technical competencies, I have great communication skills from my former career as a world language teacher. My other passions include ultramarathons, hiking, and traveling. Have a look at some of my projects and get in touch with me. I am located near Boulder in Colorado and open to work remotely."
};

const skills = [
    {
        id: "0",
        title: "DESIGN",
        text: "Web Design | Figma | User Experience"
    },
    {
        id: "1",
        title: "FRONT-END",
        text: "HTML5 | CSS3 | Bootstrap | JavaScript | ES6 | jQuery | React.js | Unit Tests | APIs"
    },
    {
        id: "2",
        title: "BACK-END",
        text: "Node.js | Express.js | MongoDB | SQL | CRUD Operations | Java"
    },
    {
        id: "3",
        title: "DEPLOY",
        text: "SEO | GoDaddy | GitHub Pages | Heroku | Netlify"
    }
];

const filterButtons = [
    "All Projects",
    "CSS Grid",
    "Bootstrap",
    "JavaScript",
    "React.js",
    "Node.js",
    "API"
]

const aboutDetails = [
    {
        id: "0",
        image: "images/developer.jpg",
        title: "DEVELOPER",
        lineOne: "Problem Solving | Creativity",
        lineTwo: "User Focus | Research",
        lineThree: "Learning"
    },
    {
        id: "1",
        image: "images/ultrarunner.jpg",
        title: "ULTRARUNNER",
        lineOne: "Goal Setting | Planning",
        lineTwo: "Determination | Success",
        lineThree: "Hard Work"
    },
    {
        id: "2",
        image: "images/teacher.jpg",
        title: "TEACHER",
        lineOne: "Communication | Presentation",
        lineTwo: "Organization | Training",
        lineThree: "Intercultural Competence"
    },
    {
        id: "3",
        image: "images/mom.jpg",
        title: "MOTHER",
        lineOne: "Responsibility | Teamwork",
        lineTwo: "Leadership | Negotiation",
        lineThree: "Multitasking"
    }
];

const projects = [ 
    {
        id: "0",
        images: [
            "images/center1.jpg",
            "images/center2.jpg",
            "images/center3.jpg",
            "images/center4.jpg",
            "images/center5.jpg",
            "images/center6.jpg"
        ],
        title: "Colorado Russian Center",
        subtitle: "Website for Colorado Russian Center ",
        technology: "HTML5 | CSS3 | Bootstarp | JavaScript",
        description: ["Designed and developed a website for a nonprofit organization",
            "Website includes pages about school, classes, teachers, tuition, contact, etc.",
            "Styling with Bootstrap's components (carousel, accordeon, modal, card, etc.)"],
        demoLink: "https://www.coloradorussiancenter.org/",
        codeLink: ""
    },
    {
        id: "1",
        images: [
            "images/portfolio1.jpg",
            "images/portfolio2.jpg",
            "images/portfolio3.jpg",
            "images/portfolio4.jpg",
            "images/portfolio5.jpg"
        ],
        title: "Portfolio",
        subtitle: "Portfolio Site",
        technology: "HTML5 | CSS3 | React.js | React-Bootstrap",
        description: ["Single-page application implemented with React.js and React Hooks",
            "Responsive layout styled with react-bootstrap"],
        demoLink: "",
        codeLink: "https://github.com/natalliaa/natalliaa.github.io"
    },
    {
        id: "2",
        images: [
            "images/coding1.jpg",
            "images/coding2.jpg",
            "images/coding3.jpg",
            "images/coding4.jpg",
            "images/coding5.jpg",
            "images/coding6.jpg"
        ],
        title: "Coding Books",
        subtitle: "Single-Page Website for Filtering Books",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | React Hooks",
        description: ["Single-page application implemented with React.js and React Hooks",
            "Navigation bar implemented with React Router",
            "Framework-free styling and responsive layout with CSS Grid"],
        demoLink: "https://natalliaa.github.io/coding-kids-react",
        codeLink: "https://github.com/natalliaa/coding-kids-react/tree/master"
    },
    {
        id: "3",
        images: [
            "images/art1.jpg",
            "images/art2.jpg",
            "images/art3.jpg",
            "images/art4.jpg",
            "images/art5.jpg",
            "images/art6.jpg"
        ],
        title: "WeSeeArt",
        subtitle: "Website Project with User-Generated Content",
        technology: "HTML5 | CSS3 | Bootstrap | Node.js | Express.js | MongoDB",
        description: ["Server-side implementation with Node.js and Express.js",
            "CRUD operations for user posts and comments",
            "Users' content (text and photo urls) stored in a MongoDB",
            "Users' images stored in the cloud with Cloudinary API",
            "User authentication (credentials, password reset, etc.) with Passport.js and Nodemailer"],
        demoLink: "https://streetart-boulder.herokuapp.com",
        codeLink: "https://github.com/natalliaa/art-network-node"
    },
    {
        id: "4",
        images: [
            "images/shakes1.jpg",
            "images/shakes2.jpg",
            "images/shakes3.jpg"
        ],
        title: "Milkshakes",
        subtitle: "Webpage for Searching Milkshakes",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | REST API",
        description: ["Single-page application implemented with React.js",
            "Framework-free styling and responsive layout with CSS Grid",
            "Milkshake data fetched from a third-party API (TheCocktailDB)"],
        demoLink: "https://natalliaa.github.io/shakes-react",
        codeLink: "https://github.com/natalliaa/shakes-react"
    },
    {
        id: "5",
        images: [
            "images/cart1.jpg",
            "images/cart2.jpg",
            "images/cart3.jpg",
            "images/cart4.jpg"
        ],
        title: "Shopping Cart",
        subtitle: "Shopping Cart",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | Redux",
        description: ["Project implemented with React.js and Redux",
            "User can add or remove health classes from the cart",
            "The total amount of classes and fees are displayed",
            "Framework-free styling and responsive layout with CSS Grid"],
        demoLink: "https://natalliaa.github.io/shopping-cart-react",
        codeLink: "https://github.com/natalliaa/shopping-cart-react/tree/master"
    },
    {
        id: "6",
        images: [
            "images/school1.jpg",
            "images/school2.jpg",
            "images/school3.jpg",
            "images/school4.jpg",
            "images/school5.jpg"
        ],
        title: "Lesson with Quiz",
        subtitle: "Online Multimedia Lesson",
        technology: "HTML5 | CSS3 | Bootstrap | JavaScript | jQuery",
        description: ["Capital city quiz with sound effects using jQuery",
            "Responsive layout with Bootstrap's grid system",
            "Styling with Bootstrap's components (carousel, card, embed, etc.)"],
        demoLink: "school/index.html",
        codeLink: "https://github.com/natalliaa/online-school-jsquiz"
    },    
    {
        id: "7",
        images: [
            "images/np1.jpg",
            "images/np2.jpg",
            "images/np3.jpg",
            "images/np4.jpg",
            "images/np5.jpg",
            "images/np6.jpg",
            "images/np7.jpg",
            "images/np8.jpg"
        ],
        title: "Nature in California",
        subtitle: "Photo Gallery Website",
        technology: "HTML5 | CSS3 | CSS Grid | JavaScript | Google Maps API | Social APIs",
        description: [
            "Framework-free styling and responsive layout with CSS Grid",
            "Interactive map displaying park locations and information leveraging Google Maps Platform APIs",
            "Like and Share buttons of Facebook API",
            "Tweet button with a timeline of National Park Service updates with Twitter API."
        ],
        demoLink: "nature/index.html",
        codeLink: "https://github.com/natalliaa/nature-california"
    },
    {
        id: "8",
        images: [
            "images/cities1.jpg",
            "images/cities2.jpg",
            "images/cities3.jpg",
            "images/cities4.jpg",
            "images/cities5.jpg"
        ],
        title: "Travel & Learn",
        subtitle: "Webpage with a Distance Calculator",
        technology: "HTML5 | CSS3 | CSS Grid | JavaScript | Google Maps API",
        description: ["Framework-free styling and responsive layout with CSS Grid",
            "Distance calculator implemented with jQuery and Google Maps API",
            "Display of the distance calculation results and the route on an embedded map"],
        demoLink: "cities/index.html",
        codeLink: "https://github.com/natalliaa/top-us-cities"
    },
    {
        id: "9",
        images: [
            "images/qa1.jpg",
            "images/qa2.jpg",
            "images/qa3.jpg"
        ],
        title: "Q&A",
        subtitle: "Webpage with Q&A Collapsibles",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | React Hooks",
        description: ["Q&A component with React useState hook",
            "Collapsible accordion to show/hide answers",
            "Framework-free styling and responsive layout with CSS Grid"],
        demoLink: "https://natalliaa.github.io/q-a-react",
        codeLink: "https://github.com/natalliaa/q-a-react"
    },
    {
        id: "10",
        images: [
            "images/multiplication1.jpg",
            "images/multiplication2.jpg",
            "images/multiplication3.jpg",
            "images/multiplication4.jpg"
        ],
        title: "Multiplication Game",
        subtitle: "Interactive Multiplication Game",
        technology: "HTML5 | CSS3 | JavaScript",
        description: ["Interactive game with sound effects, timer, and score implemented with JavaScript",
            "Framework-free styling and responsive layout with CSS media queries"],
        demoLink: "multiplication/index.html",
        codeLink: "https://github.com/natalliaa/multiplication-game"
    }
];

export { introDetails, skills, filterButtons, aboutDetails, projects };