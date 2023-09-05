import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BankingApp = () => {
  const [balance, setBalance] = useState(0);
  const [transactionAmount, setTransactionAmount] = useState('');

  const handleDeposit = () => {
    if (transactionAmount) {
      const newBalance = balance + parseFloat(transactionAmount);
      setBalance(newBalance);
      setTransactionAmount('');
    }
  };

  const handleWithdraw = () => {
    if (transactionAmount && parseFloat(transactionAmount) <= balance) {
      const newBalance = balance - parseFloat(transactionAmount);
      setBalance(newBalance);
      setTransactionAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Current Balance: {balance}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter transaction amount"
        value={transactionAmount}
        onChangeText={text => setTransactionAmount(text)}
        keyboardType="numeric"
      />
      <Button title="Deposit" onPress={handleDeposit} />
      <Button title="Withdraw" onPress={handleWithdraw} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  balance: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default BankingApp;
