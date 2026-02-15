import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/home" className="font-headline text-3xl font-bold text-primary uppercase">Savie Royal</Link>
            <p className="text-muted-foreground leading-relaxed">
              Exquisite catering services by Savie Royal, designed to elevate your events through taste, elegance, and professionalism.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/home" className="hover:text-primary transition-colors">Home & Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Event Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Our Specialities</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Weddings & Galas</li>
              <li>Corporate Luncheons</li>
              <li>Private Chef Experiences</li>
              <li>Cocktail Soirées</li>
              <li>Garden Party Brunch</li>
              <li>Memorial & Burial Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> 0718 469 682</li>
              <li className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-primary" /> 0711 665 382</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> savieroyal1@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Savie Royal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
