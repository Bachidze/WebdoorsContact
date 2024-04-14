
export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[60px] w-[92%]  m-auto max-w-[1920px] md:mt-[160px]">
        <section className="flex flex-col justify-center items-center">
            <div>
                <img className="w-[150px] h-[50.33px] md:w-[252px] md:h-[83px]" src="/assets/Webdoors.svg" alt="MainWebdoorsImg" />
            </div>
            <div className="flex gap-5 flex-wrap w-[100%] justify-between mt-[20.67px] md:mt-[64px]">
                <img className="w-[31px] h-[18px] md:w-[70px] md:h-[41px]" src="/assets/BeWebdoors.svg" alt="Be" />
                <img className="w-[20.47px] h-[20.47px] md:w-[45.72px] md:h-[45.47px]" src="/assets/InstagramWebdoors.svg" alt="Instagram" />
                <img className="w-[20.51px] h-[20.47px] md:w-[45.8px] md:h-[45.47px]" src="/assets/TwitterWebdoors.svg" alt="Twitter" />
                <img className="w-[20.85px] h-[20.53px] md:w-[46.55px] md:h-[45.59px]" src="/assets/LinkdeinWebdoors.svg" alt="Linkdein" />
                <img className="w-[20px] h-[21px] md:w-[47px] md:h-[45px]" src="/assets/FacebookWebdoors.svg" alt="Facebook" />
                <img className="w-[27px] h-[18px] md:w-[60px] md:h-[41px]" src="/assets/YoutubeWebdoors.svg" alt="Youtube" />
                <img className="w-[20px] h-[20px] md:w-[45px] md:h-[45px]" src="/assets/BasketballWebdoors.svg" alt="Basketball" />
                <img className="w-[20.1px] h-[19.91px] md:w-[44.89px] md:h-[44.22px]" src="/assets/GithubWebdoors.svg" alt="BeSponsor" />
            </div>
            <div className="flex items-center justify-center w-[102%]  m-auto  mt-[5.35px] md:w-[75%] md:relative md:left-28  md:mt-[39.41px] lg:left-40">
                <div className="border-2 w-[10px] h-[10px] rounded-[50%]"></div>
                <div className="border-2 w-[100%]"></div>
                <div className="border-2 h-[8px]"></div>
            </div>
            <div className="flex flex-col justify-start self-start mt-[20.65px] md:flex-row md:mt-[60.8px] md:relative md:w-[100%]">
                <div className="flex -translate-x-[18px] mb-[20.13px] md:order-2 md:absolute md:right-0 md:-translate-x-0">
                    <img className="w-[113px] h-[27.87px] md:w-[122.96px] md:h-[30.27px] md:order-2" src="/assets/Dmca.comWebdoors.svg" alt="DmcaPage" />
                    <img className="w-[74.89px] h-[27.87px] md:w-[81.34px] md:h-[30.27px]" src="/assets/EbaWebdoors.svg" alt="EbaImg" />
                </div>
                <div className="mb-[24px]">
                    <h1>Copyright © 2018-{currentYear} all rights reserved</h1>
                </div>
            </div>
        </section>
    </footer>
  )
}
