import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`;

export function Home() {
  return <Container>First page </Container>;
}
