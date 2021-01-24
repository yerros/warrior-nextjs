import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function ModalTambah(props) {

    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // If useCached is true and results are are cached it
        // returns cached results
        console.log(string, results)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">Tambah Merpati</h3>
                        </div>
                        <div className="relative p-6 flex-auto w-full">
                            <div className="grid grid-cols-1 gap-4">
                                <label className="block">
                                    <span className="text-gray-700">Ring / Nama</span>
                                    <input type="text" name="name" className="my-1 block w-96 rounded-full bg-white shadow-md border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Ring Pusat</span>
                                    <input type="text" name="SI" className="my-1 block w-96 rounded-full bg-white shadow-md border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Warna</span>
                                    <input type="text" name="color" className="my-1 block w-96 rounded-full bg-white shadow-md border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Tanggal Menetas</span>
                                    <input type="date" name="dob" className="my-1 block w-96 rounded-full bg-white shadow-md border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Kelamin?</span>
                                    <select className="my-1 block w-full mt-1 rounded-full shadow-md border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <option>Pilih salah satu</option>
                                        <option>Jantan</option>
                                        <option>Betina</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Induk Jantan</span>
                                    <div className="my-1 block w-96 rounded-full bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <ReactSearchAutocomplete
                                            className="bg-red-100"
                                            items={items}
                                            onSearch={handleOnSearch}
                                            onSelect={handleOnSelect}
                                            onFocus={handleOnFocus}
                                        />
                                    </div>
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Induk Betina</span>
                                    <div className="my-1 block w-96 rounded-full bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                        <ReactSearchAutocomplete
                                            className="bg-red-100"
                                            items={items}
                                            onSearch={handleOnSearch}
                                            onSelect={handleOnSelect}
                                            onFocus={handleOnFocus}
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <button onClick={props.onClick} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }} >Close </button>
                            <button onClick={props.onClick} className="bg-pink-600 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }} >Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalTambah
