import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Building, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const destinations = [
    { name: "Goa", image: "/placeholder.svg?height=300&width=400", category: "Beach" },
    { name: "Rajasthan", image: "/placeholder.svg?height=300&width=400", category: "Heritage" },
    { name: "Kerala", image: "/placeholder.svg?height=300&width=400", category: "Nature" },
    { name: "Himachal Pradesh", image: "/placeholder.svg?height=300&width=400", category: "Mountains" },
    { name: "Dubai", image: "/placeholder.svg?height=300&width=400", category: "International" },
    { name: "Maldives", image: "/placeholder.svg?height=300&width=400", category: "International" },
  ]

  const weddings = [
    { name: "Beach Wedding", image: "/placeholder.svg?height=300&width=400", location: "Goa" },
    { name: "Palace Wedding", image: "/placeholder.svg?height=300&width=400", location: "Udaipur" },
    { name: "Garden Wedding", image: "/placeholder.svg?height=300&width=400", location: "Indore" },
    { name: "Destination Wedding", image: "/placeholder.svg?height=300&width=400", location: "Shimla" },
    { name: "Traditional Wedding", image: "/placeholder.svg?height=300&width=400", location: "Jaipur" },
    { name: "Modern Wedding", image: "/placeholder.svg?height=300&width=400", location: "Mumbai" },
  ]

  const events = [
    { name: "Corporate Conference", image: "/placeholder.svg?height=300&width=400", type: "Corporate" },
    { name: "Product Launch", image: "/placeholder.svg?height=300&width=400", type: "Corporate" },
    { name: "Team Building", image: "/placeholder.svg?height=300&width=400", type: "Corporate" },
    { name: "Birthday Party", image: "/placeholder.svg?height=300&width=400", type: "Private" },
    { name: "Anniversary Celebration", image: "/placeholder.svg?height=300&width=400", type: "Private" },
    { name: "Award Ceremony", image: "/placeholder.svg?height=300&width=400", type: "Corporate" },
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
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/gallery" className="text-blue-600 font-medium">
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
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Gallery</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Moments We've Made Special</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of unforgettable destinations, dream weddings, and successful events. Each image
              tells a story of joy, celebration, and memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="destinations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-16">
              <TabsTrigger value="destinations">Destinations</TabsTrigger>
              <TabsTrigger value="weddings">Weddings</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="destinations" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Destinations</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From pristine beaches to majestic mountains, explore the beautiful destinations we've helped our
                  clients discover
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-800 hover:bg-white/90">{destination.category}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-medium">{destination.name}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                      <p className="text-gray-600">Discover the beauty and culture of this amazing destination</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="weddings" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Dream Weddings</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every wedding is unique, and we make sure each celebration reflects the couple's love story perfectly
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {weddings.map((wedding, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={wedding.image || "/placeholder.svg"}
                        alt={wedding.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100">
                          <Heart className="w-3 h-3 mr-1" />
                          Wedding
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-medium">{wedding.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{wedding.name}</h3>
                      <p className="text-gray-600">A magical celebration in {wedding.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate & Private Events</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From professional conferences to intimate celebrations, we create events that leave lasting
                  impressions
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`hover:bg-current ${event.type === "Corporate" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}
                        >
                          {event.type === "Corporate" ? (
                            <Building className="w-3 h-3 mr-1" />
                          ) : (
                            <Users className="w-3 h-3 mr-1" />
                          )}
                          {event.type}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                      <p className="text-gray-600">Professional {event.type.toLowerCase()} event management</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Weddings Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Destinations Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Corporate Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Our Rajasthan trip was absolutely magical! Every detail was perfectly planned, and the destinations
                  were breathtaking. Highly recommend Happiness Plans!"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Amit & Priya Sharma</div>
                  <div className="text-sm text-gray-500">Rajasthan Heritage Tour</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Our destination wedding in Udaipur was a dream come true. The team handled everything flawlessly, and
                  our guests are still talking about it!"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Rajesh & Kavya Patel</div>
                  <div className="text-sm text-gray-500">Destination Wedding, Udaipur</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "The corporate event was executed perfectly. Professional service, attention to detail, and seamless
                  coordination. Will definitely work with them again."
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Tech Solutions Pvt Ltd</div>
                  <div className="text-sm text-gray-500">Annual Conference, Mumbai</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful memories that will be cherished forever. Contact us today to start planning
            your perfect experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Plan Your Trip
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">
                <Heart className="w-5 h-5 mr-2" />
                Plan Your Event
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
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
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
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Holiday Packages</li>
                <li>Destination Weddings</li>
                <li>Corporate Events</li>
                <li>Study Abroad</li>
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
