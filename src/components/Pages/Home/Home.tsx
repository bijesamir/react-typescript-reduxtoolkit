import styled from 'styled-components';
import { getRequest } from '../../../util/serverCall';

const Container = styled.div``;

export function Home() {
  const activeNav = 'archive';
  //@ts-ignore
  const test = getRequest('/')();
  console.log(test);

  return <Container>First test page</Container>;
}
