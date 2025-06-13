import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import logo from "../svg/LOGO-login.svg";
import image from "../image/login.png";


const LoginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  senha: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
 
})


export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8800/login", data);
      const { token, user } = response.data;
     
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));


      alert("Login feito com sucesso!");
      if (["admin", "empresa", "agencia"].includes(user.tipo)) {
  navigate("/dashboard");
} else if (user.tipo === "atendente") {
  navigate("/ConsultarIngresso");
} else {
  navigate("/");
}
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
      reset();
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
