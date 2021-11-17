import Head from 'next/head';
import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider';
import Login from '../components/UI/Login/Login';
import { useRouter } from 'next/router';
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
// import ForYouList from '../components/UI/ForYouList/ForYouList';
// import JustAdded from '../components/UI/JustAdded/JustAdded';
// import PosterView from '../components/UI/PosterView/PosterView';
import MediaRow from '../components/UI/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';




export default function Home() {
  // this allows us to start using the context in HBOProvider
  const globalState = useStateContext();
  // we have to instantiate useRouter
  const router = useRouter();

  useEffect(() => {

  }, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v" endpoint="" />
      <MediaRow title="Series" type="small-h" endpoint="" />
      <MediaRow title="Action" type="small-v" endpoint="" />
      <MediaRow title="Horror" type="large-h" endpoint="" />
      <MediaRow title="Sci-Fi" type="small-v" endpoint="" />
      <MediaRow title="Animations" type="large-h" endpoint="" />
      <MediaRow title="Drama" type="small-v" endpoint="" />
    </MainLayout>
  );
}

