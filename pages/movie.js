import Head from 'next/head'
import MainLayout from '../components/Layouts/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import PosterView from '../components/UI/PosterView/PosterView';
import CastInfo from '../components/UI/CastInfo/CastInfo';
import AuthCheck from '../components/AuthCheck';




export default function Movie() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  )
}

