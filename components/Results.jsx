import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  console.log(results);
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};
export default Results;
