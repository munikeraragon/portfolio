import { createRef, ReactElement } from 'react'
import create from 'zustand'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'

export type PageType = { [_: string]: Page }

export interface Page {
	ref: React.RefObject<HTMLDivElement>
	page: ReactElement
	isDarkPage: boolean
	className: string
}

export interface PageAnimationStore {
	pages: PageType
	setPages: (_: PageType) => void

	currentPage: string
	setCurrentPage: (_: string) => void

	nextPage: string
	setNextPage: (_: string) => void
}

export const usePageAnimationStore = create<PageAnimationStore>((set) => ({
	pages: {
		Home: { ref: createRef(), page: <Hero />, isDarkPage: true, className: 'bg-white border-white' },
		About: { ref: createRef(), page: <About />, isDarkPage: false, className: 'bg-black border-black' },
		Skills: { ref: createRef(), page: <Skills />, isDarkPage: true, className: 'bg-white border-white' },
		Work: { ref: createRef(), page: <Work />, isDarkPage: false, className: 'bg-black border-black' },
		Contact: { ref: createRef(), page: <Contact />, isDarkPage: true, className: 'bg-white border-white' },
	},
	setPages: (arg: PageType) => set(() => ({ pages: arg })),

	currentPage: 'Home',
	setCurrentPage: (arg: string) => set(() => ({ currentPage: arg })),

	nextPage: 'Home',
	setNextPage: (arg: string) => set(() => ({ nextPage: arg })),
}))
