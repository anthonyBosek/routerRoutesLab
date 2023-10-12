import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { actors } from "../data";

const Actors = () => {
  const actList = actors.map((act) => <Card key={act.name} {...act} />);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actList}
      </main>
    </>
  );
};

export default Actors;
