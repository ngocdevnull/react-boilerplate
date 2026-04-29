import type { CountryResponse, StateResponse } from '../types/location.type';

const STATES_MAP: Record<string, StateResponse[]> = {
  Australia: [
    { name: 'New South Wales', state_code: 'NSW' },
    { name: 'Victoria', state_code: 'VIC' },
    { name: 'Queensland', state_code: 'QLD' },
    { name: 'Western Australia', state_code: 'WA' },
    { name: 'South Australia', state_code: 'SA' },
    { name: 'Tasmania', state_code: 'TAS' },
    { name: 'Northern Territory', state_code: 'NT' },
    { name: 'Australian Capital Territory', state_code: 'ACT' },
  ],
  USA: [
    { name: 'California', state_code: 'CA' },
    { name: 'New York', state_code: 'NY' },
    { name: 'Texas', state_code: 'TX' },
    { name: 'Florida', state_code: 'FL' },
    { name: 'Illinois', state_code: 'IL' },
    { name: 'Pennsylvania', state_code: 'PA' },
    { name: 'Ohio', state_code: 'OH' },
    { name: 'Michigan', state_code: 'MI' },
    { name: 'Georgia', state_code: 'GA' },
    { name: 'Washington', state_code: 'WA' },
  ],
  Canada: [
    { name: 'Ontario', state_code: 'ON' },
    { name: 'Quebec', state_code: 'QC' },
    { name: 'British Columbia', state_code: 'BC' },
    { name: 'Alberta', state_code: 'AB' },
    { name: 'Manitoba', state_code: 'MB' },
    { name: 'Saskatchewan', state_code: 'SK' },
    { name: 'Nova Scotia', state_code: 'NS' },
    { name: 'New Brunswick', state_code: 'NB' },
  ],
  Russia: [
    { name: 'Moscow', state_code: 'MOW' },
    { name: 'Saint Petersburg', state_code: 'SPE' },
    { name: 'Novosibirsk', state_code: 'NVS' },
    { name: 'Yekaterinburg', state_code: 'EKB' },
  ],
  Ukraine: [
    { name: 'Kyiv', state_code: 'KY' },
    { name: 'Lviv', state_code: 'LV' },
    { name: 'Odesa', state_code: 'OD' },
    { name: 'Kharkiv', state_code: 'HA' },
  ],
  France: [
    { name: 'Île-de-France', state_code: 'IDF' },
    { name: 'Auvergne-Rhône-Alpes', state_code: 'ARA' },
    { name: "Provence-Alpes-Côte d'Azur", state_code: 'PAC' },
  ],
  Argentina: [
    { name: 'Buenos Aires', state_code: 'B' },
    { name: 'Córdoba', state_code: 'X' },
    { name: 'Santa Fe', state_code: 'S' },
  ],
  Brazil: [
    { name: 'São Paulo', state_code: 'SP' },
    { name: 'Rio de Janeiro', state_code: 'RJ' },
    { name: 'Minas Gerais', state_code: 'MG' },
  ],
  Kazakhstan: [
    { name: 'Almaty', state_code: 'ALM' },
    { name: 'Nur-Sultan', state_code: 'TSE' },
    { name: 'Shymkent', state_code: 'CIT' },
  ],
  Turkey: [
    { name: 'Istanbul', state_code: '34' },
    { name: 'Ankara', state_code: '06' },
    { name: 'Izmir', state_code: '35' },
  ],
  India: [
    { name: 'Maharashtra', state_code: 'MH' },
    { name: 'Delhi', state_code: 'DL' },
    { name: 'Karnataka', state_code: 'KA' },
    { name: 'Tamil Nadu', state_code: 'TN' },
  ],
  China: [
    { name: 'Guangdong', state_code: 'GD' },
    { name: 'Beijing', state_code: 'BJ' },
    { name: 'Shanghai', state_code: 'SH' },
    { name: 'Zhejiang', state_code: 'ZJ' },
  ],
  Pakistan: [
    { name: 'Punjab', state_code: 'PB' },
    { name: 'Sindh', state_code: 'SD' },
    { name: 'Khyber Pakhtunkhwa', state_code: 'KP' },
    { name: 'Balochistan', state_code: 'BA' },
  ],
};

const HARDCODED_COUNTRIES: CountryResponse[] = Object.keys(STATES_MAP)
  .map((name) => ({ name, iso2: '', iso3: '' }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const locationService = {
  getCountries: async (): Promise<CountryResponse[]> => {
    return HARDCODED_COUNTRIES;
  },

  getStates: async (country: string): Promise<StateResponse[]> => {
    return STATES_MAP[country] || [];
  },
};
