import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  iterations: 10, // number of requests
  vus: 3,
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
