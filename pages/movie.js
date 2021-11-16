import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import ForYouList from '../components/UI/ForYouList/ForYouList';
import JustAdded from '../components/UI/JustAdded/JustAdded';
import PosterView from '../components/UI/PosterView/PosterView';
import CastInfo from '../components/UI/CastInfo/CastInfo';





export default function Movie() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  )
}
