//- フレームワーク
import React, { FC, useEffect, useState } from 'react';

//- firebase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

//- スタイル
import styles from './AddTripPlan.module.scss';

//型
type Props = {
  id: string;
  text: string;
  timestamp: string;
  username: string;
  avatar?: string;
  image?: string;
};

const AddTripPlan: FC<Props> = (props) => {
  //- 関数定義
  const formattedTimestamp = (timestamp: any): string | null => {
    if (!timestamp) return null;
    return new Date(timestamp.toDate()).toLocaleString();
  };

  return (
    <div className={styles.root}>
      <p className={styles.plan_name}>{props.text}</p>
      <p className={styles.timestamp}>{formattedTimestamp(props.timestamp)}</p>
    </div>
  );
};

export default AddTripPlan;
