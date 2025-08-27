export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    demoUrl?: string;
    link?: string;
    stack?: string;
    github?: string;
};


export const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce App',
        stack: 'React, Node.js, express.js, MongoDB',
        description: 'A modern e-commerce website built with React, Node.js, express.js, and MongoDB.',
        imageUrl: '/e-com.png',
        link: 'https://e-commerce-frontend-code.vercel.app',
        github: 'https://github.com/Katotodan/e-commerce-frontend-code'
    },
    {
        id: 2,
        title: 'Multiplayer typing game',
        stack: 'React, Node.js, Socket.io',
        description: 'A real-time multiplayer typing game built with React, Node.js, and Socket.io.',
        imageUrl: '/multiplayer.png',
        link: 'https://typing-game-client-pink.vercel.app',
        github: 'https://github.com/Katotodan/multi-player-typing-game'
    },
    {
        id: 3,
        title: 'Recipe app',
        stack: 'Angular, TheMealDB API',
        description: 'A recipe app that allows users to search for and save their favorite recipes. Built with Angular and TheMealDB API.',
        imageUrl: '/recipe.png',
        link: 'https://recipe-app-kohl-delta.vercel.app',
        github: 'https://github.com/Katotodan/recipe-app'
    },
    {
        id: 4,
        title: 'v-office',
        stack: 'React',
        description: 'A full-featured e-commerce application with shopping cart and payment integration.',
        imageUrl: '/v-office.png',
        link: 'https://v-office-seven.vercel.app',
        github: 'https://github.com/Katotodan/v-office'
    },
    // Add more projects as needed
];
