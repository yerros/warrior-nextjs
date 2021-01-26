import Link from 'next/link'

export default function Table(props) {
  const dataMerpati = props.pigeons || []
  return (
    <table className="text-left w-full border-collapse text-sm">
      <thead>
        <tr>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            Ring
            </th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            Induk
            </th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            Actions
            </th>
        </tr>
      </thead>
      <tbody>
        {dataMerpati.map(i => {
          return (
            <tr className="hover:bg-grey-lighter" key={i.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="/img/pigeon.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-semibold whitespace-no-wrap">
                      {i.id} /
                    <span className="text-gray-500 text-xs font-thin italic ml-1">
                        PPMBSI {i.ringPusat}
                      </span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-xs lg:text-sm font-normal border-b border-grey-light">
                <div className="flex">
                  {i.parents[0].name || "-"} <img className="h-6 mx-2" src="/img/vs.png" alt="vs" />  {i.parents[1].name || "-"}
                </div>
              </td>
              <td className="py-4 px-6 border-b border-grey-light">
                <Link href={`/merpati/edit/${i.code}`}>
                  <a className="text-grey-lighter font-bold py-1 px-3 rounded-full text-xs bg-gray-300 hover:bg-gray-200 mr-1"
                  >
                    <i className="far fa-edit mr-0 lg:mr-1"></i>
                    <span className="hidden md:inline lg:inline">Edit</span>
                  </a>
                </Link>
                <Link href={`/merpati/trah/${i.code}`}>
                  <a className="text-white font-bold py-1 px-3 rounded-full text-xs bg-pink-600 hover:bg-pink-700">
                    <i className="far fa-eye mr-0 lg:mr-1"></i>
                    <span className="hidden md:inline lg:inline">View</span>
                  </a>
                </Link>
              </td>
            </tr>

          )
        })}
      </tbody>
    </table>

  )
}
