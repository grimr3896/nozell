
"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send, MessageCircle, Calendar, Users, Tag, User } from "lucide-react";

function ContactContent() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") === "booking" ? "booking" : "inquiry";
  const preselectedService = searchParams.get("service") || "";
  const [loading, setLoading] = useState(false);

  async function handleBookingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const eventType = formData.get("eventType");
    const eventDate = formData.get("eventDate");
    const guests = formData.get("guests");
    const specialRequests = formData.get("specialRequests");

    const subject = `Booking Request: ${eventType} - ${eventDate}`;
    const body = `Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
Number of Guests: ${guests}

Special Requests & Dietary Notes:
${specialRequests}`;

    const mailtoUrl = `mailto:savieroyal1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoUrl;
      toast({
        title: "Opening Email App",
        description: "Please send the drafted email to complete your booking request.",
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not open your email application.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleInquirySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoUrl = `mailto:savieroyal1@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
      `From: ${fullName} (${email})\n\nMessage:\n${message}`
    )}`;

    try {
      window.location.href = mailtoUrl;
      toast({
        title: "Opening Email App",
        description: "Please send the drafted email to complete your inquiry.",
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not open your email application.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="font-headline text-5xl font-bold">Connect With Us</h1>
          <p className="text-xl text-muted-foreground">
            Whether you're ready to book an event or just have a few questions, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary/5 p-8 rounded-2xl space-y-8 h-full">
              <h3 className="font-headline text-2xl font-bold text-primary">Reach Out Directly</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Call Us</p>
                    <p className="text-muted-foreground text-lg">0718 469 682</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">WhatsApp</p>
                    <p className="text-muted-foreground text-lg">0711 665 382</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email Us</p>
                    <p className="text-muted-foreground text-lg">savieroyal1@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-primary/10">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Our goal is to respond to all inquiries within 24 hours. We look forward to making your next event extraordinary."
                </p>
              </div>
            </div>
          </div>

          {/* Combined Form Section */}
          <div className="lg:col-span-8">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-14 p-1">
                <TabsTrigger value="booking" className="text-lg py-2">Book An Event</TabsTrigger>
                <TabsTrigger value="inquiry" className="text-lg py-2">General Inquiry</TabsTrigger>
              </TabsList>
              
              <TabsContent value="booking">
                <Card className="border-none shadow-xl">
                  <CardHeader className="bg-primary text-white rounded-t-xl py-8">
                    <CardTitle className="text-2xl font-headline">Reserve Your Date</CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Provide your event details below to draft a booking request email.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" /> Full Name
                          </Label>
                          <Input id="fullName" name="fullName" placeholder="Jane Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" /> Email Address
                          </Label>
                          <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" /> Phone Number
                          </Label>
                          <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventType" className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-primary" /> Event Type
                          </Label>
                          <Select name="eventType" defaultValue={preselectedService.toLowerCase() || undefined} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="corporate">Corporate Lunch</SelectItem>
                              <SelectItem value="memorial">Memorial / Burial Service</SelectItem>
                              <SelectItem value="private-dinner">Private Dinner</SelectItem>
                              <SelectItem value="birthday">Birthday Party</SelectItem>
                              <SelectItem value="cocktail">Cocktail Soirée</SelectItem>
                              <SelectItem value="other">Other Celebration</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventDate" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" /> Event Date
                          </Label>
                          <Input id="eventDate" name="eventDate" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests" className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" /> Number of Guests
                          </Label>
                          <Input id="guests" name="guests" type="number" min="1" placeholder="50" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Special Requests & Dietary Notes</Label>
                        <Textarea 
                          id="specialRequests" 
                          name="specialRequests" 
                          placeholder="Tell us about any allergies, specific cuisines, or special setup requirements..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={loading}>
                        {loading ? "Preparing Email..." : "Prepare Booking Email"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="inquiry">
                <Card className="border-none shadow-xl">
                  <CardHeader className="bg-accent text-white rounded-t-xl py-8">
                    <CardTitle className="text-2xl font-headline">Send a Message</CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Have a general question? We're happy to help.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleInquirySubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" name="fullName" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" placeholder="What can we help you with?" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Type your question or request here..." 
                          className="min-h-[150px]"
                          required 
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full h-14 gap-2 bg-accent hover:bg-accent/90" disabled={loading}>
                        {loading ? "Preparing Email..." : <><Send className="w-5 h-5" /> Send Message via Email</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CombinedContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
        <ContactContent />
      </Suspense>
      <Footer />
    </div>
  );
}
