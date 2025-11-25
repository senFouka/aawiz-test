import { createPost, getPost, getPosts } from "@/api/posts";
import { POSTS_URL } from "@/api/posts/urls";
import { IId, IRequestBody } from "@/types/api.interface";
import IPostsBody from "@/types/posts/body";
import IPosts from "@/types/posts/posts";
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";


export const useCreatePost = (): UseMutationResult<IPosts, string, IRequestBody<IPostsBody>> => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data) => createPost(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [POSTS_URL] });
        }
    });
}

export const useGetPosts = () => {
    return useQuery({
        queryKey: [POSTS_URL],
        queryFn: () => getPosts(),
    })
};

export const useGetPost = (params: IId) => {
    return useQuery({
        queryKey: [POSTS_URL, params],
        queryFn: () => getPost(params),
        enabled: Boolean(params.id)
    })
};