import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every course and interaction, ensuring our students receive world-class education.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our passion for technology and education drives us to continuously improve and innovate our teaching methods.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We build a supportive community where students can learn, grow, and succeed together.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our mission extends worldwide, helping students across different countries achieve their tech dreams.",
    },
  ];

  const team = [
    {
      name: "Festus Ogunmayin",
      role: "Founder & Lead Instructor",
      experience: "10+ years in Software Development",
      specialization: "Python, JavaScript, Web Development",
    },
    {
      name: "Ifeloju Ogunmayin",
      role: "Administrative Head",
      experience: "10+ years in Administration Management",
      specialization: "Specialize in administration and management",
    },
    {
      name: "Joshua Adeyanju",
      role: "Senior Data Analyst",
      experience: "8+ years in Data Analysis",
      specialization: "Data Visualization, Machine Learning, SQL",
    },
    {
      name: "Akinpelu Akinbulejo",
      role: "Computer Engineering Instructor",
      experience: "10+ years in Education",
      specialization: "Computer Engineering, Hardware, Networking",
    },
  ];

  const achievements = [
    { icon: Users, value: "50+", label: "Graduates" },
    { icon: Globe, value: "10+", label: "Countries" },
    { icon: Award, value: "85%", label: "Job Placement Rate" },
    { icon: Star, value: "3.9/5", label: "Student Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white">
              About DefestTech
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Future{" "}
              <span className="text-accent">Tech Leaders</span>
            </h1>
            <p className="text-xl opacity-90 mb-8">
              For over a decade, DefestTech Institute has been at the forefront
              of technology education, transforming lives through comprehensive
              training programs and expert instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-brand transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To help children and young people learn tech skills in a fun
                  and easy way, and prepare them for the digital future.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-brand transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-secondary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To build a community where children and adults grow with
                  technology, learn new skills, and succeed in today's digital
                  world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives <span className="text-brand">Our Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-accent p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Numbers That <span className="text-brand">Speak Volumes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="hero-gradient p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-brand">Expert Instructors</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team consists of industry professionals and experienced
              educators who are passionate about sharing their knowledge and
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-brand transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.experience}
                </p>
                <div className="text-xs text-muted-foreground border-t pt-2">
                  {member.specialization}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Why Choose DefestTech</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Success is <span className="text-brand">Our Priority</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Industry-Relevant Curriculum
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our courses are designed with input from industry
                      professionals to ensure relevance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Hands-On Learning</h3>
                    <p className="text-muted-foreground text-sm">
                      Practice with real projects and build a portfolio that
                      showcases your skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Mentorship</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn from experienced professionals who provide
                      personalized guidance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Flexible Learning Options
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Choose from online, in-person, or hybrid learning formats
                      that fit your schedule.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Career Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Get job placement assistance and career guidance even
                      after graduation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Community</h3>
                    <p className="text-muted-foreground text-sm">
                      Join a network of graduates and professionals from around
                      the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards transforming your career with DefestTech
            Institute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                View Our Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
