import { Flex } from "@mantine/core"
import FormPosts from "./form"
import ListPosts from "./list"




const Posts = () => {
    return (
        <Flex
            direction="column"
            gap={24}
            my={32}
        >
            <FormPosts />

            <ListPosts />
        </Flex>
    )
}

export default Posts