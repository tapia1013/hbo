import Head from 'next/head'
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
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

