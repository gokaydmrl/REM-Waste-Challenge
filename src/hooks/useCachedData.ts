import type { TCacheKey } from "../types/cacheKeys";
import type { IData } from "../types/data";
import { caches } from "../cachedData";
import { useEffect, useState } from "react";
import { isCacheExpired } from "../helpers/isCacheExpired";
import pic from "../assets/14-yarder-skip.jpg";
import { useAxiosContext } from "../context/AxiosContext";
export const useCachedData = ({ cacheKey }: { cacheKey: TCacheKey }) => {
  const axiosClient = useAxiosContext();
  const [data, setData] = useState<IData[]>(caches[cacheKey].data);
  const isCacheValid = isCacheExpired(cacheKey);
  useEffect(() => {
    if (isCacheValid && data.length && caches[cacheKey].data.length) {
      return;
    }

    const fetchData = async () => {
      const { data }: { data: IData[] } = await axiosClient.get(
        "/skips/by-location",
        {
          params: {
            postcode: "NR32",
            area: "Lowestoft",
          },
        }
      );
      caches[cacheKey].data = data;
      setData(data);
      caches[cacheKey].expiresAt = Date.now() + 10 * 60 * 1000;
    };
    fetchData();
  }, [axiosClient, data, cacheKey, isCacheValid]);
  const dataWithPic = data.map((item) => ({
    ...item,
    pic,
  }));

  return {
    data: dataWithPic,
    setData,
  };
};
