
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Smartphone, Laptop, Key } from "lucide-react";
import Navbar from "@/components/dashboard/Navbar";

interface Device {
  id: string;
  name: string;
  type: "smartphone" | "laptop" | "other";
  password?: string;
  notes?: string;
}

const Devices = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [newDevice, setNewDevice] = useState<Device>({
    id: "",
    name: "",
    type: "smartphone",
    password: "",
    notes: "",
  });

  const addDevice = () => {
    if (newDevice.name.trim()) {
      const device: Device = {
        ...newDevice,
        id: Date.now().toString(),
      };
      setDevices([...devices, device]);
      setNewDevice({
        id: "",
        name: "",
        type: "smartphone",
        password: "",
        notes: "",
      });
    }
  };

  const deleteDevice = (id: string) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLogout={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Devices</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Device</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                value={newDevice.name}
                onChange={(e) => setNewDevice({ ...newDevice, name: e.target.value })}
                placeholder="Device Name"
              />
              <select
                value={newDevice.type}
                onChange={(e) => setNewDevice({ ...newDevice, type: e.target.value as Device["type"] })}
                className="w-full border rounded-md px-4 py-2"
              >
                <option value="smartphone">Smartphone</option>
                <option value="laptop">Laptop</option>
                <option value="other">Other</option>
              </select>
              <Input
                type="password"
                value={newDevice.password}
                onChange={(e) => setNewDevice({ ...newDevice, password: e.target.value })}
                placeholder="Device Password (Optional)"
              />
              <Input
                value={newDevice.notes}
                onChange={(e) => setNewDevice({ ...newDevice, notes: e.target.value })}
                placeholder="Additional Notes"
              />
              <Button onClick={addDevice}>
                <Plus className="w-4 h-4 mr-2" />
                Add Device
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {devices.map(device => (
            <Card key={device.id} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  {device.type === "smartphone" && <Smartphone className="w-5 h-5" />}
                  {device.type === "laptop" && <Laptop className="w-5 h-5" />}
                  <CardTitle className="text-xl">{device.name}</CardTitle>
                </div>
                <Trash2
                  className="w-5 h-5 text-red-500 cursor-pointer"
                  onClick={() => deleteDevice(device.id)}
                />
              </CardHeader>
              <CardContent>
                {device.password && (
                  <div className="flex items-center gap-2 mb-2">
                    <Key className="w-4 h-4" />
                    <span className="text-muted-foreground">Password saved</span>
                  </div>
                )}
                {device.notes && (
                  <p className="text-muted-foreground text-sm">{device.notes}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devices;
