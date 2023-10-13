/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "Passionate Web Developer adept in bringing forth expertise in creating, designing and maintaining websites. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies including HTML, CSS, Tailwind CSS, Vanilla JavaScript,TypeScript, NextJS, ReactJS, NodeJS, ExpressJS, MongoDB,PHP, SQL,and C/C++. Able to effectively self-manage during independent projects, as well as collaborate in a team setting"
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://github.com/Prakhar-Shankar', '_blank')
                return "opening github account..."
            }
        },
        linkedin: {
            description: 'Opens my LinkedIn Profile.',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/prakhar-shankar-24a788227/', '_blank')
                return "opening github account..."
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/PrakharShankar2', '_blank')
                return "opening twitter handle..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'twitter',
            fn: () => {
                window.open('https://discordapp.com/users/810054631866105856', '_blank')
                return "opening discord account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 70%
                    hindi            - 100%
                    gen-z-langauge   - 00%
                    Next.js          - 70%
                    React.js         - 80%
                    python           - 40%
                    javascript         70%
                    html5            - 90%
                    css3             - 80%
                    tailwind         - 80%
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                \n---------------------\n
                    Front-end Development \n---------------------\n
                    Reactjs
                    Nextjs
                    HTML5
                    CSS3
                    Tailwind CSS
                    Bootstrap \n---------------------\n
                    Backend Development \n---------------------\n
                    Nodejs
                    Expressjs
                    EJS
                    APIs Handling
                    DOM\n-----------\n
                    Databases \n-----------\n
                    MongoDB
                    MySQL \n---------------------\n
                    Programming Languages \n---------------------\n
                    C
                    C++
                    Python 
                    Javascript
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                Clash Course - A fully functional deployed website which compares the courses from different
                online platforms (like Udemy, courseEra etc...) on the basis of price and rating.
                Skills used - React, Webscraping, python libraries - BeautifulSoup, JavaScript, Tailwind CSS \n \n
                -------------------------------------------------------------------------------------------------------------
                Query Verse - A full stack website which offers a QnA forum, users can ask or answer any questions. Users can
                up vote or down vote the existing questions. Users can create their profile and can visit the profiles of other
                users as well. It comes with the functionality of deleting and sharing the questions and answers also.
                Skills used - React, MongoDB, ExpressJS, NodeJs, CSS (MERN)
                --------------------------------------------------------------------------------------------------------------
                Query Verse - A full stack website which offers a QnA forum, users can ask or answer any questions. Users can
                up vote or down vote the existing questions. Users can create their profile and can visit the profiles of other
                users as well. It comes with the functionality of deleting and sharing the questions and answers also.
                Skills used - React, MongoDB, ExpressJS, NodeJs, CSS (MERN)
                --------------------------------------------------------------------------------------------------------    
                A chrome extension of AI based chatbot which retrieves data from open AI API, also used the same bot in
                already existing websites.
                `
            }
        },
        
        
       
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
       
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
