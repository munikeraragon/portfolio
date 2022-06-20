import { useRouter } from 'next/router'
import { Carousel } from '@trendyol-js/react-carousel'
import { HP_WORK, TFT_WORK, WorkDetails } from '../../constants'
import { ScreenType, useScreenType } from '../../hooks/useScreenType'

const projects: { [_: string]: WorkDetails } = {
	tft: TFT_WORK,
	hp: HP_WORK,
}

const Project: React.FC = () => {
	const router = useRouter()
	const { project } = router.query
	const screenType = useScreenType()

	if (typeof project !== 'string' || !(project in projects)) return null

	return (
		<div className='flex flex-col max-w-7xl px-4'>
			<h1 className='text-3xl font-medium text-center mb-8 mt-10'>{projects[project].title}</h1>

			<div className='grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-20 max-w-6xl'>
				<div className='p-4'>
					<p className='text-xl my-8'>Description</p>
					<p className='font-light leading-7'>{projects[project].description}</p>
				</div>

				<div className='p-4'>
					<p className='text-xl my-8'>Technologies</p>
					{projects[project].technologies.map((name) => (
						<button
							key={name}
							className='py-1.5 border border-gray-500 mx-2 font-light text-sm
							rounded  hover:bg-black hover:text-white hover:border-black lg:w-32
							px-4 my-2'
						>
							{name}
						</button>
					))}
				</div>

				<div></div>
			</div>

			{[ScreenType.extraLarge, ScreenType.extraLarge].includes(screenType) ? (
				<div className='flex flex-col max-w-6xl lg:mb-20'>
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
			) : (
				<>
					{projects[project].images.map((src) => (
						<div className='mb-8' key={src}>
							<img alt='project' src={src} />
						</div>
					))}
				</>
			)}
		</div>
	)
}

export default Project
