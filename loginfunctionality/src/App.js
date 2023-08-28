import DataModule from "./data_module/data_module";

const books = [
  {
    id: 1,
    author: "Robert Kiyosaki",
    title: "Rich dad Poor dad",
  },
  {
    id: 2,
    author: "Chethan bhagath",
    title: "Revolution 20 Twenty",
  },
  {
    id: 3,
    author: "Napoleon Hill",
    title: "Think and Grow Rich",
  },
  {
    id: 4,
    author: "Ankur Warikoo",
    title: "Do Epic Shit",
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Form</h1>
    {books.map((item)=>{})}
    </div>
  );
}

export default App;
