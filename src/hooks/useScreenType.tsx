import { useMediaQuery } from 'react-responsive'

export enum ScreenType {
	extraSmall,
	small,
	medium,
	large,
	extraLarge,
}

export const useScreenType = (): ScreenType => {
	const isXl = useMediaQuery({ minWidth: 1280 })
	const isLg = useMediaQuery({ minWidth: 1024 })
	const isMd = useMediaQuery({ minWidth: 768 })
	const isSm = useMediaQuery({ minWidth: 640 })

	if (isXl) return ScreenType.extraLarge

	if (isLg) return ScreenType.large

	if (isMd) return ScreenType.medium

	if (isSm) return ScreenType.small

	return ScreenType.extraSmall
}
