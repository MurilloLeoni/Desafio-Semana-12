import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(3, { message: 'Mín. caracteres é 3' }).regex(/^[a-zA-Z\s]+$/, { message: 'Nome inválido' }),
  lastname: z.string().min(3, { message: 'Mín. caracteres é 3' }).regex(/^[a-zA-Z\s]+$/, { message: 'Nome inválido' }),
  companyname: z.string().optional(),
  zipcode: z.string().regex(/^[0-9]{5}-?[0-9]{3}$/, { message: 'CEP inválido' }),
  country: z.string().min(3, { message: 'Country is required' }).regex(/^[a-zA-Z\s]+$/, { message: 'Pais inválido' }),
  street: z.string().regex(/^[\w\W]+(?:,\s)?\d+$/, { message: 'Rua inválida. Deve ser no formato "Rua Nome, Número"' }),
  city: z.string().min(3, { message: 'City is required' }).regex(/^[a-zA-Z\s]+$/, { message: 'Cidadde inválido' }),
  province: z.string().min(3, { message: 'Province is required' }).regex(/^[a-zA-Z\s]+$/, { message: 'Bairro inválido' }),
  addonaddress: z.string().min(3, { message: 'Add-on address is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Email is invalid' }),
  message: z.string().optional(),
  paymentMethod: z.enum(['Cash on Delivery', 'Direct Bank Transfer', 'Credit Card'], { message: 'Invalid payment method' })
 })

export type FormSchema = z.infer<typeof formSchema>;
