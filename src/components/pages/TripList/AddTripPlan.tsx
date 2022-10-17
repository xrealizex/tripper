//- フレームワーク
import React, { FC, useEffect, useState } from 'react';

//- firebase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

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

  return (
    <div>
      {isLoading && <p>...Loading</p>}
      {posts.length === 0 && <p>投稿がありません</p>}
      <div>
        {posts.map((post) => {
          return <p key={post.id}>{post.text}</p>;
        })}
      </div>
      ;
    </div>
  );
};

export default AddTripPlan;
