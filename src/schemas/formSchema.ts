import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3, { message: 'O número mínimo de caracteres é de 3' }),
  lastname: z.string().min(3, { message: 'O número mínimo de caracteres é de 3' }),
  companyname: z.string().min(0, { message: 'O número mínimo de caracteres é de 3' }).optional(),
  zipcode: z.string().regex(/^[0-9]{5}-?[0-9]{3}$/, { message: 'CEP inválido' }),
  country: z.string().min(3, { message: 'Country is required' }),
  street: z.string().regex(/^[\w\W]+(?:,\s)?\d+$/, { message: 'Rua inválida. Deve ser no formato "Rua Nome, Número"' }),
  city: z.string().min(3, { message: 'City is required' }),
  province: z.string().min(3, { message: 'Province is required' }),
  addonaddress: z.string().min(3, { message: 'Add-on address is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
  message: z.string().min(0, { message: 'Message is required' }).optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
