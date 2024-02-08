import media from './sortingvisualizer.webm';
import mediaFallback from './sortingvisualizer.mp4';

const ProjectData = {
    title: "Sorting Visualizer",
    date: new Date(2022, 12),
    description: 
        `An application that implements java swing to draw out a visual of the process of loop sorting. 
        There are interactive buttons to visualize different sorting algorithms and a slider to change 
        the delay in between swaps. The height of each bar corresponds to its value and its x position 
        corresponds to its index in the array.`,
    github: "https://github.com/ahmad-masud/Sorting-Visualizer",
    stacks: ["Java", "Java Swing", "Java Frames"],
    video: true,
    media: media,
    mediaFallback: mediaFallback,
    pinned: true
};

export default ProjectData;
