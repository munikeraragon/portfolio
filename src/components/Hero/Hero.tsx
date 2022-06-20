export interface HeroProps {
	className?: string
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
	return (
		<div
			className={`${className} min-h-screen flex flex-1 flex-col
            items-center justify-center max-w-7xl px-4`}
		>
			<h1 className='text-3xl md:text-6xl font-light'>Hey There! I&apos;m Muniker</h1>
			<div className='text-center my-10 text-gray-300'>
				<p className='text-md md:text-xl mb-2 font-light'>I am Full Stack Developer and UI/UX Designer</p>
				<p className='text-md md:text-xl font-light'>Based in Portland, Oregon</p>
			</div>
		</div>
	)
}

export default Hero
