import { memo, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { usePageAnimationStore } from '../../store/usePageAnimationStore'
import Link from 'next/link'

export interface MenuProps {
	className?: string
	isDarkPage: boolean
}

const HeadlessMenu: React.FC<MenuProps> = ({ className = '', isDarkPage }) => {
	const { setNextPage } = usePageAnimationStore()
	return (
		<div className={`${className} mt-6 -ml-8`}>
			<Menu as='div' className='relative inline-block text-left'>
				{({ open }) => (
					<>
						<div>
							<Menu.Button className='w-10 h-10 relative focus:outline-none z-10 top-1 -left-2'>
								<span className='sr-only'>Open main menu</span>
								<div className='block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2'>
									<span
										aria-hidden='true'
										className={`block absolute h-0.5 transform transition duration-200 ease-in-out
										${isDarkPage ? 'bg-white' : 'bg-black'} ${open ? 'rotate-45 w-7' : '-translate-y-1.5 w-10'}`}
									></span>

									<span
										aria-hidden='true'
										className={`block absolute h-0.5 transform  transition duration-200 ease-in-out
										${isDarkPage ? 'bg-white' : 'bg-black'} ${open ? '-rotate-45 w-7' : 'translate-y-1.5 w-6 top-1'}`}
									></span>
								</div>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items
								className={`${
									isDarkPage
										? 'bg-black text-white border border-gray-400 rounded'
										: 'bg-white text-black border border-gray-300 rounded'
								} absolute -left-6 w-80 -mt-14 origin-top-right pt-20 focus:outline-none px-8 py-8`}
							>
								<Menu.Item>
									{() => (
										<Link href='/'>
											<button
												onClick={() => setNextPage('Home')}
												className={`group flex items-center w-full px-2 py-3 text-xl font-light ml-4`}
											>
												Home
											</button>
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{() => (
										<Link href='/'>
											<button
												onClick={() => setNextPage('About')}
												className={`group flex items-center w-full px-2 py-3 text-xl font-light ml-4`}
											>
												About Me
											</button>
										</Link>
									)}
								</Menu.Item>

								<Menu.Item>
									{() => (
										<Link href='/'>
											<button
												onClick={() => setNextPage('Skills')}
												className={`group flex  items-center w-full px-2 py-3 text-xl font-light ml-4`}
											>
												My Skills
											</button>
										</Link>
									)}
								</Menu.Item>
								<Menu.Item>
									{() => (
										<Link href='/'>
											<button
												onClick={() => setNextPage('Work')}
												className={`group flex items-center w-full px-2 py-3 text-xl font-light ml-4`}
											>
												My Work
											</button>
										</Link>
									)}
								</Menu.Item>

								<Menu.Item>
									{() => (
										<Link href='/'>
											<button
												onClick={() => setNextPage('Contact')}
												className={`group flex items-center w-full px-2 py-2 text-xl font-light ml-4`}
											>
												Contact Me
											</button>
										</Link>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	)
}

export default memo(HeadlessMenu)
