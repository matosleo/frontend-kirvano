'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus, HiMinus } from 'react-icons/hi';
import Image from "next/image";
import headphoneImage from '../app/assets/images/headphone-img-sample.png';
import { AddressForm } from './components/address-form';
import { PaymentForm } from './components/payment-form';


export default function Home() {

  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [showCardForm, setShowCardForm] = useState<Boolean>(false);


  function onShippingFormSubmit(data: Object) {
    setShowCardForm(true)
    setShippingData(data)
    console.log(data)
  }


  function onPaymentFormSubmit(data: Object) {
    setPaymentData(data)
    console.log(data)
    alert("Pagamento Efetuado!")
  }

  return (
    <div className="flex justify-center flex-wrap items-stretch">

      <div className="bg-bgretangle py-10 px-28 rounded-lg mr-8">
        <div>
          {
            showCardForm ?
              <PaymentForm onPaymentFormSubmit={onPaymentFormSubmit} />
              :
              <AddressForm onShippingFormSubmit={onShippingFormSubmit} />
          }
        </div>
      </div>

      <div className="bg-bgretangle p-10 rounded-lg">
        <div className="max-w-md">
          <h2 className="text-xl font-medium leading-6 text-black">Order Summary</h2>


          <div className="my-5">
            <Image src={headphoneImage} alt="img name" className="w-full" />
          </div>

          <div className="mb-7 grid grid-cols-3 gap-y-2">

            <span className="text-black leading-6 font-medium text-xl col-span-2">Sony wireless headphones</span>


            <div className="flex items-center justify-end">
              <button
                type="button"
                className="bg-bginputs text-labeltext p-3 rounded-md"
              >
                <HiMinus />
              </button>
              <div className="bg-transparent text-center text-black font-medium leading-6 text-xl px-3 py-2">1</div>
              <button
                type="button"
                className="bg-bginputs text-labeltext p-3 rounded-md"
              >
                <HiPlus />
              </button>
            </div>

            <div>
              <span className="text-black leading-6 font-bold text-xl">{new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(320.45)}</span>
            </div>

          </div>

          <div className="w-full mb-5">
            <label htmlFor="email" className="block text-base font-medium leading-5 text-labeltext">
              Gift Card / Discount Code
            </label>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <input
                id="first-line-address"
                name="first-line-address"
                className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 rounded-lg bg-transparent text-blueButton shadow-sm
                  border-solid border-2 border-blueButton text-base font-medium leading-5"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-8 mt-12">
            <div className="col-span-1">
              <span className="text-grayButton font-medium text-lg leading-5">Sub Total</span>
            </div>

            <div className="flex justify-end">
              <span className="text-graytext font-medium text-xl leading-6">
                {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(316.55)}
              </span>
            </div>

            <div className="col-span-1">
              <span className="text-grayButton font-medium text-lg leading-5">Tax</span>
            </div>

            <div className="flex justify-end">
              <span className="text-graytext font-medium text-xl leading-6">
                {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(3.45)}
              </span>
            </div>

            <div className="col-span-1">
              <span className="text-grayButton font-medium text-lg leading-5">Shipping</span>
            </div>
            <div className="flex justify-end">
              <span className="text-lightGreen font-medium text-xl leading-6">Free</span>
            </div>


            <div className="col-span-1">
              <span className="text-graytext font-bold text-xl leading-6 col-span-1">Total</span>
            </div>
            <div className="flex justify-end">
              <span className="text-graytext font-medium text-xl leading-6">
                {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(320)}
              </span>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
