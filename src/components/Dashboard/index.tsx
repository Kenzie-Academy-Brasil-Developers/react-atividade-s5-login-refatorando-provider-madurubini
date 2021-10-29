import { useAuth } from "../../providers/Auth";
import { Avatar, Button, Container, Text } from "../Login/style";

const Dashboard = () => {
  const { Logout } = useAuth();
  const user = localStorage.getItem("user") || "";
  return (
    <Container>
      <Avatar>{user[0]}</Avatar>
      <Text>Olá, {user}</Text>

      <Button onClick={Logout}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
