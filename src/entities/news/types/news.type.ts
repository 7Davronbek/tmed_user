export type NewsType = {
    id: number,
    text: string,
    comment_count: number,
    likes_count: number,
    is_liked: boolean,
    is_mine: boolean,
    is_saved: boolean,
    date: boolean,
    medias: Media[],
    repost: Repost,
    products: Product[],
    author_user: string,
    author_fullname: string,
    author_avatar: string,
    author_job: string,
    author_name: string,
    author_lastname: string,
    author_org: string
}

export type Repost = {
    id: number,
    text: string,
    date: string
}

export type Product ={
    id: number,
    product: number,
    qty: number,
    specialist: number,
    post: number
}

export type Media = {
    id: number,
    image: string,
    file: string,
    screenshot: string,
    main: boolean,
    type: string,
    post: number
}