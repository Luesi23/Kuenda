import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Link } from 'react-router-dom';


import logo from "../svg/LOGO-login.svg";
import image from "../image/cadastro.png";
import Login from './Login';


const cadastroSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  senha: z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  confirmacaoSenha: z.string().min(6, { message: "Confirmação de senha é obrigatória" }),
})


export default function Cadastro() {
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

        <div className='cadastro-post'>
          <img src={image} alt="" />
          <h1>CRIA A TUA CONTA<br/> E VIAJA POR <br/><span> ANGOLA</span></h1>
        </div>


        <div className='cadastro-form'>
          <img className='logo-login' src={logo} alt="" />
          <h2>Cadastrar-se na <span>Kuenda</span></h2>
          <p className='mt-1 mb-4'>Preencha as informações e compre os teus bilhetes de viagem no<br/>
          conforto da tua casa ou onde estiveres.</p>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className='labels'>
             <div className='label'>
              <p>Nome Completo</p>
              <input type="text" placeholder="Insira o seu nome completo" {...register("nome")} />
              {errors.nome && <p>{errors.nome.message}</p>}
              </div>

              <div className='label'>
                <p>Endereço de E-mail</p>
              <input type="email" placeholder="Insira o seu e-mail válido" {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className='label'>
                <p>Número de telefone</p>
              <input type="number" placeholder="Insira o seu Número válido" {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className='label'>
                <p>Endereço de E-mail</p>
              <input type="email" placeholder="Insira o seu e-mail válido" {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className='label'>
                <p>Endereço de E-mail</p>
              <input type="email" placeholder="Insira o seu e-mail válido" {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}
              </div>

              <button className='button-cadastar' type="submit">Cadastrar</button>

              <p className='termos'>Ao continuar, estás a concordar com os <Link to='/#'> <span>Termos de Serviços</span></Link> da Kuenda</p>
              <p className='conta'>Já tem uma conta?<Link to='/login'><span> Iniciar sessão</span></Link></p>
              </div>
          </form>
        </div>
   </div>

  );
  
}
