const About: React.FC = () => {
    return (
        <div className='flex flex-col w-full bg-white text-black'>
            <p className='text-3xl font-medium mb-8 my-10 text-center'>About</p>
            <div className='grid grid-cols-2 justify-center max-w-6xl my-16 mx-auto flex-1'>
                <div className='flex flex-col flex-1 justify-center'>
                    <div>
                        <p className='text-xl mb-6 font-light leading-7'>
                            Founding member and front-end architect of SmartSCT, a Big Data startup
                            in China. As a full stack engineer, I developed a Business Intelligence
                            product whose clientele are from China’s leading automobile companies.
                        </p>

                        <p className='text-xl mb-6 font-light  leading-7'>
                            Before now, I was Principal Frontend Engineer at hellotax, where I
                            worked on a suite of tools and services tailored at providing fast,
                            automated VAT Registration / filings & Returns solutions for
                            multi-channel sellers across Europe.
                        </p>

                        <p className='text-xl mb-4 font-light leading-7'>
                            Before now, I was Principal Frontend Engineer at hellotax, where I
                            worked on a suite of tools and services tailored at providing fast,
                            automated VAT Registration / filings & Returns solutions for
                            multi-channel sellers across Europe.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col flex-1 items-center justify-center'>
                    <div
                        style={{
                            height: '350px',
                            width: '320px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            boxSizing: 'border-box',
                            backgroundImage: 'url("https://olaolu.dev/img/handsome.png")'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default About;
