import React from 'react';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            {/* <Location></Location> */}
        </div>
    );
};

export default Home;