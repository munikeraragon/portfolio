export interface AboutProps {
	className?: string
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
	return (
		<div id='about' className={`${className} flex flex-col w-full bg-white text-black min-h-screen`}>
			<p className='text-3xl font-medium text-center mb-16 mt-28'>About</p>

			<div className='grid grid-cols-2 justify-center max-w-6xl mx-auto w-full'>
				<div className='flex flex-col flex-1 justify-center'>
					<div>
						<p className='text-lg mb-4 font-light leading-7'>
							I am a Computer Science graduate with a deep passion for Microservices, Cloud Architecture,
							and UI/UX design.
						</p>

						<p className='text-lg mb-6 font-light leading-7'>
							Currently, I work at Kin + Carta as a Full Stack Software Developer, where I build
							data-driven full-stack applications for Fortune 500 Companies.
						</p>

						<p className='text-lg mb-6 font-light leading-7'>
							Before now, I was a Full Stack Software Developer at The Fresh Water Trust, where I helped
							develop a full-stack application to help guide the decision-making of River Restoration
							investments.
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
							backgroundImage: 'url("/img/me.jpeg")',
						}}
					></div>
				</div>
			</div>
		</div>
	)
}

export default About
