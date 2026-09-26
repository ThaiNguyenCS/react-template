import { useState } from "react"
import { InfiniteView } from "./infinite-view";

export const Page = () => {
    const [view, setView] = useState("1");

    return <>
        <div className="flex flex-col justify-center gap-3 items-center p-10">
            <button onClick={() => setView("1")} className="w-fit">Change to view 1</button>
            <button onClick={() => setView("2")} className="w-fit">Change to view 2</button>
            {view === "1" && <InfiniteView />}
            {view === "2" && <div>Hi</div>}
        </div>

    </>
}