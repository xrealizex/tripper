import { Avatar, Button } from '@material-ui/core';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { selectUser } from '../../userSlice';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, addDoc, serverTimestamp, collection } from 'firebase/firestore';
import styles from './TripLists.module.scss';
import IconImage from '../../../public/images/icon.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Router } from '../router/router';
import { useRouter } from 'next/router';
import AddTripPlan from '../../components/pages/TripList/AddTripPlan';

const TripLists: NextPage = () => {
  //- state
  const [planTitle, setPlanTitle] = useState('');

  //- フレームワーク
  const user = useSelector(selectUser);
  const router = useRouter();

  //- 関数定義
  const postPlanTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
      avatar: user.photoUrl,
      image: '',
      text: planTitle,
      timestamp: serverTimestamp(),
      username: user.displayName,
    });
    setPlanTitle('');
  };

  const logout = async () => {
    try {
      await signOut(auth);
      router.push(Router.logout.path);
      alert('ログアウトしました');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={postPlanTitle}>
        <div className={styles.post_form}>
          <Avatar src={user.photoUrl ?? IconImage} className={styles.user_avatar} />
          <input
            placeholder='京都旅行'
            type='text'
            autoFocus
            value={planTitle}
            onChange={(e) => setPlanTitle(e.target.value)}
            className={styles.post_input}
          />
        </div>
        <Button
          type='submit'
          disabled={!planTitle}
          className={planTitle ? styles.post_sendBtn : styles.post_sendDisableBtn}
        >
          投稿する
        </Button>
      </form>
      <AddTripPlan />
      <Button onClick={logout}>ログアウト</Button>
    </div>
  );
};

export default TripLists;
