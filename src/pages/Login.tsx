import styled from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Moodify</Title>
        <Form>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" />
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" />
          <Button type="submit">Entrar</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;

// STYLED COMPONENTS

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  background: linear-gradient(135deg, #9933cc, #66cc99, #ffcc66, #336699);
  background-size: 300% 300%;
  animation: gradientMove 15s ease infinite;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const FormWrapper = styled.div`
  background-color: #1e1e1e;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #f2f2f2;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #9933cc;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #7a26a8;
  }
`;
