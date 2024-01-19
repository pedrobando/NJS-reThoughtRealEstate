import { Poppins, Roboto_Mono, Roboto, Lato } from 'next/font/google'
 
export const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-poppins'
})
 
export const roboto_mono = Roboto({
  subsets: ['latin'],
  weight:["400"],
  display: 'swap',
})

export const lato = Lato({
  subsets: ['latin'],
  weight:["400"],
  display: 'swap',
  variable: '--font-lato'
})