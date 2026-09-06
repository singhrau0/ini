import Hero from '../components/home/Hero'
import {
  Positioning,
  Capabilities,
  Architecture,
  Flagship,
  Process,
  Deployment,
  Industries,
  Stats,
  ProductsStrip,
  FaqPreview,
  InsightsStrip,
} from '../components/home/Sections'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/ui/CTA'
import { Seo, organizationLd } from '../lib/seo'

export default function Home() {
  return (
    <>
      <Seo jsonLd={organizationLd} />
      <Hero />
      <Positioning />
      <Capabilities />
      <Architecture />
      <Flagship />
      <Process />
      <Deployment />
      <Industries />
      <Stats />
      <ProductsStrip />
      <Testimonials />
      <FaqPreview />
      <InsightsStrip />
      <CTA />
    </>
  )
}
