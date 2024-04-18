import React from 'react'
import '@/assets/style/global.scss'
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
