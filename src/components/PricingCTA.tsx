import Link from 'next/link';

interface PricingCTAProps {
  buttonText?: string;
  className?: string;
}

const PricingCTA: React.FC<PricingCTAProps> = ({ 
  buttonText = "Get Pricing", 
  className = "" 
}) => {
  return (
    <section className={`w-full bg-white ${className}`} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="container mx-auto px-4 text-center">
        <a
          href="/more_info"
          className="inline-block bg-red-600 text-white px-8 py-2 rounded-md font-semibold text-lg hover:bg-red-700 transition-colors duration-200"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default PricingCTA;