import { useRouter } from 'next/router'
import { Carousel } from '@trendyol-js/react-carousel'
import { HP_WORK, TFT_WORK, WorkDetails } from '../../constants'

const projects: { [_: string]: WorkDetails } = {
	tft: TFT_WORK,
	hp: HP_WORK,
}

const Project: React.FC = () => {
	const router = useRouter()
	const { project } = router.query

	if (typeof project !== 'string' || !(project in projects)) return null

	return (
		<div className='flex flex-col max-w-7xl'>
			<h1 className='text-3xl font-medium text-center mb-8 mt-10'>{projects[project].title}</h1>

			<div className='grid grid-cols-2 mb-20 max-w-6xl'>
				<div className='p-4'>
					<p className='text-xl my-8'>Description</p>
					<p className='font-light leading-7'>{projects[project].description}</p>
				</div>

				<div className='p-4'>
					<p className='text-xl  my-8'>Technologies</p>
					{projects[project].technologies.map((name) => (
						<button
							key={name}
							className='py-1.5 border border-gray-500 mx-4 font-light text-sm rounded
							 	hover:bg-black hover:text-white hover:border-black w-32 my-2'
						>
							{name}
						</button>
					))}
				</div>

				<div></div>
			</div>

			<div className='flex flex-col max-w-6xl mb-20'>
				<Carousel
					show={1}
					slide={1}
					transition={0.5}
					useArrowKeys={true}
					rightArrow={
						<div className='flex flex-col justify-center h-full text-gray-500'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-10 w-10'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={1.5}
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
							</svg>
						</div>
					}
					leftArrow={
						<div className='flex flex-col justify-center h-full text-gray-500'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-10 w-10'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={1.5}
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
							</svg>
						</div>
					}
				>
					{projects[project].images.map((src) => (
						<img
							alt='project'
							key={src}
							src={src}
							style={{
								width: 'auto',
								height: 'auto',
								display: 'block',
								maxWidth: '800px',
								margin: 'auto',
							}}
						/>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default Project
