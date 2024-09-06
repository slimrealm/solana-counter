<h2>Solana Counter</h2>

Simple full stack counter anchor program with React frontend, which connects to user's wallet, reads the current state of the counter, and has an increment button which updates the counter acct on the blockchain.  React app subscribes to account changes, and updates UI when increment occurs.

Based on tutorial by Abdullah Raza.  Thanks, Abdullah!  
https://www.youtube.com/watch?v=vUHF1X48zM4&t=10s  
https://github.com/AlmostEfficient/full-stack-solana-dev

anchor functions:
- initialize -- initialize the counter account
- increment -- add 1 to counter state
<br>
<h3>How to run:</h3>

Clone then build anchor program:
```
git clone https://github.com/slimrealm/solana-counter.git
cd solana-counter/counter-anchor
yarn
anchor build 
anchor keys sync
```
Replace the 2 instances of "xYJyHeGqUt4FRvt3YHUwyZHjrWyF6G2ZSGKy8eJ4kZr" in /counter-frontend/src/anchor/idl.ts with the newly generated ID in your /counter-anchor/programs/counter/src/lib.rs.  
(from this line:  ```declare_id!("<YourProgramIdHere>");``` )

Then:
```
anchor deploy
```
(optional) ```anchor test``` (both tests should pass on the first run)

Then to set up front end:
```
cd ../counter-frontend
yarn
npm run dev
```
Setup done!  Open browser to: http://localhost:5173

Make sure the wallet you want to connect is set to **DEVNET**.

Click 'Select Wallet' button, and connect your wallet.

Click 'Increment' button and confirm Tx with wallet when prompted.

Counter should increase within a few seconds.
