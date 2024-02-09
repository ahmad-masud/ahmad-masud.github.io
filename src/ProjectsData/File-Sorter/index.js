import media from './filesorter.webm';
import mediaFallback from './filesorter.mp4';
import poster from './filesorter.webp';

const ProjectData = {
    title: "File Sorter",
    date: new Date(2023, 12),
    description: 
        `The File Sorter Application is a Python-based tool designed to help organize files in a directory. 
        It automatically sorts files into subdirectories 
        based on chosen criteria: file size, file type, or date modified.`,
    github: "https://github.com/ahmad-masud/File-Sorter",
    stacks: ["Python"],
    video: true,
    media: media,
    mediaFallback: mediaFallback,
    poster: poster,
    pinned: false
};

export default ProjectData