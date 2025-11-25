"use client"
import Button from "@/components/button"
import Card from "@/components/card"
import Input from "@/components/input"
import { useCreatePost } from "@/hooks/useRequest/posts"
import IPostsBody from "@/types/posts/body"
import { Flex } from "@mantine/core"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"




const FormPosts = () => {

    const form = useForm<IPostsBody>({
        defaultValues: {
            userId: 2000
        }
    })

    const { mutate, isPending, isSuccess } = useCreatePost()


    const onSubmit = (values: IPostsBody) => {
        try {
            mutate({
                data: values
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            form.reset({
                userId: 2000
            })
            toast.success("your request is success!")
        }
    }, [isSuccess])


    return (
        <Card>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Flex
                    gap={{ base: 18, sm: 12 }}
                    direction={{ base: "column", sm: "row" }}
                >
                    <Input
                        {...form.register("title", {
                            required: true,
                            minLength: {
                                value: 10, message: "minimum 10 character"
                            },
                        })}
                        label="Title"
                        error={form.formState?.errors?.title?.message}
                        withAsterisk
                        flex={1}
                    />

                    <Input
                        {...form.register("body", {
                            required: true,
                            minLength: {
                                value: 12, message: "minimum 12 character"
                            }
                        })}
                        error={form.formState?.errors?.body?.message}
                        label="Body"
                        withAsterisk
                        flex={3}
                    />

                    <Button
                        type="submit"
                        mt={22}
                        loading={isPending}
                    >
                        Submit
                    </Button>
                </Flex>
            </form>
        </Card>
    )
}

export default FormPosts