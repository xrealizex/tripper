import { Avatar } from '@material-ui/core';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { selectUser } from '../../userSlice';

const TripList: NextPage = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <Avatar src={user.photoUrl} />
      <p>たび一覧です!</p>
    </div>
  );
};

export default TripList;
