import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around creating the best experience for our clients",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every detail, from planning to execution",
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Our diverse team works together to bring your dreams to life",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly evolve our services to meet changing travel and event needs",
    },
  ]

  const milestones = [
    { year: "2021", event: "Founded in Indore", description: "Started with a vision to make every moment special" },
    {
      year: "2022",
      event: "100+ Happy Clients",
      description: "Reached our first major milestone in customer satisfaction",
    },
    {
      year: "2023",
      event: "Partnership with Yas Island",
      description: "Received appreciation certificate for outstanding partnership",
    },
    { year: "2024", event: "500+ Events Organized", description: "Expanded our reach across multiple states in India" },
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
              <Link href="/about" className="text-blue-600 font-medium">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">About Happiness Plans</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Making Every Moment A Celebration Since 2021</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in the heart of Indore, Madhya Pradesh, we are a passionate team of travel and event management
              professionals dedicated to creating unforgettable experiences for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2021 in the vibrant city of Indore, Happiness Plans emerged from a simple yet powerful
                  vision: to make every moment of our clients' lives a celebration. What started as a small team of
                  passionate travel enthusiasts has grown into a comprehensive travel and event management company.
                </p>
                <p>
                  Located at Apollo Premier in Vijay Nagar Square, our office serves as the hub for planning
                  extraordinary experiences across India and beyond. With a team of 10-50 dedicated professionals, we
                  specialize in creating personalized solutions that turn dreams into reality.
                </p>
                <p>
                  From intimate destination weddings to large corporate events, from exotic holiday packages to study
                  abroad programs, we handle every detail with precision and care. Our commitment to excellence has
                  earned us recognition, including an appreciation certificate from Yas Island Abu Dhabi for our
                  outstanding partnership.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Happiness Plans Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8">
                <Target className="w-12 h-12 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To deliver customized travel and event experiences with seamless planning and joyful memories. We
                  strive to exceed expectations by providing personalized service that transforms ordinary moments into
                  extraordinary celebrations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-orange-500 text-white">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 mb-6 text-orange-200" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-orange-100 leading-relaxed">
                  To become India's most trusted travel and event management company, known for creating magical
                  experiences that bring people together and create lasting memories. We envision a world where every
                  journey and celebration is perfectly crafted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-8 flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Team Culture"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team Culture</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Happiness Plans, we believe in fostering a culture of innovation, collaboration, and growth. Our
                  team consists of passionate individuals from diverse backgrounds, all united by a common goal:
                  creating exceptional experiences for our clients.
                </p>
                <p>
                  We actively support young talent through our comprehensive internship programs, offering opportunities
                  in digital marketing, web development, general management, and more. Our interns receive hands-on
                  experience, mentorship, and the chance to contribute to real projects.
                </p>
                <p>
                  With stipends ranging from ₹4,000 to ₹20,000 per month, plus certificates and recommendation letters,
                  we ensure our team members are valued and supported in their professional journey.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-orange-500 hover:bg-orange-600">
                  <Link href="/careers">
                    <Users className="w-5 h-5 mr-2" />
                    Join Our Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us be part of your journey. Contact us today to start planning your next adventure or celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">
                <Calendar className="w-5 h-5 mr-2" />
                View Services
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
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
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
