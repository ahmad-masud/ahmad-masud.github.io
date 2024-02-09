import media from './drawant.webm';
import mediaFallback from './drawant.mp4';
import poster from './drawant.webp';

const ProjectData = {
    title: "DrawAnt",
    date: new Date(2023, 3),
    description: 
        `DrawAnt is a simple drawing program designed for ease of use and versatility. With DrawAnt, you can create 
        beautiful drawings with a variety of tools such as pencils, brushes, shapes, and text. You can also adjust the size, 
        color, and opacity of your tools to create the perfect design. DrawAnt has an intuitive user interface that allows 
        for easy navigation and use of its features.`,
    github: "https://github.com/ahmad-masud/DrawAnt",
    stacks: ["Java", "Swing", "Ant"],
    video: true,
    media: media,
    mediaFallback: mediaFallback,
    poster: poster,
    pinned: false
};

export default ProjectData;
