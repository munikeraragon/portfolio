import Link from 'next/link'
import { HpIcon, KinAndCartaIcon } from '../SVGIcons'

export interface WorkProps {
	className?: string
}

const projects = [
	{
		icon: <HpIcon />,
		href: '/work/hp',
	},
	{
		icon: <img src='/img/dst/tft.png' alt='tft' />,
		href: '/work/tft',
	},
	{
		icon: <KinAndCartaIcon />,
		href: '/work/kin&carta',
	},
]

const Work: React.FC<WorkProps> = ({ className = '' }) => {
	return (
		<div id='work' className={`${className} flex flex-col w-full bg-white text-black min-h-screen`}>
			<p className='text-2xl md:text-3xl font-medium text-center mb-8 mt-16 md:mt-28'>Case Studies</p>
			<div className='flex flex-col max-w-6xl mx-auto items-center justify-center content-center'>
				<div className='grid grid-cols-1 lg:grid-cols-2 w-full max-w-4xl flex-1 mt-10'>
					{projects.map(({ href, icon }, index) => (
						<>
							{index % 2 !== 0 && <div></div>}
							<Link href={href}>
								<a>
									<div className='flex justify-center mx-12 w-72 rounded py-4 my-4 lg:my-0 bg-gray-50 p-4'>
										{icon}
									</div>
								</a>
							</Link>
							{index % 2 === 0 && <div></div>}
						</>
					))}
				</div>
			</div>
		</div>
	)
}

export default Work
