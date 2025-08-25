
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [backendMessage, setBackendMessage] = useState('');

  const handleClick = async () => {
    setCount(count + 1);
    try {
      const res = await axios.get('http://localhost:5000/api/hello');
      setBackendMessage(res.data.message);
    } catch (err) {
      setBackendMessage('Backend not reachable');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Hello World Frontend</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleClick}>
        Click Me
      </button>
      <p className="mt-4">Button clicked: <span className="font-bold">{count}</span> times</p>
      <p className="mt-2 text-green-600">Backend says: {backendMessage}</p>
    </div>
  );
}

export default App;
