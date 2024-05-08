export type InstitutionType = {
    id: number,
    legal_form: {
        id: number,
        name: string,
        short: string,
        description: string
    },
    region: {
        id: number,
        name: string,
        status: number,
        type: number,
        parent: number
    },
    category: {
        id: number,
        name: string,
        description: string,
        hide_from_orgs: boolean,
        hide_from_users: boolean,
        image: string,
        status: boolean,
        first_level_score: number,
        level_progress_by: number,
        creator: string,
        parent: number
    },
    location: string,
    name: string,
    logo: string,
    juridic_name: string,
    slug_name: string,
    certificate_number: string,
    phone: {
        additionalProp1: string,
        additionalProp2: string,
        additionalProp3: string
    },
    status: number,
    create_date: string,
    founded_date: string,
    is_official: boolean,
    text_for_print: string,
    vat: number,
    currency: string,
    address: {
        additionalProp1: string,
        additionalProp2: string,
        additionalProp3: string
    }
}