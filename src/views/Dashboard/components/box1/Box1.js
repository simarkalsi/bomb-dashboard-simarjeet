import React from 'react'
import BshareImg from '../../asset/bshare.png'
import discordImg from '../../asset/discord.png'
import bombImg from'../../asset/bomb.png'


export default function Box1() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '60%', padding:'10px' }}>
                    <a href="#" style={{ float: 'right', margin:'5px 0px' }}>Read Investment strategy-</a>
                    <button style={{ width: '100%',borderRadius:'5px',border:'none',margin:'10px 0px', backgroundColor:'#2596be',padding:'10px',fontSize:'16px', fontWeight:'bold'}}>INVEST NOW</button>
                    <div style={{ display: 'flex' }}>
                        <button style={{ width: '50%', backgroundColor:'rgba(255, 255, 255, 0.669)', color:'black', fontSize:'16px',padding:'8px', border:'none',marginRight:'5px' ,display:'flex' , justifyContent:'center'}}> <img src={discordImg} height='20px' style={{marginRight:'5px'}} alt="" /> <p style={{color:'#000'}}> Chat on Discord </p></button>
                        <button style={{ width: '50%', backgroundColor:'rgba(255, 255, 255, 0.669)', color:'black', fontSize:'16px',padding:'8px', border:'none',marginLeft:'5px'}}>Read Docs</button>
                    </div>

                    <div style={{backgroundColor: 'rgba(43, 43, 43, 0.55)', marginTop:'10px', borderRadius:'10px', padding:'20px'}}>
                        <div style={{ display: 'flex' }}>
                            <img src={BshareImg} height='30px' alt="" />
                            <div style={{ width: '100%' }}>
                                <h3 style={{ float: 'left' }}>Boardroom</h3>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                    <p>Stake BSHARE and earn BOMB every epoch</p>
                                    <p style={{}}>TVL $1,008,430</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p style={{ float: 'right' , marginBottom:'20px '}}>Total Staked: <img src={BshareImg} height ='18px' alt="" />7232</p>

                        <div style={{display:'flex', width:'100%'}}>
                            <div style={{display:'flex',justifyContent:'space-around', width:'65%'}}>
                                <div style={{alignItems:'start'}}><p style={{fontSize:'14px'}}>Daily Returns:</p> <p style={{fontSize:'20px', float:'left', marginTop:'5px'}}>2%</p></div>
                                <div style={{alignItems:'start'}}><p style={{fontSize:'14px'}}>Your Stake</p><p style={{fontSize:'16px', float:'left', marginTop:'5px'}}> <img src={BshareImg} height='18px' alt="" />6,0000</p><p>≃$117162</p></div>
                                <div style={{alignItems:'start'}}><p style={{fontSize:'14px'}}>Earned</p><p style={{fontSize:'16px', float:'left', marginTop:'5px'}}> <img src={bombImg} height='18px' alt="" />1660,4413</p><p>≃$2988.88</p></div>
                            </div>
                            <div style={{width:'35%'}}>
                            <div style={{display:'flex', width:'100%'}}>
                                <button style={{width:'50%', border:'1px solid #fff', backgroundColor:'rgba(0,0,0,0)', borderRadius:'10px', padding:'3px' ,margin:'2px'}}>Deposit</button>
                                <button style={{width:'50%' , border:'1px solid #fff', backgroundColor:'rgba(0,0,0,0)', borderRadius:'10px', padding:'3px' ,margin:'2px'}}>Withdraw</button>
                            </div>
                            <button style={{width:'100%', border:'1px solid #fff', backgroundColor:'rgba(0,0,0,0)', borderRadius:'10px',marginTop:'5px', padding:'3px'}}>Claim Reward</button>
                        </div>
                        </div>

                    </div>
                </div>

                <div style={{ width: '40%', backgroundColor: 'rgba(43, 43, 43, 0.55)', borderRadius:'10px',margin:'10px 0px 10px 10px' }}>
                    <p style={{float:'left', padding:'10px'}}>Latest News</p>
                </div>
            </div>

        </>
    )
}
