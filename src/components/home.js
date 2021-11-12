//eslint-disable-next-line
import React, { Component } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

class HomePage extends Component {
    // history = useHistory();
    handleClick = (e) => {
        console.log('user clicked');
    }
    render() {
        return (
            <div className="wrapper flex flex-col text-2xl px-12 md:px-24 py-12 md:py-20 text-white">
                <h2 className="text-2xl md:text-4xl font-bold">ICON.<span id="logo-color">me</span></h2>
                <div>
                    <p className="pt-20 text-2xl md:text-4xl text-center font-bold tracking-widest">食物<br />Global Cuisine</p>
                </div>
                <div className="text-xl md:text-2xl mt-10 mb-24 text-center font-semibold">Exchanging culture through<br />Dishes</div>
                <Link to="/createAccount" className="btn text-xl md:text-2xl text-center text-black font-semibold px-10 py-4" onClick={this.handleClick}>Get Started</Link>
            </div>
        );
    }
}

export default HomePage;