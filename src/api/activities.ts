// api/activities.ts
import axios from "axios";

const BASE_URL = "https://www.frontchallenge.bigbox.com.ar";

export async function fetchActivities(
  page: number,
  limit: number
): Promise<any> {
  try {
    const response = await axios.get(
      `${BASE_URL}/activity?_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw new Error("Failed to fetch activities");
  }
}

export async function fetchActivityDetails(id: number): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/activity/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity details:", error);
    throw new Error("Failed to fetch activity details");
  }
}

export async function fetchHeader(): Promise<any> {
  try {
    const response = await axios.head(
      "https://www.frontchallenge.bigbox.com.ar/activity?_page=1&_limit=1"
    );
    const headers = response.headers;
    //const totalCount = headers["x-total-count"];
    //const linkHeader = headers["link"];

    return headers;
  } catch (error) {
    console.error("Error fetching head:", error);
    throw new Error("Failed to fetch head");
  }
}
