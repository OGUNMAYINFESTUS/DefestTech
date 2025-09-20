import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Globe,
  Smartphone,
  Users,
  BookOpen,
  Calculator,
  Brain,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import heroProgramming from "@/assets/hero-programming.jpg";
import webDevelopment from "@/assets/web-development.jpg";
import graphicDesign from "@/assets/graphic-design.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Computer Training",
      description: "Master programming languages and computer skills",
      features: [
        "Python Programming",
        "JavaScript",
        "HTML & CSS",
        "Computer Literacy",
      ],
      color: "bg-primary",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build modern websites and applications",
      features: [
        "E-commerce Sites",
        "Portfolio Websites",
        "Custom Development",
        "Mobile Apps",
      ],
      color: "bg-secondary",
    },
    {
      icon: Palette,
      title: "Design & Publishing",
      description: "Create stunning visual content",
      features: [
        "Graphic Design",
        "Desktop Publishing",
        "UI/UX Design",
        "Brand Identity",
      ],
      color: "bg-accent",
    },
    {
      icon: BookOpen,
      title: "Online Tutorials",
      description: "Learn academic subjects and reasoning",
      features: [
        "Mathematics",
        "English",
        "Verbal Reasoning",
        "Quantitative Reasoning",
      ],
      color: "bg-primary",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Students Trained" },
    { icon: Star, value: "98%", label: "Success Rate" },
    { icon: Globe, value: "20+", label: "Countries Served" },
    { icon: BookOpen, value: "100+", label: "Courses Available" },
  ];

  const testimonials = [
    {
      name: "Joseph Chiagoziem",
      role: "Web Developer",
      content:
        "DefestTech transformed my career. The instructors are amazing and the curriculum is top-notch.",
      rating: 5,
    },
    {
      name: "Ebube Ogwu",
      role: "Student",
      content:
        "Best investment I made for my future. The hands-on approach really helped me learn programming.",
      rating: 5,
    },
    {
      name: "Tosin Odetola",
      role: "Graphic Designer",
      content:
        "The design courses are comprehensive and practical. I landed my dream job right after graduation.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroProgramming})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-accent text-accent-foreground animate-fade-in">
            🎓 Premium Tech Education
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Master <span className="text-accent">Technology</span>
            <br />
            Shape Your Future
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
            Learn programming, web development, and design skills with expert
            instructors. Join thousands of successful graduates worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/services">
              <Button
                size="lg"
                className="hero-gradient text-white hover:scale-105 transition-transform shadow-glow"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in">
                  <div className="hero-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Career with Our{" "}
              <span className="text-brand">Expert Training</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of courses designed to meet
              industry demands and help you achieve your career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div
                      className={`${service.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-brand">Students Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful graduates and transform your career
            with our expert training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Browse Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
