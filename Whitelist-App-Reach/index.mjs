import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const interact = {
  whitelistMsg: (who) => {
    console.log(`${who}'s Address has been added to whitelist.`);
  },

  whitelistStatus: (who) => {
    console.log(`${who}'s wallet has been approved for Love token transfer`);
  },

  getAddress: async () => await acc.getAddress(),
  
  transferMsg: (token, amount, who) => {
    console.log(`${who} received ${fmt(amount)}LVT Love tokens`);
  },
  notWhitelisted: (who) => {
    console.log(`Access denied! ${who} is not whitelisted and cannot receive the transfer.`);
  }
};

const fmt = (x) => stdlib.formatCurrency(x, 4);

const getBalanceN = async () => fmt(await stdlib.balanceOf(acc));

const getBalanceT = async (token) => fmt(await stdlib.balanceOf(acc, token));


const isAlice = await ask.ask(
  'Are you Alice?',
  ask.yesno
  );
  

  const isBob = !isAlice? await ask.ask(
  'Are you Bob?',
  ask.yesno
  ) : null;

const who = isAlice ? 'Alice' : isBob ? 'Bob' : 'Love';

console.log(`Welcome ${who}`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account?`,
  ask.yesno
);

if (createAcc) {
  acc = await stdlib.newTestAccount(startingBalance)
}

let ctc = null;

if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as: ${JSON.stringify(info)} `);
  })

  
  const lvt = await stdlib.launchToken(acc, 'Love Tokens', 'LVT');
  interact.tok = lvt.id;

  console.log(`Created token: Name: ${lvt.name} Unit: ${lvt.sym}`);

  const amt = await ask.ask(
    'How much do you want to transfer?',
    stdlib.parseCurrency
  );
  interact.ammount = amt;
  interact.who = 'Alice';



} else if (isBob) {

  const info = await ask.ask(
    'Please paste the contract information:',
    JSON.parse
  );
  ctc = acc.contract(backend, info);
  console.log(`${who} has attached to Alice's contract!`);

  interact.addrBob = interact.getAddress();
  interact.who = 'Bob';

} else {

  const info = await ask.ask(
    'Please paste the contract information:',
    JSON.parse
  );
  ctc = acc.contract(backend, info);
  console.log(`${who} has attached to Alice's contract!`);

  interact.addrLove = interact.getAddress();
  interact.who = 'Love';

}


const part = isAlice ? ctc.p.Alice : isBob ? ctc.p.Bob : ctc.p.Love;

await part(interact);

const balanceN = await getBalanceN();

if (isAlice) {
console.log(`Your ${stdlib.StandardUnit} wallet balance is ${balanceN}`);
}
ask.done();
