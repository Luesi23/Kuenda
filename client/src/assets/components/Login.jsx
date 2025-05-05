import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from "../svg/LOGO-login.svg";
import image from "../image/login.png";
import Cadastro from './Cadastro';


const cadastroSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(9, { message: "Numero deve ter pelo menos 9 caracteres" }),
  senha: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  confirmacaoSenha: z.string().min(6, { message: "Confirmação de senha é obrigatória" }),
  }).refine((data) => data.senha === data.confirmacaoSenha, {
    path: ["confirmacaoSenha"],
    message: "As senhas não coincidem",
})


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(cadastroSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8800/user", data);
      console.log("Resposta do backend:", response.data);
      alert("Cadastro feito com sucesso!");
      reset(); // limpa o formulário
    } catch (error) {
      console.error("Erro ao cadastrar:", error.response?.data || error.message);
      alert("Erro ao enviar os dados");
    }
  };
return (
<div className='container-login'>

    <div className='login-post'>
      <img src={image} alt="" />
      <h1>TÁS COM SAUDADES<br/> DE VIAJAR, NÉ? <br/><span> ENTRA LÁ!</span></h1>
    </div>


    <div className='cadastro-form'>
      <img className='logo-login' src={logo} alt="" />
      <h2 className='login-h2'>Iniciar Sessão na <span>Kuenda</span></h2>
      <p className='mt-1 mb-4'>Introduz os teus dados para aceder à tua conta e continuar a tua viagem.</p>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='labels'>

          <div className='label'>
            <p>Endereço de E-mail</p>
          <input type="email" placeholder="Insira o seu e-mail válido" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className='label'>
            <p>senha</p>
          <input type="password" placeholder="Digite uma senha segura" {...register("senha")} />
          {errors.senha && <p>{errors.senha.message}</p>}
          </div>

         
          <button className='button-login' type="submit">Iniciar Sessão</button>

          <p className='termos'>Ao continuar, estás a concordar com os <Link to='/#'> <span>Termos de Serviços</span></Link> da Kuenda</p>
          <p className='conta'>Ainda não tem  uma conta?<Link to='/cadastro'><span> Cadastra-se</span></Link></p>
          </div>
      </form>
    </div>
</div>

);
}
