import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Container className="mx-2" style={{minWidth: '100vw'}}>
        <Outlet />
      </Container>
    </>
  );
};
export default HomeScreen;
