interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description?: string;
}

export function ServiceCard({ imageUrl, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-center italic">{title}</h3>
        {description && <p className="mt-2 text-center text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
