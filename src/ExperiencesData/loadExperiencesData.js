function loadExperiencesData() {
    const context = require.context('.', true, /index\.js$/);
    const experienceDataModules = context
      .keys()
      .filter((key) => key !== './index.js')
      .map((key) => context(key).default);

    experienceDataModules.sort((a, b) => {
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;
      
      const startDateA = new Date(a.startDate);
      const startDateB = new Date(b.startDate);

      return startDateB - startDateA;
    });
    
    return experienceDataModules;
}
  
export default loadExperiencesData;
  