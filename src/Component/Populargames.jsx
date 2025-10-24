import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const Populargames = () => {
  const data = useLoaderData(); 
  const navigate = useNavigate();

  // Sort games by rating descending and pick top 6
  const popularGames = data
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gradient 
                     text-blue-900
                     ">
        Popular Games
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
        {popularGames.map((game) => (
           <Link to={`/singlegames/${game.id}`}>
          <div
            key={game.id}
            onClick={() => navigate(`/game/${game.id}`)}
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300
                      
                       rounded-2xl  overflow-hidden bg-[#01113d]"
          >
            <div className="flex items-center justify-center p-5 ">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="h-[300px] w-auto  object-cover rounded-t-2xl"
              />
              
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className=" flex items-center justify-center text-white
                               px-3 py-1 rounded-full text-xl font-semibold ">
                <p>⭐ {game.ratings}</p>
              </div>
              <h3 className="text-xl font-bold text-white">{game.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3">{game.description}</p>
              <p className="text-sm font-semibold text-indigo-300">Developer: {game.developer}</p>
            </div>
          </div>
          </Link>
        ))}
        
      </div>
      
      <div className="
      flex justify-center items-center mt-12">
        <Link to={'/all-games'}>
        <button className="btn btn-primary bg-blue-900 w-80 py-8 text-xl rounded-4xl" > All Games</button></Link>
      </div>
    </div>
  );
};

export default Populargames;
