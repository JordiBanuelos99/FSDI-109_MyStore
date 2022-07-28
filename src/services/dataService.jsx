import axios from "axios";

let catalog = [

];

class DataService {
    serverURL = "http://127.0.0.1:5000";
    async getCatalog() {
        // call the server and get the data
        let response = await axios.get(this.serverURL + "/api/products");
        return response.data;
    }
    async saveProduct(prod) {
    // send prod to server
    let response = await axios.post(this.serverURL + "/api/products", prod);
    console.log(response.data);
    }
}

export default DataService;