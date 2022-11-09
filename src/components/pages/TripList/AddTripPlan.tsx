//- フレームワーク
import React, { FC } from 'react';
import { useRouter } from 'next/router';

//- スタイル
import styles from './AddTripPlan.module.scss';

//- 共通
import { Router } from '../../../router/router';

import { Post } from '../../../types/Post';

//型
type Props = {
  post: Post;
};

const AddTripPlan: FC<Props> = (props) => {
  //props
  const { post } = props;

  //- フレームワーク
  const router = useRouter();

  //- 関数定義
  const formattedTimestamp = (timestamp: any): string | null => {
    if (!timestamp) return null;
    return new Date(timestamp.toDate()).toLocaleString();
  };

  const clickHandler = () => {
    router.push(Router.id.path);
  };

  return (
    <div className={styles.root}>
      <p className={styles.timestamp}>{formattedTimestamp(post.timestamp)}</p>
      <p onClick={clickHandler} className={styles.plan_name}>
        {post.text}
      </p>
    </div>
  );
};

export default AddTripPlan;
