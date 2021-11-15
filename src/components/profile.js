import React, { Component } from 'react';
import Debbie from '../images/Debbie.png';
import Food1 from '../images/bg-image.jpg';
import Food2 from '../images/food.jpg';
import '../profile.css';

class MyProfile extends Component {
    render() {
        return (
            <div className="text-white flex flex-col font-bold bg-gray-800 p-10 bg-none">
                <header className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-4xl">Hi Debbie</h3>
                        <p className="text-xl">We hope you're in a cooking mood</p>
                    </div>

                    <div>
                        <img src={Debbie} alt="user's avatar" className="avatar" />
                    </div>
                </header>

                <section>
                    <div>
                        <div className="bg-black rounded-xl py-4 px-2 md:mr-96 mb-10 mt-5 text-white">
                            <input type="text" placeholder="Search our collection" className="bg-black"/>
                            {/* add a search icon */}
                        </div>

                        <div>
                            <ul className="flex flex-row md:mx-32 flex-wrap md:flex-nowrap mb-5 md:mb-10 md:justify-between">
                                <li className="bg-black px-3 md:px-5 py-2 rounded-xl mr-2 text-sm md:text-base">New Entry</li>
                                <li className="bg-black px-3 md:px-5 py-2 rounded-xl mr-2 text-sm md:text-base">African Dishes</li>
                                <li className="bg-black px-3 md:px-5 py-2 rounded-xl mr-2 text-sm md:text-base">Mexican Dishes</li>
                                <li className="bg-black px-3 md:px-5 py-2 rounded-xl mr-2 text-sm md:text-base">Chinese Dishes</li>
                                <li className="bg-black px-3 md:px-5 py-2 rounded-xl text-sm md:text-base">Japanese Dishes</li>
                            </ul>
                        </div>
                    </div>

                    <p className="mb-2 text-gray-500">Most Viewed</p>

                    <div className="flex flex-col md:flex-row">
                        <img src={Food1} alt="a food" className="hero-image rounded-2xl mb-10 mr-5" />
                        <img src={Food2} alt="a food" className="hero-image rounded-2xl mb-10 mr-5" />
                        <img src={Food1} alt="a food" className="hero-image rounded-2xl mb-10 mr-5" />
                    </div>

                    <div>
                        <p className="mb-2 text-gray-500">This might interest you</p>
                        <div className="bg-black p-14 md:p-20 relative rounded-3xl">
                            <p>Spaghetti recipe</p>
                            <img src={Food1} alt="a food" className="second-image " />
                        </div>
                    </div>
                </section>
            </div>);
    }
}

export default MyProfile;