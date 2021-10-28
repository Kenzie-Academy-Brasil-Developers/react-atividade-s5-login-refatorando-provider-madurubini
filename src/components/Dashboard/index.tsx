import { useAuth } from "../../providers/Auth";

const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <>
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default Dashboard;
