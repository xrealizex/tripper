//- フレームワーク
import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

//- コンポーネント
import HomeLayout from '../components/pages/Home/HomeLayout';

//- スタイル
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tripper</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomeLayout />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
