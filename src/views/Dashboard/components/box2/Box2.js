import React from 'react'
import bombbtcbImg from '../../asset/bombbtcb.png'
import bsharebnbImg from '../../asset/bsharebnb.png'
import bombImg from'../../asset/bomb.png'
import btcbImg from'../../asset/btcb.png'
import bshareImg from '../../asset/bshare.png'
import bnbImg from '../../asset/bnb.png'

import useTotalValueLocked from '../../../../hooks/useTotalValueLocked';


import CountUp from 'react-countup';



export default function Box2() {
    const TVL = useTotalValueLocked();
    
    return (
        <>
            <div style={{ backgroundColor: 'rgba(43, 43, 43, 0.55)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <div style={{ textAlign: 'left' }}><h3 style={{ width: '100%', float: 'left' }}>Bomb Farms</h3>
                        <p>Stake your LP Tokens in our farms to start earning $BSHARE</p>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <button style={{ backgroundColor: 'rgba(0,0,0,0)', border: '1px solid #fff', borderRadius: '10px', padding: '7px' }}>Claim All</button>
                    </div>
                </div>

                <div style={{ padding: '10px 40px 10px 40px' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                        <img src={bombbtcbImg} height='40px' alt="" />
                            <div style={{display:"flex" ,marginLeft:'10px'}}>
                            <p style={{ display: 'inline-block',alignSelf: 'flex-end',}}>BOMB-BTCB</p>
                            <div style={{ display: 'inline-block',alignSelf: 'flex-end',backgroundColor: 'green', fontSize: '14px', marginLeft: '10px', padding: '2px 3px 0px 3px', borderRadius: '5px' }}><p>Recommended</p></div>
                        </div>
                        </div>
                        <div>
                            <p style={{ float: 'right', alignSelf: 'right' }}>TVL: <CountUp style={{ fontSize: '25px' }} end={TVL} separator="," prefix="$" /></p>
                        </div>
                    </div>
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                        <div style={{ display: 'flex', width: '45%', justifyContent: 'space-around' }}>
                            <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Daily Returns:</p> <p style={{ fontSize: '20px', float: 'left', marginTop: '5px' }}>2%</p></div>
                            <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Your Stake</p><p style={{ fontSize: '16px', float: 'left', marginTop: '5px' }}> <img src={bombImg} height='18px' alt="" />6,0000</p><p>≃$117162</p></div>
                            <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Earned</p><p style={{ fontSize: '16px', float: 'left', marginTop: '5px' }}> <img src={btcbImg} height='18px' alt="" />1660,4413</p><p>≃$2988.88</p></div>
                        </div>
                        <div style={{ width: '40%', padding: '20px' }}>
                            <button style={{ margin: '10px' , backgroundColor:'rgba(0,0,0,0)', border:'1px solid #fff',borderRadius:'10px', padding:'5px 10px'}}>Deposit</button>
                            <button style={{ margin: '10px' ,  backgroundColor:'rgba(0,0,0,0)', border:'1px solid #fff',borderRadius:'10px', padding:'5px 10px'}}>Withdraw</button>
                            <button style={{ margin: '10px',  backgroundColor:'rgba(0,0,0,0)', border:'1px solid #fff',borderRadius:'10px', padding:'5px 10px'}}>Claim Reward</button>
                        </div>
                    </div>

                </div>
                <hr />
                <div style={{ padding: '10px 40px 10px 40px', marginTop:'20px' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        <img src={bsharebnbImg} height='40px' alt="" />
                            <div style={{display:"flex" ,marginLeft:'10px'}}>
                            <p style={{ display: 'inline-block',alignSelf: 'flex-end',}}>BSHARE-BNB</p>
                            <div style={{ display: 'inline-block',alignSelf: 'flex-end',backgroundColor: 'green', fontSize: '14px', marginLeft: '10px', padding: '2px 3px 0px 3px', borderRadius: '5px' }}><p>Recommended</p></div>
                        </div>
                        </div>
                        
                        <div>
                            <p style={{ float: 'right', alignSelf: 'right' }}>TVL: $1,008,430</p>
                        </div>
                    </div>
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'20px' }}>
                    <div style={{ display: 'flex', width: '45%', justifyContent: 'space-around' }}>
                            <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Daily Returns:</p> <p style={{ fontSize: '20px', float: 'left', marginTop: '5px' }}>2%</p></div>
                            <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Your Stake</p><p style={{ fontSize: '16px', float: 'left', marginTop: '5px' }}> <img src={bshareImg} height='18px' alt="" />6,0000</p><p>≃$117162</p></div>
                            <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Earned</p><p style={{ fontSize: '16px', float: 'left', marginTop: '5px' }}> <img src={bnbImg} height='16px' alt="" />1660,4413</p><p>≃$2988.88</p></div>
                        </div>
                        <div style={{ width: '40%', padding: '20px' }}>
                        <button style={{ margin: '10px' , backgroundColor:'rgba(0,0,0,0)', border:'1px solid #fff',borderRadius:'10px', padding:'5px 10px'}}>Deposit</button>
                            <button style={{ margin: '10px' ,  backgroundColor:'rgba(0,0,0,0)', border:'1px solid #fff',borderRadius:'10px', padding:'5px 10px'}}>Withdraw</button>
                            <button style={{ margin: '10px',  backgroundColor:'rgba(0,0,0,0)', border:'1px solid #fff',borderRadius:'10px', padding:'5px 10px'}}>Claim Reward</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
