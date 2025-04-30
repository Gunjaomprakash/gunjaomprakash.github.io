
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you have a question, want to start a project, or just want to connect,
          feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>San Francisco, CA</CardDescription>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                hello@example.com
              </a>
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <a href="tel:+12345678901" className="hover:text-primary transition-colors">
                +1 (234) 567-8901
              </a>
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Send Me a Message</CardTitle>
          <CardDescription>
            I'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
