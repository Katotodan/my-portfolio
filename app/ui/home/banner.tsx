import Image from "next/image";
import '@/app/ui/home/banner.css'
const Banner: React.FC = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center px-4 py-8 
        text-white relative md:px-10 lg:px-20 ">
            <div className="w-full xl:flex-2">
                <div className="banner-text-container">
                    <div className="banner-content">
                        <h1>Welcome to My Portfolio</h1>
                        <h1>Welcome to My Portfolio</h1>
                    </div>
                </div>
                
                <p className="text-xl animate-text">Discover my <span className="font-semibold skills">skills, projects, and experience.</span>
                </p>
            </div>
            <div className="xl:flex-3 ">
                <Image
                    src="/banner-img.png" 
                    alt="Banner Image"
                    width={400}
                    height={100}
                    className="banner-image h-[350px] xl:mx-auto"
                />
            </div>
           
        </section>
    );
};

export default Banner;