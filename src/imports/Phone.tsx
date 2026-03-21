import imgScreenShot20201207At63918Pm1 from "figma:asset/5f0dd59e73d0bc5fc984fe5c248fe81f8117a8e0.png";
import imgPrinceEgyptPromo1 from "figma:asset/fe45718625ff8f6c8fe714ba142d1af861f9040c.png";

export default function Phone() {
  return (
    <div className="bg-[#ebece4] relative size-full" data-name="Phone">
      <div className="absolute h-[480px] left-[calc(6.25%+59.75px)] rounded-[21px] top-[188px] w-[386px]" data-name="Screen Shot 2020-12-07 at 6.39.18 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
          <img alt="" className="absolute h-[121.46%] left-[-0.05%] max-w-none top-0 w-[100.1%]" src={imgScreenShot20201207At63918Pm1} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[calc(31.25%+459.75px)] text-[#262626] text-[54px] text-center top-[188px] w-[878px]">A Voice For Positive Change For The World’s Change Makers</p>
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[calc(6.25%+76.75px)] text-[#262626] text-[54px] top-[862px] w-[878px]">The voice behind cinema’s biggest stories</p>
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[calc(6.25%+76.75px)] text-[#262626] text-[54px] top-[1678px] w-[878px]">A voice for the world’s biggest change makers</p>
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[normal] left-[calc(6.25%+76.75px)] text-[#262626] text-[54px] top-[2250px] w-[878px]">Empowering the voice of rising storytellers</p>
      <div className="absolute h-[216px] left-[calc(12.5%+85.5px)] top-[1065px] w-[384px]" data-name="prince-egypt-promo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPrinceEgyptPromo1} />
      </div>
    </div>
  );
}