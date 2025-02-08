
import { useState } from "react";
import AuthForm from "@/components/auth/AuthForm";
import WorkoutCard from "@/components/dashboard/WorkoutCard";
import StatsCard from "@/components/dashboard/StatsCard";
import Navbar from "@/components/dashboard/Navbar";
import { Activity, Dumbbell, Flame, TrendingUp } from "lucide-react";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-secondary">
        <div className="w-full max-w-md">
          <AuthForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary animate-fade-in">
      <Navbar onLogout={handleLogout} />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Track your fitness journey and achieve your goals.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Workouts"
              value="12"
              description="This month"
              icon={<Activity className="h-4 w-4" />}
            />
            <StatsCard
              title="Active Minutes"
              value="436"
              description="Last 7 days"
              icon={<TrendingUp className="h-4 w-4" />}
            />
            <StatsCard
              title="Calories Burned"
              value="2,544"
              description="This week"
              icon={<Flame className="h-4 w-4" />}
            />
            <StatsCard
              title="Strength Training"
              value="8"
              description="Sessions this month"
              icon={<Dumbbell className="h-4 w-4" />}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <WorkoutCard
                title="Morning Run"
                duration={45}
                calories={320}
                type="Cardio"
              />
              <WorkoutCard
                title="Strength Training"
                duration={60}
                calories={450}
                type="Strength"
              />
              <WorkoutCard
                title="Yoga Session"
                duration={30}
                calories={150}
                type="Flexibility"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
