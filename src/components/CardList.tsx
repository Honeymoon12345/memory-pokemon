interface Props {
  data: {
    name: string;
    url: string;
  }[];
  shuffle: () => void;
  handleCounter: () => void;
}
export default function CardList({ data, shuffle, handleCounter }: Props) {
  const handleCardClick = () => {
    shuffle();
    handleCounter();
  };

  return (
    <div className="container">
      {" "}
      {data.map((poke): JSX.Element => {
        return (
          <div
            className="flex-box"
            key={poke.url}
            onClick={() => handleCardClick()}
            style={{ cursor: "pointer" }}
          >
            <div className="pokeName">
              {poke.name[0].toUpperCase() + poke.name.substring(1)}
            </div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                poke.url.split("/")[6]
              }.png`}
            />
          </div>
        );
      })}
    </div>
  );
}
