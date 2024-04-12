export default function Contact() {
  return (
    <main className="w-[92%] m-auto max-w-[1920px] mt-[50px]">
      <section className="flex flex-col justify-center items-center w-[83px] m-auto">
        <div className="flex items-center self-end relative right-[3px]">
          <div className="border border-[#8F8CEF] h-[5.7px]"></div>
          <div className="border border-[#8F8CEF] w-[35px]"></div>
          <div className="border border-[#8F8CEF] w-[5.7px] h-[5.7px] rounded-[50%]"></div>
        </div>
        <div className="mt-[6px]">
          <h1 className="text-[14px] leading-[17.5px] font-medium text-white">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="mt-[37px]">
        <p className="text-center text-[16px] leading-[22px] font-medium tracking-[0.2px]">
          Lorem ipsum dolor sit amet, consechoLorem ipsum dolor sit amet,
          consectetur adipiscing Nisi, condimentum scelerisque viverra
          vestibulum. Augue augue elem vitae cras tempor, tristique lorem cras
          porttitor Ipsum lectus pretium rho
        </p>
      </section>
      <section className="flex flex-wrap mt-[59px] justify-center items-center mobgrid text-[12px] leading-[15px] font-medium gap-9">
       <div className="flex flex-col">
       <div className="flex items-center justify-center">
          <img src="/assets/mobileWebdoors.svg" alt="mobileimg" />
          <h2 className="pl-[14px]">(+995) 591-000000</h2>
        </div>
        <div className="flex items-center mt-[45.25px]">
          <img src="/assets/ConvertWebdoors.svg" alt="ConvertImg" />
          <h2 className="pl-[14px]">info@webdoors.ge</h2>
        </div>
       </div>
       <div className="flex flex-col">
        <div className="flex items-center">
          <img src="/assets/mobileWebdoors.svg" alt="mobileimg" />
          <h2 className="pl-[14px]">(+995) 599-000000</h2>
        </div>
        <div className="flex items-center mt-[40.25px]">
          <img src="/assets/LocationWebdoors.svg" alt="LocationImg" />
          <h2 className="pl-[14px]">Tbilisi, address street </h2>
        </div>
       </div>
      </section>
    </main>
  );
}
