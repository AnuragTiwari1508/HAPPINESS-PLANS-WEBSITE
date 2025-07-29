import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Award, Heart, Laptop, Megaphone, BarChart, Globe, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CareersPage() {
  const internshipPrograms = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      duration: "2-6 months",
      stipend: "₹8,000 - ₹15,000",
      description: "Social media management, content creation, SEO, and digital campaigns",
      skills: ["Social Media", "Content Writing", "SEO", "Analytics"],
    },
    {
      icon: Laptop,
      title: "Web Development",
      duration: "3-6 months",
      stipend: "₹10,000 - ₹20,000",
      description: "Frontend and backend development, website maintenance, and optimization",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    },
    {
      icon: BarChart,
      title: "General Management",
      duration: "2-4 months",
      stipend: "₹6,000 - ₹12,000",
      description: "Operations support, client coordination, and project management",
      skills: ["Communication", "Project Management", "MS Office", "Problem Solving"],
    },
    {
      icon: Globe,
      title: "Marketing & Sales",
      duration: "2-5 months",
      stipend: "₹4,000 - ₹15,000",
      description: "Lead generation, client outreach, market research, and sales support",
      skills: ["Sales", "Market Research", "CRM", "Presentation"],
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Certificates & Recommendations",
      description: "Completion certificates and LinkedIn recommendations for all interns",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Direct mentorship from experienced professionals in the industry",
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Hands-on experience with real projects and professional tools",
    },
    {
      icon: Heart,
      title: "Flexible Environment",
      description: "Supportive work culture with flexible timings and remote options",
    },
  ]

  const companyValues = [
    "Innovation and creativity in problem-solving",
    "Collaborative team environment",
    "Continuous learning and growth",
    "Customer-first approach",
    "Work-life balance",
    "Diversity and inclusion",
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
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">
                Gallery
              </Link>
              <Link href="/careers" className="text-blue-600 font-medium">
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
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Join Our Team</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Build Your Career With Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join a dynamic team that's passionate about creating unforgettable experiences. We offer exciting
              internship opportunities and a culture that values growth, innovation, and making every moment a
              celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Happiness Plans?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Happiness Plans, we believe in nurturing young talent and providing opportunities for growth in the
                  exciting world of travel and event management. Since our founding in 2021, we've built a reputation
                  for excellence and innovation.
                </p>
                <p>
                  Our team of 10-50 passionate professionals works together to create magical experiences for our
                  clients. We value diversity, creativity, and the fresh perspectives that young professionals bring to
                  our organization.
                </p>
                <p>
                  Join us and be part of a company that's making every moment a celebration while building your own
                  successful career in the process.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Our Values:</h3>
                <ul className="space-y-2">
                  {companyValues.map((value, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Team at Happiness Plans"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain hands-on experience in various fields while working on real projects that impact our business
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <program.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{program.stipend}/month</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <p className="text-gray-500">Duration: {program.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond competitive stipends, we provide comprehensive support for your professional development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <benefit.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to join our team</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Submit your application through our contact form or email</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Screening</h3>
              <p className="text-gray-600">We review your application and conduct a preliminary assessment</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Personal or virtual interview to discuss your goals and fit</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Onboarding</h3>
              <p className="text-gray-600">Welcome to the team! Begin your journey with orientation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Interns Say</h2>
            <p className="text-xl text-gray-600">Hear from our past and current team members</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "The internship at Happiness Plans gave me real-world experience in digital marketing. The team was
                  supportive and I learned so much about the travel industry."
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Digital Marketing Intern</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Working on web development projects here helped me build a strong portfolio. The mentorship and
                  guidance were exceptional."
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Rahul Kumar</div>
                  <div className="text-sm text-gray-500">Web Development Intern</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "The management internship taught me project coordination and client interaction skills. It's been an
                  amazing learning experience."
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Anita Patel</div>
                  <div className="text-sm text-gray-500">Management Intern</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our team and kickstart your career in the exciting world of travel and event management. Apply today
            and become part of our success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact HR
              </Link>
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            Send your resume to: info@happinessplans.com with subject "Internship Application - [Position]"
          </p>
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
              <h3 className="font-semibold mb-4">Internships</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Marketing</li>
                <li>Web Development</li>
                <li>General Management</li>
                <li>Marketing & Sales</li>
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
