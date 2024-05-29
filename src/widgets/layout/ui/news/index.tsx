import {PropsWithChildren, Suspense} from 'react'
import {Content} from '@/widgets/layout/ui/docs/organisms'
import {Loader} from '@/shared'
import {NewsNavbar} from "@/widgets/layout/ui/news/organisms";

type Props = PropsWithChildren & {
    title: string
}

export async function NewsLayout({children, title}: Props) {
    return (
        <Suspense fallback={<Loader/>}>
            <div className={'container'}>
                <NewsNavbar title={title}/>
                <Content>
                    {children}
                </Content>
            </div>
        </Suspense>
    )
}