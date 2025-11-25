"use client"

import { Center, Stack, Text, Title } from "@mantine/core"
import { Component, ErrorInfo, ReactNode } from "react"
import Card from "../card"
import Button from "../button"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error: Error | null
    errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    override state: ErrorBoundaryState = {
        hasError: false,
        error: null,
        errorInfo: null,
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error, errorInfo: null }
    }

    override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error, errorInfo })
        console.error("ErrorBoundary caught an error:", error, errorInfo)
    }

    override render() {
        if (this.state.hasError) {
            return (
                <Center style={{ minHeight: "100vh", padding: "1rem" }}>
                    <Card shadow="md" radius="lg" p="xl" w={450}>
                        <Stack gap="md">
                            <Title order={3} ta="center" c="red">
                                Oops! An error occurred.
                            </Title>
                            <Text ta="center" c="dimmed">
                                Unfortunately, a problem has occurred and the requested section is not displayed.
                            </Text>

                            {this.state.error && (
                                <Card p="sm" radius="md" withBorder>
                                    <Text size="sm" fw={500} c="red">
                                        {this.state.error.name}: {this.state.error.message}
                                    </Text>
                                    {this.state.errorInfo && (
                                        <Text size="xs" c="dimmed" mt="xs" style={{ whiteSpace: "pre-wrap" }}>
                                            {this.state.errorInfo.componentStack}
                                        </Text>
                                    )}
                                </Card>
                            )}

                            <Button fullWidth color="red" onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}>
                                Try Again
                            </Button>
                        </Stack>
                    </Card>
                </Center>
            )
        }

        return this.props.children
    }
}
