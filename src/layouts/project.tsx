import Navbar from '../ui/Navbar'

const tabs = ['About', 'Experience', 'Work', 'Contact']
export const ProjectLayout: React.FC = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Navbar
				isDarkPage={false}
				className='mt-4'
				tabs={tabs.map((label) => ({
					label,
					className: `text-md mr-3 my-4 hover:border hover:border-white border border-transparent`,
				}))}
			/>
			<main className='h-full flex flex-col items-center'>{children}</main>
		</div>
	)
}
