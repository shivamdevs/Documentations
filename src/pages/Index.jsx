import React from 'react';
import { FaGithub, FaNpm } from 'react-icons/fa';

function Index() {
    return (
        <>
            <h2>Currently Indexed Docs</h2>
            <div className="cards">
                <div className="card">
                    <a href="/oasismenu">
                        <h3>OasisMenu</h3>
                    </a>
                    <a href="/oasismenu">
                        <p>OasisMenu is a lightweight and customizable context menu implementation for React. It allows users to easily add context menus to their projects, making it easier for users to access actions and options relevant to the context in which they are working.</p>
                    </a>
                    <p><FaGithub /> <a href="https://github.com/shivamdevs/OasisMenu" onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">Github Repository</a></p>
                    <p><FaNpm /> <a href="https://www.npmjs.com/package/oasismenu" onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">npm Package</a></p>
                </div>
            </div>
        </>
    );
};

export default Index;