import mainNovedadesSection from "../fakeDB/headerNovedades.js";

const getAllNovedades = () => {
    const novedadeObject = {
        novedades: mainNovedadesSection
    }

    return novedadeObject
};

export default getAllNovedades