export default function HomePage() {

    return (
        <div className="grid grid-flow-col grid-cols-3 grid-rows-4 bg-indigo-400 sm:grid-flow-row md:flex flex-row justify-center lg:bg-green-400 lg:flex-col items-end">
            <div className="bg-red-400">
                Child 1
            </div>

            <div className="bg-blue-400">
                Child 2
            </div>

            <div className="bg-green-400">
                Child 3
            </div>

            <div className="bg-yellow-400">
                Child 4
            </div>

            <div className="bg-teal-400">
                Child 5
            </div>
        </div>
    )
}

// background colors are not ti