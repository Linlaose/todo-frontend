import { useEffect, useState } from "react";
interface IProps<TData> {
  queryFn: () => Promise<TData | undefined>;
  queryKey: string[];
}
const useQuery = <TData>({ queryFn, queryKey }: IProps<TData>) => {
  const [data, setData] = useState<TData>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await queryFn();
      setData(res);
    };
    void fetchData();
  }, [queryFn, queryKey]);
  return { data };
};
export default useQuery;
