import React from 'react'
import style from './Support.module.css'
import { GrTrophy } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu";
import { PiHandHeartLight } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Support() {
    return (
        <>
            {/* <!-- Start Section1 "support" --!> */}
            <section className={`mt-5 ${style.support}`}>
                <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-lg-3">
                    <div className={style.supportContent}>
                        <GrTrophy className={style.supportIcons} />
                        <div className={style.textContent}>
                        <h5>High Quality</h5>
                        <span>crafted from top materials</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className={style.supportContent}>
                        <LuBadgeCheck  className={style.supportIcons} />
                        <div className={style.textContent}>
                        <h5>Warranty Protection</h5>
                        <span>Over 2 years</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className={style.supportContent}>
                        <PiHandHeartLight  className={style.supportIcons} />
                        <div className={style.textContent}>
                        <h5>Free Shipping</h5>
                        <span>Order over 150 $</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className={style.supportContent}>
                        <MdOutlineSupportAgent className={style.supportIcons} />
                        <div className={style.textContent}>
                        <h5>24 / 7 Support</h5>
                        <span>Dedicated support</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* <!-- End Section1 "support" --!> */}
        </>
    );
}
