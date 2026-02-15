import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Award, Utensils, Users, Building, GlassWater, Gift, Sun, Soup, Shield } from "lucide-react";

const services = [
  {
    title: "Grand Wedding Catering",
    description: "Multi-course gourmet experiences with full-service staff for your special day.",
    icon: Utensils,
    imageId: "wedding-event",
    details: ["Professional Waitstaff", "Champagne Toast", "Custom Cake Design", "Tasting Session Included"]
  },
  {
    title: "Corporate Excellence",
    description: "Sophisticated buffet and tray-passed options designed for professional productivity.",
    icon: Building,
    imageId: "corporate-lunch",
    details: ["Prompt Setup & Cleanup", "Dietary-Friendly Menus", "Coffee & Tea Service", "Executive Lunch Boxes"]
  },
  {
    title: "Memorial & Burial Services",
    description: "Respectful and comforting catering support for memorial services and burials.",
    icon: Shield,
    imageId: "memorial-service",
    details: ["Professional & Discreet Staff", "Comfort Food Selections", "Full Setup & Cleanup", "Flexible Scheduling"]
  },
  {
    title: "Private Chef Soiree",
    description: "An intimate, restaurant-quality dining experience in the comfort of your home.",
    icon: Users,
    imageId: "private-chef",
    details: ["Personalized Menu Prep", "Tablescape Styling", "Wine Pairing", "Cleanup Included"]
  },
  {
    title: "The Cocktail Experience",
    description: "Elegant hors d'oeuvres and creative mixology for vibrant networking events.",
    icon: GlassWater,
    imageId: "cocktail-party",
    details: ["Artisan Cocktails", "Passed Appetizers", "Mobile Bar Setup", "Grazing Boards"]
  },
  {
    title: "Seasonal Celebration",
    description: "Theme-specific menus for holiday parties, birthdays, and anniversaries.",
    icon: Gift,
    imageId: "dessert-table",
    details: ["Theme Decor Accents", "Specialty Desserts", "Live Stations Option", "Music & Entertainment Partners"]
  },
  {
    title: "Garden Party Brunch",
    description: "Fresh, vibrant outdoor dining featuring seasonal local ingredients.",
    icon: Sun,
    imageId: "garden-party",
    details: ["Bottomless Mimosa Bar", "Seasonal Fruit Platters", "Artisan Quiches", "Outdoor Furniture Styling"]
  },
  {
    title: "Artisan Appetizer Tray",
    description: "Exquisite hand-crafted small bites perfect for casual but high-end mixers.",
    icon: Soup,
    imageId: "gourmet-appetizer",
    details: ["Locally Sourced Cheese", "Charcuterie Selections", "Custom Garnish", "Wine Pairing Suggestions"]
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-catering');
  const previewImages = PlaceHolderImages.slice(1, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight text-foreground">
                Crafting Culinary <span className="text-primary italic">Memories</span>
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground mx-auto lg:mx-0">
                Savie Royal brings world-class catering and bespoke event planning to your special occasions. From intimate gatherings to grand celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="h-14 px-8 text-lg font-medium">
                  <Link href="/contact?tab=booking">Book Your Event</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-medium">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-xl text-white hidden md:block">
                <p className="font-headline text-2xl font-bold">1500+</p>
                <p className="text-sm font-medium">Events Catered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Exquisite Taste</h3>
                <p className="text-muted-foreground">Hand-picked ingredients prepared by world-class chefs to delight your palate.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Personalized Care</h3>
                <p className="text-muted-foreground">Tailored menus and setups that reflect your unique style and vision.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold">Professional Excellence</h3>
                <p className="text-muted-foreground">Seamless execution from planning to clean-up by our dedicated service team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Our Catering Services</h2>
              <p className="text-xl text-muted-foreground">
                From grand galas to intimate dinners, we provide the flavor and flair your event deserves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const serviceImage = PlaceHolderImages.find(img => img.id === service.imageId);
                return (
                  <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow border-none bg-card/50 backdrop-blur">
                    <div className="relative h-48 w-full">
                      {serviceImage && (
                        <Image
                          src={serviceImage.imageUrl}
                          alt={serviceImage.description}
                          fill
                          className="object-cover"
                          data-ai-hint={serviceImage.imageHint}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      )}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur text-primary flex items-center justify-center shadow-md">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base pt-2">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 mt-4">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-6">
                      <Button asChild className="w-full h-12">
                        <Link href={`/contact?tab=booking&service=${encodeURIComponent(service.title)}`}>Book This Service</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl font-bold">Capturing Moments</h2>
                <p className="text-lg text-muted-foreground max-w-xl">Take a look at some of our recent celebrations and culinary presentations.</p>
              </div>
              <Button asChild variant="link" className="group text-primary text-lg p-0">
                <Link href="/gallery" className="flex items-center gap-2">
                  View Full Gallery <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {previewImages.map((image, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg cursor-pointer transition-all hover:shadow-2xl">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-white font-medium">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Ready to Host Your Next Masterpiece?</h2>
            <p className="text-lg md:text-xl opacity-90">Our team is ready to help you plan an unforgettable experience. Let's start building your perfect event today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="secondary" size="lg" className="h-14 px-10 text-lg">
                <Link href="/contact?tab=booking">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
