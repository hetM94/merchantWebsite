import { useState } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);
  const [backendMessage, setBackendMessage] = useState("");

  const handleClick = async () => {
    setCount(count + 1);
    try {
      const res = await axios.get("http://localhost:5000/api/hello");
      setBackendMessage(res.data.message);
    } catch (err) {
      setBackendMessage("Backend not reachable");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Navbar */}
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Merchant Website
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-16">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Hello World Frontend
        </h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          onClick={handleClick}
        >
          Click Me
        </button>
        <p className="mt-4">
          Button clicked: <span className="font-bold">{count}</span> times
        </p>
        <p className="mt-2 text-green-600">Backend says: {backendMessage}</p>
      </div>
    </div>
  );
}

export default App;
