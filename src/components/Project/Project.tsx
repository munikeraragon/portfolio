import { useRouter } from 'next/router';

const Project: React.FC = () => {
    const router = useRouter();
    const { project } = router.query;

    if (typeof project !== 'string') return null;

    return (
        <div className='w-full h-full'>
            <div
                className='bg-[url(https://goelstrategies.com/wp-content/uploads/2020/01/t-1.jpg)]'
                style={{
                    minHeight: 500,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}
            ></div>
            <div className='max-w-6xl mx-auto'>
                <div className='my-40 grid grid-cols-2'>
                    <div className='text-2xl'>About</div>
                    <div>
                        <p className='text-2xl mb-2'>The world&apos;s finest facility management</p>
                        <p className='text-md mb-2 font-light'>
                            From keeping the electrical systems safe and efficient to ensuring the
                            windows and landscaping are clean and inviting, Trillium’s network has
                            the talent and capacity to manage facilities from some of the largest
                            brand’s including Amazon, Wal-Mart, and Chipotle.
                        </p>
                    </div>
                </div>

                <div className=''>
                    <div>
                        <img
                            alt='graph viz'
                            style={{
                                height: '400px',
                                objectFit: 'cover',
                                objectPosition: 'center top'
                            }}
                            src='/hp_3pj.jpg'
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
