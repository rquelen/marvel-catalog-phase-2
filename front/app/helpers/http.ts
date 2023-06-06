export const get = async <T>(url: string): Promise<T> => {
  const cacheStrategy = process.env.TEST_MODE ? "no-store" : "force-cache";
  const response = await fetch(url, {
    cache: cacheStrategy,
  });
  return (await response.json()) as T;
};
