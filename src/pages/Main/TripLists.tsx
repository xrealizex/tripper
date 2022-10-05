import { Avatar, Button } from '@material-ui/core';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { selectUser } from '../../userSlice';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import styles from './TripLists.module.scss';
import IconImage from '../../../public/images/icon.jpg';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const TripLists: NextPage = () => {
  //- state
  const [planTitle, setPlanTitle] = useState('');
  const [posts, setPosts] = useState([
    {
      id: '',
      avatar: '',
      image: '',
      timestamp: null,
      username: '',
    },
  ]);

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

  const auth = getAuth();
  console.log('check');
  const userInfo = auth.currentUser;
  if (userInfo !== null) {
    const photoURL = userInfo.photoURL;
    console.log(photoURL);
  }

  // const getPosts = () => {
  //   db.collection('posts')
  //     .orderBy('timestamp', 'desc')
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           avatar: doc.data().avatar,
  //           image: doc.data().image,
  //           text: doc.data().text,
  //           timestamp: doc.data().timestamp,
  //           username: doc.data().username,
  //         })),
  //       ),
  //     );
  // };

  return (
    <div className={styles.root}>
      <form onSubmit={postPlanTitle}>
        <div className={styles.post_form}>
          {/* <Avatar src={photoURL ?? IconImage} className={styles.user_avatar} /> */}
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
