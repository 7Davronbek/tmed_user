import { FC } from 'react'

type Props = {
  isWhite?: boolean
}
export const TmedLogo: FC<Props> = ({ isWhite = false }) => (
  <svg width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M37.7703 24H41.5343L49.974 13.5503L47.5909 24H55.6322L59.6656 6.31359L63.0869 6.31593L59.0541 24H79.2428L80.6492 17.833H68.5017L69.2439 14.5782H81.0834L82.2555 9.43907H70.4159L71.1269 6.32144L86.5227 6.33209L82.4935 24H97.0704C120.478 24 116.362 -0.74791 84.7121 0.0173906H64.5233H61.1015H53.0602H37.2171H32.0846H29.2877H29.1759H28.9776H2.27315H1.22211L0 6.27876L7.17444 6.28367L3.13419 24H11.1755L15.2145 6.28923L27.7451 6.2916L23.7067 24H31.7479L34.1309 13.5504L37.7703 24ZM23.8712 12.5393C23.7732 12.9711 22.7078 17.6785 22.6957 17.6785C22.0378 17.6785 15.3016 17.6809 15.3029 17.6751C15.6975 15.9629 16.0901 14.2506 16.4885 12.5393C16.489 12.5368 23.8713 12.5388 23.8712 12.5393ZM47.6671 6.30527L42.2463 12.6253L39.7232 6.29976L47.6671 6.30527ZM94.2795 7.0837L91.9411 17.833C110.358 19.1571 106.167 8.42752 94.2795 7.0837Z"
          fill={isWhite ? 'white' : 'url(#paint0_linear_4749_31624)'} />
    <defs>
      <linearGradient id="paint0_linear_4749_31624" x1="0" y1="12" x2="112" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10338C" />
        <stop offset="1" stopColor="#00C1C1" />
      </linearGradient>
    </defs>
  </svg>
)