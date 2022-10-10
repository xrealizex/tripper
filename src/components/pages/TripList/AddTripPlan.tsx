//- フレームワーク
import React, { FC, useEffect } from 'react';

//- 共通
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

const AddTripPlan: FC = () => {
  //- 関数定義

  useEffect(() => {
    const colRef = collection(db, 'posts');
    getDocs(colRef)
      .then((snapshot) => {
        let posts: any = [];
        snapshot.docs.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        console.log(posts);
      })

      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
};

export default AddTripPlan;
