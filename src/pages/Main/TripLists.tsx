//- フレームワーク
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

//- firebase
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

//- 共通
import PostForm from '../../components/pages/TripList/PostForm';
import AddTripPlan from '../../components/pages/TripList/AddTripPlan';
import { Router } from '../router/router';

//- スタイル
import styles from './TripLists.module.scss';

//- MUI
import { Button } from '@material-ui/core';

const TripLists: NextPage = () => {
  //- フレームワーク
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      router.push(Router.logout.path);
      alert('ログアウトしました');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className={styles.root}>
      <PostForm />
      <AddTripPlan />
      <Button onClick={logout} className={styles.logout_btn}>
        ログアウト
      </Button>
    </div>
  );
};

export default TripLists;
