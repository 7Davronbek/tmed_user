export type ServiceType = {
    image: string,
    status: boolean,
    id: number,
    name: string,
    is_parent: boolean,
    child_number: number,
    product_count: number,
    units: string,
    product_types: ServiceProductType[],
    creator: string
}

export type ServiceProductType = {
    name: string,
    id: number
}