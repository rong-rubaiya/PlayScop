import React, { useEffect } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router';

const AllGames = () => {
  const data = useLoaderData();
  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <title>play-scope-all-games</title>
      <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-900">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((game) => (
          <Link key={game.id} to={`/singlegames/${game.id}`}>
            <div
              className="cursor-pointer  hover:scale-105 transition-transform duration-300
                        
                         rounded-2xl  shadow-2xl"
            >
              <div className="flex items-center justify-center p-5">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="h-[300px] w-auto object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-center text-black px-3 py-1 rounded-full text-xl font-semibold">
                  ⭐ {game.ratings}
                </div>
                <h3 className="text-xl font-bold text-blue-900">{game.title}</h3>
                <p className="text-sm text-blue-900 line-clamp-3">{game.description}</p>
                <p className="text-sm font-semibold text-blue-700">
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
