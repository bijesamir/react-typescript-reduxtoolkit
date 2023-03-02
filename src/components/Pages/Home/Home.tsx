import { dispatch } from 'decoders';
import styled from 'styled-components';
import useHome from '../../../hooks/useHome';
import { useAppDispatch } from '../../../store/hooks';
import { addUserList } from '../../../store/services/userApiServices';
import { getRequest } from '../../../util/serverCall';

const Container = styled.div``;

export function Home() {
  const activeNav = 'archive';
  const dispatch = useAppDispatch();
  const { usersList } = useHome();
  //@ts-ignore
  //const test = getRequest('/')();
  //console.log(test);
  const handleUpdate = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {
    const newuser = { name: 'samir', address: 'Nep' };
    dispatch(addUserList());
  };

  return (
    <Container>
      <div>
        name <input name='name' value='' />
        Address
        <input name='name' value='' />
        <button onClick={handleAdd}>submit</button>
      </div>
      <table cellPadding={2} cellSpacing='2' width='100%'>
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
