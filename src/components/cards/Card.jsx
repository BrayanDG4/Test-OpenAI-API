export const Card = () => {
  return (
    <section className="bg-white p-5 m-5 rounded">
      <h3 className="text-2xl mb-5">
        Report/Stats Title
        <p className="text-gray-400 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          laborum.
        </p>
      </h3>

      <div
        className="flex gap-5 p-10 max-w-max border border-gray-300 rounded"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">0%</h2>
          <h4 className="inline text-gray-500 text-sm">Last Year</h4>
        </div>
      
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">0%</h2>
          <h4 className="inline text-gray-500 text-sm">This Year</h4>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-8">
        <div className="w-full lg:w-1/5">
          <div className="p-2 rounded text-center bg-teal-500 text-white">
            Total
          </div>
          <div className="border border-gray-300 rounded text-center py-8 mt-2">
            <h2 className="text-4xl font-bold pb-2">0</h2>
            <h4 className="inline text-gray-500 text-sm">Total Employee</h4>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <div className="p-2 rounded text-center bg-teal-500 text-white">
            Last Year
          </div>
          <div className="flex gap-5 mt-2">
            <div
              className="flex-grow border border-gray-300 rounded text-center py-8"
            >
              <h2 className="text-4xl font-bold pb-2">100</h2>
              <h4 className="inline text-gray-500 text-sm">Last Year Count</h4>
            </div>
            <div
              className="flex-grow border border-gray-300 rounded text-center py-8"
            >
              <h2 className="text-4xl font-bold pb-2">10%</h2>
              <h4 className="inline text-gray-500 text-sm">Last Year %</h4>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <div className="p-2 rounded text-center bg-teal-500 text-white">
            This Year
          </div>
          <div className="flex gap-5 mt-2">
            <div
              className="flex-grow border border-gray-300 rounded text-center py-8"
            >
              <h2 className="text-4xl font-bold pb-2">200</h2>
              <h4 className="inline text-gray-500 text-sm">This Year Count</h4>
            </div>
            <div
              className="flex-grow border border-gray-300 rounded text-center py-8"
            >
              <h2 className="text-4xl font-bold pb-2">20%</h2>
              <h4 className="inline text-gray-500 text-sm">This Year %</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
