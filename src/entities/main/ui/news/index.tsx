'use client'
import Image from 'next/image'
import news from '@/assets/images/img.png'
import news2 from '@/assets/images/img_1.png'
import {useEffect} from "react";
import httpClient from "@/shared/api/axios";

export const News = async () => {
    // const get = async () => {
    //     await httpClient.get('/SMMS/api/v1.0/public/post/')
    // }
    // useEffect(() => {
    //     get()
    // }, []);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>


        </div>
    )
}