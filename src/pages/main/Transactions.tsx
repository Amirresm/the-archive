import { Add, DeleteOutline } from "@mui/icons-material";
import {
  List,
  ListDivider,
  ListItem,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import { Fab, Grid, Typography } from "@mui/material";
import AddTransactionModal from "components/transaction/AddTransactionModal";
import TransactionIcon from "components/transaction/TransactionIcon";
import { Fragment, useState } from "react";
import { TranstionTypes } from "utils/@types/transactions";

export default function Transactions() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [transactionsData, setTransactionsData] = useState([
    {
      title: "qweqwe",
      description: "qweqwe",
      type: TranstionTypes.EXPENSE,
      amount: 200,
    },
    {
      title: "asddda",
      description: "asdqweeqwe",
      type: TranstionTypes.INCOME,
      amount: 200,
    },
    {
      title: "teqwe",
      description: "jfgsdf",
      type: TranstionTypes.EXPENSE,
      amount: 200,
    },
  ]);

  const handleAddTransaction = (data: Record<string, unknown>) => {
    setTransactionsData((ps) => [
      ...ps,
      {
        title: data.title,
        type: data.type,
        amount: data.amount,
      } as any,
    ]);
  };
  const handleDeleteTransaction = (t: Record<string, unknown>) => {
    setTransactionsData((ps) => ps.filter(({ title }) => title !== t.title));
  };

  const renderTransactionsList = () => (
    <List>
      {transactionsData.map((t, index) => (
        <Fragment key={t.title}>
          <ListItem
            endAction={
              <IconButton
                variant="plain"
                onClick={() => handleDeleteTransaction(t)}
              >
                <DeleteOutline color="error" />
              </IconButton>
            }
          >
            <ListItemDecorator>
              <TransactionIcon type={t.type} />
            </ListItemDecorator>
            <Grid container>
              <Grid item xs>
                <ListItemContent>
                  <Typography>{t.title}</Typography>
                  <Typography variant="body2">{t.description}</Typography>
                </ListItemContent>
              </Grid>
              <Grid item xs={3} container alignItems="center">
                <ListItemContent>
                  <Typography>{t.amount}</Typography>
                </ListItemContent>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </ListItem>
          {index !== transactionsData.length - 1 && <ListDivider />}
        </Fragment>
      ))}
    </List>
  );

  const renderFab = () => (
    <div className="absolute bottom-4 right-4">
      <Fab color="secondary" onClick={() => setAddModalOpen((ps) => !ps)}>
        <Add />
      </Fab>
    </div>
  );

  return (
    <div className="mt-2">
      {renderTransactionsList()}
      {renderFab()}
      <AddTransactionModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={handleAddTransaction}
      />
    </div>
  );
}
