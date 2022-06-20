import { memo } from 'react'
import Menu from '../Menu'

export interface TabProps {
	label: string
	align?: string
	href?: string
	className?: string
}

export interface NavbarProps {
	className?: string
	maxWidth?: string
	isDarkPage: boolean
	tabs?: TabProps[]
}

const Navbar: React.FC<NavbarProps> = ({ className = '', isDarkPage }) => {
	return (
		<div className={`${className} flex w-full t-0`}>
			<div className='flex w-full mx-auto mx-12 lg:mx-24'>
				<Menu isDarkPage={isDarkPage} />
			</div>
		</div>
	)
}

export default memo(Navbar)
