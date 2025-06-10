import type { TCacheKey } from "../types/cacheKeys";
import type { IData } from "../types/data";
import { caches } from "../cachedData";
import { useCallback, useEffect, useState } from "react";
import { useAxios } from "./useAxios";
import { isCacheExpired } from "../helpers/isCacheExpired";
import pic from "../assets/14-yarder-skip.jpg";
export const useCachedData = ({
  cacheKey,
  asc,
}: {
  cacheKey: TCacheKey;
  asc: boolean;
}) => {
  const axiosClient = useAxios();
  const [data, setData] = useState<IData[]>(caches[cacheKey].data);
  const isCacheValid = isCacheExpired(cacheKey);
  useEffect(() => {
    if (isCacheValid && data.length && caches[cacheKey].data.length) {
      // setData(data);
      console.log("returned cached data", data);
      return;
    }

    const fetchD = async () => {
      const { data }: { data: IData[] } = await axiosClient.get(
        "/skips/by-location",
        {
          params: {
            postcode: "NR32",
            area: "Lowestoft",
          },
        }
      );
      console.log(data);
      caches[cacheKey].data = data;
      setData(data);
      caches[cacheKey].expiresAt = Date.now() + 10 * 60 * 1000;
      console.log("returnd AXIOS");
    };
    fetchD();
  }, [axiosClient, data, cacheKey, isCacheValid]);
  const dataWithPic = data.map((item) => ({
    ...item,
    pic,
  }));

  const filteredDataByPrice = useCallback(() => {
    const dataFilteredDataByPrice = data.slice().sort((a, b) => {
      return asc
        ? b.price_before_vat! - a.price_before_vat!
        : a.price_before_vat! - b.price_before_vat!;
    });
    console.log("dataFilteredDataByPrice", dataFilteredDataByPrice);
    setData(dataFilteredDataByPrice);
  }, [asc, data]);

  const cleanFilter = () => {
    console.log("clean filter", caches[cacheKey].data);
    setData(caches[cacheKey].data);
  };

  return { data: dataWithPic, filteredDataByPrice, cleanFilter };
};
