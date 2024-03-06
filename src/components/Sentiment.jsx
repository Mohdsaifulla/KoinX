import React from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { IoMdTrendingUp } from "react-icons/io";
import RadicalSentimentChart from "./RadialSentimentChart";
const Sentiment = ({ SentimentUp, sentimentDown }) => {
  console.log(sentimentDown);
  console.log(SentimentUp);

  return (
    <div className="shadow-xl p-2">
      <div>
        <h1 className="font-semibold text-xl pt-2">Sentiment</h1>
        <p className="font-semibold pt-2 pb-2">Key Event</p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-4 overflow-x-scroll">
        <div className="flex shadow-md rounded-md p-4 gap-2 text-justify bg-blue-200">
          <span className="pt-1">
            <BsCalendar4Event className="text-2xl font-bold rounded-full bg-blue-600 p-1" />
          </span>
          <div className="flex flex-col">
            <h1 className="font-semibold pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              perspiciatis facilis deserunt quisquam!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aliquid fugiat commodi vel culpa, vitae fuga aperiam!
              Laudantium, exercitationem. Adipisci labore deserunt pariatur
              accusantium totam. Ab esse dignissimos ipsum eligendi!
            </p>
          </div>
        </div>
        <div className="flex justify-center shadow-md rounded-md p-4 gap-2 text-justify bg-green-200">
          <span className="pt-1">
            <IoMdTrendingUp className="text-2xl font-bold rounded-full bg-green-600 p-1" />
          </span>
          <div className="flex flex-col">
            <h1 className="font-semibold pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              perspiciatis facilis deserunt quisquam!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aliquid fugiat commodi vel culpa, vitae fuga aperiam!
              Laudantium, exercitationem. Adipisci labore deserunt pariatur
              accusantium totam. Ab esse dignissimos ipsum eligendi!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-4 font-bold text-lg p-2">
          <h1>Analyst Estimates</h1>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 justify-around items-center">
          <div>
            <RadicalSentimentChart SentimentUp={SentimentUp} />
          </div>
          <div>
            <div className="flex gap-2 justify-center items-center">
              <span className="text-xs">Sentiment Up</span>
              <div className="bg-green-300 w-40 h-1 rounded-lg">
                <span></span>
              </div>
              <span>{SentimentUp}%</span>
            </div>
            <div className="flex gap-2">
            <span className="text-xs">Sentiment Low</span>
            <div className="bg-red-300 w-40 h-1 rounded-lg">
                <span></span>
              </div>
              <span>{sentimentDown}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
