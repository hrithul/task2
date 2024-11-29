const axios = require('axios');
const url = 'https://aldarsandbox.egoalprime.com/egoal/api/salesdata';
const headers = {
  'x-apikey': 'exZdVmktZIyVmqe76hNqZ',
  'Authorization': 'Basic ZWdvYWxAaW5kaXRlY2g6Y15ENzZUMElSeg==',
  'Content-Type': 'application/json',
};
const Daata = {
  outlet_code: "L1-165A",
  t_code: "t0002565",
  mall_code: "yasmall",
  transaction_count: 20,
  net_sales: 3200.69,
  transaction_date: "2021-07-18T00:00:00"
};
axios.post(url, Daata, { headers })
  .then(response => {
    console.log('Success:', response.data);
})

