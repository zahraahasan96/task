import homepage from './components/homepage/homepage'
import alljobs from './components/alljobs/alljobs'
import postjob from './components/postjob/postjob'
import signup from './components/signup/signup'
import applyjob from './components/applyjob/applyjob'
const routes = [
    {path: "/" , component: homepage, name: "homepage"},
    {path: "/alljobs" , component: alljobs, name: "alljobs"},
    {path: "/postjob" , component: postjob, name: "postjob"},
    {path: "/signup" , component: signup, name: "signup"},
    {path: "/applyjob" , component: applyjob, name: "applyjob"},

];


export default routes;