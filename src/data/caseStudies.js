// src/data/caseStudies.js

const modules = import.meta.glob('../components/caseStudies/*.jsx', { eager: true }); 
/* import all case study components, this will import all case study files eagerly */

export const caseStudies = Object.values(modules)
  .map((mod) => {
    const metaKey = Object.keys(mod).find((key) => key.endsWith('Meta'));
    return{
      ...mod[metaKey],
      component: mod.default
    } 
  })
  .filter(Boolean);

  export const caseStudyRoutes = caseStudies.map(({ slug, component }) => ({
  path: `/projects/${slug}`,
  element: component
}));
/* exports all case study routes */