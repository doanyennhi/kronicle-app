import Layout from "../../components/Layout"
import {useState} from "react";
import FormInput from "../../components/form/ListingForm";
import style from "./ListingPage.module.css";
import common from "../../styles/common.module.css";
import Radio from "../../components/radio/HideShowForm";


const ListingPage = () => {
    const [values, setValues] = useState({
        productname: "",
        productsatus: "",
        file: "",
    });

    const inputs = [
        {
            id: 1,
            name: "productname",
            type: "text",
            placeholder: "Please enter the product’s name",
            errorMessage:
                "Product name should be 3-16 characters and shouldn't include any special character!",
            label: "Product name*",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "productsatus",
            type: "textarea",
            placeholder: "Please describe product's status, and what users will receive more than 15 words",
            errorMessage: "It should be a meaningful description of your products!",
            label: "Product status*",
            pattern: "^[A-Za-z0-9]{15,}$",
            required: true,
        },
        {
            id: 3,
            name: "file",
            type: "file",
            placeholder: "Enter the selling price for the product",
            label: "Upload the product's image*",
            errorMessage: "Please input your product's image'",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <Layout header footer>
            <div className={[style["app"], common["flex"]].join(" ")}>
                <form onSubmit={handleSubmit} className={style["listing-form"]}>
                    <h1 className={style["listing-title"]}>SELLER LISTING</h1>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />))}
                        <Radio
                            name="radio"
                            value={values.radio}
                            onChange={onChange}
                        />
                    <div className={style["listing-btn-container"]}>
                        <button className={style["listing-btn"]}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default ListingPage;


