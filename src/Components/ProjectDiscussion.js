import React from 'react';

function ProjectDiscussion(props) {
    return (
        <div className='project-discussion'>
            <h2>{props.title}</h2>
            <p>{props.discussion}</p>
        </div>
    );
}

export default ProjectDiscussion;
