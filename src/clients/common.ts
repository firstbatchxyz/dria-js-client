import { AxiosInstance } from "axios";

/**
 * A utility class that exposes `post` and `get` requests
 * for other clients to use. The constructor takes in an Axios instance.
 */
export class DriaCommon {
  constructor(protected readonly client: AxiosInstance) {}

  /**
   * A POST request wrapper.
   * @param url request URL
   * @param body request body
   * @template T type of response body
   * @returns parsed response body
   */
  protected async post<T = unknown>(url: string, body: unknown) {
    const res = await this.client.post<{ success: boolean; data: T; code: number }>(url, body);
    if (res.status !== 200) {
      throw `Dria API (POST) failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    return res.data.data;
  }

  /**
   * A GET request wrapper.
   * @param url request URL
   * @param params query parameters
   * @template T type of response body
   * @returns parsed response body
   */
  protected async get<T = unknown>(url: string, params: Record<string, unknown> = {}) {
    const res = await this.client.get<{ success: boolean; data: T; code: number }>(url, { params });
    if (res.status !== 200) {
      throw `Dria API (GET) failed with ${res.statusText} (${res.status}).\n${res.data}`;
    }
    return res.data.data;
  }
}
