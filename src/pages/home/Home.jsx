import React from 'react'
import './Home.scss';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured.jsx';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="home__container">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2/1} title="Last 6 Moths (Revenue)" />
          </div>
          <div className="list-container">
            <div className="list-title">Latest Transactions</div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home
