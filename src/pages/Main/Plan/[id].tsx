import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

//- firebase
import { db } from '../../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

//- 共通

import { selectUser } from '../../../userSlice';

//- スタイル

//- MUI

//型
import { Post } from '../../../types/Post';

const Plan: NextPage = () => {
  //- state
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setShow] = useState(false);

  //- フレームワーク
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

  return <div>idページです。</div>;
};

export default Plan;
