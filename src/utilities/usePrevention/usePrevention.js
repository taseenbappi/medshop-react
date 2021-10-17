import { useEffect, useState } from "react";

const usePrevention = () => {

    const [prevents, setPrevents] = useState([]);

    useEffect(() => {
        fetch("./fakeData/preventionCatagory.json")
            .then(res => res.json())
            .then(data => setPrevents(data))
    }, []);
    return [prevents];


}
export default usePrevention;