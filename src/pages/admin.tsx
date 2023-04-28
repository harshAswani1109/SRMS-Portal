import Image from "next/image";
import Navbar from "../../components/navbar";
import Strength from "../../components/adminComponents/noOfStudents";
import Subject from "../../components/adminComponents/subjectList";
import Update from "../../components/adminComponents/updateResult";
const adminInterface = () => {
  return (
    <main>
      <Navbar />
      <div className="bg-[#cbe7e3] h-screen ">
        <div className="flex justify-center items-center h-100vh py-20 px-40">
          <div className="bg-[#f7f7f7] h-[600px] w-2/12 rounded-l-3xl ">
            <div className="text-center h-[500px] my-6">
              <span className="text-xl font-bold">HELLO ADMIN</span>
              <hr className="mt-4" />
              <div className="py-4">
                <ul>Activity Log</ul>
                <ul className="my-4">Strength of Class</ul>
                <ul className="my-4">Assignment Marks</ul>
                <ul className="my-4">CT's Marks</ul>
                <ul className="my-4">Check Results</ul>
                <ul className="my-4">Update Results</ul>
                <ul>User Manual</ul>
              </div>
            </div>
            <div className="text-center h-[100px] my-8">LOG OUT</div>
          </div>
          <div className="bg-[#fefeff] h-[600px] w-10/12 rounded-r-3xl">
            <h2 className="text-3xl font-bold flex items-center justify-center mt-4">
              Manage Results
            </h2>
            <hr className="mt-4" />
            <div className="flex flex-wrap justify-center items-center">
              <Strength />
              <Subject />

              <Update />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default adminInterface;
