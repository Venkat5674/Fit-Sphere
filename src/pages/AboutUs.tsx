
import { Shield, User, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About FitSphere</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted companion in the journey towards a healthier, stronger you. We combine technology with fitness expertise to deliver a personalized workout experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower individuals in their fitness journey through innovative technology and personalized guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <User className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Personal Approach</h3>
              <p className="text-muted-foreground">
                We believe every fitness journey is unique, providing customized solutions for your specific goals.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Commitment to excellence, integrity in guidance, and dedication to your success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
