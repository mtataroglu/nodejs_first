const axios = require("axios")
const URL = 'https://nodejs.org'

const getSomething = async (url) => {
    try {
        const {data, status} = await axios.get(url)
        return data
    } catch (error) {
        console.log("ERR::",error)
    }
}

async function run(){
    const result = await getSomething(URL)
    console.log("result::", result)

}

run()