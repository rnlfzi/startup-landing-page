import FeaturesItem from "../features-item";
import { featuresData } from "./data";

const Features = () => {
  return (
    <div className="px-5 md:px-52 py-12">
      <div className=" flex flex-col gap-8 md:gap-16">
        <h2 className="text-center">
          <span className="text-md font-bold text-custom-secondary">
            Quality features
          </span>
          <br />
          <br />
          <span className="text-2xl font-bold text-custom-maintext">
            Meet exciting feature of app
          </span>
        </h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuresData.map((item, index) => (
            <FeaturesItem
              key={index}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
