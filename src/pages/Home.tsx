import musicPlayer from "../assets/music player.jpg";
import { Link } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";

export default function Home() {
  return (
    <div className="mt-34 md:mt-40">
      <section className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mx-6 mb-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold tracking-tight font-poppins text-lg md:text-3xl text-slate-300 tracking-wide">
            Amplifying the indie Music Movement.
          </h1>
          <p className="font-lato font-medium text-xs md:text-sm tracking-tight text-slate-400">
            No major label barriers. Just pure independent music waiting to be
            discovered. Your home for indie musicians...
          </p>

          <Link to="/discover">
            <button className="border border-indigo-600 bg-indigo-700 px-4 py-2 md:px-6 md:py-3 w-1/2 mt-4 text-white rounded-md font-semibold font-poppins text-sm md:text-base cursor-pointer hover:bg-indigo-600 active:bg-indigo-700 transition-colors duration-300 ease-out ml-0">
              Start Listening
            </button>
          </Link>
        </div>

        <div className="w-full md:h-full overflow-hidden">
          <img
            src={musicPlayer}
            alt="Music Player App"
            loading="lazy"
            className="rounded-2xl w-full h-98 object-cover"
          />
        </div>
      </section>

      <CampaignCard />
    </div>
  );
};