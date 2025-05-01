import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';


import logo from "../svg/LOGO-login.svg";
import image from "../image/cadastro.png";


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
          <img src={logo} alt="" />
          <h2>Cadastrar-se na <span>Kuenda</span></h2>
          <p>Preencha as informações e compre os teus bilhetes de viagem no
          conforto da tua casa ou onde estiveres.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Nome" {...register("nome")} />
              {errors.nome && <p>{errors.nome.message}</p>}

              <input type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}

              <button type="submit">Cadastrar</button>
          </form>
        </div>
   </div>

  );
  
}
