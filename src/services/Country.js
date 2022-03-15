import { client, checkError }from './client';

export async function fetchCountry() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
