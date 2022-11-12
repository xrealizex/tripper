import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

//- firebase
import { db } from '../../../firebase';
import { doc, getDoc, DocumentData } from 'firebase/firestore';

//- 共通
import { Router } from '../../../router/router';

//- スタイル

const Plan: NextPage = () => {
  //- state
  const [post, setPost] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const backButton = () => {
    router.push(Router.backToMain.path);
  };

  return (
    <div>
      {isLoading && <p>...Loading</p>}
      {post?.length === 0 && <p>※投稿がありません</p>}
      {post ? (
        <>
          <div>{post.text}</div>
          <div>{post.body}</div>
        </>
      ) : (
        <p>No Data</p>
      )}
      <button onClick={backButton}>戻る</button>
    </div>
  );
};

export default Plan;
