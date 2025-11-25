import { Flex } from "@mantine/core"
import FormPostsSkeleton from "./form/skeleton"
import ListPostsSkeleton from "./list/skeleton"




const PostsSkeleton = () => {
    return (
        <Flex
            direction="column"
            gap={24}
            my={32}
        >
            <FormPostsSkeleton />

            <ListPostsSkeleton />
        </Flex>
    )
}

export default PostsSkeleton