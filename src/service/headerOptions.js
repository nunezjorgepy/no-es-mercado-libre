import headerOptions from "../fakeDB/headerOptions.js";


const getAllHeaderOptions = () => {
    const headerOptionObject = {
        headerOptions: headerOptions
    }

    return headerOptionObject
}

const getOneHeaderOption = (id) => headerOptions.find(headerOption => headerOption.id === id)

const getOptionByTitle = (title) => headerOptions.find(headerOption => headerOption.title === title)

export {getAllHeaderOptions, getOneHeaderOption, getOptionByTitle}