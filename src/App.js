import Diagram from './components/Diagram';

import './App.scss';

function App() {
  // const chordC = [
  //   { finger: 1, pos: 21 },
  //   { finger: 2, pos: 42 },
  //   { finger: 3, pos: 12 },
  // ];
  const chordC = [
    { pos: 21 },
    { pos: 42 },
    { pos: 12 },
  ];
  const chordG = [
    { pos: 21 },
    { pos: 42 },
    { pos: 53 },
  ];

  return (
    <div className="App">
      <Diagram stringType='CAVACO' chord={chordC} />
      <Diagram stringType='GUITAR' chord={chordG} />
    </div>
  );
}

export default App;
