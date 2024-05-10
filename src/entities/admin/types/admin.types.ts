export type AdminTypes = {
    image: { url: string | null; file?: File },
    email: string,
    phoneNumber: string,
    administrationType: AdminEnum,
    fullName: string,
    fullNameRu: string,
    fullNameEn: string,
    role: string,
    roleRu: string,
    roleEn: string,
    receptionDay: string,
    receptionDayRu: string,
    receptionDayEn: string,
    jobDescription: string,
    jobDescriptionRu: string,
    jobDescriptionEn: string,
    permission: string,
    permissionRu: string,
    permissionEn: string,
}

export enum AdminEnum {
    LEADERSHIP="LEADERSHIP", ADMINISTRATION="ADMINISTRATION"
}