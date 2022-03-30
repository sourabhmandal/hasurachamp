import type { NextPage } from 'next'
import Head from 'next/head'
import { BaseStyles } from '@primer/react';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/landing/HeroSection';
import TwoCards from '../components/landing/TwoCards';
import FeatureTimeline from '../components/landing/FeatureTimeline';
import Footer from '../components/landing/Footer';
import VideoGuide from '../components/landing/VideoGuide';
import { useRouter } from 'next/router';
import { frontendRoute } from '../constants/routes';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Loader from '../components/Loader';

const Home: NextPage = () => {
  const session = useSession();
  useEffect(() => {
    //if (session.status == 'authenticated') router.push(frontendRoute.QUIZ);
    return () => {};
  });

  return session.status == 'loading' ? (
    <Loader />
  ) : (
    <BaseStyles>
      <Head>
        <title>ChainCamp.io</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <nav className="fixed bg-none	z-40 top-0 left-0 right-0 backdrop-blur bg-clip-padding backdrop-filter bg-opacity-10">
        <Navbar />
      </nav>

      <main>
        <HeroSection />
        <TwoCards />
        <h2 className="mt-20 font-semibold leading-6 tracking-wide text-center text-purple-600 uppercase">
          why notion kit?
        </h2>
        <FeatureTimeline />
        <VideoGuide />
      </main>

      <footer>
        <Footer />
      </footer>
    </BaseStyles>
  );
};

export default Home
