import { memo, useCallback } from 'react'
import { PageType } from '../../store/usePageAnimationStore'

export interface NavigaitonProps {
	pages: PageType
	currentPage: string
	className?: string
}

export interface BulletProps {
	className?: string
	onClick?: (name: string) => void
	name: string
	active: boolean
}

const Bullet: React.FC<BulletProps> = ({ className = '', active, name, onClick = () => undefined }) => {
	return (
		<button
			className={`${className} transition duration-300 border-2 rounded-sm ${
				active ? 'h-3 w-3 bg-transparent' : 'origin-center rotate-45 h-2 w-2'
			}`}
			onClick={() => onClick(name)}
		/>
	)
}

const Navigation: React.FC<NavigaitonProps> = ({ className = '', pages, currentPage }) => {
	const handleClick = useCallback(
		(name: string) => {
			for (const [key, value] of Object.entries(pages)) {
				if (key === name) {
					value.ref?.current?.scrollIntoView({
						behavior: 'smooth',
					})
				}
			}
		},
		[pages]
	)

	return (
		<div className={`${className} flex fixed bottom-16 right-16`}>
			<ul className='flex flex-col items-center'>
				{Object.keys(pages).map((key) => (
					<li key={key}>
						<Bullet
							name={key}
							active={key === currentPage}
							onClick={handleClick}
							className={`${pages[currentPage].className}`}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default memo(Navigation)
