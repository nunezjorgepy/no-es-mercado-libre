import meliPlusList from "../fakeDB/meliPlus"

const getAllMeliPlus = () => {
    const meliPlusObject = {
        meli: {
        title: meliPlusList.title,
        benefits: meliPlusList.benefits
        }
    }
    return meliPlusObject
}


export default getAllMeliPlus