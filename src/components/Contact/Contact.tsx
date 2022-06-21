import { usePageAnimationStore } from '../../store/usePageAnimationStore'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Toast from '../../ui/Toast'
import { ToastStatus } from '../../ui/Toast/Toast'

export interface ContactProps {
	className?: string
}

type Inputs = {
	fullName: string
	email: string
	message: string
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
	const { pages } = usePageAnimationStore()
	const [loading, setLoading] = useState(false)
	const [toastState, setToastState] = useState({ open: false, message: '', status: ToastStatus.success })

	const { register, handleSubmit, reset } = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => sendMail(data)

	const sendMail = async (data: Inputs) => {
		try {
			setLoading(true)
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(data),
			})
			if (response.status !== 200) throw Error('invalid response')
			setLoading(false)
			setToastState({ open: true, message: 'Succesfully sent message.', status: ToastStatus.success })
			reset()
		} catch (error) {
			setLoading(false)
			setToastState({ open: true, message: 'Failed to send message.', status: ToastStatus.error })
		}
	}

	return (
		<div id='contact' className={`${className} flex flex-col w-full bg-black min-h-screen px-4`}>
			<p className='text-2xl md:text-3xl font-medium text-center mb-8 mt-16 md:mt-28'>Get in touch</p>
			<div className='grid grid-cols-1 lg:grid-cols-2 justify-center max-w-6xl mx-auto w-full flex-1'>
				<div className='flex flex-col justify-center'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='col-span-6 sm:col-span-3 my-4'>
							<input
								{...register('fullName', { required: true })}
								type='text'
								placeholder='Your name'
								className='mt-1 py-3 p-2 font-light focus:ring-transparent focus:border-transparent
							 	block w-full md:text-lg rounded-md bg-transparent border border-gray-500
								placeholder-gray-200'
							/>
						</div>

						<div className='col-span-6 sm:col-span-3 my-4'>
							<input
								{...register('email', { required: true })}
								type='text'
								name='email'
								id='emai'
								autoComplete='given-name'
								placeholder='Email address'
								className='mt-1 py-3 p-2 font-light focus:ring-transparent focus:border-transparent
							block w-full md:text-lg rounded-md bg-transparent border border-gray-500 placeholder-gray-200'
							/>
						</div>

						<div className='my-4'>
							<textarea
								{...register('message', { required: true })}
								id='message'
								name='message'
								rows={3}
								className='mt-1 py-3 p-2 font-light focus:ring-transparent focus:border-transparent
									mt-1 block w-full md:text-lg rounded-md bg-transparent border border-gray-500
									placeholder-gray-200'
								placeholder='Your Message'
							/>
						</div>

						<div className='pt-2'>
							<input
								value='Send'
								type='submit'
								name='Your Message'
								disabled={loading}
								className='px-12 py-2 rounded-md border text-gray-200 border-gray-500 font-light
							 hover:ring-blue-500 hover:ring-2 hover:border-transparent mx-auto md:text-lg '
							/>
						</div>
					</form>
				</div>

				<div className='flex lg:flex-col content-center justify-center items-center mt-8 lg:mt-0'>
					<button
						onClick={() =>
							pages.Work.ref?.current?.scrollIntoView({
								behavior: 'smooth',
							})
						}
						className='w-32 my-4 font-light text-lg md:text-xl text-left hover:text-gray-300'
					>
						My Work
					</button>
					<a
						href='/MunikerAragon_res.pdf'
						download='myResume'
						className='w-32 my-4 font-light text-lg md:text-xl hover:text-gray-300'
					>
						My Resume
					</a>
					<a
						href='https://github.com/munikeraragon'
						className='w-32 my-4 font-light text-lg md:text-xl hover:text-gray-300'
					>
						My Github
					</a>
				</div>
			</div>

			<div className='max-w-6xl border-t border-gray-400 mx-auto w-full mt-10 mb-10'>
				<p className='font-light text-lg mt-10 text-gray-300'>© Muniker Aragon 2022</p>
			</div>

			<Toast
				message={toastState.message}
				open={toastState.open}
				setOpen={(open) => setToastState((state) => ({ ...state, open }))}
				status={toastState.status}
			/>
		</div>
	)
}

export default Contact
