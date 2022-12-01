import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

//- firebase
import { db } from '../../../firebase';
import {
  doc,
  getDoc,
  DocumentData,
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

//- 共通
import { Router } from '../../../router/router';
import { selectUser } from '../../../userSlice';

//- MUI
import { Avatar } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
}));

//- スタイル
import styles from './id.module.scss';

//型
type comment = {
  id: string;
  avatar: string;
  text: string;
  timestamp: string;
  username: string;
};

const Plan: NextPage = () => {
  //- state
  const user = useSelector(selectUser);
  const classes = useStyles();
  const [post, setPost] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openComments, setOpenComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<comment[]>([
    {
      id: '',
      avatar: '',
      text: '',
      username: '',
      timestamp: '',
    },
  ]);

  //- フレームワーク
  const router = useRouter();

  //- 関数定義
  const planId = router.query.id;

  const getPost = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const docRef = doc(db, 'posts', `${planId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPost(data);
      } else {
        console.log('No such document!');
      }
    } catch (error: unknown) {
      alert(`エラーが発生しました。エラー内容：${error}`);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const commentData = query(
    collection(db, 'posts', `${planId}`, 'comments'),
    orderBy('timestamp', 'desc'),
  );

  const getComment = onSnapshot(commentData, (snapshot) => {
    setComments(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        avatar: doc.data().avatar,
        text: doc.data().text,
        username: doc.data().username,
        timestamp: doc.data().timestamp,
      })),
    );
  });

  useEffect(() => {
    getComment;
  }, []);

  const newComment = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    addDoc(collection(db, 'posts', `${planId}`, 'comments'), {
      avatar: user.photoUrl,
      text: comment,
      timestamp: serverTimestamp(),
      username: user.displayName,
    });
    setComment('');
  };

  const formattedTimestamp = (timestamp: any): string | null => {
    if (!timestamp) return null;
    return new Date(timestamp.toDate()).toLocaleString();
  };

  const backButton = () => {
    router.push(Router.backToMain.path);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {isLoading && <p className={styles.loading}>...Loading</p>}
        {post?.length === 0 && <p>※投稿がありません</p>}
        {post ? (
          <>
            <div className={styles.plan_title}>{post.text}</div>
            <div className={styles.plan_body}>{post.body}</div>
          </>
        ) : (
          <p>No Data</p>
        )}
        <div
          className={styles.comment_open_container}
          onClick={() => setOpenComments(!openComments)}
        >
          <MessageIcon className={styles.comment_open_icon} />
          <span className={styles.comment_open_text}>コメントする</span>
        </div>

        {openComments && (
          <div className={styles.comment_and_form_container}>
            {comments.map((com) => (
              <>
                <div key={com.id} className={styles.comment_container}>
                  <Avatar src={com.avatar} className={classes.small} />
                  <span className={styles.comment_user}>@{com.username}</span>
                  <span className={styles.comment_time}>
                    {com.timestamp && formattedTimestamp(com.timestamp)}
                  </span>
                </div>
                <span className={styles.comment_text}>{com.text} </span>
              </>
            ))}

            <form onSubmit={newComment}>
              <div className={styles.comment_form}>
                <input
                  className={styles.comment_input}
                  type='text'
                  placeholder='コメントを入力してください'
                  value={comment}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
                />
                <button
                  disabled={!comment}
                  className={comment ? styles.comment_button : styles.comment_disable_button}
                  type='submit'
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        )}

        <button onClick={backButton} className={styles.back_button}>
          戻る
        </button>
      </div>
    </div>
  );
};

export default Plan;
