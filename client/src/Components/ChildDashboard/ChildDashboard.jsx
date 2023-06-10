import React from 'react'
import './ChildDashboard.css'
import Feedcard from '../Feedcard/Feedcard'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import StudentProfile from '../StudentProfile.jsx/StudentProfile'
const item = [
  {
    key: 1,
    tag: 'card tag 1',
    title: 'card title 1',
    description: 'card description',
    author : 'username'
  },
  {
    key: 2,
    tag: 'card tag 1',
    title: 'card title 1',
    description: 'card description',
    author : 'username'
  },
  {
    key: 5,
    tag: 'card tag 1',
    title: 'card title 1',
    description: 'card description',
    author : 'username'
  },
  {
    key: 3,
    tag: 'card tag 1',
    title: 'card title 1',
    description: 'card description',
    author : 'username'
  },
  {
    key: 4,
    tag: 'card tag 1',
    title: 'card title 1',
    description: 'card description',
    author : 'username'
  },

  
]
const ChildDashboard = () => {

  const feedposts = item.map((items) => {
    return <Feedcard key={items.key} tags={items.tag} title={items.title} description={items.description} />
  });

  return (
    <>
    <DashboardNavbar/>
    <div className='container '>
      <div className="row">
        {feedposts}
      </div>
    </div>
    <StudentProfile/>
    </>
  )
}

export default ChildDashboard
