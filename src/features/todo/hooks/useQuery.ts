import { useEffect, useState } from "react";
interface IProps<TData> {
  queryFn: () => Promise<TData | undefined>;
}
const useQuery = <TData>({ queryFn }: IProps<TData>) => {
  const [data, setData] = useState<TData>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await queryFn();
      setData(res);
    };
    void fetchData();
  }, [queryFn]);
  return { data };
};
export default useQuery;
