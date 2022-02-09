const Skills: React.FC = () => {
    return (
        <div className='w-full bg-black text-white my-12'>
            <p className='text-3xl font-medium mb-8 text-center'>Skills</p>
            <div className='grid grid-cols-2 justify-center max-w-6xl  mx-auto'>
                <div className='flex flex-col flex-1 text-xl'>
                    <div className='my-6'>UI/UX Design</div>
                    <div className='my-6'>BackEnd</div>
                    <div className='my-6'>DevOps</div>
                    <div className='my-6'>Cloud Infrastructure</div>
                    <div className='my-6'>FrontEnd</div>
                </div>
                <div className='flex x-8 mt-24 justify-center'>
                    <div className='text-xl'>
                        <div className='py-2 px-4 border mb-4 text-center font-light rounded w-48'>
                            Figma
                        </div>
                        <div className='py-2 px-4 border mb-4 my-11 text-center font-light rounded w-48'>
                            Tailwind
                        </div>
                        <div className='py-2 px-4 border mb-4 my-11 text-center font-light rounded w-48'>
                            Material UI
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
