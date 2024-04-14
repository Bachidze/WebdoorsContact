export default function Contact() {
  return (
    <main className="w-[92%] m-auto max-w-[1920px] mt-[50px] 3xl:mt-[200px]">
      <section className="flex flex-col justify-center items-center w-[83px] m-auto">
        <div className="flex items-center self-end relative right-[3px] 3xl:left-10">
          <div className="border border-[#8F8CEF] h-[5.7px] md:h-[6px] 3xl:h-[8px]"></div>
          <div className="border border-[#8F8CEF] w-[35px] md:w-[45px] 3xl:w-[80px]"></div>
          <div className="border border-[#8F8CEF] w-[5.7px] h-[5.7px] rounded-[50%] md:w-[7px] md:h-[7px] 3xl:w-[10px] 3xl:h-[10px]"></div>
        </div>
        <div className="mt-[6px] 3xl:mt-[14px]">
          <h1 className="text-[14px] leading-[17.5px] font-medium text-white md:text-[18px] md:leading-[18px] w-[95px] 3xl:text-[32px] 3xl:leading-10 3xl:w-[166px] ">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="mt-[37px] 3xl:mt-[60px]">
        <p className="text-center text-[16px] leading-[22px] font-medium tracking-[0.2px] max-w-[1051px] m-auto md:text-[18px] md:leading-[22.5px] 3xl:text-[20px] 3xl:leading-[25px] 3xl:tracking-[0.1px]">
          Lorem ipsum dolor sit amet, consechoLorem ipsum dolor sit amet,
          consectetur adipiscing Nisi, condimentum scelerisque viverra
          vestibulum. Augue augue elem vitae cras tempor, tristique lorem cras
          porttitor Ipsum lectus pretium rho
        </p>
      </section>
      <section className="flex flex-wrap mt-[59px] justify-center items-center mobgrid text-[12px] leading-[15px] font-medium gap-9 md:mt-[50px] md:gap-[60px] 3xl:mt-[129px]">
       <div className="flex flex-col 3xl:flex-row 3xl:gap-[65px]">
       <div className="flex items-center justify-center">
          <img className="w-[15.68px] h-[27.73px]" src="/assets/mobileWebdoors.svg" alt="mobileimg" />
          <h2 className="pl-[14px] text-[12px] leading-[15px] font-medium md:text-[16px] md:leading-5 md:text-white">(+995) 591-000000</h2>
        </div>
        <div className="flex items-center mt-[45.25px] md:mt-[65.27px] 3xl:mt-0 3xl:order-2">
          <img className="w-[24.53px] h-[17.07px]" src="/assets/ConvertWebdoors.svg" alt="ConvertImg" />
          <h2 className="pl-[14px] text-[12px] leading-[15px] font-medium md:text-[16px] md:leading-5 md:text-white">info@webdoors.ge</h2>
        </div>
       </div>
       <div className="flex flex-col 3xl:flex-row 3xl:gap-[65px]">
        <div className="flex items-center translate-y-[1px]">
          <img className="w-[15.68px] h-[27.73px]" src="/assets/mobileWebdoors.svg" alt="mobileimg" />
          <h2 className="pl-[14px] text-[12px] leading-[15px] font-medium md:text-[16px] md:leading-5 md:text-white">(+995) 599-000000</h2>
        </div>
        <div className="flex items-center mt-[40.25px] md:mt-[65.27px] 3xl:mt-0">
          <img className="w-[20.38px] h-[27.42px]" src="/assets/LocationWebdoors.svg" alt="LocationImg" />
          <h2 className="pl-[14px] text-[12px] leading-[15px] font-medium md:text-[16px] md:leading-5 md:text-white">Tbilisi, address street </h2>
        </div>
       </div>
      </section>
    </main>
  );
}
