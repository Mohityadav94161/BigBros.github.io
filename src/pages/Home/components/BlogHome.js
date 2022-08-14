import BlogCard from "./BlogCard";
import Data from "../../Blog/BlogData/blogdata";
import BlogCard2 from "./BlogCard2";
import Data2 from "./Blogcard2data";

export default function FixedColumns() {
  return (
    <>
      <div className="py-10 ">
        <div className="flex justify-around mx-32 mt-16">
          {Data.map((data) => (
            <BlogCard data={data}></BlogCard>
          ))}
        </div>
      </div>
      <div className="py-10 ">
        <div className="flex justify-around mx-32 mt-16 ">
          {Data2.map((data) => (
            <BlogCard2 data={data}></BlogCard2>
          ))}
        </div>
      </div>
    </>
  );
}
