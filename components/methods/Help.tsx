'use client'
const data = {
  heading: "How Can We Help You?",
  content: "",
};
export default function Help() {
  return (
    <div className="bg-[#F7DEB0] sm:h-[50vh]  flex justify-center items-center max-h-[500px] relative w-full">
      <div
        className="max-h-full h-full w-full max-w-[1400px] bg-contain bg-no-repeat flex gap-[12px] flex-col background-over justify-center items-center">
        <div className="w-[80%] flex justify-between">
          <div className="space-y-[20px]">
            <p className="text-xxl text-dark-red font-bold font-DM-sans">
              How Can We Help You?
            </p>
            <p className="text-base font-normal font-DM-sans text-dark-red">
              Find out how our SEO services can help grow your business.
            </p>
          </div>
          <div className="w-[50%] z-30 relative">
            <form action="  " className="space-y-[15px]">
              <div className="flex gap-[5px] flex-col">
                <label
                  
                  className="text-dark-red capitalize font-medium text-[13px]"
                >email</label  >
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="border-[1px] border-[#ccc] text-[#787878] bg-white w-[80%] rounded placeholder:text-[#BFBFBF] placeholder:font-DM-sans px-3 p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-[5px] flex-col">
                <label
                  
                  className="text-dark-red capitalize font-medium text-[13px]"
                >Choose an option:</label >
                <select
                title="dropdown"
                  id="dropdown"
                  name="dropdown"
                  className="border-[1px] border-[#ccc] text-[#787878] bg-white w-[80%] rounded placeholder:text-[#BFBFBF] placeholder:font-DM-sans px-3 p-2">
                  <option
                    defaultValue=""
                    className="text-[#BFBFBF]"
                    style={{ color: '#ccc' }}
                    disabled
                    selected>Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>

                </select>


              </div>

            </form>
            <button
              className="px-[25px] uppercase ml-[1px] mt-[30px] py-[10px] bg-light-pink rounded text-white font-DM-sans font-medium text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

