import { StyleSheet, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constance/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 50.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 90.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e3",
    description: "make a book",
    amount: 14.29,
    date: new Date("2021-12-19"),
  },
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 50.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: "A pair of trousers",
    amount: 90.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e6",
    description: "make a book",
    amount: 14.29,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 50.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "A pair of trousers",
    amount: 90.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e9",
    description: "make a book",
    amount: 14.29,
    date: new Date("2021-12-19"),
  },
];

const ExpensesOutPut = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutPut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
