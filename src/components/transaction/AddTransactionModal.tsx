import { Avatar, Button, FormLabel, Sheet, TextField } from "@mui/joy";
import { ButtonBase, Grid } from "@mui/material";
import SnapModal from "components/common/SnapModal";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { TranstionTypes } from "utils/@types/transactions";
import TransactionIcon from "./TransactionIcon";

type AddTransactionModalProps = {
  open?: boolean;
  onSubmit?: (data: Record<string, unknown>) => void;
  onClose?: () => void;
};

export default function AddTransactionModal({
  open,
  onSubmit,
  onClose,
}: AddTransactionModalProps) {
  const [transactionType, setTransactionType] = useState<TranstionTypes>();
  const [formValues, setFormValues] = useState({
    title: undefined,
    description: undefined,
    amount: undefined,
  });

  useEffect(() => {
    if (open) {
      setTransactionType(undefined);
      setFormValues({
        title: undefined,
        description: undefined,
        amount: undefined,
      });
    }
  }, [open]);

  const handleFormChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormValues((ps) => ({ ...ps, [field]: e.target.value }));
    };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ type: transactionType, ...formValues });
    if (onClose) onClose();
  };

  const renderChoseType = () => (
    <Grid container justifyContent="center" spacing={2}>
      {Object.values(TranstionTypes).map((value) => (
        <Grid item md={3} xs={6}>
          <ButtonBase
            className="w-full"
            onClick={() => setTransactionType(value)}
          >
            <Sheet className="flex w-full flex-col items-center rounded-lg !bg-slate-100 p-4">
              <Avatar variant="plain" size="sm">
                <TransactionIcon type={value} />
              </Avatar>
              <FormLabel htmlFor={value}>{value}</FormLabel>
            </Sheet>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );

  const renderForm = () => (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={formValues.title}
        onChange={handleFormChange("title")}
      />
      <TextField
        label="Description"
        value={formValues.description}
        onChange={handleFormChange("description")}
      />
      <TextField
        label="Amount"
        value={formValues.amount}
        onChange={handleFormChange("amount")}
        type="number"
      />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            fullWidth
            color="neutral"
            onClick={() => setTransactionType(undefined)}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button type="submit" fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <SnapModal open={open} onClose={handleClose}>
      <div className="my-4 mx-2 h-full">
        {!transactionType ? renderChoseType() : renderForm()}
      </div>
    </SnapModal>
  );
}
