import headerOptions from "../fakeDB/headerOptions.js";


const getAllHeaderOptions = () => {
    const headerOptionObject = {
        headerOptions: headerOptions
    }

    return headerOptionObject
}

export {getAllHeaderOptions}