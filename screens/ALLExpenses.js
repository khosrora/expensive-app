import { StyleSheet } from "react-native";
import React from "react";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";
import { GlobalStyles } from "../constance/styles";

const ALLExpenses = () => {
  return <ExpensesOutPut expensesPeriod="Total" />;
};

export default ALLExpenses;

const styles = StyleSheet.create({});