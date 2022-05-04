export interface ExperienceProps {
	className?: string
}

const Experience: React.FC<ExperienceProps> = ({ className = '' }) => {
	return (
		<div className={`${className} w-full bg-black text-white`}>
			<div className='grid grid-cols-2 flex-1 justify-center max-w-6xl space-x-20 my-40'>
				<div className='flex flex-col flex-1 px-8'>
					<p className='text-xl mb-4'>Experience</p>
					<div>Kin + Carta</div>
					<div>Cascade Data Labs</div>
					<div>The Fresh Water Trust</div>
				</div>
				<div className='flex flex-col flex-1 px-8'>
					<p className='text-xl mb-4'>Skills</p>
					<div>Full Stack Software Developer</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
