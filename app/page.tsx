import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import PortfolioGrid from '@/components/PortfolioGrid';
import TeamSection from '@/components/TeamSection';
import ReviewsSection from '@/components/ReviewsSection';
import ReservationSection from '@/components/ReservationSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioGrid />
      <TeamSection />
      <ReviewsSection />
      <ReservationSection />
    </>
  );
}
