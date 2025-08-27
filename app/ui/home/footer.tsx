import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
    <footer className='bg-gray-800 text-white p-6 mt-6 flex flex-col-reverse md:flex-row md:justify-between 
    md:items-center gap-4 lg:gap-10 md:px-10 xl:px-20' id='contact-section'>
        <div className='lg:flex-2'>
            <span>Designed & Built by Daniel Katoto </span> <br/>
            &copy; {new Date().getFullYear()} Daniel Katoto.
            All rights reserved
        </div>
        <div className='lg:flex-3 lg:gap-4 lg:flex lg:flex-row lg:justify-between items-baseline-last '>
            <div>
                <h2 className='text-2xl font-semibold mb-2'>Contact Me</h2>
                <div>
                    <p>Email: katotodan@gmail.com</p>
                    <p>Whatsapp: +243 976 406 567</p>
                </div>
            </div>
            <div> 
                <p>
                    LinkedIn: <Link href="https://www.linkedin.com/in/apipawe-katoto-daniel-68a94422b/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">linkedin.com/in/apipawe-katoto/</Link>
                </p>
                <p>
                    GitHub: <Link href="https://github.com/Katotodan" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">github.com/Katotodan</Link>
                </p>     
            </div>
        </div>
    </footer>
);

export default Footer;