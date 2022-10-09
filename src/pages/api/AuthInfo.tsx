import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase';
import { updateUserProfile } from '../../userSlice';

export const AuthInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          updateUserProfile({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          }),
        );
      } else {
        dispatch(
          updateUserProfile({
            uid: '',
            displayName: '',
            photoUrl: '',
          }),
        );
      }
    });
  }, [dispatch]);

  return null;
};
