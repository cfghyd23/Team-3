import React, { useEffect, useState } from 'react';
import './ChildDashboard.css';
import axios from 'axios';
import Feedcard from '../Feedcard/Feedcard';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import StudentProfile from '../StudentProfile.jsx/StudentProfile';

const ChildDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.post('http://localhost:3030/request/', {
          user: localStorage.getItem('email'),
        });
        const data1 = res1.data;
        const res2 = await axios.get('http://localhost:3030/feed/fetch');
        const data2 = res2.data;

        setItems([data1.requests, data2.feeds]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const feedposts = items[1]?.map((x) => (
    <Feedcard key={x.key} tags={x.tag} title={x.title} description={x.description} />
  ));

  return (
    <>
      <DashboardNavbar />
      <div className="container">
        <div className="row">{feedposts}</div>
      </div>
      <StudentProfile />
    </>
  );
};

export default ChildDashboard;
