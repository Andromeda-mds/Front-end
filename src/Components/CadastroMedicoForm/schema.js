import * as Yup from 'yup';
import { number } from 'yup/lib/locale';


const validationSchema = Yup.object().shape({
    cep: Yup.string()
 	.min(8, 'Deve conter pelo menos 8 caracteres')
 	.max(8, 'Deve conter no máximo 8 caracteres')
 	.required('Cep é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
 	city: Yup.string().required('Cidade é obrigatório'),
    nomeCompleto: Yup.string('Só pode conter letras').min(3, 'Nome inválido').required('Nome inválido'),
	cpf: Yup.number()
		.typeError('Só pode conter números')
		.min(11, 'Deve conter pelo menos 8 caracteres')
		.max(11, 'Não pode ultrapassar 11 caracteres')
		.required('CPF é obrigatório'),
 	telefone: Yup.string().max(11, 'Telefone Inválido').required('Telefone é obrigatório'),
	numero: Yup.number('Precisa ser um número')
		.typeError('Só pode conter números')
		.required('Número é obrigatório'),
	crm: Yup.number('Precisa ser um número')
		.typeError('Só pode conter números')
		.required('CRM é obrigatório')
})
export default validationSchema
