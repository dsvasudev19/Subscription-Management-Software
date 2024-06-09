import React from "react";
import axios from "axios";

const PriceCard = () => {
  


    function loadScript(src) {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      }
    
    
      async function displayRazorpay() {
        console.log("clicking")
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }
    
        const result = await axios.post("http://localhost:3000/api/payment/create-payment-order", { amount: 250000 });
        console.log(result.data)
        if (!result) {
          alert("Server error. Are you online?");
          return;
        }
    
        const { amount, id, currency } = result.data.data;
    
    
        const options = {
          key: "rzp_test_RuUV4roXxFjO0I",
          amount: 2500 * 100,
          currency: 'INR',
          name: "Darse Shikari Vasudev",
          description: "Test Transaction",
          handler: async function (response) {
            const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
    
            const result = await axios.post("http://localhost:3000/payment/success", data);
          },
          prefill: {
            name: "",
            email: "",
            contact: "9999999999",
          },
          notes: {
            address: "",
          },
          theme: {
            color: "#61dafb",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }

      


  return (
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8 sm:mt-12 sm:mb-12">
      <div class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
          standard
        </p>
        <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
          <span class="mt-2 text-4xl">₹</span>29
          <span class="self-end text-4xl">/year</span>
        </h1>
      </div>
      <div class="p-0">
        <ul class="flex flex-col gap-4">
          <li class="flex items-center gap-4">
            <span class="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              5 team members
            </p>
          </li>
          
          
          <li class="flex items-center gap-4">
            <span class="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              1 year free updates
            </p>
          </li>
          <li class="flex items-center gap-4">
            <span class="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Life time technical support
            </p>
          </li>
        </ul>
      </div>
      <div class="p-0 mt-12">
        <button
          class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          type="button"
          onClick={displayRazorpay}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
