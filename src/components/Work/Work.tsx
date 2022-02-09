import Link from 'next/link';

const projects = [
    {
        src: 'https://mma.prnewswire.com/media/1034412/Kin_Carta_Logo.jpg?p=facebook',
        href: '/work/kin&carta'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl11BKHicJBDSQF3QwBy3Vn7apnX-YoY1IRQ&usqp=CAU',
        href: '/work/hp'
    },
    {
        src: 'data:image/png;base64,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',
        href: '/work/thefreshwatertrust'
    }
];

const Work: React.FC = () => {
    return (
        <div className='min-h-screen  bg-white text-black w-full py-12'>
            <div className='flex flex-1 flex-col items-center justify-center max-w-6xl mx-auto'>
                <p className='text-3xl font-medium mb-6'>Work</p>
                <div className='grid grid-cols-2 w-full max-w-4xl'>
                    {projects.map(({ href, src }, index) => (
                        <>
                            {index % 2 !== 0 && <div></div>}
                            <Link href={href}>
                                <a>
                                    <div className='flex justify-center mx-12 w-72 shadow'>
                                        <img alt='work' style={{ height: 150 }} src={src}></img>
                                    </div>
                                </a>
                            </Link>
                            {index % 2 === 0 && <div></div>}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
