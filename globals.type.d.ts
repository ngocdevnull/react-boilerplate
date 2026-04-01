type Nil = undefined | null;
type Nillable<T> = T | undefined | null;
type Nullable<T> = T | null;
type Maybe<T> = T | undefined;

type StrOrNum = string | number;
type StrOrBool = string | boolean;
type NumOrBool = number | boolean;

type ID = StrOrNum;

type ValueOption = {
  label: string;
  value: Nullable<ID>;
  isDisabled?: boolean;
};
