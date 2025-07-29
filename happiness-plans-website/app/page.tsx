import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, Phone, Mail, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const services = [
    { name: "Holidays", icon: "🏝️", description: "Customized holiday packages worldwide" },
    { name: "Air Ticket", icon: "✈️", description: "Best flight deals and bookings" },
    { name: "Bus", icon: "🚌", description: "Comfortable bus travel arrangements" },
    { name: "Weddings", icon: "💍", description: "Dream destination weddings" },
    { name: "Events", icon: "🎉", description: "Corporate and private events" },
    { name: "Study Abroad", icon: "🎓", description: "Education abroad planning" },
    { name: "Cruise", icon: "🚢", description: "Luxury cruise experiences" },
    { name: "Visa", icon: "📋", description: "Visa and passport assistance" },
    { name: "Travel Insurance", icon: "🛡️", description: "Comprehensive travel protection" },
    { name: "Car Rental", icon: "🚗", description: "Reliable car rental services" },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Happiness Plans made our Goa trip absolutely perfect! Every detail was taken care of.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Our destination wedding in Udaipur was a dream come true. Highly recommended!",
      rating: 5,
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      text: "Professional service for our corporate event. Everything was seamlessly organized.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/happiness-plans-logo.png"
                alt="Happiness Plans Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">
                Gallery
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium">
                Careers
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  Since 2021 • Indore, Madhya Pradesh
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Make Every Moment A <span className="text-orange-500">Celebration</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your one-stop destination for all travel and event management services. We deliver personalized
                  experiences with seamless planning and joyful memories.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <MapPin className="w-5 h-5 mr-2" />
                  Plan Your Trip
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Event
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/happiness-plans-poster.png"
                alt="Happiness Plans Services"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From dream vacations to perfect weddings, we handle every detail to make your moments special
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Happiness Plans?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Service</h3>
                    <p className="text-gray-600">
                      Every plan is customized to your unique preferences and requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Global Destinations</h3>
                    <p className="text-gray-600">Access to worldwide destinations with local expertise and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">End-to-End Planning</h3>
                    <p className="text-gray-600">
                      From initial planning to execution, we handle every detail seamlessly
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Happy family on vacation"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our happy customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Plan Your Next Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable memories. Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call +91-82248 03424
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/happiness-plans-logo.png"
                alt="Happiness Plans"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="text-gray-400">
                Making every moment a celebration since 2021. Your trusted partner for travel and events.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Holiday Packages
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Destination Weddings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Air Tickets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>408, Apollo Premier, Vijay Nagar Square</p>
                <p>Indore 452011, Madhya Pradesh</p>
                <p>Phone: +91-82248 03424</p>
                <p>Email: info@happinessplans.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Happiness Plans. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
