import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/ad3c3750-2170-4aeb-a680-31ca98c5dbbf')
            //this is a fake api of services.json file, if it doesn't work please replace with the json file
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return {
        services
    }
}

export default useServices;