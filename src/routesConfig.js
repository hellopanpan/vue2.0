import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Gird from './components/grird.vue'
import Button from './components/Button.vue'
import DropDown from './components/dropDown.vue'
import Icon from './components/icon.vue'
import Table from './components/table.vue'
import MenuRe from './components/menu-1.vue'
import Progress from './components/progress.vue'
import Tag from './components/tag.vue'
import Badge from './components/badge.vue'
import Input from './components/input.vue'
import Radio from './components/radioAndCheckbox.vue'
import File from './components/fileupload.vue'
import Rate from './components/rate.vue'
import Tab from './components/tab.vue'
import Pagination from './components/pagination.vue'
import Step from './components/step.vue'
const routes = [
  {
    path: "/gird", component: Gird,
  },{
    path:'/button', component: Button
  },
  {
    path:'/dropdown', component: DropDown
  },
  {
    path:'/icon', component: Icon
  },
  {
    path:'/table', component: Table
  },
  {
  	path:'/menu',component: MenuRe
  },
  {
  	path:'/progress',component:Progress
  },
  {
  	path:'/tag',component:Tag
  },
  {
  	path:'/badge',component:Badge
  },
  {
  	path:'/input',component:Input
  },
  {
  	path:'/radio',component: Radio
  },
  {
    path:'/file',component:File
  },
  {
    path:'/rate',component:Rate
  },
  {
    path:'/tab',component:Tab
  },
  {
    path:'/pagination',component: Pagination
  },
  {
    path:'/step',component: Step
  },
  {
  	path: "*", redirect: '/button'
  }
];
 export {routes};