import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { directors } from "../data";

const Directors = () => {
  const dirsList = directors.map((dir) => <Card key={dir.name} {...dir} />);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {dirsList}
      </main>
    </>
  );
};

export default Directors;
