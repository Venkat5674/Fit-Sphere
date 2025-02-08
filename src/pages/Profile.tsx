
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Full Name</p>
                  <p className="text-muted-foreground">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 234 567 890</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
