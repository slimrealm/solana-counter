<h2>Solana Counter</h2>

Simple full stack counter program with React frontend, which connects to user's wallet, reads the current state of the counter, and has an increment button which updates the counter acct on the blockchain.  React app subscribes to account changes, and updates UI when increment occurs.

anchor functions:
- initialize -- initialize the counter account
- increment -- add 1 to counter state

To get up and running:

git clone https://github.com/slimrealm/solana-counter.git
cd solana-counter/counter-anchor
yarn
anchor build 
anchor keys sync

replace all 3 remaining instances of "xYJyHeGqUt4FRvt3YHUwyZHjrWyF6G2ZSGKy8eJ4kZr" with the newly generated ID in your lib.rs: line:  declare_id!("<YourProgramIdHere>");
1 instance in:  /counter-anchor/Anchor.toml
2 instances in:  /counter-frontend/src/anchor/idl.ts

anchor deploy
anchor test (both tests should pass on the first run)

cd ../counter-frontend
yarn
npm run dev

browser  http://localhost:5173
Wallet button
Increment button → Confirm Tx with wallet
Should see counter increase within a few seconds

Based on tutorial by Abdullah Raza.  Thanks, Abdullah!

https://www.youtube.com/watch?v=vUHF1X48zM4&t=10s

https://github.com/AlmostEfficient/full-stack-solana-dev
