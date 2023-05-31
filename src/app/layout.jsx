import Link from 'next/link'
import Homepage from './component/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Loginpage, { Loginit } from './component/Login'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Log in page',
  description: 'Gideon page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`bg-gray-100 h-screen`}>

       
        <Homepage />
 

        <Loginpage /> 
      
      
        
        
        {children}
        </main>
        </body>
    </html>
  )
}
