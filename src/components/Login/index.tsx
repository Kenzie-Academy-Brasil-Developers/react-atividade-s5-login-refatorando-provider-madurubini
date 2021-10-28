import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";

interface Data {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(formSchema),
  });

  const handleData = (data: Data) => {
    signIn(data);
  };

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <input placeholder="Email" {...register("email")} />
      {errors.email?.message}
      <input placeholder="Senha" type="password" {...register("password")} />
      {errors.password?.message}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
