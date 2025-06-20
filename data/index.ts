export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        // title: "I prioritize client collaboration, fostering open communication ",
        title: "Turning ideas into immersive digital experiences that make an impact",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Remote-ready and timezone-agnostic",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    // {
    //   id: 4,
    //   title: "Tech enthusiast with a passion for development.",
    //   description: "",
    //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    //   imgClassName: "",
    //   titleClassName: "justify-start",
    //   img: "/grid.svg",
    //   spareImg: "/b4.svg",
    // },

    // {
    //   id: 5,
    //   title: "Currently building a JS Animation library",
    //   description: "The Inside Scoop",
    //   className: "md:col-span-3 md:row-span-2",
    //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    //   titleClassName: "justify-center md:justify-start lg:justify-center",
    //   img: "/b5.svg",
    //   spareImg: "/grid.svg",
    // },
    // {
    //   id: 6,
    //   title: "Do you want to start a project together?",
    //   description: "",
    //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    //   imgClassName: "",
    //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    //   img: "",
    //   spareImg: "",
    // },
];

export const projects = [
    {
        id: 1,
        title: "Testify: Test your knowledge on any topic, anytime, in any way you choose.",
        des: "Welcome to test.ai, your go-to platform for personalized knowledge testing, gamified learning, and real-time performance insights. With test.ai, you're not just taking a test—you're embarking on a dynamic learning journey that grows with you. Whether you're brushing up on topics for school, prepping for a certification, or just curious to challenge your knowledge, test.ai has it all!",
        img: "/test.png",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/exp_2.png",
            "/flask_2.svg",
            "/mongo_2.png",
        ],
        link: "https://testify-ai.vercel.app/",
        working: true,
    },
    {
        id: 2,
        title: "Medi Map: Real-Time Hospital Locator Based on Symptoms and Insurance Services",
        des: "A user-friendly application that locates nearby hospitals/PSUs on a map based on patient symptoms, providing referrals, triage information, and insurance service options.",
        img: "/medimap.jpg",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/exp_2.png",
            "/flask_2.svg",
            "/mongo_2.png",
        ],
        link: "https://github.com/genzverse-24/1216-conquer.git",
        working: false,
    },
    {
        id: 3,
        title: "Movie Recommendation System",
        des: "A personalized movie recommendation system that suggests films based on user preferences, viewing history, and ratings using machine learning algorithms.",
        img: "/movie.jpg",
        iconLists: [
            "/pyt.png",
            "/numpy.png",
            "/pan.png",
            "/sea.png",
            "/ml.png",
        ],
        link: "https://github.com/AbhiramChikatla/MovieRecommendationSystem.git",
        working: false,
    },
    {
        id: 4,
        title: "ASKG House Rental Website",
        des: "Askg is a user-friendly house rental platform connecting renters with verified listings, simplifying the search process with intuitive features and comprehensive property information.",
        img: "/house.jpg",
        iconLists: [
            "/re.svg",
            "/tail.svg",
            "/exp_2.png",
            "/mon.png",
            "/mongo_2.png",
        ],
        link: "https://askg.vercel.app/",
        working: true,
    },
    {
        id: 5,
        title: "PassOP- Password Manager",
        des: "A secure and intuitive password manager that safely stores and organizes your passwords, ensuring easy access and enhanced protection for your online accounts",
        img: "/pass.jpg",
        iconLists: [
            "/re.svg",
            "/mongo_2.png",
            "/exp_2.png",
            "/tail.svg",
            "/mon.png",
        ],
        link: "https://github.com/AbhiramChikatla/PassWordManager.git",
        working: false,
    },
    {
        id: 6,
        title: "An Automated Instagram Channel",
        des: "An automated Instagram channel that posts daily photos using Python scripts, ensuring consistent and timely content updates",
        img: "/instagram.jpg",
        iconLists: ["/pyt.png", "/api.png"],
        link: "https://github.com/AbhiramChikatla/InstagramAutomation",
        working: false,
    },
    {
        id: 7,
        title: "Arduino Solar Tracker",
        des: "A solar tracking system powered by Arduino that automatically adjusts the position of solar panels to follow the sun, maximizing energy capture and efficiency",
        img: "/solar.jpg",
        iconLists: ["/c-.png", "/ard.png", "/chip.png"],
        link: "https://github.com/AbhiramChikatla/Arduino-Solar-Tracker.git",
        working: false,
    },
    {
        id: 8,
        title: "Spotify Clone",
        des: "This is a Spotify Clone application that replicates the core functionality of Spotify, allowing users to browse, search, and listen to music. The app also supports playlist management, and a sleek music player interface.",
        img: "/spotify.jpg",
        iconLists: ["/html.png", "/css.png", "/js.png"],
        link: "https://github.com/AbhiramChikatla/Spotify_Clone.git",
        working: false,
    },
    {
        id: 9,
        title: "Dimensions",
        des: "A professional consultancy website offering expert advice and tailored solutions across various industries, designed for easy navigation and client engagement",
        img: "/dim.png",
        iconLists: [
            "/html.png",
            "/css.png",
            "/js.png",
            "/three.svg",
            "/gsap.svg",
        ],
        link: "https://abhiramchikatla.github.io/Dimensions/",
        working: true,
    },
];

export const testimonials = [
    {
        quote: "Abhiram's approach to our project was very effective. His attention to detail and commitment to delivering high-quality work made a notable difference. His skills in front-end development and problem-solving were impressive. I would recommend him for complex projects.",
        name: "Abhilash",
        title: "Devops Engineer",
    },
    {
        quote: "Abhiram did a great job translating our ideas into a well-designed and functional product. His responsiveness and creativity were valuable to the project. For anyone looking to improve their digital presence, Abhiram is a solid choice.",
        name: "GopiCharan",
        title: "Data Scientist",
    },
    {
        quote: "Working with Abhiram was a positive experience. His technical skills and project management were strong, and he understood our needs well. His solutions were both effective and efficient. I recommend him for high-quality development work.",
        name: "Karthik",
        title: "ML Engineer",
    },
    {
        quote: "Abhiram made valuable contributions to our project. His attention to detail and dedication were clear throughout. He combined technical skill with a collaborative approach. I am confident in recommending him for future projects.",
        name: "Sathwik",
        title: "UI/UX Designer",
    },
    {
        quote: "Collaborating with Abhiram was a good experience. His approach was proactive, and he consistently delivered high-quality results. His professionalism and dedication were key to the project's success. I recommend him for similar work.",
        name: "Maruthi",
        title: "Game Developer",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Developer",
        desc: "Designed, developed, and maintained dynamic web applications using modern technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
        company: "MotionCut Co.",
    },
    {
        id: 2,
        title: "Junior Developer",
        desc: "I contributed to front-end development project, focusing on enhancing user interfaces and improving the overall user experience",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
        company: "Bharat Intern",
    },
    // {
    //     id: 3,
    //     title: "Freelance App Dev Project",
    //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //     className: "md:col-span-2", // change to md:col-span-2
    //     thumbnail: "/exp3.svg",
    // },
    // {
    //     id: 4,
    //     title: "Lead Frontend Developer",
    //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp4.svg",
    // },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/AbhiramChikatla",
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://x.com/ChikatlaAbhiram",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/chikatla-abhiram/",
    },
];
