
export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-[60px] w-[92%]  m-auto max-w-[1920px]">
        <section className="flex flex-col justify-center items-center">
            <div>
                <img className="w-[150px] h-[50.33px]" src="/assets/Webdoors.svg" alt="MainWebdoorsImg" />
            </div>
            <div className="flex gap-5 flex-wrap w-[100%] justify-between mt-[20.67px]">
                <img className="w-[31px] h-[18px]" src="/assets/BeWebdoors.svg" alt="Be" />
                <img className="w-[20.47px] h-[20.47px]" src="/assets/InstagramWebdoors.svg" alt="Instagram" />
                <img className="w-[20.51px] h-[20.47px]" src="/assets/TwitterWebdoors.svg" alt="Twitter" />
                <img className="w-[20.85px] h-[20.53px]" src="/assets/LinkdeinWebdoors.svg" alt="Linkdein" />
                <img className="w-[20px] h-[21px]" src="/assets/FacebookWebdoors.svg" alt="Facebook" />
                <img className="w-[27px] h-[18px]" src="/assets/YoutubeWebdoors.svg" alt="Youtube" />
                <img className="w-[20px] h-[20px]" src="/assets/BasketballWebdoors.svg" alt="Basketball" />
                <img className="w-[20.1px] h-[19.91px]" src="/assets/GithubWebdoors.svg" alt="BeSponsor" />
            </div>
            <div className="flex items-center justify-center w-[102%]  m-auto  mt-[5.35px]">
                <div className="border-2 w-[10px] h-[10px] rounded-[50%]"></div>
                <div className="border-2 w-[100%]"></div>
                <div className="border-2 h-[8px]"></div>
            </div>
            <div className="flex flex-col justify-start self-start mt-[20.65px]">
                <div className="flex -translate-x-[18px] mb-[20.13px]">
                    <img className="w-[113px] h-[27.87px]" src="/assets/Dmca.comWebdoors.svg" alt="DmcaPage" />
                    <img className="w-[74.89px] h-[27.87px]" src="/assets/EbaWebdoors.svg" alt="EbaImg" />
                </div>
                <div className="mb-[24px]">
                    <h1>Copyright © 2018-{currentYear} all rights reserved</h1>
                </div>
            </div>
        </section>
    </footer>
  )
}
