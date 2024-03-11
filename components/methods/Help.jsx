'use client'
const data = {
  heading: "How Can We Help You?",
  content: "",
};
export default function Help() {
  return (
    <div class="bg-[#F7DEB0] max-h-full h-[50vh] relative w-full">
      <div
        class="max-h-full h-full w-full bg-contain bg-no-repeat flex gap-[12px] flex-col background-over justify-center items-center">
        <div class="w-[80%] flex justify-between">
          <div class="space-y-[20px]">
            <p class="text-xxl text-[#3B0D17] font-bold font-DM-sans">
              How Can We Help You?
            </p>
            <p class="text-base font-normal font-DM-sans text-[#3B0D17]">
              Find out how our SEO services can help grow your business.
            </p>
          </div>
          <div class="w-[50%] z-30 relative">
            <form action="  " class="space-y-[15px]">
              <div class="flex gap-[5px] flex-col">
                <label
                  for="email"
                  class="text-[#3B0D17] capitalize font-medium text-[13px]"
                >email</label  >
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="border-[1px] border-[#ccc] text-[#787878] bg-white w-[80%] rounded placeholder:text-[#BFBFBF] placeholder:font-DM-sans px-3 p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div class="flex gap-[5px] flex-col">
                <label
                  for="dropdown"
                  class="text-[#3B0D17] capitalize font-medium text-[13px]"
                >Choose an option:</label >
                <select
                  id="dropdown"
                  name="dropdown"
                  class="border-[1px] border-[#ccc] text-[#787878] bg-white w-[80%] rounded placeholder:text-[#BFBFBF] placeholder:font-DM-sans px-3 p-2">
                  <option
                    value=""
                    class="text-[#BFBFBF]"
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
              class="px-[25px] uppercase ml-[1px] mt-[30px] py-[10px] bg-[#E55447] rounded text-white font-DM-sans font-medium text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

