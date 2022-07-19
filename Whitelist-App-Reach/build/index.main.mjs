// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc4],
      2: [ctc0, ctc1, ctc4, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v144 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v145 = [v144];
  const v149 = stdlib.protect(ctc2, interact.ammount, 'for Alice\'s interact field ammount');
  const v150 = stdlib.protect(ctc3, interact.tok, 'for Alice\'s interact field tok');
  const v151 = stdlib.protect(ctc4, interact.who, 'for Alice\'s interact field who');
  
  const txn1 = await (ctc.sendrecv({
    args: [v151, v149, v150],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc2, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v157, v158, v159], secs: v161, time: v160, didSend: v33, from: v156 } = txn1;
      
      const v162 = v145[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0')];
      const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '1')];
      const v165 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '2')];
      const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v164, v165];
      const v167 = stdlib.Array_set(v145, stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'), v166);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v159
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v157, v158, v159], secs: v161, time: v160, didSend: v33, from: v156 } = txn1;
  const v162 = v145[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0')];
  const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '1')];
  const v165 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '2')];
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v164, v165];
  const v167 = stdlib.Array_set(v145, stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'), v166);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc5, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v173, v174], secs: v176, time: v175, didSend: v43, from: v172 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc5, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v181, v182], secs: v184, time: v183, didSend: v53, from: v180 } = txn3;
  ;
  await stdlib.mapSet(map0, v173, null);
  const v190 = v167[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
  const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
  const v192 = stdlib.gt(v191, v158);
  if (v192) {
    const v199 = stdlib.sub(v191, v158);
    const v202 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '1')];
    const v203 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '2')];
    const v204 = [v199, v202, v203];
    const v205 = stdlib.Array_set(v167, stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '0'), v204);
    ;
    const v206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v181), null);
    let v207;
    switch (v206[0]) {
      case 'None': {
        const v208 = v206[1];
        v207 = false;
        
        break;
        }
      case 'Some': {
        const v209 = v206[1];
        v207 = true;
        
        break;
        }
      }
    const v210 = v205[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
    const v211 = v210[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
    const v212 = stdlib.gt(v211, v158);
    const v213 = v207 ? v212 : false;
    if (v213) {
      ;
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Alice'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Alice'
        });
      
      return;
      }}
  else {
    const v248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v181), null);
    let v249;
    switch (v248[0]) {
      case 'None': {
        const v250 = v248[1];
        v249 = false;
        
        break;
        }
      case 'Some': {
        const v251 = v248[1];
        v249 = true;
        
        break;
        }
      }
    const v255 = v249 ? false : false;
    if (v255) {
      ;
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Alice'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Alice'
        });
      
      return;
      }}
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v144 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v145 = [v144];
  const v152 = stdlib.protect(ctc2, interact.who, 'for Bob\'s interact field who');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v157, v158, v159], secs: v161, time: v160, didSend: v33, from: v156 } = txn1;
  const v162 = v145[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0')];
  const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '1')];
  const v165 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '2')];
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v164, v165];
  const v167 = stdlib.Array_set(v145, stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'), v166);
  ;
  ;
  const v171 = stdlib.protect(ctc5, await interact.getAddress(), {
    at: './index.rsh:39:51:application',
    fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:13:function exp)'],
    msg: 'getAddress',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v158, v159, v167, v171, v152],
    evt_cnt: 2,
    funcNum: 1,
    lct: v160,
    onlyIf: true,
    out_tys: [ctc5, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v173, v174], secs: v176, time: v175, didSend: v43, from: v172 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v173, v174], secs: v176, time: v175, didSend: v43, from: v172 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc5, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v181, v182], secs: v184, time: v183, didSend: v53, from: v180 } = txn3;
  ;
  await stdlib.mapSet(map0, v173, null);
  const v190 = v167[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
  const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
  const v192 = stdlib.gt(v191, v158);
  if (v192) {
    const v199 = stdlib.sub(v191, v158);
    const v202 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '1')];
    const v203 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '2')];
    const v204 = [v199, v202, v203];
    const v205 = stdlib.Array_set(v167, stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '0'), v204);
    ;
    const v206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v181), null);
    let v207;
    switch (v206[0]) {
      case 'None': {
        const v208 = v206[1];
        v207 = false;
        
        break;
        }
      case 'Some': {
        const v209 = v206[1];
        v207 = true;
        
        break;
        }
      }
    const v210 = v205[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
    const v211 = v210[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
    const v212 = stdlib.gt(v211, v158);
    const v213 = v207 ? v212 : false;
    if (v213) {
      ;
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Bob'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Bob'
        });
      
      return;
      }}
  else {
    const v248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v181), null);
    let v249;
    switch (v248[0]) {
      case 'None': {
        const v250 = v248[1];
        v249 = false;
        
        break;
        }
      case 'Some': {
        const v251 = v248[1];
        v249 = true;
        
        break;
        }
      }
    const v255 = v249 ? false : false;
    if (v255) {
      ;
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Bob'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Bob'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Bob'
        });
      
      return;
      }}
  
  
  
  
  
  };
