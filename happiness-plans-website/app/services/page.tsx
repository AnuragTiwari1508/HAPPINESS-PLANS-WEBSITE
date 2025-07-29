import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plane,
  MapPin,
  Calendar,
  Heart,
  Building,
  GraduationCap,
  Ship,
  FileText,
  Shield,
  Bus,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const travelServices = [
    {
      icon: MapPin,
      title: "Holiday Packages",
      description: "Customized holiday packages for domestic and international destinations",
      features: ["Personalized itineraries", "Best price guarantee", "24/7 support", "Local guides"],
    },
    {
      icon: Plane,
      title: "Air Ticket Booking",
      description: "Best flight deals and hassle-free booking experience",
      features: ["Competitive prices", "Multiple airlines", "Easy cancellation", "Instant confirmation"],
    },
    {
      icon: Ship,
      title: "Cruise Packages",
      description: "Luxury cruise experiences to exotic destinations",
      features: ["Premium cruise lines", "All-inclusive packages", "Shore excursions", "Special occasions"],
    },
    {
      icon: Bus,
      title: "Bus & Car Rentals",
      description: "Comfortable transportation for your journey",
      features: ["Well-maintained vehicles", "Professional drivers", "Flexible timings", "Competitive rates"],
    },
    {
      icon: FileText,
      title: "Visa & Passport Services",
      description: "Complete assistance for visa and passport requirements",
      features: ["Document guidance", "Application support", "Quick processing", "Expert consultation"],
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel protection for peace of mind",
      features: ["Medical coverage", "Trip cancellation", "Baggage protection", "24/7 assistance"],
    },
  ]

  const eventServices = [
    {
      icon: Heart,
      title: "Destination Weddings",
      description: "Dream weddings in breathtaking locations",
      features: ["Venue selection", "Complete planning", "Vendor coordination", "Guest management"],
    },
    {
      icon: Calendar,
      title: "Wedding Planning",
      description: "Traditional and modern wedding celebrations",
      features: ["Custom themes", "Décor & lighting", "Catering services", "Photography & videography"],
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Professional corporate events and MICE services",
      features: ["Conference planning", "Team building", "Product launches", "Award ceremonies"],
    },
    {
      icon: Calendar,
      title: "Private Parties",
      description: "Memorable celebrations for special occasions",
      features: ["Birthday parties", "Anniversary celebrations", "Themed events", "Entertainment booking"],
    },
  ]

  const specialServices = [
    {
      icon: GraduationCap,
      title: "Study Abroad Planning",
      description: "Complete guidance for international education",
      features: ["University selection", "Application assistance", "Visa guidance", "Pre-departure support"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/happiness-plans-logo.png"
                alt="Happiness Plans Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Services</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Travel & Event Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From dream vacations to perfect celebrations, we offer end-to-end services to make every moment special
              and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="travel" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-16">
              <TabsTrigger value="travel">Travel & Tourism</TabsTrigger>
              <TabsTrigger value="events">Event Management</TabsTrigger>
              <TabsTrigger value="special">Special Services</TabsTrigger>
            </TabsList>

            <TabsContent value="travel" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel & Tourism Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore the world with our comprehensive travel planning and booking services
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {travelServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Management Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Creating unforgettable celebrations and professional events with attention to every detail
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {eventServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                        <service.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="special" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Specialized services to support your unique needs and aspirations
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specialServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                        <service.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple steps to turn your dreams into reality</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Share your vision and requirements with our expert team</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed plan tailored to your needs and budget</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coordination</h3>
              <p className="text-gray-600">Our team handles all bookings and arrangements seamlessly</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Enjoy your perfectly planned experience with our support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      Every service is customized to match your unique preferences and requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trusted Partners</h3>
                    <p className="text-gray-600">We work with verified vendors and trusted partners worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock assistance to ensure your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional Service"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you plan your next adventure or celebration. Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call +91-82248 03424
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
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
              <p className="text-gray-400">Making every moment a celebration since 2021.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Travel Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Holiday Packages</li>
                <li>Air Tickets</li>
                <li>Cruise Packages</li>
                <li>Visa Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Event Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Destination Weddings</li>
                <li>Corporate Events</li>
                <li>Private Parties</li>
                <li>MICE Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>408, Apollo Premier, Vijay Nagar</p>
                <p>Indore 452011, MP</p>
                <p>+91-82248 03424</p>
                <p>info@happinessplans.com</p>
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
