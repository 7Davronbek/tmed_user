
import {FC, PropsWithChildren, Suspense} from "react";
import {Loader} from "@/shared";

const StreamLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <Suspense fallback={<Loader/>}>
            <div className="container">
                {children}
            </div>
        </Suspense>
    );
};

export default StreamLayout;