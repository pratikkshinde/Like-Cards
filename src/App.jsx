import Card from "./components/Card";
import "./App.css";

function App() {
  const cardTitles = [
    "Virat Kohli", "Hardik Pandya", "Ravindra Jadeja",
    "Rohit Sharma", "KL Rahul", "Rishabh Pant", "Shubman Gill",
    "Suryakumar Yadav", "Mohammed Siraj", "Kuldeep Yadav", "Yashasvi Jaiswal",
    "Sanju Samson", "Shreyas Iyer", "Axar Patel", "Arshdeep Singh",
    "Mohammed Shami", "Ravichandran Ashwin", "Ishan Kishan", "Washington Sundar"
  ];

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Cricketer Favorites</h1>
        <p className="app__subtitle">
          Choose your favorite players.
        </p>
      </header>

      <div className="app__cards">
        {cardTitles.map((title) => (
          <Card key={title} title={title} />
        ))}
      </div>
    </div>
  );
}

export default App;
