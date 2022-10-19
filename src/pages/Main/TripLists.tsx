//- フレームワーク
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

//- firebase
import { signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

//- 共通
import PostForm from '../../components/pages/TripList/PostForm';
import AddTripPlan from '../../components/pages/TripList/AddTripPlan';
import { Router } from '../router/router';

//- スタイル
import styles from './TripLists.module.scss';

//- MUI
import { Button } from '@material-ui/core';

//型
type Post = {
  id: string;
  text: string;
  timestamp: string;
  username: string;
  avatar?: string;
  image?: string;
};

const TripLists: NextPage = () => {
  //- state
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //- フレームワーク
  const router = useRouter();

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

  return (
    <div className={styles.root}>
      <PostForm />
      {isLoading && <p className={styles.loading}>...Loading</p>}
      {posts.length === 0 && <p className={styles.none_text}>※投稿がありません</p>}
      {posts.map((post) => (
        <AddTripPlan
          key={post.id}
          id={post.id}
          avatar={post.avatar}
          image={post.image}
          text={post.text}
          timestamp={post.timestamp}
          username={post.username}
        />
      ))}
      <Button onClick={logout} className={styles.logout_btn}>
        ログアウト
      </Button>
    </div>
  );
};

export default TripLists;
