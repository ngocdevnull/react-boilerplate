export interface MillDto {
  id: ID;
  name: string;
  country: string;
  address: string;
  status: string;
  dailyCycle: string;
  expectedCapacity: number;
}

export type CreateMillPayload = Omit<MillDto, 'id' | 'status'>;
export type UpdateMillPayload = Partial<CreateMillPayload> & { status?: string };
