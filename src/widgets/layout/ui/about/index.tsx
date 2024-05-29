import {FC, PropsWithChildren, Suspense} from 'react'
import {AboutNavbar, Content} from '@/widgets/layout/ui/about/organisms'
import {Loader} from '@/shared'
import Head from 'next/head';

type Props = PropsWithChildren & {
    title: string
}

export default async function AboutLayout({children, title}: Props) {
    return (
        <Suspense fallback={<Loader/>}>
            <div className={'container'}>
                <AboutNavbar title={title}/>
                <Content>
                    {children}
                </Content>
            </div>
        </Suspense>
    )
}