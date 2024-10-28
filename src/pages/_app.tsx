import type { AppProps } from 'next/app'
import { DM_Sans } from "next/font/google"
import "@/styles/globals.css"
import "@/styles/locomotive-scroll.css"

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  // Remove service worker registration for now to simplify deployment
  return (
    <div className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  )
}
