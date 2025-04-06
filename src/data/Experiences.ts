import GIT from "../assets/Skills/Tools/git.png";
import DOCKER from "../assets/Skills/Skills/Docker.webp";
import VUEJS from "../assets/Skills/Frameworks/vueJS.png";
import MYSQL from "../assets/Skills/Databases/mysql.png";
import LOOKER from "../assets/Skills/Databases/Looker.png";
import POSTGRES from "../assets/Skills/Databases/Postgres.png";
import NUXT from "../assets/Skills/Frameworks/Nuxt.svg";

export const Experiences = [
    {
        title: "Full Stack Developer in work-study program for 2 years",
        company: "Renault Group",
        date: "2024 - Present",
        description: "Developing and maintaining intern web applications using VueJS.",
        tasks: [
            "- Participated in the development of a web application for visualizing Looker platform data",
            "- Built mutiple application from scratch, while going through the entire development cycle",
            "- Translates business needs from inside factories to technical solutions",
        ],
        skills: [
            {name: 'VueJS', icon: VUEJS},
            {name: 'MySQL', icon: MYSQL},
            {name: 'Looker', icon: LOOKER},
            {name: 'Docker', icon: DOCKER},
            {name: 'Git', icon: GIT},
        ],
    },
    {
        title: "Full Stack Developer in work-study program for 1 year",
        company: "UX-Key",
        date: "2023 - 2024",
        description: "Assisted in the development of software solutions and participated codebase refactoring.",
        tasks: [
            "- Created complex queries to analyze user experience data over websites",
            "- Participated in the refactoring of the codebase to improve performance and maintainability",
        ],
        skills: [
            {name: 'VueJS', icon: VUEJS},
            {name: 'Nuxt', icon: NUXT},
            {name: 'PostgreSQL', icon: POSTGRES},
            {name: 'Docker', icon: DOCKER},
            {name: 'Git', icon: GIT},
        ]
    }
];