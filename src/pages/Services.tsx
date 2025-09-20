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
import { useCart } from "@/context/CartContext";
import {
  Code,
  Globe,
  Palette,
  BookOpen,
  Monitor,
  Smartphone,
  Brain,
  Calculator,
  Users,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const { addToCart } = useCart();

  const serviceCategories = [
    {
      id: "computer-training",
      title: "Computer Training",
      description: "Master essential programming languages and computer skills",
      icon: Code,
      color: "bg-primary",
      courses: [
        {
          id: "python-programming",
          name: "Python Programming",
          price: 200,
          duration: "8 weeks",
          level: "Beginner to Advanced",
          description:
            "Learn Python from basics to advanced concepts including data algorithms, and web frameworks.",
          features: [
            "Variables & Data Types",
            "Control Structures",
            "Functions & Modules",
            "Object-Oriented Programming",
            "Web Frameworks (Django)",
          ],
        },
        {
          id: "javascript-programming",
          name: "JavaScript Programming",
          price: 200,
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          description:
            "Master JavaScript fundamentals and modern ES6+ features for web development.",
          features: [
            "JavaScript Fundamentals",
            "DOM Manipulation",
            "ES6+ Features",
            "Async Programming",
            "Modern Frameworks",
          ],
        },
        {
          id: "html-css",
          name: "HTML & CSS",
          price: 150,
          duration: "6 weeks",
          level: "Beginner",
          description:
            "Build responsive websites with HTML5 and CSS3, including modern layout techniques.",
          features: [
            "HTML5 Semantics",
            "CSS3 Styling",
            "Responsive Design",
            "Flexbox & Grid",
            "CSS Animations",
            "Modern Layouts",
          ],
        },
        {
          id: "desktop-publishing",
          name: "Desktop Publishing",
          price: 200,
          duration: "5 weeks",
          level: "Beginner to Intermediate",
          description:
            "Create professional documents and publications using industry-standard software.",
          features: [
            "Adobe InDesign",
            "Page Layout Design",
            "Typography",
            "Print Design",
            "Digital Publishing",
            "Portfolio Creation",
          ],
        },
        {
          id: "graphic-design",
          name: "Graphic Design",
          price: 200,
          duration: "10 weeks",
          level: "Beginner to Advanced",
          description:
            "Master visual design principles and create stunning graphics for print and digital media.",
          features: [
            "Design Principles",
            "Adobe Creative Suite",
            "Logo Design",
            "Brand Identity",
            "Digital Illustrations",
            "Print Design",
          ],
        },
        {
          id: "computer-literacy",
          name: "Computer Literacy",
          price: 150,
          duration: "3 weeks",
          level: "Beginner to Advanced",
          description:
            "Essential computer skills for the modern workplace and daily life.",
          features: [
            "Operating Systems",
            "Microsoft Office Suite",
            "Internet Navigation",
            "Email Management",
            "File Management",
            "Digital Security",
          ],
        },
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Build modern websites and web applications",
      icon: Globe,
      color: "bg-secondary",
      courses: [
        {
          id: "ecommerce-website",
          name: "E-commerce Website Development",
          price: 250,
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          description:
            "Build complete e-commerce solutions with payment integration and admin panels.",
          features: [
            "Full-Stack Development",
            "Payment Integration",
            "User Authentication",
            "Admin Dashboard",
            "Inventory Management",
            "SEO Optimization",
          ],
        },
        {
          id: "portfolio-website",
          name: "Portfolio Website Creation",
          price: 200,
          duration: "6 weeks",
          level: "Beginner to Intermediate",
          description:
            "Create stunning portfolio websites to showcase your work and skills.",
          features: [
            "Responsive Design",
            "Portfolio Showcase",
            "Contact Forms",
            "SEO Basics",
            "Performance Optimization",
            "Modern Frameworks",
          ],
        },
        {
          id: "custom-website",
          name: "Custom Website Development",
          price: 250,
          duration: "10 weeks",
          level: "Intermediate",
          description:
            "Learn to build custom websites tailored to specific business needs.",
          features: [
            "Custom Design",
            "CMS Integration",
            "Database Design",
            "API Development",
            "Performance Optimization",
            "Deployment Strategies",
          ],
        },
      ],
    },
    {
      id: "online-training",
      title: "Online Computer Training",
      description: "Interactive online courses for all skill levels",
      icon: Monitor,
      color: "bg-accent",
      courses: [
        {
          id: "scratch-kids",
          name: "Scratch Programming for Kids",
          price: 150,
          duration: "6 weeks",
          level: "Kids (6-16 years)",
          description:
            "Introduce children to programming concepts through fun, interactive Scratch projects.",
          features: [
            "Visual Programming",
            "Game Development",
            "Storytelling",
            "Animation",
            "Logic Building",
            "Creative Projects",
          ],
        },
        {
          id: "javascript-online",
          name: "JavaScript Mastery Online",
          price: 250,
          duration: "8 weeks",
          level: "Beginner to Advanced",
          description:
            "Comprehensive online JavaScript course with live sessions and projects.",
          features: [
            "Live Coding Sessions",
            "Real-time Support",
            "Project-Based Learning",
            "Modern JavaScript",
            "Framework Introduction",
            "Career Guidance",
          ],
        },
        {
          id: "python-online",
          name: "Python Programming Online",
          price: 250,
          duration: "10 weeks",
          level: "Beginner to Advanced",
          description:
            "Complete Python mastery with hands-on projects and expert mentorship.",
          features: [
            "Live Virtual Classes",
            "1-on-1 Mentoring",
            "Real Projects",
            "Data Science Intro",
            "Web Development",
            "Career Support",
          ],
        },
      ],
    },
    {
      id: "online-tutorials",
      title: "Online Academic Tutorials",
      description: "Strengthen your academic foundation with expert tutoring",
      icon: BookOpen,
      color: "bg-primary",
      courses: [
        {
          id: "mathematics",
          name: "Mathematics Tutorial",
          price: 200,
          duration: "N/A",
          level: "All Levels",
          description:
            "Comprehensive mathematics tutoring from basic arithmetic to advanced calculus.",
          features: [
            "Arithmetic & Algebra",
            "Geometry & Trigonometry",
            "Calculus Basics",
            "Problem Solving",
            "Test Preparation",
            "1-on-1 Support",
          ],
        },
        {
          id: "english",
          name: "English Language Tutorial",
          price: 200,
          duration: "N/A",
          level: "All Levels",
          description:
            "Improve your English language skills including grammar, writing, and communication.",
          features: [
            "Grammar & Vocabulary",
            "Writing Skills",
            "Reading Comprehension",
            "Speaking Practice",
            "Business English",
            "Test Preparation",
          ],
        },
        {
          id: "verbal-reasoning",
          name: "Verbal Reasoning",
          price: 200,
          duration: "N/A",
          level: "Intermediate",
          description:
            "Develop critical thinking and verbal reasoning skills for academic and professional success.",
          features: [
            "Critical Analysis",
            "Reading Comprehension",
            "Argument Evaluation",
            "Test Strategies",
            "Practice Exercises",
            "Progress Tracking",
          ],
        },
        {
          id: "quantitative-reasoning",
          name: "Quantitative Reasoning",
          price: 200,
          duration: "N/A",
          level: "Intermediate",
          description:
            "Master quantitative analysis and mathematical reasoning for competitive exams.",
          features: [
            "Data Interpretation",
            "Statistical Analysis",
            "Mathematical Reasoning",
            "Problem Solving",
            "Exam Techniques",
            "Practice Tests",
          ],
        },
        {
          id: "non-verbal-reasoning",
          name: "Non-Verbal Reasoning",
          price: 200,
          duration: "N/A",
          level: "All Levels",
          description:
            "Develop spatial awareness and pattern recognition skills through visual reasoning.",
          features: [
            "Pattern Recognition",
            "Spatial Reasoning",
            "Visual Analysis",
            "Logic Puzzles",
            "Test Strategies",
            "Skill Assessment",
          ],
        },
        {
          id: "gl-assessment-expert",
          name: "GL Assessment Expert",
          price: 200,
          duration: "N/A",
          level: "Expert Level",
          description:
            "Get expert help to pass your GL Assessment and Common Entrance exams.",
          features: [
            "GL Assessment Preparation",
            "Common Entrance Exam Coaching",
            "Tailored Study Plans",
            "Mock Examinations",
            "Verbal and Non-Verbal Reasoning",
            "Maths and English Comprehension",
            "Personalized Feedback",
          ],
        },
      ],
    },
  ];

  const handleAddToCart = (course: any, category: string) => {
    addToCart({
      id: course.id,
      name: course.name,
      price: course.price,
      category: category,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Skills with Our{" "}
              <span className="text-accent">Expert Training</span>
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Choose from our comprehensive range of courses designed to meet
              industry demands and help you achieve your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;

        return (
          <section
            key={category.id}
            className={`py-20 ${categoryIndex % 2 === 1 ? "bg-muted/30" : ""}`}
          >
            <div className="container mx-auto px-4">
              {/* Category Header */}
              <div className="text-center mb-16">
                <div
                  className={`${category.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
                >
                  <CategoryIcon className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {category.title}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  {category.description}
                </p>
              </div>

              {/* Courses Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course) => (
                  <Card
                    key={course.id}
                    className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{course.level}</Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ${course.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {course.duration}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {course.name}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          Duration: {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Level: {course.level}
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-sm">
                          What you'll learn:
                        </h4>
                        <div className="grid grid-cols-1 gap-1">
                          {course.features.slice(0, 4).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-xs"
                            >
                              <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                          {course.features.length > 4 && (
                            <div className="text-xs text-muted-foreground">
                              +{course.features.length - 4} more topics...
                            </div>
                          )}
                        </div>
                      </div>

                      <Button
                        className="w-full group-hover:scale-105 transition-transform"
                        onClick={() => handleAddToCart(course, category.title)}
                      >
                        Add to Cart - ${course.price}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose DefestTech</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Our <span className="text-brand">Courses Special</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of real-world
                experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
              <p className="text-muted-foreground">
                Build real projects and create a portfolio that showcases your
                skills
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Industry Certification
              </h3>
              <p className="text-muted-foreground">
                Receive recognized certificates that validate your new skills
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
