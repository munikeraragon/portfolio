import { usePageAnimationStore } from '../../store/usePageAnimationStore'

export interface ContactProps {
	className?: string
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
	const { pages } = usePageAnimationStore()
	return (
		<div id='contact' className={`${className} flex flex-col w-full bg-black min-h-screen`}>
			<p className='text-3xl font-medium text-center mb-8 mt-28'>Get in touch</p>

			<div className='grid grid-cols-2 justify-center max-w-6xl mx-auto w-full flex-1'>
				<div className='flex flex-col justify-center'>
					<div className='col-span-6 sm:col-span-3 my-4'>
						<input
							type='text'
							name='full-name'
							id='full-name'
							autoComplete='given-name'
							placeholder='Your name'
							className='mt-1 py-3 p-2 font-light focus:ring-white focus:border-white
							 block w-full text-lg rounded-md bg-transparent border border-gray-500 placeholder-gray-200'
						/>
					</div>

					<div className='col-span-6 sm:col-span-3 my-4'>
						<input
							type='text'
							name='email'
							id='emai'
							autoComplete='given-name'
							placeholder='Email address'
							className='mt-1 py-3 p-2 font-light focus:ring-white focus:border-white
							block w-full text-lg rounded-md bg-transparent border border-gray-500 placeholder-gray-200'
						/>
					</div>

					<div className='my-4'>
						<div className='mt-1'>
							<textarea
								id='message'
								name='message'
								rows={3}
								className='mt-1 py-3 p-2 font-light focus:ring-gray-300 focus:border-gray-300
								mt-1 block w-full text-lg rounded-md bg-transparent border border-gray-500 placeholder-gray-200'
								placeholder='Your Message'
							/>
						</div>
					</div>
				</div>

				<div className='flex flex-col content-center justify-center items-center'>
					<button
						onClick={() =>
							pages.Work.ref?.current?.scrollIntoView({
								behavior: 'smooth',
							})
						}
						className='w-32 my-4 font-light text-xl text-left hover:text-gray-300'
					>
						My Work
					</button>
					<a
						href='/MunikerAragon_res.pdf'
						download='myResume'
						className='w-32 my-4 font-light text-xl hover:text-gray-300'
					>
						My Resume
					</a>
					<a
						href='https://github.com/munikeraragon'
						className='w-32 my-4 font-light text-xl hover:text-gray-300'
					>
						My Github
					</a>
				</div>
			</div>

			<div className='max-w-6xl border-t border-gray-400 mx-auto w-full mt-10 mb-10'>
				<p className='font-light text-lg mt-10 text-gray-300'>© Muniker Aragon 2022</p>
			</div>
		</div>
	)
}

export default Contact
