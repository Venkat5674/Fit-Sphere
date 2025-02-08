
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Timer, Flame } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  duration: number;
  calories: number;
  type: string;
}

const WorkoutCard = ({ title, duration, calories, type }: WorkoutCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Activity className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Timer className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{duration} min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Flame className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{calories} cal</span>
          </div>
        </div>
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {type}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
