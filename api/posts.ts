import {client} from '@sanity/client';

export function index() {
  const query = encodeURIComponent('*[_type == "pet"]');

  client.fetch()
}
