export const Board = (props) => {
  const { matrix } = props;
  return (
    <>
        {matrix.map((row, i) => (
          <div key={i}>
            {row.map((character, j) => (
              <button className="letter" key={j}>
                {character}
              </button>
            ))}
          </div>
        ))}

    </>
  );
};
