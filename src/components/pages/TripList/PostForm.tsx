//- フレームワーク
import React, { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';

//- firebase
import { db } from '../../../firebase';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

//- 共通
import { selectUser } from '../../../userSlice';

//- スタイル
import styles from './PostForm.module.scss';

//- MUI
import { Button } from '@material-ui/core';

type Props = {
  modalHandler: () => void;
  getPosts: () => Promise<void>;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const PostForm: FC<Props> = (props) => {
  //Props
  const { modalHandler, getPosts, setShow } = props;

  //- state
  const [planTitle, setPlanTitle] = useState('');
  const [planBody, setPlanBody] = useState('');

  //- フレームワーク
  const user = useSelector(selectUser);

  //- 関数定義
  const postPlan = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      addDoc(collection(db, 'posts'), {
        avatar: user.photoUrl,
        image: '',
        text: planTitle,
        body: planBody,
        timestamp: serverTimestamp(),
        username: user.displayName,
      });
      getPosts();
    } catch (error: unknown) {
      console.log(error);
    }
    setPlanTitle('');
    setPlanBody('');
    setShow(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <form onSubmit={postPlan}>
            <div>
              <input
                placeholder='京都旅行'
                type='text'
                autoFocus
                value={planTitle}
                onChange={(e) => setPlanTitle(e.target.value)}
                className={styles.post_title}
              />
              <textarea
                placeholder='本文'
                wrap='soft'
                autoFocus
                value={planBody}
                onChange={(e) => setPlanBody(e.target.value)}
                className={styles.post_body}
              />
            </div>
            <Button
              type='submit'
              disabled={!planTitle}
              className={planTitle ? styles.post_sendBtn : styles.post_sendDisableBtn}
            >
              投稿する
            </Button>
            <Button type='button' className={styles.close_button} onClick={modalHandler}>
              閉じる
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
