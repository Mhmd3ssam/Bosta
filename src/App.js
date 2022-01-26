import { useEffect } from 'react';
import {useFetch} from './Hooks/useFetch';
function App() {
 const{data,loading}= useFetch('https://tracking.bosta.co/shipments/track/9442984');
 console.log(data);
  return (
    <div>
      {loading? 'Loading...': ' Hello Bosta App'}
    </div>
  );
}

export default App;
