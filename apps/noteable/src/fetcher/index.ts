export const fetcher = {
  async post(url: string, payload: unknown){
    return fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  },
  get(url: string){
    return fetch(url);
  }
}