export async function Love(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Love expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Love expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v144 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v145 = [v144];
  const v153 = stdlib.protect(ctc2, interact.who, 'for Love\'s interact field who');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v157, v158, v159], secs: v161, time: v160, didSend: v33, from: v156 } = txn1;
  const v162 = v145[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0')];
  const v164 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '1')];
  const v165 = v162[stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '2')];
  const v166 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v164, v165];
  const v167 = stdlib.Array_set(v145, stdlib.checkedBigNumberify('./index.rsh:35:5:dot', stdlib.UInt_max, '0'), v166);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc5, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v173, v174], secs: v176, time: v175, didSend: v43, from: v172 } = txn2;
  ;
  const v179 = stdlib.protect(ctc5, await interact.getAddress(), {
    at: './index.rsh:46:52:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'getAddress',
    who: 'Love'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v158, v159, v167, v173, v179, v153],
    evt_cnt: 2,
    funcNum: 2,
    lct: v175,
    onlyIf: true,
    out_tys: [ctc5, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v181, v182], secs: v184, time: v183, didSend: v53, from: v180 } = txn3;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v173, null);
      const v190 = v167[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
      const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
      const v192 = stdlib.gt(v191, v158);
      if (v192) {
        const v199 = stdlib.sub(v191, v158);
        const v202 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '1')];
        const v203 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '2')];
        const v204 = [v199, v202, v203];
        const v205 = stdlib.Array_set(v167, stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '0'), v204);
        sim_r.txns.push({
          kind: 'from',
          to: v173,
          tok: v159
          });
        const v206 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v181), null);
        let v207;
        switch (v206[0]) {
          case 'None': {
            const v208 = v206[1];
            v207 = false;
            
            break;
            }
          case 'Some': {
            const v209 = v206[1];
            v207 = true;
            
            break;
            }
          }
        const v210 = v205[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
        const v211 = v210[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
        const v212 = stdlib.gt(v211, v158);
        const v213 = v207 ? v212 : false;
        if (v213) {
          sim_r.txns.push({
            kind: 'from',
            to: v181,
            tok: v159
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v159
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v159
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v248 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v181), null);
        let v249;
        switch (v248[0]) {
          case 'None': {
            const v250 = v248[1];
            v249 = false;
            
            break;
            }
          case 'Some': {
            const v251 = v248[1];
            v249 = true;
            
            break;
            }
          }
        const v255 = v249 ? false : false;
        if (v255) {
          sim_r.txns.push({
            kind: 'from',
            to: v181,
            tok: v159
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v159
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v159
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc5, ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v181, v182], secs: v184, time: v183, didSend: v53, from: v180 } = txn3;
  ;
  await stdlib.mapSet(map0, v173, null);
  const v190 = v167[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
  const v191 = v190[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
  const v192 = stdlib.gt(v191, v158);
  if (v192) {
    const v199 = stdlib.sub(v191, v158);
    const v202 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '1')];
    const v203 = v190[stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '2')];
    const v204 = [v199, v202, v203];
    const v205 = stdlib.Array_set(v167, stdlib.checkedBigNumberify('./index.rsh:59:30:application', stdlib.UInt_max, '0'), v204);
    ;
    const v206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v181), null);
    let v207;
    switch (v206[0]) {
      case 'None': {
        const v208 = v206[1];
        v207 = false;
        
        break;
        }
      case 'Some': {
        const v209 = v206[1];
        v207 = true;
        
        break;
        }
      }
    const v210 = v205[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
    const v211 = v210[stdlib.checkedBigNumberify('./index.rsh:56:47:application', stdlib.UInt_max, '0')];
    const v212 = stdlib.gt(v211, v158);
    const v213 = v207 ? v212 : false;
    if (v213) {
      ;
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Love'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Love'
        });
      
      return;
      }}
  else {
    const v248 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v181), null);
    let v249;
    switch (v248[0]) {
      case 'None': {
        const v250 = v248[1];
        v249 = false;
        
        break;
        }
      case 'Some': {
        const v251 = v248[1];
        v249 = true;
        
        break;
        }
      }
    const v255 = v249 ? false : false;
    if (v255) {
      ;
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Love'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.whitelistMsg(v174), {
        at: './index.rsh:67:37:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.whitelistStatus(v174), {
        at: './index.rsh:68:40:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'whitelistStatus',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.transferMsg(v159, v158, v174), {
        at: './index.rsh:69:36:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'transferMsg',
        who: 'Love'
        });
      stdlib.protect(ctc0, await interact.notWhitelisted(v182), {
        at: './index.rsh:70:39:application',
        fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:22:function exp)'],
        msg: 'notWhitelisted',
        who: 'Love'
        });
      
      return;
      }}
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAEEAgigjQYmAgEAACI1ADEYQQLfKWRJIls1ASEEWzUCMRkjEkEACDEAKChmQgKtNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEABxkklDEABYCUSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKIls1/yEEWzX+VxARNf1XISA1/Ek1BUlXACA1+1cgDDX6gARkD8XONPtQNPpQsDT8KIABAWY0/VcAEUk1+SJbSTX4NP8NQQCVsSKyATT/shIkshA0/LIUNP6yEbM0+4gCPkk19iJVQAAGIjX3QgAGIzX3QgAANPc0+DT/CRY0+VcICFA0+VcQAVBXABEiWzT/DRBBAC6xIrIBNP+yEiSyEDT7shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgFvsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAVU0+4gBvUk19iJVQAAGIjX3QgAGIzX3QgAANPcUIhBBAC6xIrIBNP+yEiSyEDT7shQ0/rIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgEGsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAOxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUkiWzX/IQRbNf5XEBE1/Uk1BUlXACA1/FcgDDX7gAQt61nxNPxQNPtQsDT/FjT+FlA0/VA0/FAoSwFXAEFnSCU1ATIGNQJCAKhIIQWIAQAiNAESRDQESSISTDQCEhFESTUFSUlXAAw1/4EMWzX+gRRbNf2ABAjeXAs0/1A0/hZQNP0WULCBEa9JNfxXABE1+yEErzT7VwgIUDT7VxABUDX6IQWIAKmxIrIBIrISJLIQMgqyFDT9shGzNP4WNP0WUDT6UChLAVcAIWdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 65,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T4",
                "name": "v157",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v159",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T4",
                "name": "v157",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v159",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v173",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T4",
                "name": "v174",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v181",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T4",
                "name": "v182",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v173",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T4",
                "name": "v174",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v181",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T4",
                "name": "v182",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200156838038062001568833981016040819052620000269162000453565b6000805543600355620000386200023f565b604080513381528351602080830191909152808501518051516001600160a01b031916838501529081015160608301528201516001600160a01b0316608082015290517febab74726890755c50cede0e442c7c5bc4be3044ba1b83f2998269c2dbc842d39181900360a00190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051859052815151840151815190940193909352805151820151835190151592019190915251905162000103929062000192565b6060820152620001163415600762000215565b62000120620002a6565b602080840180518201518352516040908101516001600160a01b0316838301526060840151818401526001600081905543905551620001629183910162000525565b6040516020818303038152906040526002908051906020019062000188929190620002c7565b50505050620005f5565b6200019c62000356565b60005b6001811015620001f257848160018110620001be57620001be6200050f565b6020020151828260018110620001d857620001d86200050f565b602002015280620001e9816200058e565b9150506200019f565b50818184600181106200020957620002096200050f565b60200201529392505050565b816200023b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027262000356565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a162000356565b905290565b6040805160608101825260008082526020820152908101620002a162000356565b828054620002d590620005b8565b90600052602060002090601f016020900481019282620002f9576000855562000344565b82601f106200031457805160ff191683800117855562000344565b8280016001018555821562000344579182015b828111156200034457825182559160200191906001019062000327565b5062000352929150620003a3565b5090565b60405180602001604052806001905b6200038c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003655790505090565b5b80821115620003525760008155600101620003a4565b604080519081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b600081830360808112156200046757600080fd5b62000471620003ba565b83518152601f198201915060608212156200048b57600080fd5b62000495620003f1565b6020831215620004a457600080fd5b620004ae62000422565b60208601519093506001600160a01b031981168114620004cd57600080fd5b8352918252604084015160208301526060840151916001600160a01b0383168314620004f857600080fd5b604081019290925260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b815181526020808301516001600160a01b03168183015260408084015160a0840192919081850160005b600181101562000583578251805183528581015186840152840151151584830152918401916060909101906001016200054f565b505050505092915050565b6000600019821415620005b157634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005cd57607f821691505b60208210811415620005ef57634e487b7160e01b600052602260045260246000fd5b50919050565b610f6380620006056000396000f3fe6080604052600436106100565760003560e01c8063145b75011461005f5780631e93b0f11461007257806325435f29146100965780633bc5b7bf146100a957806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b61005d61006d366004610ab4565b61010e565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100a4366004610ab4565b610427565b3480156100b557600080fd5b506100c96100c4366004610ae5565b6105c5565b60405161008d9190610b18565b3480156100e257600080fd5b50600154610083565b3480156100f757600080fd5b506101006105dc565b60405161008d929190610b8b565b61011e600260005414600c610679565b6101388135158061013157506001548235145b600d610679565b60008080556002805461014a90610bc5565b80601f016020809104026020016040519081016040528092919081815260200182805461017690610bc5565b80156101c35780601f10610198576101008083540402835291602001916101c3565b820191906000526020600020905b8154815290600101906020018083116101a657829003601f168201915b50505050508060200190518101906101db9190610cec565b90506101e5610902565b7fa847e45f2a4f5d9926095eeccf58207a237c8bdd35b5b00950f62f1cc111d6df3384604051610216929190610daf565b60405180910390a161022a3415600b610679565b6060820180516001600160a01b03908116600090815260046020526040808220805460ff1916600117905592519091168152819020805462ff000019169055825190830151515111156103a45781516040830151515161028a9190610df8565b815152604082810180515160209081015184518201529051518201518351901515920191909152820151606083015183516102c69291906106a3565b60006102e06102db6040860160208701610ae5565b6106b7565b5160018111156102f2576102f2610b02565b14156103045760006020820152610339565b60016103196102db6040860160208701610ae5565b51600181111561032b5761032b610b02565b141561033957600160208201525b8060200151610349576000610363565b81516040830151825161035f919060009061077b565b5151115b1561038957602080830151610389916103829060408701908701610ae5565b84516106a3565b6000808055600181905561039f9060029061093c565b505050565b60006103b96102db6040860160208701610ae5565b5160018111156103cb576103cb610b02565b14156103dd5760006040820152610412565b60016103f26102db6040860160208701610ae5565b51600181111561040457610404610b02565b141561041257600160408201525b8060400151610422576000610363565b610389565b6104376001600054146009610679565b6104518135158061044a57506001548235145b600a610679565b60008080556002805461046390610bc5565b80601f016020809104026020016040519081016040528092919081815260200182805461048f90610bc5565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508060200190518101906104f49190610e0f565b90507f6d28b81d8f4a6bd79ff70ddfdf57d9307efd5f1f0c721808a1a1be2a86c734ec3383604051610527929190610daf565b60405180910390a161053b34156008610679565b610543610979565b815181526020808301516001600160a01b0316818301526040808401518184015261057391908501908501610ae5565b6001600160a01b0316606082015260026000554360015560405161059b908290602001610e59565b604051602081830303815290604052600290805190602001906105bf9291906109a5565b50505050565b6105cd610a29565b6105d6826106b7565b92915050565b6000606060005460028080546105f190610bc5565b80601f016020809104026020016040519081016040528092919081815260200182805461061d90610bc5565b801561066a5780601f1061063f5761010080835404028352916020019161066a565b820191906000526020600020905b81548152906001019060200180831161064d57829003601f168201915b50505050509050915091509091565b8161069f5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6106ae8383836107ef565b61039f57600080fd5b6106bf610a29565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156106ee576106ee610b02565b141561076b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561072f5761072f610b02565b600181111561074057610740610b02565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610783610a3c565b60005b60018110156107cf578481600181106107a1576107a1610dcc565b60200201518282600181106107b8576107b8610dcc565b6020020152806107c781610edb565b915050610786565b50818184600181106107e3576107e3610dcc565b60200201529392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161084e91610ef6565b60006040518083038185875af1925050503d806000811461088b576040519150601f19603f3d011682016040523d82523d6000602084013e610890565b606091505b50915091506108a1828260026108c0565b50808060200190518101906108b69190610f12565b9695505050505050565b606083156108cf5750816108fb565b8251156108df5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610696565b9392505050565b6040805160c081019091526000606082018181526080830182905260a083019190915281905b815260006020820181905260409091015290565b50805461094890610bc5565b6000825580601f10610958575050565b601f0160209004906000526020600020908101906109769190610a87565b50565b6040805160808101825260008082526020820152908101610998610a3c565b8152600060209091015290565b8280546109b190610bc5565b90600052602060002090601f0160209004810192826109d35760008555610a19565b82601f106109ec57805160ff1916838001178555610a19565b82800160010185558215610a19579182015b82811115610a195782518255916020019190600101906109fe565b50610a25929150610a87565b5090565b6040805160608101909152806000610928565b60405180602001604052806001905b610a71604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081610a4b5790505090565b5b80821115610a255760008155600101610a88565b600060608284031215610aae57600080fd5b50919050565b600060608284031215610ac657600080fd5b6108fb8383610a9c565b6001600160a01b038116811461097657600080fd5b600060208284031215610af757600080fd5b81356108fb81610ad0565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610b3d57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015610b7a578181015183820152602001610b62565b838111156105bf5750506000910152565b8281526040602082015260008251806040840152610bb0816060850160208701610b5f565b601f01601f1916919091016060019392505050565b600181811c90821680610bd957607f821691505b60208210811415610aae57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610c3357610c33610bfa565b60405290565b8051801515811461077657600080fd5b600082601f830112610c5a57600080fd5b60408051602080820182811067ffffffffffffffff82111715610c7f57610c7f610bfa565b835281606086810188811115610c9457600080fd5b875b81811015610cde5782818b031215610cae5760008081fd5b610cb6610c10565b815181528582015186820152610ccd888301610c39565b818901528452928401928201610c96565b509398975050505050505050565b600060c08284031215610cfe57600080fd5b6040516080810181811067ffffffffffffffff82111715610d2157610d21610bfa565b604052825181526020830151610d3681610ad0565b6020820152610d488460408501610c49565b604082015260a0830151610d5b81610ad0565b60608201529392505050565b803582526020810135610d7981610ad0565b6001600160a01b0316602083015260408101356001600160a01b03198116808214610da357600080fd5b80604085015250505050565b6001600160a01b0383168152608081016108fb6020830184610d67565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015610e0a57610e0a610de2565b500390565b600060a08284031215610e2157600080fd5b610e29610c10565b825181526020830151610e3b81610ad0565b6020820152610e4d8460408501610c49565b60408201529392505050565b815181526020808301516001600160a01b03168183015260408084015160c0840192919081850160005b6001811015610eb557825180518352858101518684015284015115158483015291840191606090910190600101610e83565b50505050506060830151610ed460a08401826001600160a01b03169052565b5092915050565b6000600019821415610eef57610eef610de2565b5060010190565b60008251610f08818460208701610b5f565b9190910192915050565b600060208284031215610f2457600080fd5b6108fb82610c3956fea264697066735822122071c7fdd4999d21881f39e1b1381223b3e55e4cde22433541437c01d6d32250e464736f6c634300080c0033`,
  BytecodeLen: 5480,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob,
  "Love": Love
  };
export const _APIs = {
  };
