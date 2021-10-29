import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/Auth";
import { Button, Container, Errors, Form, Input, Title } from "./style";

interface Data {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  // const [atualDate, setAtualDate] = useState({});

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
    // let dates = new Date();
    // setAtualDate(dates);
    signIn(data);
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input placeholder="Email" {...register("email")} />
        <Errors>{errors.email?.message}</Errors>
        <Input placeholder="Senha" type="password" {...register("password")} />
        <Errors> {errors.password?.message}</Errors>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
