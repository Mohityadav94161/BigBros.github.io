
export default function Footer() {
  return (
    <footer className="bg-black h-60 opacity-80">
      <div className="mx-40 pt-10 bg-black ">
        <div className="text-white bg-black flex hover: mt-12">
          <div className="underline underline-offset-4 m-1 ">
            <a href="http:#">Find Crew & Vendors</a>
          </div>
          <div className="underline underline-offset-4 m-1 ">
            <a href="http#"> Find Work</a>
          </div>
          <div className="underline underline-offset-4 m-1 ">
            <a href ="http#"> Blog</a>
          </div>
          <div className="underline underline-offset-4 m-1">
            <a href ="http#"> About</a>
          </div>
        </div>
        <div className=" mt-12 border-t-2 bg-black border-white text-white flex justify-between">
          <h1  className=" my-2 mt-4">
            TM {new Date().getFullYear()} Rutendo. Entertainment . All Rights
            Reserved
          </h1>
          <div className = "my-2 mt-4">
          Powered by
            <a href="https://fawrbsol.com/"> FAWRBSOL</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
