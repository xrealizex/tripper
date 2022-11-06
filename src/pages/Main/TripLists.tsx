//- フレームワーク
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

//- firebase
import { signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

//- 共通
import PostForm from '../../components/pages/TripList/PostForm';
import AddTripPlan from '../../components/pages/TripList/AddTripPlan';
import { Router } from '../../router/router';
import IconImage from '../../../public/images/icon.jpg';
import { selectUser } from '../../userSlice';

//- スタイル
import styles from './TripLists.module.scss';

//- MUI
import { Avatar, Button } from '@material-ui/core';

//型
import { Post } from '../../types/Post';

const TripLists: NextPage = () => {
  //- state
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setShow] = useState(false);

  //- フレームワーク
  const router = useRouter();
  const user = useSelector(selectUser);

  //- 関数定義
  const getPosts = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const colRef = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(colRef);
      const posts: Post[] = [];
      snapshot.docs.forEach((doc) => {
        const data: Post = doc.data() as Post;
        const addPostData: Post = { ...data, id: doc.id };
        posts.push(addPostData);
      });
      setPosts(posts);
    } catch (error: unknown) {
      alert(`エラーが発生しました。エラー内容：${error}`);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      router.push(Router.logout.path);
      alert('ログアウトしました');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const modalHandler = () => {
    setShow(!show);
  };

  return (
    <div className={styles.root}>
      <span className={styles.logo}>Tripper</span>
      <div className={styles.container}>
        {show && <PostForm modalHandler={modalHandler} />}
        {isLoading && <p className={styles.loading}>...Loading</p>}
        {posts.length === 0 && <p className={styles.none_text}>※投稿がありません</p>}
        <div className={styles.postGridContainer}>
          <Avatar src={user.photoUrl ?? IconImage} className={styles.avatar} />
          <Button
            onClick={() => {
              setShow(true);
            }}
            className={styles.post_btn}
          >
            投稿する
          </Button>
        </div>

        <div className={styles.gridContainer}>
          {posts.map((post) => (
            <AddTripPlan key={post.id} post={post} />
          ))}
        </div>
        <Button onClick={logout} className={styles.logout_btn}>
          ログアウト
        </Button>
      </div>
    </div>
  );
};

export default TripLists;
