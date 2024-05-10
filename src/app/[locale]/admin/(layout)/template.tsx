import React, {FC, PropsWithChildren, Suspense} from 'react';
import {Loader} from "@/shared";

const AdminTemplate: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default AdminTemplate;