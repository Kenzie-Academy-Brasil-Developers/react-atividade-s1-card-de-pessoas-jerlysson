import "./Devs.css";

const Developer = ({ name, age, country }) => {
  return (
    <div className="devs">
      <p>Dev:{name}</p>
      <p>Idade:{age}</p>
      <p>Pais:{country}</p>
    </div>
  );
};

export default Developer;
