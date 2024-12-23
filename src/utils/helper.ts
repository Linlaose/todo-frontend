const queryString = () => {};
const parse = (query: string) => {
  const result: Record<string, string> = {};
  query.split("&").forEach((item) => {
    const [key, value] = item.split("=");
    result[key] = value;
  });
  return result;
};
const stringify = (query: Record<string, string>) => {
  return Object.keys(query)
    .map((key) => {
      if (query[key] === null || query[key] === undefined) return "";
      return `${key}=${query[key]}`;
    })
    .join("&");
};
queryString.stringify = stringify;
queryString.parse = parse;
export default queryString;
