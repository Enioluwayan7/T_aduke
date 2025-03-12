import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import {
  backendUrl,
  wc_consumer_key,
  wc_consumer_secret,
} from "../utils/contants";

export const wooAPI = new WooCommerceRestApi({
  url: backendUrl,
  consumerKey: wc_consumer_key,
  consumerSecret: wc_consumer_secret,
  version: "wc/v3",
});

export const getProducts = async (options) =>
  await wooAPI.get("products", options);

export const getProduct = async (id, options) =>
  await wooAPI.get(`products/${id}`, options);
