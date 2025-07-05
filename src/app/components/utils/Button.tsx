
export default function Button({text}: {text?: string}) {
  return (
    // <button className="bg-btn text-white font-semibold text-sm px-5 py-3 rounded-xl after:bg-[#5163FF] after:absolute after:top-0 after:left-0 after:w-4/5 after:h-full relative">{text}</button>
    <button className="bg-btn text-white font-medium text-sm cursor-pointer px-3 xl:px-5 py-2 xl:py-3 rounded-lg xl:rounded-[10px] btn_shadow text-shadow-sm text-shadow-black/20">{text}</button>
  )
}
