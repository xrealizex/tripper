import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

//- firebase
import { db } from '../../../firebase';
import { doc, getDoc, DocumentData, addDoc, collection, serverTimestamp } from 'firebase/firestore';

//- 共通
import { Router } from '../../../router/router';
import { selectUser } from '../../../userSlice';

//- スタイル
import styles from './id.module.scss';

const Plan: NextPage = () => {
  //- state
  const user = useSelector(selectUser);
  const [post, setPost] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comment, setComment] = useState('');

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
              コメントを送信
            </button>
          </div>
        </form>
        <button onClick={backButton} className={styles.back_button}>
          戻る
        </button>
      </div>
    </div>
  );
};

export default Plan;
