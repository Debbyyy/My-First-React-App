import React, { useState } from 'react';
import '../createAccount.css';
import { useHistory } from 'react-router';

const NewAccount = () => {
    const [username, setUsername] = useState('')
    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('user submitted');
        history.push('/profile')
    }
    return (
        <div className="m-14 md:m-20 flex-col md:items-center md:justify-items-center">
            <h1 className="text-2xl font-bold mb-10 text-center">Create Your Account</h1>
            <form className="flex flex-col items-center justify-items-center"
                onSubmit={handleSubmit}>

                {/* for first name */}
                <label htmlFor="First name">
                    <input type="text" placeholder="First name" id="fname"
                        value={username} onChange={onUsernameChange}
                        className="outline-none border border-gray-400 pr-40 pl-5 py-2 mb-5" required />
                </label>
                {/* {this.state.fnameError ? this.state.fnameError : null} */}

                <label htmlFor="Last name">
                    <input type="text" placeholder="Last name" id="lname"
                        className="outline-none border border-gray-400 pr-40 pl-5 py-2 mb-5" required />
                </label>

                <label htmlFor="Email">
                    <input type="text" placeholder="xyz@example.com" id="email"
                        className="outline-none border border-gray-400 pr-40 pl-5 py-2 mb-5" required />
                </label>
                <label htmlFor="Password">
                    <input type="password" placeholder="Choose a password" id="pword"
                        className="outline-none border border-gray-400 pr-40 pl-5 py-2 mb-5" required />
                </label>
                <label htmlFor="Gender" className="-ml-56">
                    <input type="radio" name="sex" value="male" checked /> Male<br />
                    <input type="radio" name="sex" value="male" /> Female<br />
                    <input type="radio" name="sex" value="male" /> Prefer not to say
                </label>
                <button onSubmit={handleSubmit}
                    className="bg-black text-white outline-none rounded-xl font-semibold mt-20 py-2 px-24 md:px-14">Submit
                </button>
            </form>
        </div >
    )
}

export default NewAccount;