import aboutMainPage from "../assets/Images/aboutMainImage.png";
import apj from "../assets/Images/apj.png";
import einstein from "../assets/Images/einstein.png";
import nelsonMandela from "../assets/Images/nelsonMandela.png";
import steveJobs from "../assets/Images/steveJobs.png";
import HomeLayout from "../layouts/HomeLayout";

function Aboutus() {
  return (
    <HomeLayout>
      <div className="flex flex-col pt-10 pl-20 text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 spacing-y-10">
            <h1 className="pb-10 text-5xl font-semibold text-blue-500">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Discover quality education at affordable rates on our platform. We
              are committed to making learning accessible to all, offering
              top-notch courses without the hefty price tag. Our curated
              selection ensures you receive value without compromise.
            </p>
          </section>
          <div className="w-1/2">
            <img
              src={aboutMainPage}
              className="drop-shadow-2xl"
              alt="about main page"
            />
          </div>
        </div>
        <div className="w-1/2 mx-auto my-10 carousel">
          <div id="slide1" className="relative w-full carousel-item">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apj}
                className="w-40 border-2 border-gray-400 rounded-full "
              />
              <p className="text-xl text-gray-200">
                Excellence is a continuous process and not an accident.
              </p>
              <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="relative w-full carousel-item">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={steveJobs}
                className="w-40 border-2 border-gray-400 rounded-full "
              />
              <p className="text-xl text-gray-200">
                Your time is limited, so don't waste it living someone else's
                life.
              </p>
              <h3 className="text-2xl font-semibold">Steve Jobs</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="relative w-full carousel-item">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={nelsonMandela}
                className="w-40 border-2 border-gray-400 rounded-full "
              />
              <p className="text-xl text-gray-200">
                Do not judge me by my successes, judge me by how many times I
                fell down and got back up again.
              </p>
              <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="relative w-full carousel-item">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={einstein}
                className="w-40 border-2 border-gray-400 rounded-full "
              />
              <p className="text-xl text-gray-200">
                Imagination is more important than knowledge. Knowledge is
                limited. Imagination encircles the world
              </p>
              <h3 className="text-2xl font-semibold">Einstien</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Aboutus;
