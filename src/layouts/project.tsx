import Navbar from '../ui/Navbar';

const tabs = ['About', 'Experience', 'Work', 'Contact'];
export const ProjectLayout: React.FC = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
                <Navbar
                    className='bg-white'
                    tabs={tabs.map((label) => ({
                        label,
                        className: `text-md mr-3 my-4 hover:border hover:border-white border border-transparent`
                    }))}
                />
                <main className='h-full flex '>{children}</main>
            </div>
        </div>
    );
};
