import { useConnection, useWallet } from "@solana/wallet-adapter-react";
export function Airdrop() {
  const wallet = useWallet(); //wallet variable, since we are in wallet provider (context api)
  const { connection } = useConnection();
  async function sendAirdropToUser() {
    await connection.requestAirdrop(wallet.publicKey, 10);
    alert("Sent");
  }
  return (
    <div>
      <input type="text" placeholder="Amount" />
      <button onClick={sendAirdropToUser}>Send airdrop</button>
    </div>
  );
}
