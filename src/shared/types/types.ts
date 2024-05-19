export type Token = {
    access: string
    refresh: string
    is_new_user: boolean
    expire_date: number
}

export type ApiError = {
    field: string
    message: string | string[]
}

export type ApiErrorArr = ApiError[]

export type ApiListType<D> = {
    count: number
    next: string | null
    previous: string | null
    next_offset: number
    previous_offset: number
    results: D[]
    searchText?: string
}

export type ApiAdminListType<D> = {
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: {
        sort: { empty: boolean, sorted: boolean, unsorted: boolean },
        offset: number
        pageNumber: number
        pageSize: number
        paged: boolean
    }
    size: number
    sort: { empty: boolean, sorted: boolean, unsorted: boolean }
    totalElements: number
    totalPages: number
    content: D[]
}

export type QueryParamsType = {
    limit?: number
    offset?: number
    producttoorder__responsible?: string
    lang?: string
    username?: string
    search?: string
    ordering?: string
    hashtag_id?: string
    infinite?: boolean
    group_id?: string
    ucat?: string
    size?: number
    page?: number
}

export type ApiListById = {
    id: string
    params: QueryParamsType
}

export type ApiByObjectParam = {
    objectId: string
    params: QueryParamsType
}

export type ApiByObjectAndSubject = {
    objectId: string
    subjectId: string
    id?: string
    params?: QueryParamsType
}

export type ApiByObjectAndSubjectBody<Data> = {
    objectId: string
    subjectId: string
    id?: string
    data: Data
}

export type ApiByObjectBody<D> = {
    objectId: string
    data: D
    obj?: D
}
