import { GrUpdate } from "react-icons/gr";
const Update = () => {
  return (
    <div>
      <div className="m-8 flex items-center justify-center w-64 h-64 duration-500 bg-[#cbe7e3] rounded-lg hover:items-start hover:pt-10 hover:h-80 hover:w-72 p-8">
        <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110">
          <div className="">
            <GrUpdate className="h-44 w-44" />
          </div>
          <div className="absolute hidden text-white text-m group-hover:block mt-6 font-semibold">
            <div className="flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 w-24">
                Update Result
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-24">
                69
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Update;
