import React from 'react';
import ServiceList from "@/features/clinic-services/ui/serviceList";

const ClinicServicePage = async () => {
    return (
        <div className='container'>
            <ServiceList/>
        </div>
    );
};

export default ClinicServicePage;