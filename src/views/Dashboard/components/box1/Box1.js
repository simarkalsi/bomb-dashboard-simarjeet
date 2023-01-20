import React, { useMemo, } from 'react';
import CountUp from 'react-countup';


import useTotalValueLocked from '../../../../hooks/useTotalValueLocked';
import { getDisplayBalance } from '../../../../utils/formatBalance';
import useTotalStakedOnBoardroom from '../../../../hooks/useTotalStakedOnBoardroom';
import useFetchBoardroomAPR from '../../../../hooks/useFetchBoardroomAPR';
import useStakedTokenPriceInDollars from '../../../../hooks/useStakedTokenPriceInDollars';
import useEarningsOnBoardroom from '../../../../hooks/useEarningsOnBoardroom';
import useStakedBalanceOnBoardroom from '../../../../hooks/useStakedBalanceOnBoardroom';
import useBombFinance from '../../../../hooks/useBombFinance';
import useHarvestFromBoardroom from '../../../../hooks/useHarvestFromBoardroom';
import useRedeemOnBoardroom from '../../../../hooks/useRedeemOnBoardroom';



import useApprove, { ApprovalState } from '../../../../hooks/useApprove';


import BshareImg from '../../asset/bshare.png'
import discordImg from '../../asset/discord.png'
import bombImg from '../../asset/bomb.png'


export default function Box1() {

    const TVL = useTotalValueLocked();
    const totalStaked = useTotalStakedOnBoardroom();
    const boardroomAPR = useFetchBoardroomAPR();
    const earnings = useEarningsOnBoardroom();
    const stakedBalance = useStakedBalanceOnBoardroom();
    const bombFinance = useBombFinance();
    const { onReward } = useHarvestFromBoardroom();

    const { onRedeem } = useRedeemOnBoardroom();

    const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);




    const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
    const tokenPriceInDollars = useMemo(
        () =>
            stakedTokenPriceInDollars
                ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
                : null,
        [stakedTokenPriceInDollars, stakedBalance],
    );

    const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);





    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '60%', padding: '10px' }}>
                    <a href="https://www.google.com/" style={{ float: 'right', margin: '5px 0px' }}>Read Investment strategy-</a>
                    <button onclick="location.href='http://www.google.com'" style={{ width: '100%', borderRadius: '5px', border: 'none', margin: '10px 0px', backgroundColor: '#2596be', padding: '10px', fontSize: '16px', fontWeight: 'bold' }}>INVEST NOW</button>
                    <div style={{ display: 'flex' }}>
                        <button onclick="location.href='http://www.example.com'" style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.669)', color: 'black', fontSize: '16px', padding: '8px', border: 'none', marginRight: '5px', display: 'flex', justifyContent: 'center' }}> <img src={discordImg} height='20px' style={{ marginRight: '5px' }} alt="" /> <p style={{ color: '#000' }}> Chat on Discord </p></button>
                        <button onclick="location.href='http://www.example.com'" style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.669)', color: 'black', fontSize: '16px', padding: '8px', border: 'none', marginLeft: '5px' }}>Read Docs</button>
                    </div>

                    <div style={{ backgroundColor: 'rgba(43, 43, 43, 0.55)', marginTop: '10px', borderRadius: '10px', padding: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <img src={BshareImg} height='30px' alt="" />
                            <div style={{ width: '100%' }}>
                                <h3 style={{ float: 'left' }}>Boardroom</h3>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                    <p>Stake BSHARE and earn BOMB every epoch</p>
                                    <p style={{}}>TVL: <CountUp style={{ fontSize: '18px' }} end={TVL} separator="," prefix="$" /></p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p style={{ float: 'right', marginBottom: '20px ' }}>Total Staked: <img src={BshareImg} height='18px' alt="" />{getDisplayBalance(totalStaked)}</p>

                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-around', width: '65%' }}>
                                <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Daily Returns:</p> <p style={{ fontSize: '20px', float: 'left', marginTop: '5px' }}>{(boardroomAPR.toFixed(2)) / 365}%</p></div>
                                <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Your Stake</p><p style={{ fontSize: '16px', float: 'left', marginTop: '5px' }}> <img src={BshareImg} height='18px' alt="" /> {getDisplayBalance(stakedBalance)} </p><p>≃${tokenPriceInDollars}</p></div>
                                <div style={{ alignItems: 'start' }}><p style={{ fontSize: '14px' }}>Earned</p><p style={{ fontSize: '16px', float: 'left', marginTop: '5px' }}> <img src={bombImg} height='18px' alt="" />{getDisplayBalance(earnings)}</p><p>≃${earnedInDollars}</p></div>
                            </div>
                            <div style={{ width: '35%' }}>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <button style={{ width: '50%', border: '1px solid #fff', backgroundColor: 'rgba(0,0,0,0)', borderRadius: '10px', padding: '3px', margin: '2px' }} onClick={approve}>Deposit</button>
                                    <button style={{ width: '50%', border: '1px solid #fff', backgroundColor: 'rgba(0,0,0,0)', borderRadius: '10px', padding: '3px', margin: '2px' }} onClick={onRedeem} >Withdraw</button>
                                </div>
                                <button style={{ width: '100%', border: '1px solid #fff', backgroundColor: 'rgba(0,0,0,0)', borderRadius: '10px', marginTop: '5px', padding: '3px' }} onClick={onReward}>Claim Reward</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{ width: '40%', backgroundColor: 'rgba(43, 43, 43, 0.55)', borderRadius: '10px', margin: '10px 0px 10px 10px' }}>
                    <p style={{ float: 'left', padding: '10px' }}>Latest News</p>
                </div>
            </div>

        </>
    )
}
