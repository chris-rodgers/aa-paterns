import Vue from "vue";
import Router from "vue-router";
import kebabCase from "lodash/kebabCase";
import startCase from "lodash/startCase";

const DEFAULT_TITLE = 'Alternative Airlines Patterns'
export let links = {}
let routes = [],
  req;

Vue.use(Router);

req = require.context("../pages", true, /.vue$/);
req.keys().forEach(fileName => {
  const pathArray = fileName.split('/');
  let category;
  let title;
  let path;

  pathArray.map((string, i)=>{
    pathArray[i] = string.replace('.vue', '').replace('.', '');
  })

  category = startCase(pathArray[1]);
  title = startCase(pathArray[2]);

  path = pathArray.reduce((a, c) => {
    return a + kebabCase(c) + '/'; 
  }, '');
  
  routes.push({
    path: path,
    name: title,
    meta: {
      title
    },
    component: req(fileName).default
  });

  if(!links[category]){
    links[category] = []
  }
  links[category].push({
    title,
    path,
  });
});

const router = new Router({routes})

router.afterEach((to, from) => {
  document.title = `${to.meta.title} | ${DEFAULT_TITLE}` || DEFAULT_TITLE;
});

export default router;