import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    course: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: [
        "20 Ounmayin Street, New Osho Layout",
        "Harmony Estate, Langbasa, Ajah",
        "Lagos State",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+234 805-791-0429",
        "+234 814-381-5947",
        "Mon-Fri: 9AM-6PM WAT",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "ogunmayinfestus@yahoo.com",
        "ogunmayinfestus4@gmail.com",
        "ogunmayinfestus@hotmail.com",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 10AM - 4PM",
        "Sunday: Closed",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by adding courses to your cart and completing the checkout process. Our admissions team will contact you within 24 hours to finalize your enrollment.",
    },
    {
      question: "Do you offer financial assistance?",
      answer:
        "Yes, we offer various payment plans and scholarship opportunities. Contact our admissions team to discuss available options for your situation.",
    },
    {
      question: "Are the courses suitable for beginners?",
      answer:
        "Absolutely! We offer courses for all skill levels, from complete beginners to advanced learners. Each course clearly indicates its difficulty level.",
    },
    {
      question: "What kind of certificate will I receive?",
      answer:
        "Upon successful completion, you'll receive an industry-recognized certificate that validates your skills and can be shared on professional platforms like LinkedIn.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      course: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-accent">Learning Journey?</span>
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Have questions about our courses? Want to discuss your career
              goals? Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Contact Information</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Ways to <span className="text-brand">Reach Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-brand transition-shadow group"
                >
                  <div className="bg-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("subject", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="enrollment">
                          Course Enrollment
                        </SelectItem>
                        <SelectItem value="technical">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="course">Interested Course (Optional)</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("course", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="python">
                          Python Programming
                        </SelectItem>
                        <SelectItem value="javascript">
                          JavaScript Programming
                        </SelectItem>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="graphic-design">
                          Graphic Design
                        </SelectItem>
                        <SelectItem value="mobile-app">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="other-course">
                          Other Course
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your goals and how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Frequently Asked Questions</Badge>
                <h3 className="text-2xl font-bold mb-6">Common Questions</h3>
              </div>

              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </Card>
              ))}

              {/* Additional Contact Options */}
              <Card className="p-6 bg-primary text-white">
                <h4 className="font-semibold text-lg mb-3">
                  Need Immediate Assistance?
                </h4>
                <p className="mb-4 opacity-90">
                  For urgent inquiries, you can reach us directly through these
                  channels:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">Call: +234 805-791-0429</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      Email: ogunmayinfestus@yahoo.com
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Visit Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Our <span className="text-brand">Campus</span>
            </h2>
          </div>

          <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">
                DefestTech Institute Campus
              </h3>
              <p className="text-muted-foreground">
                20 Ogunmayin Street, New Osho Layout,
                <br /> Harmony Estate, Langbasa, Ajah, <br /> Lagos State
              </p>
              <p className="text-muted-foreground"></p>
              <Button className="mt-4" variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
