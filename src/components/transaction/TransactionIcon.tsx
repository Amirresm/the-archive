import {
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { cond, constant } from "lodash";
import { TranstionTypes } from "utils/@types/transactions";

type TransactionIconProps = {
  type: TranstionTypes;
};
export default function TransactionIcon({ type }: TransactionIconProps) {
  const icon = cond([
    [
      (t: TranstionTypes) => t === TranstionTypes.INCOME,
      constant(<AddCircle color="success" />),
    ],
    [
      (t: TranstionTypes) => t === TranstionTypes.EXPENSE,
      constant(<RemoveCircle color="error" />),
    ],
    [
      (t: TranstionTypes) => t === TranstionTypes.BORROW,
      constant(<AddCircleOutline color="success" />),
    ],
    [
      (t: TranstionTypes) => t === TranstionTypes.LOAN,
      constant(<RemoveCircleOutline color="error" />),
    ],
  ])(type);

  return icon;
}
