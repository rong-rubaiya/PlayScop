import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGames = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-900">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((game) => (
          <Link key={game.id} to={`/singlegames/${game.id}`}>
            <div
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300
                         bg-gradient-to-br from-white/20 to-white/10 
                         rounded-2xl overflow-hidden bg-[#292c4a]"
            >
              <div className="flex items-center justify-center p-5">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="h-[300px] w-auto object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-center text-white px-3 py-1 rounded-full text-xl font-semibold">
                  ⭐ {game.ratings}
                </div>
                <h3 className="text-xl font-bold text-white">{game.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-3">{game.description}</p>
                <p className="text-sm font-semibold text-indigo-300">
                  Developer: {game.developer}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
