import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Landing from './landing';

const Home: NextPage = () => {
  return (
    <div className="flex  py-14">
      <Head>
        <title>Home care</title>
      </Head>

      <main className="flex w-full px-10 justify-center">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
