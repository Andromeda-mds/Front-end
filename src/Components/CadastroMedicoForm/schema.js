import * as Yup from 'yup';
import { number } from 'yup/lib/locale';


const validationSchema = Yup.object().shape({
    cep: Yup.string()
		.matches(/^[0-9]*$/, 'Só pode conter números')
		.min(8, 'Deve conter pelo menos 8 caracteres')
		.max(8, 'Deve conter no máximo 8 caracteres')
		.required('Cep é obrigatório'),
    email: Yup.string()
		.email('E-mail inválido')
		.required('E-mail é obrigatório'),
 	city: Yup.string()
	 	.min(1)
	 	.required('Cidade é obrigatório'),
    nomeCompleto: Yup.string('Só pode conter letras')
		.matches(/^[A-Za-z ]*$/, 'Só pode conter letras')
		.min(3, 'Nome inválido')
		.required('Nome inválido'),
	cpf: Yup.string()
		.matches(/^[0-9]*$/, 'Só pode conter números')
		.min(11, 'Deve conter pelo menos 11 caracteres')
		.max(11, 'Não pode ultrapassar 11 caracteres')
		.required('CPF é obrigatório'),
 	telefone: Yup.string()
	 	.max(11, 'Telefone Inválido')
		.required('Telefone é obrigatório'),
	numero: Yup.string()
		.matches(/^[0-9]*$/, 'Só pode conter números')
		.min(1)
		.required('Número é obrigatório'),
	crm: Yup.string()
		.matches(/^[0-9]*$/, 'Só pode conter números')
		.required('CRM é obrigatório'),
	logradouro: Yup.string()
		.required('Logradouro é obrigatório')

})
export default validationSchema
