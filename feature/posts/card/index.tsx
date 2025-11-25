import Card from "@/components/card"
import IPosts from "@/types/posts/posts"
import { Flex, Text, Title } from "@mantine/core"
import { FC } from "react"




interface IProps {
    data: IPosts
}

const CardPosts: FC<IProps> = ({ data }) => {
    return (
        <Card
            p={8}
            withBorder
            h="100%"
        >
            <Flex
                direction="column"
                gap={{ base: 6, sm: 12 }}
            >
                <Title
                    order={3}
                    fz={{ base: "sm", sm: "lg" }}
                    fw={600}
                >
                    {data.title}
                </Title>

                <Text
                    fz={{ base: "xs", sm: "md" }}
                    fw={400}
                >
                    {data.body}
                </Text>
            </Flex>
        </Card>
    )
}

export default CardPosts