import React from "react";
import Image from "next/image";

const About: React.FC = () => (
    <section className="about-section bg-[#2c2c2c] p-2 md:px-10 lg:px-20" id="about-section">
        <h2 className="text-center text-2xl font-semibold mb-4 mt-2">About Me</h2>

        <div className="flex flex-col md:flex-row gap-4 items-center">        
            <div className="flex-1">
                <Image 
                    src="/me.jpeg" 
                    alt="Profile Picture" 
                    width={300} 
                    height={300} 
                    className="rounded-full mx-auto object-cover h-[300px] w-[300px]"
                />
            </div>
            <div className="flex-2">
                <p>
                    Hello!  I'm APIPAWE KATOTO Daniel, a dedicated software developer who specializes in creating modern online applications.
                    A detail-oriented web developer with experience in both front-end and back-end development.  
                    I'm passionate about designing responsive, user-friendly online applications.  
                    Strong understanding of modern web technologies and best practices, with emphasis on clean, maintainable code.
                    With expertise in TypeScript, JavaScript, React, Angular, Python, Django, SQL, MongoDB, and other cutting-edge technologies, I like creating beautiful solutions to challenging issues.
                </p>
                

            </div>
        </div>
        
    </section>
);

export default About;