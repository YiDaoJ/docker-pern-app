import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios.get('http://localhost:3050/api/msg').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return <>{!!data && <div>{data.message}</div>}</>;
}

export default App;
