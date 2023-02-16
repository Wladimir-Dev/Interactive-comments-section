import { useContext } from 'react';
import './App.css';
import { NewComment } from './Components/NewComment';
import { TimeLine } from './Components/TimeLine';
import { CommentContext } from './context/CommentContext';
import { useComments } from './hook/useComments';


function App() {

  const { currentUser, comments, setComments } = useContext(CommentContext);


  const data = { currentUser, comments }

  return (
    <div className="App">

      <main>
        <TimeLine data={data} />
        <NewComment />
      </main>
    </div>
  );
}

export default App;
