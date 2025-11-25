import { getPost } from "@/api/posts";
import { POSTS_URL } from "@/api/posts/urls";
import Post from "@/feature/post";
import ServerProvider from "@/providers/server";



const SinglePostPage = async ({ params }) => {
    const { id } = await params

    return (
        <ServerProvider
            queryKey={[POSTS_URL, { id: id }]}
            queryFn={() => getPost({
                id: id
            })}
        >
            <Post />
        </ServerProvider>
    )
}

export default SinglePostPage