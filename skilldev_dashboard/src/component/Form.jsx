import React from 'react';
import Select from "react-dropdown-select";

const Form = () => {

    const options = [
        {
            value: 1,
            label: "Home"
        },
        {
            value: 2,
            label: "Home1"
        },
        {
            value: 3,
            label: "Home2"
        }
    ];

    return (
        <>
            <div className="w-full max-w-xs my-20 mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-center text-gray-500 pb-5">
                        Change According to You
                    </h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Home
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="write new data" />
                    </div>
                    <div className="mb-4">
                        <Select options={options} id="" placeholder="write new data" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Update your data
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="write new data" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                            Update
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                            Delete
                        </button>

                    </div>
                </form>

            </div>
        </>
    )
}

export default Form