import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutPut";

const RecentExpenses = () => {
  return <ExpensesOutPut expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
