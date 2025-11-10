import { Badge } from "@/components/ui/badge";

interface FeaturedMangaProps {
  image: string;
  title: string;
  chapter: string;
}

export const FeaturedManga = ({ image, title, chapter }: FeaturedMangaProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-glow">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Badge variant="secondary" className="mb-2">
            {chapter}
          </Badge>
          <h2 className="text-2xl font-bold text-foreground drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
