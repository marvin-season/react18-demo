interface __RequestInit__ extends RequestInit {}
export const useRequest = () => {
  return async (endpoint: string, option: __RequestInit__ = {}) => {
    const config: __RequestInit__ = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...option,
    };
    const url = `${process.env.REACT_APP_BASE_URL}/${endpoint}`;
    try {
      const res = await fetch(url, config);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
};
