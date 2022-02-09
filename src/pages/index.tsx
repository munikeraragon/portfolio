import Navbar from '../ui/Navbar/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Contact from '../components/Contact';

const tabs = ['About', 'Experience', 'Work', 'Contact'];
const Portfolio: React.FC = () => {
    return (
        <div className='flex flex-col items-center bg-black text-white'>
            <Navbar
                className='fixed mt-4'
                tabs={tabs.map((label) => ({
                    label,
                    className: `text-md mr-3 my-4 hover:border hover:border-white border border-transparent`
                }))}
            />
            <Hero />
            <About />
            <Skills />
            <Work />
            <Experience />
            <Contact />
        </div>
    );
};

export default Portfolio;
