import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="font-headline text-5xl font-bold text-foreground">Savie Royal Gallery</h1>
            <p className="text-xl text-muted-foreground">
              A visual journey through our most memorable events and exquisite culinary creations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PlaceHolderImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-md cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-white font-headline text-xl font-bold">{image.description.split(' at ')[0]}</h3>
                  <p className="text-white/80 text-sm mt-1">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
