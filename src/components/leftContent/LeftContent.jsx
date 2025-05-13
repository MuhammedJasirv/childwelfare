import React from "react";
import Dress from "../../assets/images/lefticon/dress 1.png";
import Lotion from "../../assets/images/lefticon/lotion.png";
import Food from "../../assets/images/lefticon/salad.png";
const LeftContent = () => {
  return (
    <div className="bg-secondbg rounded-xl  p-3 py-4 border-2 border-borderbg">
      <p className="font-malayalam font-bold text-[5px] xl:text-[10px] 2xl:text-[11px] ">
        അമ്മത്തൊട്ടിൽ വഴിയും മറ്റും സാഹചര്യങ്ങളിലും ഉപേക്ഷിക്കപ്പെട്ട വളർത്താൻ
        കഴിയാതെ രക്ഷിതാക്കൾ നേരിട്ട് ഏൽപ്പിക്കുന്നതുമായ കുട്ടികളെ
        സംരക്ഷിക്കുന്നതാണ് ശിശുക്ഷേമ സമിതിയുടെ പ്രധാന ദൗത്യം .ഇവർക്ക് സ്‌നേഹവും
        പരിച്ഛർണ്ണവും നൽകി ഒരു സുരക്ഷിത ഭാവി ഒരുക്കുകയാണ് ഞങ്ങളുടെ ലക്ഷ്യം
      </p>
      <p className="font-malayalam font-extrabold text-[5px] xl:text-[10px] 2xl:text-[11px]   mt-3">
        ഇല്ലായ്മകളിൽ തളർന്നു പോകാതെ ഓരോ കുട്ടിക്കും അവർ അർഹിക്കുന്ന ജീവിത
        സാഹചര്യ ഒരുക്കുന്നതിനുള്ള പ്രേവർത്തനങ്ങളാണ് ശിശുക്ഷേമ സമിതി
        ഏറ്റെടുത്തിട്ടുള്ളത് .പ്രേവർത്തന മേഖല വലുതാണെങ്കിലും വരുമാന
        മാർഗ്ഗത്തിന്റെ അപര്യാപ്‌തത സമിതിയുടെ മുന്നോട്ടുളള ലക്ഷ്യത്തെ സാരമായി
        ബാധിക്കുന്നുണ്ട്. ഒരു കുഞ്ഞും അനാഥരോ അരക്ഷിതരോ ആകാതിരിക്കാ നുള്ള
        സമിതിയുടെ നിതാന്ത ജാഗ്രതയ്ക്ക് ഊർജജ്ജം പ്രദാനം ചെയ്യുന്നതാണ് കുട്ടികളെ
        അതിരറ്റു സ്നേഹിക്കുന്ന സുമനസ്സുകൾ നൽകുന്ന സംഭാവനകളും സ്നേഹ സമ്മാനങ്ങളും.
      </p>

      <div className="bg-white border border-[#CAD927] rounded-xl 2xl:mt-3 xl:mt-2 mt-1 p-3">
        <div className="flex p-3 gap-5 ">
          <div>
            <p className="text-textgree font-extrabold text-[6px] xl:text-[10px] 2xl:text-[12px] font-malayalam">
              കുട്ടികൾക്ക് എന്താണ് ആവശ്യം?
            </p>
            <div className="flex items-center 2xl:mt-3 xl:mt-2 mt-1 gap-1 ">
              {" "}
              <img src={Dress} alt="Dress" />{" "}
              <p className="font-malayalam text-black font-bold text-[6px] xl:text-[9px] 2xl:text-[12px] text">വസ്ത്രങ്ങൾ</p>
            </div>
            <div className="flex items-center 2xl:mt-2 xl:mt-1 mt-0 gap-1">
              {" "}
              <img src={Lotion} alt="Dress" />{" "}
              <p className="font-malayalam text-black font-bold text-[6px] xl:text-[9px] 2xl:text-[12px]">
                ദൈനംദിന ഉപയോഗ സാധനങ്ങൾ
              </p>
            </div>
            <div className="flex items-center 2xl:mt-2 xl:mt-1 mt-0 gap-1">
              {" "}
              <img src={Food} alt="Dress" />{" "}
              <p className="font-malayalam text-black font-bold text-[6px] xl:text-[9px] 2xl:text-[12px]">ഭക്ഷണം</p>
            </div>
          </div>
          <div className="w-[2px] bg-[#CAD927]"></div>
          <div>
            <p className="text-textgree font-extrabold font-malayalam text-[13px]">
              എങ്ങനെ സഹായിക്കാം?
            </p>
            <p className="text-black font-bold 2xl:mt-2 xl:mt-1 mt-0 text-[6px] xl:text-[9px] 2xl:text-[12px]">
              ഞങ്ങളുടെ വെബ്സൈറ്റ് സന്ദർശിക്കുക
            </p>
            <p className="text-textligthgree font-bold text-[10px] 2xl:text-[14px] xl:text-[12px] 2xl:mt-2 xl:mt-1 mt-0">: 👉DONATE NOW</p>
            <p className="text-black font-malayalam font-bold text-[6px] xl:text-[9px] 2xl:text-[12px] 2xl:mt-2 xl:mt-1 mt-0">
              നിങ്ങളുടെ സംഭാവന ഓർഡർ ചെയ്യു.
            </p>
          </div>
        </div>
        <p className="text-textligthgree font-extrabold text-[10px] 2xl:text-[14px] xl:text-[10px] 2xl:mt-3 xl:mt-1 mt-1 ">
          നിങ്ങൾ ഓർഡർ ചെയ്യുന്ന അവശ്യ സാധനങ്ങൾ ഈ കുഞ്ഞുങ്ങളിലേക്ക്
          എത്തിച്ചേരുന്നതുവരെയുള്ള എല്ലാ ഘട്ടങ്ങളിലും നിങ്ങൾക്ക് അറിയിപ്പുകൾ
          ലഭിക്കുന്നതാണ്
        </p>
      </div>
      <p className="text-[5px] xl:text-[10px] 2xl:text-[11px] 2xl:mt-4 xl:mt-2 mt-1 font-malayalam font-bold">കുട്ടികളുടെ ദാവി സുരക്ഷിതവും സന്തോഷകരവുമാക്കാൻ പങ്കാളിയാവു. നിങ്ങളുടെ ചെറിയ സഹായം വലിയ മാറ്റം സ്യഷ്ടിക്കും.</p>
      <p className="text-[5px] xl:text-[10px] 2xl:text-[11px] 2xl:mt-2 xl:mt-1 mt-0 font-malayalam font-bold">ഈ സന്ദേശം നിങ്ങളുടെ സുഹൃത്തുക്കളുമായി ഷെയർ ചെയ്യൂ, കുടിചേരാം, കുഞ്ഞുങ്ങളുടെ വളർച്ചക്കായി സഹായിക്കാം</p>
    </div>
  );
};

export default LeftContent;
