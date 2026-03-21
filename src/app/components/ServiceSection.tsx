import { ServiceCard } from "./ServiceCard";

interface Service {
  imageUrl: string;
  title: string;
  description?: string;
}

interface ServiceSectionProps {
  heading: string;
  services: Service[];
}

export function ServiceSection({ heading, services }: ServiceSectionProps) {
  return (
    <section className="w-full py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-sm uppercase tracking-wider">{heading}</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="rounded-full border border-gray-900 px-8 py-2 text-sm uppercase tracking-wider transition-all hover:bg-gray-900 hover:text-white">
            Book Me
          </button>
        </div>
      </div>
    </section>
  );
}
