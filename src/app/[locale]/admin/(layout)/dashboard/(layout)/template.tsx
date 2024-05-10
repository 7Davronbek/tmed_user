import {FC, PropsWithChildren, Suspense} from 'react';
import {Loader} from "@/shared";
import sx from './style/main.module.scss'
import Link from "next/link";

const DashboardTemplate: FC<PropsWithChildren> = ({children}) => {
    return (
        <Suspense fallback={<Loader/>}>
            <div className={sx.dashboard}>
                <div className={sx.wrap}>
                    <div className={sx.left}>
                        <Link href={'/en/admin/dashboard'}>Administration</Link>
                        <br/>
                        <Link href={'/en/admin/dashboard/about-us'}>About Us</Link>
                    </div>
                    <div className={sx.right}>
                        {children}
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default DashboardTemplate;