import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/header/Header';
import Footer from "./layout/footer/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Splenzo',
  description: 'At Splenzo, we are constantly reinventing our products and offering innovative products. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {/* header start*/}
        <Header />
        {/* header end*/}

        {children}

        {/*Footer start*/}
        <Footer />
        {/*Footer end*/}
      </body>
    </html>
  )
}