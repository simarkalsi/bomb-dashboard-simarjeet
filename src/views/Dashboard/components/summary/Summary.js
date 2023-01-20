import React, { useMemo, useState } from 'react';
import CountUp from 'react-countup';
import moment from 'moment';



import useBombStats from '../../../../hooks/useBombStats';
import usebShareStats from '../../../../hooks/usebShareStats';
import useBondStats from '../../../../hooks/useBondStats';
import useTreasuryAllocationTimes from '../../../../hooks/useTreasuryAllocationTimes';
import useCurrentEpoch from '../../../../hooks/useCurrentEpoch';
import useCashPriceInEstimatedTWAP from '../../../../hooks/useCashPriceInEstimatedTWAP';
import useTotalValueLocked from '../../../../hooks/useTotalValueLocked';




import bombImg from '../../asset/bomb.png'
import BShareImg from '../../asset/bshare.png'
import BBondImg from '../../asset/bbond.png'
import MetaImg from '../../asset/metamask.svg'

import { roundAndFormatNumber } from '../../../../0x';
import ProgressCountdown from '../../../Boardroom/components/ProgressCountdown';



export default function Summary() {

    const bombStats = useBombStats();
    const bShareStats = usebShareStats();
    const tBondStats = useBondStats();
    const currentEpoch = useCurrentEpoch();
    const TVL = useTotalValueLocked();



    const { to } = useTreasuryAllocationTimes();
    const cashStat = useCashPriceInEstimatedTWAP();

    



    const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
    const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
    const bombPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    );
    const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
    const bShareCirculatingSupply = useMemo(
        () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
        [bShareStats],
    );
    const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

    const bSharePriceInDollars = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
      );
      const bSharePriceInBNB = useMemo(
        () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
        [bShareStats],
      );
      const tBondCirculatingSupply = useMemo(
        () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
        [tBondStats],
      );
      const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
      const tBondPriceInDollars = useMemo(
        () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
        [tBondStats],
      );
      const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);

      const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);


    return (
        <>
            <div className='main' style={{ backgroundColor: 'rgba(43, 43, 43, 0.55)', borderRadius: '10px', padding: '20px' }}>
                <div className='mainChild1' style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}><p style={{ textAlign: 'center', width: '100%' }}>Bomb Financial Summary</p>
                    <hr style={{ width: '100%', backgroundColor: 'white' }} /></div>

                <div className='mainChild2' style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', marginTop: '20px' }}>
                    <div className='supplyTable'>
                        <table style={{ width: '100%' }}>
                            <tbody>

                                <tr >
                                    <td ></td>
                                    <td style={{ padding: '0px 10px', fontSize: '14px' }}>CURRENT SUPPLY</td>
                                    <td style={{ padding: '0px 10px', fontSize: '14px' }}>TOTAL SUPPLY</td>
                                    <td style={{ padding: '0px 10px', fontSize: '14px' }}>PRICE</td>
                                    <td ></td>
                                </tr>

                                <tr style={{ textAlign: 'center' }}>
                                    <td style={{ padding: '10px 0px', float: 'left', verticalAlign: 'middle' }}> <img src={bombImg} height='30px' alt="x" /> BOMB</td>
                                    <td style={{ textAlign: 'center' }}>{roundAndFormatNumber(bombCirculatingSupply, 2)}</td>
                                    <td style={{ textAlign: 'center' }}> {roundAndFormatNumber(bombTotalSupply, 2)}</td>
                                    <td><p style={{ margin: "0px" }}>${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}</p><p style={{ margin: "0px" }}>{bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC</p></td>
                                    <td style={{ padding: '0px 10px' }}> <img src={MetaImg} height='25px' alt="" /> </td>
                                </tr>

                                <tr style={{ textAlign: 'center' }}>
                                    <td style={{ padding: '10px 0px', float: 'left', verticalAlign: 'middle' }}><img src={BShareImg} height='30px' alt="x" />BSHARE</td>
                                    <td style={{ textAlign: 'center' }}>{roundAndFormatNumber(bShareCirculatingSupply, 2)}</td>
                                    <td style={{ textAlign: 'center' }}>{roundAndFormatNumber(bShareTotalSupply, 2)}</td>
                                    <td><p style={{ margin: "0px" }}>${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}</p><p style={{ margin: "0px" }}>{bSharePriceInBNB ? bSharePriceInBNB : '-.----'} BNB</p></td>
                                    <td><img src={MetaImg} height='25px' alt="" /></td>
                                </tr>
                                <tr style={{ textAlign: 'center' }}>
                                    <td style={{ float: 'left', padding: '10px 0px', verticalAlign: 'middle' }}><img src={BBondImg} alt="X" height='30px' /> BBOND</td>
                                    <td style={{ textAlign: 'center' }}>{roundAndFormatNumber(tBondCirculatingSupply, 2)}</td>
                                    <td style={{ textAlign: 'center' }}>{roundAndFormatNumber(tBondTotalSupply, 2)}</td>
                                    <td><p style={{ margin: "0px" }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</p><p style={{ margin: "0px" }}>{tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC</p></td>
                                    <td><img src={MetaImg} height='25px' alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className='EpochTable' style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <p>Current Epoch</p>
                        <h2 style={{ fontSize: '30px', margin: '0px' }}>{Number(currentEpoch)}</h2>
                        <hr />
                        <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                        <p>Next Epoch in</p>
                        <hr style={{ width: '70%' }} />
                        <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'center' }}> <p>Live TWAP :</p> <p style={{ color: 'green', fontWeight: 'bold' }}>{scalingFactor}</p></div>
                        <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'center' }}> <p>TVL : </p> <p style={{ color: 'green', fontWeight: 'bold' }}><CountUp style={{ fontSize: '25px' }} end={TVL} separator="," prefix="$" /></p></div>
                        <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'center' }}> <p>Last Epoch TWAP : </p> <p style={{ color: 'green', fontWeight: 'bold' }}>1.17</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
