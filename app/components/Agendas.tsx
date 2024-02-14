const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        Event details
      </h3>
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        28 Feb 2024 - 1 Mar 2024
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-1xl px-1 py-1 md:py-4 md:px-0 md:text-2xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Ganesh and Haldi
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          03.00 PM, 28th Feb
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center text-1xl px-1 py-1 md:py-4 md:px-0 md:text-2xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Sangeet
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          8:00 PM, 28th Feb
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-1xl px-1 py-1 md:py-4 md:px-0 md:text-2xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Baarat
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          4:00 PM, 29th Feb
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-1xl px-1 py-1 md:py-4 md:px-0 md:text-2xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Reception dinner
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          8:00 PM, 29th Feb
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-center text-1xl px-1 py-1 md:py-4 md:px-0 md:text-2xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Muhurtham
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          2:54 AM, 1st Mar
        </div>
      </div>
    </div>
  );
};

export default Agendas;
