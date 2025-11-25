import Layout from "@/layout"
import { FC, ReactNode } from "react"




interface IProps {
    children: ReactNode
}

const DefaultsLayout: FC<IProps> = ({ children }) => <Layout>{children}</Layout>

export default DefaultsLayout