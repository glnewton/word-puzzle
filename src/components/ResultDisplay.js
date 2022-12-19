export const ResultDisplay = (props) => {
  const { result, x, y } = props;
  return (
    <>
      <div className="resultDisplay">
        {result !== null && (
          <p>
            {result ? `Word found at position() (${x}, ${y}) ` : "Word not found"}
          </p>
        )}
      </div>
    </>
  );
};
