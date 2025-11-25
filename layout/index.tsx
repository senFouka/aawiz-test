import { Container } from "@mantine/core"
import { FC, ReactNode } from "react"
import HeaderLayout from "./header"



interface IProps {
    children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
            <HeaderLayout />

            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout