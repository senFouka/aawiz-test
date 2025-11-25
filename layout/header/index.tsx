import ActionIcon from "@/components/action-icon"
import Card from "@/components/card"
import { ColorSchemeToggle } from "@/components/color-scheme"
import { Container, Flex, Title } from "@mantine/core"






const HeaderLayout = () => {
    return (
        <Card
            component="header"
            shadow="md"
            pos="sticky"
            top={0}
            left={0}
            right={0}
            radius={0}
            px={0}
            className="z-[10]"
        >
            <Container>
                <Flex
                    align="center"
                    justify="space-between"
                >
                    <Title
                        order={1}
                        fz={{base: 24, sm: 36}}
                    >
                        Aawiz
                    </Title>

                    <ColorSchemeToggle />
                </Flex>
            </Container>
        </Card>
    )
}

export default HeaderLayout