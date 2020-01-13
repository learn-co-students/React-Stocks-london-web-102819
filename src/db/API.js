
const STOCK_URL = " http://localhost:3000/stocks";

const GET_STOCK = () =>{ 
   return  fetch(STOCK_URL)
    .then(resp => resp.json())
};

export default { GET_STOCK }; 