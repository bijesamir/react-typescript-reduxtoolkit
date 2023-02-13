import styled from 'styled-components';
import useHome from '../../../hooks/useHome';
import { getRequest } from '../../../util/serverCall';

const Container = styled.div``;

export function Home() {
  const activeNav = 'archive';
  const { usersList } = useHome();
  //@ts-ignore
  const test = getRequest('/')();
  console.log(test);
  const handleUpdate = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {};

  return (
    <Container>
      <div>
        <a href='javascript:void(0)' onClick={handleDelete}>
          Add new
        </a>
      </div>
      <table border='1' cellPadding={2} cellSpacing='2' b width='100%'>
        <th>name </th>
        <th>address </th>
        <th> </th>
        <th> </th>
        {usersList.userList.map((user, index) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>
                <a href='javascript:void(0)' onClick={handleUpdate}>
                  edit
                </a>
              </td>
              <td>
                <a href='javascript:void(0)' onClick={handleDelete}>
                  delete
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </Container>
  );
}
