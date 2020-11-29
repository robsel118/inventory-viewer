import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Product, Category } from "../types";

type DataState = "pending" | "success" | "failed" | "partial";

const UseFetchData = (
  tag: Category
): [Record<string, string>, Product[], DataState, (arg: DataState) => void] => {
  
  const [stocks, setStocks] = useState<Record<string, string>>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [dataState, setDataState] = useState<DataState>("pending");

  useEffect(() => {
    async function fetchContent(): Promise<void> {
      let productList: Product[] = [];
      let stockList: Record<string, string> = {};

      try {
        productList = await fetchProducts();

        stockList = await fetchStocks(productList);
        setStocks(stockList);
        setProducts(productList);
      } catch (error) {
        setDataState("failed");
      }
    }

    async function fetchProducts(): Promise<Product[]> {
      const res = await axios.get(
        `https://bad-api-assignment.reaktor.com/products/${tag}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": `private, max-age=${5 * 60}`,
          },
        }
      );

      const products: Product[] = res.data;

      return products;
    }

    async function fetchStocks(
      products: Product[]
    ): Promise<Record<string, string>> {
      const manufacturers = [
        ...new Set<string>(products.map((d) => d.manufacturer)),
      ];
      const promises = await axios.all<AxiosResponse>(
        manufacturers.reduce(
          (acc: Promise<AxiosResponse<any>>[], manufacturer) => {
            return [
              ...acc,
              axios.get(
                `https://bad-api-assignment.reaktor.com/availability/${manufacturer}`
              ),
            ];
          },
          []
        )
      );

      const validStock = promises
        .filter(
          (promise) =>
            promise.data.code === 200 && promise.data.response !== "[]"
        )
        .map((promise) => promise.data.response);

      const allFetched =
        validStock.length === promises.length ? "success" : "partial";

      setDataState(allFetched);

      const temp = validStock
        .flat()
        .reduce((acc: Record<string, string>, stock) => {
          acc[stock.id.toLowerCase()] = stock.DATAPAYLOAD;
          return acc;
        }, {});

      return temp;
    }
    if (dataState === "pending") fetchContent();
  }, [tag, dataState]);

  return [
    stocks,
    products,
    dataState,
    (newDataState: DataState) => setDataState(newDataState),
  ];
};

export default UseFetchData;
