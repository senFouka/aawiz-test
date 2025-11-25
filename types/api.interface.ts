

export interface IRequestBody<T> {
    data: T
}

export interface IRequestResponse<T> {
    data: T
}

export interface IRequestBodyWithId<T, X = string> {
    data: T
    id?: X
}

export interface IId {
    id: string
}