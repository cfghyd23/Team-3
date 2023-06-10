import React from 'react'
import './ChildDashboard.css'
import Feedcard from '../Feedcard/Feedcard'

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
  
]
const ChildDashboard = () => {

  const feedposts = item.map((items) => {
    return <Feedcard key={items.key} tags={items.tag} title={items.title} description={items.description} />
  });

  return (
    <div className='container '>
      <div className="row align-items-">
        {feedposts}
      </div>
    </div>
  )
}

export default ChildDashboard
