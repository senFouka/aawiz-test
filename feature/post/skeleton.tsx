import { Flex, Skeleton } from "@mantine/core"




const PostSkeleton = () => {
    return (
        <Flex
            direction="column"
            gap={{ base: 12, sm: 24 }}
            my={24}
        >
            <Skeleton
                h={{ base: 24, sm: 32 }}
                w="100%"
                maw={{ sm: 820 }}
            />

            <Skeleton
                h={{ base: 114, sm: 150 }}
                w="100%"
            />
        </Flex>
    )
}

export default PostSkeleton