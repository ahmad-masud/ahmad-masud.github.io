function loadProjectsData() {
    const context = require.context('.', true, /index\.js$/);
    const projectDataModules = context
      .keys()
      .filter((key) => key !== './index.js')
      .map((key) => context(key).default);

    projectDataModules.sort((a, b) => {  
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB - dateA;
    });
  
    return projectDataModules;
}
  
export default loadProjectsData;
  