import axios from "axios";
import ax from "../../common/api-client/apiClient";
import { success_code } from "../../common/utils/constants";

export async function getHome(text: string) {
  try {
    const { data } = await ax.get(`/search/suggestions?q=${text}`);
    const result = data.map((item: any) => ({
      label: item.package.name,
      value: item.package.name,
    }));
    return result;
  } catch (err) {}
}
export async function getDetails(queryKey: any) {
  try {
    const [, packageName] = queryKey; // Extract package name from query key
    const response = await axios.get(`https://api.npms.io/v2/package/${packageName}`);
    return response.data; // Return the package data
  } catch (error) {
    throw error;
  }
}
