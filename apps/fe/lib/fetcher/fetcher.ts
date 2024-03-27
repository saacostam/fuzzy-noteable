import { TAB_URL } from './url.constants';

interface FetcherOptions {
  headers?: Record<string, string>;
}

export const fetcher = {
  async post(url_suffix: string, payload: unknown, options?: FetcherOptions) {
    return fetch(`${TAB_URL}${url_suffix}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers ? options.headers : undefined),
      },
      body: JSON.stringify(payload),
    });
  },
  get(url_suffix: string) {
    return fetch(`${TAB_URL}${url_suffix}`);
  },
};
