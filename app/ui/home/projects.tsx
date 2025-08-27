import React from 'react';
import { projects, Project } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';




const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="project-card border border-[#eee] rounded-lg p-4 m-3 max-w-xs 
    shadow-[0_2px_8px_rgba(238, 238, 238,0.05)]" >
        {project.imageUrl && (
            <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={350}
                className='object-cover w-[400px] h-[350px] rounded-md mb-3'
            />
            
        )}
        <h3 className='text-center text-[#03a9f4] font-semibold mb-1'>{project.title}</h3>
        <p className="overflow-hidden text-ellipsis line-clamp-2 h-12">
            Tech Stack: {project.stack}
        </p>
        {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Github       
            </Link>
            
        )}
        <br />
        {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Demo   
            </Link>
        )}
        
    </div>
);

const Projects: React.FC = () => (
    <section className='p-2' id='project-section'>
        <h2 className='text-center text-2xl font-semibold mb-4 mt-2'>Projects</h2>
        <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] justify-items-center'>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </section>
);

export default Projects;