//- フレームワーク
import React, { useState, FC } from 'react';
import { useSelector } from 'react-redux';

//- firebase
import { db } from '../../../firebase';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

//- 共通
import IconImage from '../../../../public/images/icon.jpg';
import { selectUser } from '../../../userSlice';

//- スタイル
import styles from './PostForm.module.scss';

//- MUI
import { Avatar, Button } from '@material-ui/core';

const PostForm: FC = () => {
  //- state
  const [planTitle, setPlanTitle] = useState('');

  //- フレームワーク
  const user = useSelector(selectUser);

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

  return (
    <div className={styles.root}>
      <form onSubmit={postPlanTitle}>
        <div>
          <Avatar src={user.photoUrl ?? IconImage} />
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

export default PostForm;
