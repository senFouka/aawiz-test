import { Skeleton } from "@mantine/core"





const CardPostsSkeleton = () => {
    return (
        <Skeleton
            w="100%"
            h={{ base: 110, sm: 160 }}
        />
    )
}

export default CardPostsSkeleton