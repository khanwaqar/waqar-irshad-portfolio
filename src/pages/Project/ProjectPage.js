import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './ProjectPage.css'
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

function ProjectPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

    // Generate dynamic SEO content based on projects
    const projectsCount = projectsData.length;
    const technologies = [...new Set(projectsData.flatMap(project => project.tags))].slice(0, 10);
    const seoDescription = `Browse ${projectsCount}+ full-stack development projects by ${headerData.name}. Featuring React, Node.js, ${technologies.slice(0, 3).join(', ')} and more. See live demos and source code.`;
    const seoKeywords = `projects, portfolio projects, web development projects, react projects, ${technologies.join(', ')}, full stack projects, ${headerData.name} projects`;

    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                {/* Dynamic Title */}
                <title>Projects | {headerData.name} - {headerData.title}</title>
                
                {/* Dynamic Meta Description */}
                <meta name="description" content={seoDescription} />
                
                {/* Dynamic Keywords */}
                <meta name="keywords" content={seoKeywords} />
                
                {/* Canonical URL */}
                <link rel="canonical" href={`${headerData.siteUrl}/projects`} />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${headerData.siteUrl}/projects`} />
                <meta property="og:title" content={`Projects | ${headerData.name} - ${headerData.title}`} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:image" content={headerData.image} />
                
                {/* Twitter Card Meta Tags */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`${headerData.siteUrl}/projects`} />
                <meta property="twitter:title" content={`Projects | ${headerData.name} - ${headerData.title}`} />
                <meta property="twitter:description" content={seoDescription} />
                <meta property="twitter:image" content={headerData.image} />
                <meta name="twitter:creator" content={headerData.twitterHandle} />
                
                {/* Structured Data for Project Collection */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Web Development Projects",
                        "description": seoDescription,
                        "url": `${headerData.siteUrl}/projects`,
                        "numberOfItems": projectsCount,
                        "itemListElement": projectsData.slice(0, 5).map((project, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "CreativeWork",
                                "name": project.projectName,
                                "description": project.projectDesc,
                                "url": `${headerData.siteUrl}/projects#${project.id}`,
                                "keywords": project.tags.join(', ')
                            }
                        }))
                    })}
                </script>
            </Helmet>

            {/* Semantic HTML Structure */}
            <header className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link to="/" aria-label="Go back to homepage">
                    <AiOutlineHome className={classes.home}/>
                </Link>
                <h1 style={{color: theme.secondary}}>My Projects</h1>
                <p style={{color: theme.secondary, opacity: 0.8, marginTop: '0.5rem'}}>
                    {projectsCount}+ projects showcasing full-stack development expertise
                </p>
            </header>
           
           <main className="projectPage-container">
               <section className="projectPage-search" aria-label="Search projects">
                   <input 
                       type="text" 
                       value={search} 
                       onChange={(e) => setSearch(e.target.value)} 
                       placeholder="Search projects by name, description, or technology..." 
                       className={classes.search}
                       aria-label="Search projects" 
                   />
               </section>
               
               <section className="project-container" aria-label="Projects list">
                   <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image} 
                                slug={project.slug}
                            />
                        ))}
                   </Grid>
                   
                   {/* No results state - good for UX and SEO */}
                   {filteredArticles.length === 0 && (
                       <div style={{textAlign: 'center', padding: '2rem', color: theme.tertiary}}>
                           <h2>No projects found</h2>
                           <p>Try searching with different keywords or <button 
                               onClick={() => setSearch('')} 
                               style={{background: 'none', border: 'none', color: theme.primary, textDecoration: 'underline', cursor: 'pointer'}}
                           >
                               clear search
                           </button></p>
                       </div>
                   )}
               </section>
           </main>    
        </div>
    )
}

export default ProjectPage