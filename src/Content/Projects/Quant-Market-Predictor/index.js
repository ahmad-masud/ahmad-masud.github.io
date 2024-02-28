import media from './qmp.webm';
import mediaFallback from './qmp.mp4';
import poster from './qmp.webp';

const ProjectData = {
    title: "Quant Market Predictor",
    date: new Date(2024, 1),
    description: 
        `Quant Market Predictor is a Python-based tool designed to forecast future stock prices using historical market data 
        from NASDAQ. Utilizing Linear Regression to make a Statistics Model, this project aims to provide users with insights 
        into potential future market prices.`,
    github: "https://github.com/ahmad-masud/Quant-Market-Predictor?tab=readme-ov-file",
    stacks: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-learn"],
    video: true,
    media: media,
    mediaFallback: mediaFallback,
    poster: poster,
    pinned: true
};

export default ProjectData