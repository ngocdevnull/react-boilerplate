import { useQuery } from '@tanstack/react-query';
import { locationService } from '../services/location.service';

export const useCountries = () => {
  return useQuery({
    queryKey: ['location', 'countries'],
    queryFn: locationService.getCountries,
    staleTime: Infinity,
  });
};

export const useStates = (country: string) => {
  return useQuery({
    queryKey: ['location', 'states', country],
    queryFn: () => locationService.getStates(country),
    enabled: !!country,
    staleTime: Infinity,
  });
};
