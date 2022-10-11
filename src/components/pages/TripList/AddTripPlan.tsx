//- フレームワーク
import React, { FC, useEffect, useState } from 'react';

//- 共通
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { title } from 'process';

const AddTripPlan: FC = () => {
  //- state
  const [title, setTitle] = useState('');

  //- 関数定義

  useEffect(() => {
    const colRef = collection(db, 'posts');
    getDocs(colRef)
      .then((snapshot) => {
        let posts: any = [];
        snapshot.docs.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
          setTitle(posts[0].text);
        });
        console.log(posts[0].text);
      })

      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return <div>{title}</div>;
};

export default AddTripPlan;
