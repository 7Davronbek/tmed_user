'use client'
import {useEffect} from "react";
import {ClinicServiceCard, getServiceInfinityListEv} from "@/entities/clinic-services";

const ServiceList = () => {
    useEffect(() => {
        getServiceInfinityListEv({limit: 24, offset: 0})
    }, []);
    return <ClinicServiceCard/>
};

export default ServiceList;