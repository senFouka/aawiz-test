import { Flex, SimpleGrid, Skeleton } from "@mantine/core"
import CardPostsSkeleton from "../card/skeleton"




const ListPostsSkeleton = () => {
    const skeletonList = () => {
        return Array.from({ length: 12 }).map((_, index) =>
            <CardPostsSkeleton key={index} />
        )
    }

    return (
        <Flex
            direction="column"
            gap={18}
        >
            <Skeleton
                h={{ base: 18, sm: 24 }}
                w="100%"
                maw={210}
            />

            <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 4, lg: 6 }}
            >
                {skeletonList()}
            </SimpleGrid>
        </Flex>
    )
}

export default ListPostsSkeleton