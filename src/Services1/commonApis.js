import axios from "axios";

const commonApis = async (reqMethod, apiUrl, body) => {
    const reqConfig = {
        method: reqMethod,
        url: apiUrl,
        data: body,
        headers: { 'Content-Type': 'application/json' }
    }

    return await axios(reqConfig).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
export default commonApis