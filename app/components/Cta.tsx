"use client";
const data = {
  heading: "How Can We Help You?",
  subHeading: "Find out how our SEO services can help grow your business.",
};
export default function Cta() {
  return (
    <div className="bg-violetLight py-24 flex justify-center items-center relative w-full">
      <div className="max-h-full h-full w-full max-w-[1400px] bg-contain bg-no-repeat flex gap-[12px] flex-col justify-center items-center">
        <div className="w-[80%] xl:flex justify-between">
          <div className="space-y-[20px]">
            <p className="text-xxl text-dark-red font-bold font-primary">
              {data.heading}
            </p>
            <p className="text-base font-normal font-primary text-dark-red">
              {data.subHeading}
            </p>
          </div>
          <div className="relative bg-red-40 pt-4 md:pt-0 justify-start w-full md:w-[560px] flex flex-col items-center text-center z-30">
            <form action="#" method="post">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-left block text-sm font-medium text-dark-red"
                >
                  Email<span className="text-[#f52d2d]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 rounded-full w-full md:w-[540px]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="interest"
                  className="text-left block text-sm font-medium text-dark-red"
                >
                  What are you looking for?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-1 p-2 rounded-full w-full md:w-[540px]"
                  required
                >
                  <option value="" selected>
                    Please Select
                  </option>
                  <option value="">
                    Convert more prospects to customers from organic search
                  </option>
                  <option value="">
                    Improve my website&apos;s search rankings
                  </option>
                  <option value="">
                    Learn more about SEO and search-first strategies
                  </option>
                  <option value="">Understand SEO agency pricing</option>
                </select>
              </div>

              <div className="mt-6 text-left">
                <button
                  type="submit"
                  className="bg-light-pink w-[100px] text-white p-2 rounded-full"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
