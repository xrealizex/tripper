import { refType } from '@mui/utils';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Tripper/メンバー登録</title>
      </Head>
      <main>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: 'register',
      },
    },
    {
      params: {
        id: 'list',
      },
    },
  ];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const id = Array.isArray(context.params['id']) ? context.params['id'][0] : context.params['id'];
  return {
    props: {
      id,
    },
  };
};

export default Post;
