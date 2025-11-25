import { IId, IRequestBody } from "@/types/api.interface";
import IPostsBody from "@/types/posts/body";
import IPosts from "@/types/posts/posts";
import { instance } from "@/utils/instance";
import { POSTS_URL } from "./urls";



export const createPost = async ({ data }: IRequestBody<IPostsBody>): Promise<IPosts> => {
    return await instance.post(POSTS_URL, data).then(res => res.data)
}

export const getPosts = async (): Promise<IPosts[]> => {
    return await instance.get(POSTS_URL).then(res => res.data)
}

export const getPost = async ({ id }: IId): Promise<IPosts> => {
    return await instance.get(POSTS_URL + `/${id}`).then(res => res.data)
}