import React from 'react'
import bbondImg from '../../asset/bbond.png'

import useBondStats from '../../../../hooks/useBondStats';
import {getDisplayBalance} from '../../../../utils/formatBalance';
import useTokenBalance from '../../../../hooks/useTokenBalance';
import useBombFinance from '../../../../hooks/useBombFinance';





export default function Box3() {

    const bondStat = useBondStats();
    const bombFinance = useBombFinance();


    const bondBalance = useTokenBalance(bombFinance?.BBOND);



    return (
        <>
            <div style={{ backgroundColor: 'rgba(43, 43, 43, 0.55)', borderRadius: '10px', marginTop: '20px', padding: '20px' }}>
                <div style={{ display: 'flex' }}>
                    <img src={bbondImg} height='40px' alt="" />
                    <div style={{ textAlign: 'left' }}>
                        <h3 style={{ width: '100%' }}>BONDS</h3>
                        <p>BOND can be purchase only on contraction periods, when TWAP of BOMB is below 1</p>
                    </div>
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 50px 10px 50px' }}>
                    <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Current Price: (Bomb)^2</p> <p style={{ fontSize: '20px', float: 'left', marginTop: '10px' }}>10,000 BBOND={Number(bondStat?.tokenInFtm).toFixed(4) || '-'}</p></div>
                    <div><p style={{fontSize:'14px'}}>Available to redeem</p>
                        <p style={{ marginTop:'5px', fontSize: '25px' }}> <img src={bbondImg} height='30px' alt="" /> {getDisplayBalance(bondBalance)}</p></div>
                    <div style={{}}>
                        <div>
                        <button className='button' style={{margin:'10px'}}>Purchase BBond</button>                        
                        <button className='button'>Redeem Bomb</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}