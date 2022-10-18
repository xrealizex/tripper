//- フレームワーク
import React, { FC, useEffect, useState } from 'react';

//- firebase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

//- スタイル
import styles from './AddTripPlan.module.scss';

//型
type Post = {
  id: string;
  text: string;
  timestamp: string;
  username: string;
  avatar?: string;
  image?: string;
};

const AddTripPlan: FC = () => {
  //- state
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //- 関数定義
  const getPosts = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const colRef = collection(db, 'posts');
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

  const formattedTimestamp = (timestamp: any): string | null => {
    if (!timestamp) return null;
    return new Date(timestamp.toDate()).toLocaleString();
  };

  return (
    <div className={styles.root}>
      {isLoading && <p className={styles.loading}>...Loading</p>}
      {posts.length === 0 && <p className={styles.none_text}>※投稿がありません</p>}
      {posts.map((post) => {
        return (
          <>
            <p key={post.id} className={styles.plan_name}>
              {post.text}
            </p>
            <p className={styles.timestamp}>{formattedTimestamp(post.timestamp)}</p>
          </>
        );
      })}
    </div>
  );
};

export default AddTripPlan;
