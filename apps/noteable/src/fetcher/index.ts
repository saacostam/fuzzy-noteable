import { TAB_URL } from './url.constants';

export const fetcher = {
  async post(url_suffix: string, payload: unknown) {
    return fetch(`${TAB_URL}${url_suffix}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  },
  get(url_suffix: string) {
    return fetch(`${TAB_URL}${url_suffix}`);
  },
};
