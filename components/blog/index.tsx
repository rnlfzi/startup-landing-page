import BlogItem from "../blogitem";
import { blogData } from "./data";

const Blog = () => {
  return (
    <div className="px-5 md:px-52 pt-12 pb-52 bg-custom-main">
      <div className="flex flex-col gap-8 md:gap-16">
        <h2 className="text-center">
          <span className="text-md font-bold text-custom-secondary">
            Quality features
          </span>
          <br />
          <br />
          <span className="text-2xl font-bold text-custom-maintext">
            Tutorials that people love most
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        {blogData.map((item, index) => (
          <BlogItem
            src={item.src}
            title={item.title}
            comment={item.comment}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
