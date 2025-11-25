import Card from "@/components/card"
import InputSkeleton from "@/components/input/skeleton"
import { Flex } from "@mantine/core"




const FormPostsSkeleton = () => {
    return (
        <Card>
            <Flex
                gap={{ base: 18, sm: 12 }}
                direction={{ base: "column", sm: "row" }}
                w="100%"
            >
                <InputSkeleton
                    flex={1}
                />

                <InputSkeleton
                    flex={3}
                />

                <InputSkeleton
                    withLabel={false}
                    mt={22}
                />
            </Flex>
        </Card>
    )
}

export default FormPostsSkeleton