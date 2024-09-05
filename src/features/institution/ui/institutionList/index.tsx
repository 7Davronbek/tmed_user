'use client'
import {useEffect} from "react";
import {getInstitutionInfinityListEv, InstitutionCard} from "@/entities/institution";

export const InstitutionList = async () => {
    useEffect(() => {
        getInstitutionInfinityListEv({})
    }, [])
    return <InstitutionCard/>

}