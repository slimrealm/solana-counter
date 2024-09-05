import { IdlAccounts, AnchorProvider, Program } from "@coral-xyz/anchor";
import { IDL, Counter } from "./idl";
import { clusterApiUrl, Connection, PublicKey, Keypair } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Create a dummy wallet - replace this with actual wallet implementation
const wallet = {
    publicKey: Keypair.generate().publicKey,
    signTransaction: () => Promise.reject(),
    signAllTransactions: () => Promise.reject(),
};

// Create an AnchorProvider
const provider = new AnchorProvider(connection, wallet);

// Initialize the program interface with the IDL, program ID, and provider
export const program = new Program<Counter>(IDL, provider);

export const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    program.programId,
);

// TypeScript type for the Counter data structure based on the IDL
export type CounterData = IdlAccounts<Counter>["counter"];