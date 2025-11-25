import { Flex, FlexProps, Skeleton as MantineSkeleton, SkeletonProps } from "@mantine/core"
import { FC, memo } from "react"


interface IProps extends SkeletonProps {
    withLabel?: boolean
    containerProps?: FlexProps
}


const InputSkeleton: FC<IProps> = ({ withLabel = true, containerProps, ...props }) => {
    return (
        <Flex
            direction="column"
            gap={6}
            w="100%"
            {...containerProps}
        >
            {
                withLabel &&
                <MantineSkeleton
                    w="100%"
                    maw={{ base: 170, sm: 430 }}
                    h={16}
                />
            }

            <MantineSkeleton
                w="100%"
                h={40}
                mih={40}
                radius={8}
                {...props}
            />
        </Flex>
    )
}

export default memo(InputSkeleton)