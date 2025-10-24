import React, { useEffect } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router";

const Singlecard = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const pathname=useLocation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Find the game by ID
  const game = data.find((item) => item.id === id);

  if (!game) {
    return (
      <div className="w-11/12 mx-auto text-center mt-20 text-2xl font-bold text-red-500">
        Game not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6  rounded-3xl  text-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Game Cover */}
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-1/2 h-auto object-cover rounded-2xl border-4 border-indigo-500 shadow-lg"
        />

        {/* Game Info */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-4xl font-extrabold text-indigo-400">{game.title}</h1>

          <p className="text-black text-lg">{game.description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm font-semibold">
              Category: {game.category}
            </span>
            <span className="px-3 py-1 bg-yellow-500 rounded-full text-sm font-semibold">
              ⭐ {game.ratings}
            </span>
            <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-semibold">
              Developer: {game.developer}
            </span>
          </div>

          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-3 bg-indigo-500 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-600 transition-colors text-center"
          >
            Download Game
          </a>
      <Link to={'/all-games'}><button className="btn btn-primary rounded-xl w-full">Go back</button></Link>

        </div>
        
      </div>
    </div>
  );
};

export default Singlecard;
