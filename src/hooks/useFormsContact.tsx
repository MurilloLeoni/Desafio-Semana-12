import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormSchemaContact, formSchemaContact } from "../schemas/formSchemaContact"

export const useFormsContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaContact>({
        resolver: zodResolver(formSchemaContact)
    })
    return { register, handleSubmit, errors }
}