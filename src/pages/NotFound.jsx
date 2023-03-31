import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h2>404 Not Available</h2>
            <p>This page is not available.</p>
            <p>
                <FaArrowLeft /> <Link to="/">Go back</Link>
            </p>
        </>
    );
};

export default NotFound;