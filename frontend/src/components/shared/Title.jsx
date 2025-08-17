function Title({ id, section, title, desc, spanText }) {
  return (
    <div id={id} className="pt-10 px-6 flex flex-col gap-4 items-center justify-center">
      <div className="shadow bg-[#ECEDF1] rounded-[40px] flex items-center justify-between [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_3px_#FAFBFF] py-3 px-7 text-primary">
        {section}
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold">
        {title} <span className="text-primary">{spanText}</span>
      </h1>
      <h3 className="text-sm md:w-[60%] text-text-secondary lg:text-lg text-center">{desc}</h3>
    </div>
  );
}

export default Title;
