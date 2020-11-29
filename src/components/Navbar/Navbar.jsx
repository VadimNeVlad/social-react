import React from 'react';

import { Link } from 'react-router-dom'


const Navbar = () => {
    return <nav className='nav'>
        <div>
            <Link to="/profile">Profile</Link>
        </div>
        <div>
            <Link to="/dialogs">Dialogs</Link>
        </div><div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;