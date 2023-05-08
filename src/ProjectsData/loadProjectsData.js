function loadProjectsData() {
    const context = require.context('.', true, /index\.js$/);
    const projectDataModules = context
      .keys()
      .filter((key) => key !== './index.js')
      .map((key) => context(key).default);
  
    return projectDataModules;
}
  
export default loadProjectsData;
  