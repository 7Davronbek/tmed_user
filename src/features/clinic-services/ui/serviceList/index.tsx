'use client'
import {useEffect} from "react";
import {ClinicServiceCard, getServiceInfinityListEv} from "@/entities/clinic-services";

const ServiceList = () => {
    useEffect(() => {
        getServiceInfinityListEv({})
    }, []);
    return <ClinicServiceCard/>
};

export default ServiceList;