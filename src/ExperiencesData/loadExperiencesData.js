function loadExperiencesData() {
    const context = require.context('.', true, /index\.js$/);
    const experienceDataModules = context
      .keys()
      .filter((key) => key !== './index.js')
      .map((key) => context(key).default);
  
    return experienceDataModules;
}
  
export default loadExperiencesData;
  