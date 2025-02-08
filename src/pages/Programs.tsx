
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Calendar } from "lucide-react";
import Navbar from "@/components/dashboard/Navbar";

interface Program {
  id: string;
  title: string;
  description: string;
  date: string;
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  });

  const addProgram = () => {
    if (newProgram.title.trim() && newProgram.date) {
      const program: Program = {
        id: Date.now().toString(),
        ...newProgram,
      };
      setPrograms([...programs, program]);
      setNewProgram({
        title: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  const deleteProgram = (id: string) => {
    setPrograms(programs.filter(program => program.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLogout={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Programs</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Program</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                value={newProgram.title}
                onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
                placeholder="Program Title"
              />
              <Input
                value={newProgram.description}
                onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                placeholder="Program Description"
              />
              <Input
                type="date"
                value={newProgram.date}
                onChange={(e) => setNewProgram({ ...newProgram, date: e.target.value })}
              />
              <Button onClick={addProgram}>
                <Plus className="w-4 h-4 mr-2" />
                Add Program
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map(program => (
            <Card key={program.id} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <Trash2
                  className="w-5 h-5 text-red-500 cursor-pointer"
                  onClick={() => deleteProgram(program.id)}
                />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(program.date).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
