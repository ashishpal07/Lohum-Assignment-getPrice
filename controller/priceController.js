
const axios = require('axios');
const cheerio = require('cheerio');

module.exports.getPrice = async (req, res) => {
    try {
        let price = await scrapWebAndGetPrice();
        return res.status(200).json({ price });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

async function scrapWebAndGetPrice() {

    const url = process.env.URL;
    
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);
    
    const priceElement = $('.strong___1JlBD');
    
    const price = priceElement.text();
    
    return price;

}