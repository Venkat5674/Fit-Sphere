
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, CheckSquare } from "lucide-react";
import Navbar from "@/components/dashboard/Navbar";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: "daily" | "exercise" | "important";
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState<"daily" | "exercise" | "important">("daily");

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
        category,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLogout={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Tasks</h1>
        
        <div className="flex gap-4 mb-8">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Task["category"])}
            className="border rounded-md px-4 py-2"
          >
            <option value="daily">Daily Task</option>
            <option value="exercise">Exercise</option>
            <option value="important">Important</option>
          </select>
          <Button onClick={addTask}>
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Daily Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              {tasks
                .filter(task => task.category === "daily")
                .map(task => (
                  <div key={task.id} className="flex items-center justify-between p-2 border-b">
                    <div className="flex items-center gap-2">
                      <CheckSquare
                        className={`w-5 h-5 cursor-pointer ${task.completed ? "text-primary" : "text-gray-400"}`}
                        onClick={() => toggleTask(task.id)}
                      />
                      <span className={task.completed ? "line-through text-gray-500" : ""}>
                        {task.title}
                      </span>
                    </div>
                    <Trash2
                      className="w-5 h-5 text-red-500 cursor-pointer"
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exercise Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              {tasks
                .filter(task => task.category === "exercise")
                .map(task => (
                  <div key={task.id} className="flex items-center justify-between p-2 border-b">
                    <div className="flex items-center gap-2">
                      <CheckSquare
                        className={`w-5 h-5 cursor-pointer ${task.completed ? "text-primary" : "text-gray-400"}`}
                        onClick={() => toggleTask(task.id)}
                      />
                      <span className={task.completed ? "line-through text-gray-500" : ""}>
                        {task.title}
                      </span>
                    </div>
                    <Trash2
                      className="w-5 h-5 text-red-500 cursor-pointer"
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              {tasks
                .filter(task => task.category === "important")
                .map(task => (
                  <div key={task.id} className="flex items-center justify-between p-2 border-b">
                    <div className="flex items-center gap-2">
                      <CheckSquare
                        className={`w-5 h-5 cursor-pointer ${task.completed ? "text-primary" : "text-gray-400"}`}
                        onClick={() => toggleTask(task.id)}
                      />
                      <span className={task.completed ? "line-through text-gray-500" : ""}>
                        {task.title}
                      </span>
                    </div>
                    <Trash2
                      className="w-5 h-5 text-red-500 cursor-pointer"
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
