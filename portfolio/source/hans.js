import common from './scripts/common.js';
import get from './scripts/get.js';

import test from './scripts/content/test.vue';

var data = {
    projects: [],
    info: {}
}
window.data = data;
get('./projects.json').then(projects => {
    data.projects = JSON.parse(projects).projects
})

get('./projects').then(projects => {
    data.projects = JSON.parse(projects).projects
})

get('./info.json').then(info => {
    data.info = JSON.parse(info).user
})

get('./hansinfo').then(info => {
    data.info = JSON.parse(info).user
})


common.Vue.component('test', test);

common.done(data);