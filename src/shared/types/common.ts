import { StaticImageData } from 'next/image'
import React from 'react'

export type Manager = {
  image: string | StaticImageData,
  name: string,
  phoneNumber: string,
  admissionDay?: string,
  jobTitle: string,
  email: string,
  permission?: string,
  staj?: string
}

export type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string
  };
}
export type LocalstorageData = {
  meetingId: string,
  mode: string,
  username?: string
}

export const T_MED_DATA = 'T_MED_DATA'
export const CONFERENCE = 'CONFERENCE'
export const VIEWER = 'VIEWER'