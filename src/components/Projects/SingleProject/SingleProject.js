import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme, slug }) {
    const history = useHistory();
    
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
        },
    }));

    const classes = useStyles();

    const handleCardClick = (e) => {
        // Don't navigate if clicking on demo/code buttons
        if (e.target.closest('.project--showcaseBtn')) {
            return;
        }
        history.push(`/projects/${slug}`);
    };

    const handleLinkClick = (e) => {
        // Prevent card navigation when clicking demo/code buttons
        e.stopPropagation();
    };

    return (
        <Fade bottom>
            <div className='singleProject-wrapper'>
                <div className='singleProject-title' style={{ background: theme.secondary }}>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                </div>
                <div
                    key={id}
                    className='singleProject'
                    style={{ 
                        backgroundColor: theme.primary400,
                        backgroundImage: `url(${image || placeholder})`
                    }}
                    onClick={handleCardClick}
                >
                    <div className='projectContent'>
                        <div className='project--showcaseBtn' onClick={handleLinkClick}>
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                            >
                                <FaPlay
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-demo`}
                                    className={classes.icon}
                                    aria-label='Demo'
                                />
                            </a>
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                            >
                                <FaCode
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                                    className={classes.icon}
                                    aria-label='Code'
                                />
                            </a>
                        </div>
                    </div>
                    <p
                        className='project--desc'
                        style={{
                            background: theme.secondary,
                            color: theme.tertiary,
                        }}
                    >
                        {desc}
                    </p>
                    <div
                        className='project--lang'
                        style={{
                            background: theme.secondary,
                            color: theme.tertiary80,
                        }}
                    >
                        {tags.map((tag, id) => (
                            <span key={id}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;