import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))

const About = React.lazy(() => import('./views/about/About'))
const Skill = React.lazy(() => import('./views/skill/Skill'))
const Career = React.lazy(() => import('./views/career/Career'))
const Project = React.lazy(() => import('./views/project/Project'))
const Contact = React.lazy(() => import('./views/contact/Contact'))


const routes = {
    menu : [
      { exact: true, stage : 0 , name: 'Home',     component: Home,          path: '/'},

      { exact: true, stage : 1 , name: 'About',    component: About,         path: '/about'},
      { exact: true, stage : 1 , name: 'Skill',    component: Skill,         path: '/skill'},
      { exact: true, stage : 1 , name: 'Career',   component: Career,        path: '/career'},
      { exact: true, stage : 1 , name: 'Project',  component: Project,       path: '/project'},
      { exact: true, stage : 1 , name: 'Contact',  component: Contact,       path: '/contact'},

    ]
}

export default routes
