import React from 'react';
import DashBoard from './DashBoard';
import Listing from './Listing';

const Home = () => {
    return (
        <div>
            <h3>DashBoard</h3>
            <DashBoard></DashBoard>
            <Listing></Listing>

        </div>
    );
};

export default Home;