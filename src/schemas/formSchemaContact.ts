import { z } from 'zod';

export const formSchemaContact = z.object({
  name: z.string().min(3, { message: 'Mín. caracteres é 3' }).regex(/^[a-zA-Z\s]+$/, { message: 'Nome inválido' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
  subject: z.string().min(3, { message: 'Mín. caracteres é 3' }),
  message: z.string().min(10, { message: 'Mín. caracteres é 10' })
 })

export type FormSchemaContact = z.infer<typeof formSchemaContact>;
