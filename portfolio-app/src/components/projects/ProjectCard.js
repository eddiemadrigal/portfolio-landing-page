import React from 'react'
import { Link } from 'react-router';

function ProjectCard() {
    return (
        <React.Fragment>
            <h3>Project Title</h3>
            <ul>
                <Link to="/project">
                    <li>Project Link</li>
                </Link>
            </ul>
        </React.Fragment>
    )
}

export default ProjectCard;
