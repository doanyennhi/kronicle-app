import Layout from "../../components/Layout";
import style from "./CheckoutOne.module.css";
import { useState } from "react";

const CheckoutOne = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  return (
    <Layout className={style["container"]} header footer>
      <div className={style["wrapper"]}>
        <div className={style["logo-wrapper"]}>
          <div>
            <a href={"check-out-1"} className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon1Orange.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoTextMain"]}>SHIPPING DETAILS</h3>
            </a>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} />
          <div>
            <a href={"check-out-2"} className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon2Black.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoText"]}>PAYMENT METHOD</h3>
            </a>
          </div>
          <img src={"../../media/icons/checkout/Line.svg"} alt={"Line"} />
          <div>
            <a href={"check-out-3"} className={style["icon-wrapper"]}>
              <img
                src={"../../media/icons/checkout/CheckoutIcon3Black.svg"}
                className={style["logo"]}
                alt={"Logo"}
              />
              <h3 className={style["logoText"]}>CONFIRMATION</h3>
            </a>
          </div>
        </div>

        <form className={style["form"]}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={style["input"]}
          />
          <label>Middle Name</label>
          <input
            type="text"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            className={style["input"]}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={style["input"]}
          />
          <label>Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={style["input"]}
          />
          <label>Shipping Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={style["input"]}
          />
          <label>Postal Code</label>
          <input
            type="text"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            className={style["input"]}
          />
        </form>

        <div className={style["button-wrapper"]}>
          <button className={style["next-button"]}>NEXT</button>
          <button className={style["cancel-button"]}>CANCEL</button>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutOne;
