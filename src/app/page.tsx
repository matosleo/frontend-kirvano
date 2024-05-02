import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus, HiMinus } from 'react-icons/hi';
import Image from "next/image";
import headphoneImage from '../app/assets/images/headphone-img-sample.png'
import { AddressForm } from './components/address-form';


export default function Home() {

  // const [count, setCount] = useState(0);


  // const handleIncrement = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount((prevCount) => prevCount - 1);
  //   }
  // };

  return (
    <div className="flex justify-center flex-wrap items-stretch">

      <div className="bg-bgretangle p-10 rounded-lg mr-8">
        <div>

          <div className="flex justify-center items-center mb-12">
            <div className="mr-5">
              <span className="text-blueButton text-xl leading-6 font-medium">Shipping</span>
            </div>

            <div className="w-6 h-0 border-b-2 border-blueButton mr-2"></div>

            <div className="">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99963 20C4.47663 20 -0.000366211 15.523 -0.000366211 10C-0.000366211 4.477 4.47663 0 9.99963 0C15.5226 0 19.9996 4.477 19.9996 10C19.9996 15.523 15.5226 20 9.99963 20ZM9.00263 14L16.0726 6.929L14.6586 5.515L9.00263 11.172L6.17363 8.343L4.75963 9.757L9.00263 14Z" fill="#1A202C" />
              </svg>
            </div>

            <div className="w-6 h-0 border-b-2 border-blueButton ml-2"></div>

            <div className="ml-5">
              <span className="text-gray text-xl leading-6 font-medium">Payment</span>
            </div>
          </div>

          <h2 className="text-xl font-medium leading-6 text-black">Shipping Details</h2>
          <AddressForm />
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
                // onClick={handleDecrement}
                className="bg-bginputs text-labeltext p-3 rounded-md"
              >
                <HiMinus />
              </button>
              <div className="bg-transparent text-center text-black font-medium leading-6 text-xl px-3 py-2">1</div>
              <button
                type="button"
                // onClick={handleIncrement}
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
