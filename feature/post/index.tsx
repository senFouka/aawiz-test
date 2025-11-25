"use client"
import { useGetPost } from "@/hooks/useRequest/posts"
import { Flex, Text, Title } from "@mantine/core"
import { useParams } from "next/navigation"




const Post = () => {
    const { id }: { id: string } = useParams()

    const { data } = useGetPost({
        id: id
    })


    return (
        <Flex
            direction="column"
            gap={{ base: 12, sm: 24 }}
            my={24}
        >
            <Title
                order={3}
                fz={{ base: "md", sm: "2xl" }}
                fw={600}
            >
                {data?.title}
            </Title>

            <Text
                fz={{ base: "sm", sm: "lg" }}
                fw={400}
            >
                {data?.body}
            </Text>
        </Flex>
    )
}

export default Post