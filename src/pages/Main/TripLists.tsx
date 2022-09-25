import { Avatar, Button } from '@material-ui/core';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { selectUser } from '../../userSlice';
import React, { useState } from 'react';
import { storage, db, auth } from '../../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import styles from './TripLists.module.scss';

const TripLists: NextPage = () => {
  //- state
  const [planTitle, setPlanTitle] = useState('');

  //- フレームワーク
  const user = useSelector(selectUser);

  //- 関数定義
  const postPlanTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDoc(doc(db, 'posts', 'title'), {
      avatar: user.photoUrl,
      image: '',
      text: planTitle,
      timestamp: serverTimestamp(),
      username: user.displayName,
    });
    setPlanTitle('');
  };

  return (
    <div className={styles.root}>
      <form onSubmit={postPlanTitle}>
        <div className={styles.post_form}>
          <Avatar src={user.photoUrl} className={styles.user_avatar} />
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
    </div>
  );
};

export default TripLists;
