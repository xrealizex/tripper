//- フレームワーク
import React, { FC } from 'react';

//- スタイル
import styles from './AddTripPlan.module.scss';

import { Post } from '../../../types/Post';

//型
type Props = {
  post: Post;
};

const AddTripPlan: FC<Props> = (props) => {
  const { post } = props;
  //- 関数定義
  const formattedTimestamp = (timestamp: any): string | null => {
    if (!timestamp) return null;
    return new Date(timestamp.toDate()).toLocaleString();
  };

  return (
    <div className={styles.root}>
      <p className={styles.timestamp}>{formattedTimestamp(post.timestamp)}</p>
      <p className={styles.plan_name}>{post.text}</p>
    </div>
  );
};

export default AddTripPlan;
