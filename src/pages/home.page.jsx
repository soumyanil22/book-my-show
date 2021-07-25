import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../config/TempPosters.config"

const HomePage = () => {

  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setpopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Watch new movies at home every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Outdoor Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Popular Events"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
