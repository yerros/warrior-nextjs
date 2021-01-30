import Link from "next/link";

export default function Table(props) {
  const dataMerpati = props.pigeons || [];
  return (
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Ring
          </th>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Nama Burung
          </th>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Induk
          </th>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {dataMerpati.map((i) => {
          console.log(i.parrents);
          return (
            <tr className="hover:bg-grey-lighter" key={i.id}>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={i.picture || "/img/pigeon.jpeg"}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 whitespace-no-wrap">
                      {i.ring} /
                      <span className="ml-1 text-xs italic font-thin text-gray-500">
                        PPMBSI {i.ppmbsi}
                      </span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-xs font-normal border-b lg:text-sm border-grey-light">
                <div>{i.name}</div>
              </td>
              <td className="px-6 py-4 text-xs font-normal border-b lg:text-sm border-grey-light">
                <div className="flex">
                  {i.parrents.length == 0 ? "-" : i.parrents[0].name}
                  <img className="h-6 mx-2" src="/img/vs.png" alt="vs" />{" "}
                  {i.parrents.length == 0 ? "-" : i.parrents[1].name}
                </div>
              </td>
              <td className="px-6 py-4 border-b border-grey-light">
                <Link href={`/merpati/edit/${i.shortid}`}>
                  <a className="px-3 py-1 mr-1 text-xs font-bold bg-gray-300 rounded-full text-grey-lighter hover:bg-gray-200">
                    <i className="mr-0 far fa-edit lg:mr-1"></i>
                    <span className="hidden md:inline lg:inline">Edit</span>
                  </a>
                </Link>
                <Link href={`/merpati/trah/${i.shortid}`}>
                  <a className="px-3 py-1 text-xs font-bold text-white bg-pink-600 rounded-full hover:bg-pink-700">
                    <i className="mt-4 mr-0 lg:mt-0 far fa-eye lg:mr-1"></i>
                    <span className="hidden md:inline lg:inline">View</span>
                  </a>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
