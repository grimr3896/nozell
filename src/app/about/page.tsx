"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Award, Heart, ShieldCheck, Users, ChefHat, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "Every dish we prepare is a labor of love, crafted with precision and the finest seasonal ingredients."
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description: "From farm to table, we maintain the highest standards of food safety and culinary integrity."
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your vision is our blueprint. We tailor every detail to ensure your event reflects your unique personality."
  }
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'private-chef');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6">Our Culinary Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Savie Royal was born from a simple belief: that food should not just be eaten, but experienced.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                    sizes="100vw"
                  />
                )}
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-headline text-4xl font-bold">The Savie Royal Story</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded with a passion for world-class cuisine and impeccable service, Savie Royal has grown from a boutique catering service into a premier event planning and culinary destination.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team brings together decades of international culinary experience, blending traditional techniques with modern innovation to create menus that surprise and delight even the most discerning palates.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-start gap-3">
                    <ChefHat className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold">Expert Chefs</h4>
                      <p className="text-sm text-muted-foreground">Certified culinary masters.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold">Global Flavors</h4>
                      <p className="text-sm text-muted-foreground">Diverse international menus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold mb-4">Our Core Philosophy</h2>
              <p className="text-white/80 max-w-xl mx-auto">
                These principles guide every event we cater, ensuring consistency and excellence in everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accolades Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center space-y-12">
            <h2 className="font-headline text-4xl font-bold">Why We Are Different</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Award-Winning Service</h4>
                <p className="text-muted-foreground">Recognized for excellence in hospitality and event management multiple years running.</p>
              </div>
              <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">A Family Spirit</h4>
                <p className="text-muted-foreground">We treat your event with the same care and attention as if it were for our own family.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
