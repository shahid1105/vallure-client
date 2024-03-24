const Banner = () => {
  return (
    <div className="md:px-[140px] lg:px-[140px] px-3 grid md:grid-cols-2 lg:grid-cols-2 bg-[#171717]">
      <div className="md:py-[75px] lg:py-[75px] py-4">
        <h5 className="text-[#A8741B] text-[16px]">
          Be the first to know about exclusive offers
        </h5>
        <h1 className="md:text-5xl lg:text-5xl text-xl font-semibold text-[#FFFFFF] leading-[#60px] pt-4">
          Where Tradition Meets Innovation: Timepieces & Jewelry
        </h1>
        <p className="text-white pt-7 pb-7">
          Starting at <span className=" text-[#A8741B] text-2xl">£19.99</span>
        </p>
        <button className="btn btn-sm btn-outline py-2 px-5 text-xs text-white">
          Shop Now
        </button>
      </div>
      <div>
        <h1>this is write part</h1>
      </div>
    </div>
  );
};

export default Banner;
