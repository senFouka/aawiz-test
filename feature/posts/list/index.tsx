"use client"
import FallbackError from "@/components/fallback/error"
import { useGetPosts } from "@/hooks/useRequest/posts"
import Paths from "@/routes/path"
import { Flex, Loader, SimpleGrid, Title } from "@mantine/core"
import Link from "next/link"
import CardPosts from "../card"
import CardPostsSkeleton from "../card/skeleton"




const ListPosts = () => {
    const { data, isPending, isError, isFetching } = useGetPosts()

    const skeletonList = () => {
        return Array.from({ length: 12 }).map((_, index) =>
            <CardPostsSkeleton key={index} />
        )
    }

    if (isError) return <FallbackError />
    return (
        <Flex
            direction="column"
            gap={18}
        >
            <Flex
                gap={12}
                justify="space-between"
                align="center"
            >
                <Title
                    order={2}
                    fz={{ base: 24, sm: 36 }}
                >
                    List of Posts
                </Title>

                {
                    (!isPending && isFetching) &&
                    <Loader
                        size="sm"
                    />
                }
            </Flex>

            <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 4, lg: 6 }}
            >
                {isPending ? skeletonList() :
                    data?.map(res =>
                        <Link href={Paths.POST_PATH + `/${res.id}`} key={res.id}>
                            <CardPosts
                                data={res}
                            />
                        </Link>
                    )
                }
            </SimpleGrid>
        </Flex>
    )
}

export default ListPosts