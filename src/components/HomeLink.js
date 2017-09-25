import React from "react";
import { Link } from 'react-router-dom';

import {IoHome} from 'react-icons/lib/io';

const HomeLink =() => {

    return (
        <Link to="/" className="home-link"><IoHome></IoHome></Link>
    )
  
}

export default HomeLink;
