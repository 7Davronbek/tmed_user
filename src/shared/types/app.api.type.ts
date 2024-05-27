import { Nullable } from './common'

export enum QueryParamEnum {
    Limit = 'limit',
    Offset = 'offset',
    ProductToOrderResponsible = 'producttoorder__responsible',
    OrgSlug = 'org_slug',
    Username = 'username',
    Search = 'search',
    Ordering = 'ordering',
    HashtagId = 'hashtag_id',
    GroupId = 'group_id',
    Ucat = 'ucat',
    PageSize = 'pageSize',
    Page = 'page',
    Product = 'product',
    Equipment = 'equipment',
    Consumption = 'consumption',
    Type = 'type',
    RedirectUrl = 'redirect_url',
    IncludeSales = 'include_sales',
    Months = 'months',
    Year = 'year',
    SpecCat = 'spec_cat',
    Flow = 'flow',
    IsOwner = 'is_owner',
    AsOwner = 'as_owner',
    HideFromOrganization = 'hide_from_orgs',
    HideFromUser = 'hide_from_users',
    IsMain = 'is_main',
    User = 'user',
    DateGroupBy = 'date_group_by',
}

export type ApiQueryParam = {
    [key in QueryParamEnum]: string | number | undefined | boolean
}

export type ApiObjQueryParam = {
    objectId: string
    params?: Partial<ApiQueryParam>
}

export type ApiObjBody<D> = {
    objectId: string
    data: D
    obj?: D
}

export type ApiObjSubj = {
    objectId: string
    subjectId: string
    id?: string
    params?: Partial<ApiQueryParam>
}

export type ApiObjSubjBody<Data> = {
    objectId?: string
    subjectId: string
    id?: string
    data: Data
}

export type ApiList<D> = {
    results: D[]
    count: number
    searchText?: string
    next_offset: number
    previous_offset: number
    next: Nullable<string>
    previous: Nullable<string>
}
