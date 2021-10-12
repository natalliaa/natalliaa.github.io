const introDetails = {
    image: "images/natallia.jpg",
    name: "Natallia Akulenka",
    profession: " Web Design & Development",
    welcome: "Welcome to my portfolio site!",
    message: "My expertise is in designing and developing responsive and user-friendly web applications and websites. I have a MS in Computer Science and MA in German. Next to my technical competencies, I have great communication skills from my former language teaching career. My other passions include ultramarathons, hiking, and traveling."
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
        text: "HTML5 | CSS3 | Bootstrap | JavaScript | ES6 | jQuery | React.js | Third-Party APIs"
    },
    {
        id: "2",
        title: "BACK-END",
        text: "Node.js | Express.js | MongoDB | SQL | CRUD Operations | Java"
    },
    {
        id: "3",
        title: "DEPLOY",
        text: "GitHub| Heroku | Netlify | GoDaddy"
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
        subtitle: "Responsive photo gallery website of national parks",
        technology: "HTML5 | CSS3 | CSS Grid | JavaScript | Google Maps API | Social APIs",
        description: [
            "Framework-free styling and responsive layout with CSS Grid",
            "Interactive map displaying park locations and information leveraging Google Maps Platform APIs",
            "Like and Share buttons of Facebook API",
            "Tweet button with a timeline of National Park Service updates with Twitter API."
        ],
        demoLink: "nature/index.html",
        codeLink: "https://github.com/NatalliaA/nature-california"
    },
    {
        id: "1",
        images: [
            "images/coding1.jpg",
            "images/coding2.jpg",
            "images/coding3.jpg",
            "images/coding4.jpg",
            "images/coding5.jpg",
            "images/coding6.jpg"
        ],
        title: "Coding Books",
        subtitle: "Responsive SPA for searching coding books",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | React Hooks",
        description: ["Single-page application implemented with React.js and React Hooks",
            "Navigation bar implemented with React Router",
            "Framework-free styling and responsive layout with CSS Grid"],
        demoLink: "https://natalliaa.github.io/coding-kids-react",
        codeLink: "https://github.com/NatalliaA/coding-kids-react/tree/master"
    },
    {
        id: "2",
        images: [
            "images/art1.jpg",
            "images/art2.jpg",
            "images/art3.jpg",
            "images/art4.jpg",
            "images/art5.jpg",
            "images/art6.jpg"
        ],
        title: "WeSeeArt",
        subtitle: "Street art website with user-generated content",
        technology: "HTML5 | CSS3 | Bootstrap | Node.js | Express.js | MongoDB",
        description: ["Server-side implementation with Node.js and Express.js",
            "CRUD operations for user posts and comments",
            "Users' content (text and photo urls) stored in a MongoDB",
            "Users' images stored in the cloud with Cloudinary API",
            "User authentication (credentials, password reset, etc.) with Passport.js and Nodemailer"],
        demoLink: "https://streetart-boulder.herokuapp.com",
        codeLink: "https://github.com/NatalliaA/art-network-node"
    },
    {
        id: "3",
        images: [
            "images/cart1.jpg",
            "images/cart2.jpg",
            "images/cart3.jpg",
            "images/cart4.jpg"
        ],
        title: "Shopping Cart",
        subtitle: "Responsive page with health classes to add to cart",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | Redux",
        description: ["Project implemented with React.js and Redux",
            "User can add or remove health classes from the cart",
            "The total amount of classes and fees are displayed",
            "Framework-free styling and responsive layout with CSS Grid"],
        demoLink: "https://natalliaa.github.io/shopping-cart-react",
        codeLink: "https://github.com/NatalliaA/shopping-cart-react/tree/master"
    },
    {
        id: "4",
        images: [
            "images/school1.jpg",
            "images/school2.jpg",
            "images/school3.jpg",
            "images/school4.jpg",
            "images/school5.jpg"
        ],
        title: "Lesson with Quiz",
        subtitle: "Online multimedia lesson",
        technology: "HTML5 | CSS3 | Bootstrap | JavaScript | jQuery",
        description: ["Capital city quiz with sound effects using jQuery",
            "Responsive layout with Bootstrap's grid system",
            "Styling with Bootstrap's components (carousel, card, embed, etc.)"],
        demoLink: "school/index.html",
        codeLink: "https://github.com/NatalliaA/NatalliaA.github.io/tree/master/school"
    },
    {
        id: "5",
        images: [
            "images/shakes1.jpg",
            "images/shakes2.jpg",
            "images/shakes3.jpg"
        ],
        title: "Milkshakes",
        subtitle: "Responsive webpage for searching milkshakes",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | REST API",
        description: ["Single-page application implemented with React.js",
            "Framework-free styling and responsive layout with CSS Grid",
            "Milkshake data fetched from a third-party API (TheCocktailDB)"],
        demoLink: "https://natalliaa.github.io/shakes-react",
        codeLink: "https://github.com/NatalliaA/shakes-react"
    },
    {
        id: "6",
        images: [
            "images/cities1.jpg",
            "images/cities2.jpg",
            "images/cities3.jpg",
            "images/cities4.jpg",
            "images/cities5.jpg"
        ],
        title: "Travel & Learn",
        subtitle: "Responsive webpage with photos, Google Maps and a distance calculator",
        technology: "HTML5 | CSS3 | CSS Grid | JavaScript | Google Maps API",
        description: ["Framework-free styling and responsive layout with CSS Grid",
            "Distance calculator implemented with jQuery and Google Maps API",
            "Display of the distance calculation results and the route on an embedded map"],
        demoLink: "cities/index.html",
        codeLink: "https://github.com/NatalliaA/top-us-cities"
    },
    {
        id: "7",
        images: [
            "images/qa1.jpg",
            "images/qa2.jpg",
            "images/qa3.jpg"
        ],
        title: "Q&A",
        subtitle: "Responsive webpage with Q&A collapsibles",
        technology: "HTML5 | CSS3 | CSS Grid | React.js | React Hooks",
        description: ["Q&A component with React useState hook",
            "Collapsible accordion to show/hide answers",
            "Framework-free styling and responsive layout with CSS Grid"],
        demoLink: "https://natalliaa.github.io/q-a-react",
        codeLink: "https://github.com/NatalliaA/q-a-react"
    },
    {
        id: "8",
        images: [
            "images/multiplication1.jpg",
            "images/multiplication2.jpg",
            "images/multiplication3.jpg",
            "images/multiplication4.jpg"
        ],
        title: "Multiplication Game",
        subtitle: "Interactive game",
        technology: "HTML5 | CSS3 | JavaScript",
        description: ["Interactive game with sound effects, timer, and score implemented with JavaScript",
            "Framework-free styling and responsive layout with CSS media queries"],
        demoLink: "multiplication/index.html",
        codeLink: "https://github.com/NatalliaA/multiplication-game"
    }
];

export { introDetails, skills, filterButtons, aboutDetails, projects };