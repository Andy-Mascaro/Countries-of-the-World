import { client, checkError } from './client';
import './County.css';

export async function fetchCountry() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
