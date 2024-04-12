import { useState } from "react";

export default function Inputs() {
  const [active, setActive] = useState(0);

  const handleInputClick = (itemNum:number) => {
    if (active === itemNum) {
      setActive(0);
    } else {
      setActive(itemNum);
    }
  };

  const handleInputChange = (event:any) => {
    const { value } = event.target;
    if (active === 5 && value.length === window.innerWidth) {
      event.target.value += '\n';
    }
  };

  return (
    <main className="w-[92%] m-auto max-w-[1920px] mt-[120px]">
      <section>
        <form className="gridbg-transparent">
          <div className="grid gap-[25px]  ">
            <div className="relative">
              <input
                maxLength={30}
                className={`bg-transparent border-b-2 w-[100%] outline-none rounded-[5px] pb-[15px] font-bold text-[16px] opacity-60 -tracking-[1px] leading-5 ${
                  active === 1
                    ? "border-b-[#8F8CEF] text-white placeholder:text-white opacity-90"
                    : ""
                }`}
                placeholder="Your Name"
                type="text"
                onClick={() => handleInputClick(1)}
              />
              {active === 1 ? (
                <div className="border-2 w-[8px] h-[8px] rounded-[50%] absolute bottom-[0.5px] border-[#8F8CEF]"></div>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <input
                className={`bg-transparent border-b-2 w-[100%] outline-none rounded-[5px] pb-[15px] font-bold text-[16px] opacity-60 -tracking-[1px] leading-5 ${
                  active === 2
                    ? "border-b-[#8F8CEF] text-white placeholder:text-white opacity-90"
                    : ""
                }`}
                placeholder="Lastname"
                type="text"
                onClick={() => handleInputClick(2)}
              />
              {active === 2 ? (
                <div className="border-2 w-[8px] h-[8px] rounded-[50%] absolute bottom-[0.5px] border-[#8F8CEF]"></div>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <input
                className={`bg-transparent border-b-2 w-[100%] outline-none rounded-[5px] pb-[15px] font-bold text-[16px] opacity-60 -tracking-[1px] leading-5 ${
                  active === 3
                    ? "border-b-[#8F8CEF] text-white placeholder:text-white opacity-90"
                    : ""
                }`}
                placeholder="E-Mail"
                type="email"
                onClick={() => handleInputClick(3)}
              />
              {active === 3 ? (
                <div className="border-2 w-[8px] h-[8px] rounded-[50%] absolute bottom-[0.5px] border-[#8F8CEF]"></div>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <input
                className={`bg-transparent border-b-2 w-[100%] outline-none rounded-[5px] pb-[15px] font-bold text-[16px] opacity-60 -tracking-[1px] leading-5 remove-arrow ${
                  active === 4
                    ? "border-b-[#8F8CEF] text-white placeholder:text-white opacity-90"
                    : ""
                }`}
                placeholder="Mobile Number"
                type="number"
                onClick={() => handleInputClick(4)}
              />
              {active === 4 ? (
                <div className="border-2 w-[8px] h-[8px] rounded-[50%] absolute bottom-[0.5px] border-[#8F8CEF]"></div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-[25px]">
            <div className="relative">
              <textarea
                className={`bg-transparent border-b-2 w-[100%] break-words min-h-[193px] outline-none rounded-[5px] pb-[15px] font-bold text-[16px] opacity-60 -tracking-[1px] leading-5 ${
                  active === 5
                    ? "border-b-[#8F8CEF] text-white placeholder:text-white opacity-90"
                    : ""
                }`}
                placeholder="Message"
                onClick={() => handleInputClick(5)}
                onChange={handleInputChange}
              />
              {active === 5 ? (
                <div className="border-2 w-[8px] h-[8px] rounded-[50%] absolute bottom-[7px] border-[#8F8CEF]"></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
