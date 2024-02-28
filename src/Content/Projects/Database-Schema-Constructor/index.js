import media from './dbsc.webm';
import mediaFallback from './dbsc.mp4';
import poster from './dbsc.webp';

const ProjectData = {
    title: "Database Schema Constructor",
    date: new Date(2024, 2),
    description: 
        `Database Schema Constructor is a web application for visually creating and 
        manipulating database schemas. It allows users to add tables, define attributes, 
        and set constraints like NOT NULL, UNIQUE, PRIMARY KEY, and AUTO_INCREMENT. 
        Features include SQL query generation and download, draggable tables for layout 
        flexibility, and responsive design. Schemas can be persisted in local storage 
        and cloud storage for future sessions. 
        `,
    github: "https://github.com/ahmad-masud/Database-Schema-Constructor",
    link: "https://dbsc.online/",
    stacks: ["Javascript", "React", "Firebase", "Node.js", "jsPlumb"],
    video: true,
    media: media,
    mediaFallback: mediaFallback,
    poster: poster,
    pinned: true
};

export default ProjectData;
