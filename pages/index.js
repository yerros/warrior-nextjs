import Layout from "../component/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Dashboard">
        <div className="flex flex-wrap">
          <div className="w-full p-3 md:w-1/2 xl:w-1/3">
            <div className="p-2 bg-white border rounded shadow">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="p-3 bg-green-600 rounded">
                    <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold text-gray-500 uppercase">
                    Total Revenue
                  </h5>
                  <h3 className="text-3xl font-bold">
                    $3249
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-3 md:w-1/2 xl:w-1/3">
            <div className="p-2 bg-white border rounded shadow">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="p-3 bg-green-600 rounded">
                    <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold text-gray-500 uppercase">
                    Total Revenue
                  </h5>
                  <h3 className="text-3xl font-bold">
                    $3249
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-3 md:w-1/2 xl:w-1/3">
            <div className="p-2 bg-white border rounded shadow">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="p-3 bg-green-600 rounded">
                    <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                  </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold text-gray-500 uppercase">
                    Total Revenue
                  </h5>
                  <h3 className="text-3xl font-bold">
                    $3249
                    <span className="text-green-500">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
