import './App.css';
import { TimeLine } from './Components/TimeLine';
import { useComments } from './hook/useComments';


function App() {

  const { currentUser, comments } = useComments();
  const data = { currentUser, comments }

  return (
    <div className="App">

      <main>
        <TimeLine data={data} />
      </main>
    </div>
  );
}

export default App;
