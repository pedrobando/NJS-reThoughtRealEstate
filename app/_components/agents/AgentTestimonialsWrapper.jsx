import AgentTestimonials from './AgentTestimonials';
import getTestimonials from '@/utils/getTestimonials';

export default async function AgentTestimonialsWrapper({ listing, placeId }) {
  const data = await getTestimonials(placeId);
  const testimonials = data?.result.reviews || [];

  return (
    <AgentTestimonials
      listing={listing}
      placeId={placeId}
      testimonials={testimonials}
    />
  );
}
