//- フレームワーク
import React, { FC, useEffect, useState } from 'react';

//- 共通
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

const AddTripPlan: FC = () => {
  //- state
  const [title, setTitle] = useState<any[]>([]);

  //- 関数定義

  useEffect(() => {
    const colRef = collection(db, 'posts');
    getDocs(colRef)
      .then((snapshot) => {
        let posts: any[] = [];
        snapshot.docs.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
          setTitle(posts);
          console.log(title);
        });
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return <div>{title.map((post) => post.text)}</div>;
};

export default AddTripPlan;
