import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useWalletConnect } from '@walletconnect/react-native';

const chainId = "D"; // Replace with your desired chain ID (for now it does not run so this is fine)
const appId = 'your-app-id'; // Replace with your xPortal app ID (same here)

export default function App() {
  const { connect, connected, accounts, killSession } = useWalletConnect();

  const handleConnect = async () => {
    try {
      const session = await connect({
        chainId: chainId.toString(),
        appId,
      });
      console.log('Connected!', session);
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  const handleDisconnect = () => {
    if (connected) {
      killSession();
      console.log('Disconnected!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>xPortal Wallet App</Text>
      {!connected ? (
        <Button title="Connect with xPortal" onPress={handleConnect} />
      ) : (
        <>
          <Text>Connected Accounts:</Text>
          <Text>{accounts.join(', ')}</Text>
          <Button title="Disconnect" onPress={handleDisconnect} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});