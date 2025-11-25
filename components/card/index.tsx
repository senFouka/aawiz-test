import { Box, CardProps, Divider, ElementProps, Flex, FlexProps, Card as MatineCard, rem, Text, Title } from "@mantine/core";
import { FC, ReactElement } from "react";



export interface ICardProps extends Omit<CardProps, "title">, Omit<ElementProps<"div", keyof CardProps>, "title"> {
    header?: string | ReactElement
    caption?: string | ReactElement
    headerProps?: FlexProps
    title?: string | ReactElement
    component?: any
}


const Card: FC<ICardProps> = ({ headerProps, caption, header, title, ...props }) => {
    return (
        <MatineCard {...props}>
            {title ? <Flex
                direction="column"
                gap={4}
                {...headerProps}
            >
                <Title
                    order={3}
                    fz={rem(16)}
                    c="gray.10"
                    fw={500}
                    lh={caption ? "32px" : "100%"}
                >
                    {title}
                </Title>
                {
                    caption &&
                    <Text
                        fz={rem(14)}
                        c="gray.7"
                        fw={400}
                    >
                        {caption}
                    </Text>
                }
                <Divider color="#EEF2F6" my="12px 16px" />
            </Flex>
                :
                header &&
                <Box
                    fz={rem(16)}
                    c="#202939"
                    fw={600}
                    {...headerProps}
                >
                    {header}

                    <Divider color="#EEF2F6" my={16} />
                </Box>
            }

            {props.children}
        </MatineCard>
    )
}

export default Card