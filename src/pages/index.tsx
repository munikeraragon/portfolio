import Navbar from '../ui/Navbar/Navbar'
import Navigation from '../ui/Navigation/Navigation'
import { useCallback, useEffect } from 'react'
import { PageType, usePageAnimationStore } from '../store/usePageAnimationStore'

const Portfolio: React.FC = () => {
	const { pages, currentPage, setCurrentPage, nextPage } = usePageAnimationStore()

	useEffect(() => {
		for (const [key, value] of Object.entries(pages)) {
			if (key === nextPage) {
				value.ref?.current?.scrollIntoView({
					behavior: 'smooth',
				})
			}
		}
	}, [nextPage, pages])

	const handleScroll = useCallback(() => {
		const getPageInViewport = (pages: PageType) => {
			const min = Math.min(
				...Object.values(pages).map((item) => Math.abs(item.ref?.current?.getBoundingClientRect().y || 0))
			)
			for (const [key, value] of Object.entries(pages)) {
				if (Math.abs(value.ref?.current?.getBoundingClientRect().y || 0) === min) return key
			}
		}
		setCurrentPage(getPageInViewport(pages) || '')
	}, [pages, setCurrentPage])

	return (
		<div
			onScroll={handleScroll}
			className='w-screen md:h-screen md:overflow-scroll md:snap-y md:snap-mandatory flex flex-col items-center bg-black text-white'
		>
			<Navigation pages={pages} currentPage={currentPage} />

			<Navbar
				className='fixed mt-4'
				isDarkPage={pages[currentPage].isDarkPage}
				tabs={Object.keys(pages).map((key) => ({
					label: key,
					className: `${currentPage === key ? '' : ''}  transition duration-150
					${pages[currentPage].className} text-md mr-3 my-4 text-lg font-bold`,
				}))}
			/>

			{Object.keys(pages).map((pageKey) => (
				<div
					key={pageKey}
					ref={pages[pageKey].ref}
					className='snap-center md:min-h-screen flex flex-col items-center w-full'
				>
					{pages[pageKey].page}
				</div>
			))}
		</div>
	)
}

export default Portfolio
