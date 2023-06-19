import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect} from "react";
import axios from "axios";

const KEY="pk_test_51NKiFbSH3A7YKJXV05WIUCiNuUQWP6w17MejWz935yPaVawiUN3S5uHQhQEp9QIfnsXeOUwm4oMtXuNwlpwvcSG900Rkij8zu1";
const Pay=()=>{
    const[stripeToken,setStripeToken]=useState(null);
    const onToken=(token)=>{
        setStripeToken(token);
    };

useEffect(()=>{
    const makeRequest=async()=>{
        try {
            const res=await axios.post("http://localhost:5000/api/checkout/payment",{
                tokenId:stripeToken.id,
                amount:5000,
            });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    stripeToken && makeRequest();
},[stripeToken])
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {stripeToken ? (
                <span>Processing. Please wait...</span>
            ):(
            <StripeCheckout
                name="Lama Shop"
                image=""
                billingAddress
                shippingAddress
                description="Your total is $50"
                amount={5000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                style={{
                    border: "none",
                    width:120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight:"600",
                    cursor: "pointer",

                }}
                >
                    Pay Now
                </button>

            </StripeCheckout>
            )}

        </div>
    );
};

export default Pay;