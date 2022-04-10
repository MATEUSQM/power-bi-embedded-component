import {models} from 'powerbi-client';
import './styles.css';
import { PowerBIEmbed } from 'powerbi-client-react';

export function PowerBiEmbedded() {
    return( 
        <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: '9b3498e7-13ce-46db-b812-059415319912',
                embedUrl: `https://app.powerbi.com/reportEmbed?reportId=9b3498e7-13ce-46db-b812-059415319912&groupId=18b9cfc8-3c8c-4634-aa02-80e596391bd9&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJhbmd1bGFyT25seVJlcG9ydEVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsInNraXBab25lUGF0Y2giOnRydWV9fQ%3d%3d`,
                accessToken: 'H4sIAAAAAAAEAB1WxcrFDJJ9l3-bhrg19CLu7tnF9cZ9mHefr2dZcCioUxz5n3_s7B3nrPzn3_8YHUKhmOvpleJnB8XwIHldigQmKgh_HGJBG0HDA9c5Kp_K7nyDYRmjLTV8ZQIqxJkXrMT2r-uFP1-mFCMJ8nrlXQztY0A1L_HNM90RvCCNNrr3C_lVcZnqq5jYz25-iZR2V8tyJ9z56Hw-qztqU3DFWiKr2h1B7J-TbucgFjJYsrcPEaWNGZ8Afr-CkQw2f-MSXoXsbpJDa_ZaUBfnFJxVLPP0DaiMF3Ks7CIItGiaSMEla6rkqBysnE6BYNOcV2KKKxYb0AIJS2insFirGIwtS6KGBV2qTw47MGkmqQZCEcGbQIz6NVW5jPP-gXrlAaRxZ6Td0BZ0WTzrXt4CNH87mb-FjjbUxtPsuBIFB4LduDym7yPNnTLJDS_TiBDl9gTA6gnHiKxCpEiO7vWqTqhb9OOlVy6SKxZc1fAh0714XFS1Dz0mkM8svCcKv1GsReQA65xPHWoXJWjD1Sh02NpqH_YDrSXmVWAZnnLmueyEHD9X84y5AhM1LSm8L5LQvxth97J-nvzGi6_rosHf9FHI-jtYgDk1dMjjoCVAJI7bk1AooI9FbdifqcsXp3bfxUPEJ756dg9Kk5QcvZh1ZgiEUJFXAlLK_KPJQ9JGRqdU9YzqXmxqrkfWYZ1Z3HkseMbCUY7FpNzYtEM6BsBYlF4WEuFpzGvmU70XT4BP8t64fBhia39jQvPYfdufnPTDtkcVHvdjawM4PlzFFm2Fqqgqra_wBH_YY9S7t-HblmGyNwADVncLJQ1s5TIRLW_rTRYmUUOYTHFZJdaEHeseJUUHI48h-09kYqnrJ_9inhcFqZYTX6LOxm-0sr__LB4D79ehIt-AnMj8rHQzCcZCY7_snbYekBw81ZyRdPMW9eyrJdjpoziGoU_0QDLsx6YNO7Q2mbv-FWy5LN3fN9fghBQPr89wktd0jtr58a5NDybuS0GmfgoUxhkWCutjLtFnkEUwjAQVQqndixZWxclMwkD1vOcM9UvvefvV4M3kd0eecHdDrYEcuuqa0E3qGohENqoaECqO9IpRcIV1Q4vGkrwmuZR-T89vBDPuOM5GK_8DvyaN577pgV6loR-bAMO3rCvT2N1FkYELgXvf56Vo7o-nFpPvnobgNBA1o_6ZMeSQgKZnzYy0Quxt4UEOqRGbnpezxomy_oAf1uJ7rbBXPDeWjhYjtMCwEq4Np7dm10AJkEM89vPqndvnTb6MNYtijrfepLlY1IemPOeeljFbVIAAv3bsacf8cayqxkt_NCB06s-JXkHtbikRfvGWfyT9tfSc72N5GffofTBdaeQ5F4V-Mt_9GELhF-K1zY1WZ3Bd2M8tcFHfHhknJOrwtrM58dEQSuVcwTKAjvBh9zKaAdzvMfSXxUTus3VH9bFAzhUUBxeTKVCh07ArHLRnGPMplp1eLG62gsuGFz5YFv60Bn3raIq9j33K7PVfxpncNIWZfQ2TLou-ZvQ-r6_CegfnlLj4fE7Dr8LbEecwqPTwK0zuHRMPTkWiakuWorurb5gCr1_aWzHA3GD3XMCntTruBYVK3liT4jpIvdvP5lHSEQr4oYZCA00ToHHPAoBTggty_0PTTsOhWGtbrsjbJdQc0PnsFxp1F6YvkS1xnFrhSmY4BfyzW_MJpoA7htKdEXE2lB0VbyPZ21Optke5IMbSYnVfAOX2VzeoUCzi0w1G7xfL1azt4xR1GhF7OU6lgP5S6cItVeBrUQuSb6plOq8-Ba6oBV2bmRRjYkoIKR7KQKRc31tG3DSF2_C1CAzilp-Y0X4b3Dtnbt-0eL4xuVDFXMYFb66xoLjkOjouVN7z0z1oGlBu_-XQ9OxeEd34cR4mRNX7kyiTRDMsAu9xLyv95QuDJ_QkGmRsffHqRBp4HsLL7KXMj2SfTH25WRPVVR3S9ovJWVXR6g53Pe2FVzBmBpMOBEfjnR3j6crJXVmFISTc-ue-LUok30lWXI3glM7Oz1JyTWI3iZ7RFayLb3yE6bxur8J4UxsvcLmUGH2lv6lEHmZbtUXIutqK9OZc4sn3IqR5FfO6Ie3XvTvVgqvaS-TC6Zqu0NwjyxmxkucDEQGkAF35CI8Tj30e-01ta283DjeZCni5FxnrhaQ-6WqSB9Cpx7ARw5vAAPUM2eTOYtZcCxIKS14rt53moadLglSVkxdmgpjLnTn67EkuaHk8KIn00kBlghp8neXNBo_H76BEcMp2tFeQH3i2CzF0f9bn3XOoonMqo_q9nZInSC0pBnPEG2SIveXyRFbcW0qpvD_gUuVRoneCgdiIGYtD610FWfU6LelIF8WkHvykpT58yJRyz8NwjRJIWKiOAQ5eCEBjmTvVDve11veA-ROXbDr5OXn-UOHQ6rkDGSk2tJkaoB-uI_YvV152IEyGs7MeL-xq9TSerkDCdeMM2kVT-fHWp5btRrmXPi9cnVIYbsCMUIyl-NVkf1UFUdxSZibDsCKaFnkhUMu1GiMY6RB3gtZRyYko0gCh1YdKrnQZpQTYCDKXkhogDtDPrsmLVpChn_0ayDTEGx_qd4rgaLWM7pkLli7EaPqEdKv5dfeEqzIHUhaO4qHf6J9__cNt73LMWvX-1cEhtpKZ39TR-DA8Td8__R4FSjli5FTK_tr1imK8VMZDw7yjay1aVo1axigStwS_-9V1HJhW2qrr9bNvSwUzjzvg03Hd45lj9W-zJ7jCgMp1mBHLX3sRR2cdD0An-ogaqps2llpKEI0QDjc8SI9Z4vL4gYedoeXTQJPMByvGT96mecNvYCunl4I-2Nkt5chnpdhlOGeqAIcFcc5T9eZo7foy3DdRp0pVXiJn3pZxJsQK_Sz9T6XeedSPXCqlaAOe_Nd7MSRIhQdjgb9kzOK7zjthXHqePzzM6BH8umnLTcu-Mf_cQo4-DQf4i-lqB6Xq-mw6k5NlvU-r9sTjTWlDbBNxcHf-85__0vwubbUp4R_LktHCn_oMoKWr5VeOLQ4z5P3_KK9rpuw4t-oPNkOS66GRZ4TbvLlyTrWjJ4rBiL0Tjsh5E-C0SAA61iXwrQCf-vrJGxB03XBOaGotrVXoXXhL4TFGl5vDcGjutSYZ6BuIvnHp2RvJKlEQmopv6mm844DfuL-6sLdVZ1dLrqkREoeA-OCZ2_fZrENNc-XdSUYJemui_3sdsPCpq-Jxxh6VRe4SP9Hj32nvyATG-c8EjoK8McnSbF6y60-NG7ovra3fmFe6ib1JmfuVYkpTzSltFmzXjVY-YLErl2XW5U191F47mxXhnvUvyNUEozrX8n_98zfUKjvFlnjtQUjGGKTaObU6AQCD0e3Kb2lvemdGRxHpFL1gG39-xMRvB_Bfmv_3_wA0oL99Ag0AAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
                tokenType: models.TokenType.Embed,
                filters:[basicFilter],
                settings: {
                    panes: {
                        filters: {
                        expanded: false,
                        visible: false
                        },
                        layoutType: models.LayoutType.Custom,
                        customLayout: {
                            pageSize: {
                                type: models.PageSizeType.Custom,
                                width: 200,
                                height: 500
                            },
                            displayOption: models.DisplayOption.FitToPage,
                        },
                    },
                    background: models.BackgroundType.Transparent,
                }
            }}
            eventHandlers = { 
                new Map([
                ['loaded', function () {console.log('Report loaded');}],
                ['rendered', function () {console.log('Report rendered');}],
                ['error', function (event) {console.log(event.detail);}]
                ])
            }
            cssClassName = { "Embed-container" }

            getEmbeddedComponent = { (embeddedReport) => {
                window.report = embeddedReport;
            }}
        />
        
  );
}

const basicFilter = {
    $schema: "http://powerbi.com/product/schema#basic",
    target: {
      table: "company",
      column: "id"
    },
    operator: "In",
    values: ["1", "2", "3", "4"],
    filterType: models.FilterType.BasicFilter,
    requireSingleSelection: true
  }