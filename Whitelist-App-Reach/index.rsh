'reach 0.1';

const participants = {
  who: Bytes(12),
  whitelistMsg: Fun([Bytes(12)], Null),
  whitelistStatus: Fun([Bytes(12)], Null),
  getAddress: Fun([], Address),
  transferMsg: Fun([Token, UInt, Bytes(12)], Null),
  notWhitelisted: Fun([Bytes(12)], Null),
}

export const main = Reach.App(() => {

  setOptions({ untrustworthyMaps: true });

  const A = Participant('Alice', {
    ...participants,
    ammount: UInt,
    tok: Token,
  });
  const B = Participant('Bob', {
    ...participants,
  });
  const L = Participant('Love', {
    ...participants,
  })
  init();

  A.only(() => {
    const aliceName = declassify(interact.who);
    const ammount = declassify(interact.ammount);
    const tok = declassify(interact.tok);
  })
  
  A.publish(aliceName, ammount, tok);
  commit();
  
  B.only(() => {
    const addrBob = declassify(interact.getAddress());
    const bobName = declassify(interact.who);
  });
  B.publish(addrBob, bobName);
  commit();

  L.only(() => {
    const addrLove = declassify(interact.getAddress());
    const loveName = declassify(interact.who);
  });
  L.publish(addrLove, loveName);

  const whiteList = new Set();
  whiteList.insert(addrBob);

  const iswhitelisted = (addr) => whiteList.member(addr);

  const isSufficient = (token, amt) => balance(token) > amt;

  if (iswhitelisted(addrBob) && isSufficient(tok, ammount)) {
    transfer(ammount, tok).to(addrBob)
  }
  if (iswhitelisted(addrLove) && isSufficient(tok, ammount)) {
    transfer(ammount, tok).to(addrLove)
  }
  commit();

  each([A, B, L], () => {
    declassify(interact.whitelistMsg(bobName));
    declassify(interact.whitelistStatus(bobName));
    declassify(interact.transferMsg(tok, ammount, bobName));
    declassify(interact.notWhitelisted(loveName))
  })
  exit();
});
