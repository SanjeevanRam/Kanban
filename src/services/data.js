import axios from "axios";
import { SERVER_URL } from "../utils/const";

export default class DataService {
  static async fetchData() {
      const { data } = await axios.get(SERVER_URL);
      return data;
  }
}
