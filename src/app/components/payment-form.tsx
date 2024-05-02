'use client'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { BaseSyntheticEvent } from "react"

const paymentFormSchema = z.object({
  cardName: z.string().min(1, 'This field is required!'),
  cardNumber: z.string().min(1, 'This field is required!'),
  expirationMonth: z.coerce.number().positive('Must be a valid number for month'),
  expirationYear: z.coerce.number().positive('Must be a valid number for year'),
  cvc: z.coerce.number().min(1, 'This field is required!')
})

type PaymentFormSchema = z.infer<typeof paymentFormSchema>

interface IpaymentFormProps {
  onPaymentFormSubmit: (data: PaymentFormSchema) => void
}

export function PaymentForm(props: IpaymentFormProps) {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<PaymentFormSchema>({
    resolver: zodResolver(paymentFormSchema)
  })

  function handlePaymentForm(data: PaymentFormSchema) {
    props.onPaymentFormSubmit(data)
  }

  function handleCardSavedSelect(event: BaseSyntheticEvent) {
    const optionChosen = event.target.value

    if (optionChosen == 0) {
      reset()
    }
    else {
      setValue('cardName', 'Pomaline Moses Olanrewaju')
      setValue('cardNumber', '1234 5678 9876 5234')
      setValue('expirationMonth', 8)
      setValue('expirationYear', 25)
      setValue('cvc', 123)
    }
  }

  return (
    <>
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
          <span className="text-blueButton text-xl leading-6 font-medium">Payment</span>
        </div>
      </div>

      <h2 className="text-xl font-medium leading-6 text-black">Payment Details</h2>
      <form onSubmit={handleSubmit(handlePaymentForm)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-4">
              <div className="sm:col-span-2">
                <label className="block text-base font-medium leading-5 text-graytext">
                  Use saved card
                </label>
              </div>

              <div className="sm:col-span-2">
                <select
                  className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                  onChange={handleCardSavedSelect}
                >
                  <option value={0}>None</option>
                  <option value={321}>Mastercard ending 234</option>
                </select>
              </div>

              <div className="col-span-full">
                <label className="block text-base font-medium leading-5 text-labeltext">
                  Name on card
                </label>
                <div className="relative mt-3">
                  <input
                    className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                    {...register("cardName")}
                  />

                  <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99963 20C4.47663 20 -0.000366211 15.523 -0.000366211 10C-0.000366211 4.477 4.47663 0 9.99963 0C15.5226 0 19.9996 4.477 19.9996 10C19.9996 15.523 15.5226 20 9.99963 20ZM9.00263 14L16.0726 6.929L14.6586 5.515L9.00263 11.172L6.17363 8.343L4.75963 9.757L9.00263 14Z" fill="#1A202C" />
                    </svg>
                  </div>
                </div>
                {errors.cardName && <span>{errors.cardName.message}</span>}
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-base font-medium leading-5 text-labeltext">
                  Street name
                </label>
                <div className="relative mt-3">
                  <input
                    className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                    {...register("cardNumber")}
                  />

                  <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99963 20C4.47663 20 -0.000366211 15.523 -0.000366211 10C-0.000366211 4.477 4.47663 0 9.99963 0C15.5226 0 19.9996 4.477 19.9996 10C19.9996 15.523 15.5226 20 9.99963 20ZM9.00263 14L16.0726 6.929L14.6586 5.515L9.00263 11.172L6.17363 8.343L4.75963 9.757L9.00263 14Z" fill="#1A202C" />
                    </svg>
                  </div>
                </div>
                {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-base font-medium leading-5 text-labeltext">
                  Expiration
                </label>

                <div className="mt-3 flex  items-center">
                  <input
                    className="p-4 w-24 rounded-md border-0 text-center focus:ring-0 text-graytext bg-bginputs"
                    {...register("expirationMonth")}
                  />

                  <div className="w-8 h-0 border-b-2 border-grayButton transform -rotate-65"></div>

                  <input
                    className="p-4 w-24 rounded-md border-0 text-center focus:ring-0 text-graytext bg-bginputs"
                    {...register("expirationYear")}
                  />
                </div>

              </div>

              <div className="sm:col-span-2">
                <div className="flex">
                  <label className="block text-base font-medium leading-5 text-labeltext mr-3">
                    CVC
                  </label>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00008 17.3333C4.39758 17.3333 0.666748 13.6025 0.666748 9.00001C0.666748 4.39751 4.39758 0.666672 9.00008 0.666672C13.6026 0.666672 17.3334 4.39751 17.3334 9.00001C17.3334 13.6025 13.6026 17.3333 9.00008 17.3333ZM9.00008 15.6667C10.7682 15.6667 12.4639 14.9643 13.7141 13.7141C14.9644 12.4638 15.6667 10.7681 15.6667 9.00001C15.6667 7.2319 14.9644 5.5362 13.7141 4.28596C12.4639 3.03572 10.7682 2.33334 9.00008 2.33334C7.23197 2.33334 5.53628 3.03572 4.28604 4.28596C3.03579 5.5362 2.33341 7.2319 2.33341 9.00001C2.33341 10.7681 3.03579 12.4638 4.28604 13.7141C5.53628 14.9643 7.23197 15.6667 9.00008 15.6667ZM8.16675 11.5H9.83342V13.1667H8.16675V11.5ZM9.83342 10.1292V10.6667H8.16675V9.41667C8.16675 9.19566 8.25455 8.9837 8.41083 8.82742C8.56711 8.67114 8.77907 8.58334 9.00008 8.58334C9.23681 8.58332 9.46867 8.51609 9.66869 8.38945C9.8687 8.26281 10.0286 8.08198 10.1299 7.86799C10.2311 7.65401 10.2696 7.41567 10.2407 7.18071C10.2117 6.94575 10.1167 6.72383 9.96661 6.54076C9.81651 6.3577 9.61751 6.22103 9.39277 6.14665C9.16802 6.07226 8.92678 6.06323 8.6971 6.12059C8.46743 6.17796 8.25876 6.29936 8.09539 6.47069C7.93201 6.64201 7.82065 6.8562 7.77425 7.08834L6.13925 6.76084C6.24061 6.25424 6.47467 5.78365 6.81752 5.39716C7.16036 5.01067 7.59968 4.72216 8.09057 4.56111C8.58147 4.40005 9.10632 4.37224 9.61148 4.48052C10.1166 4.58879 10.584 4.82927 10.9658 5.17736C11.3475 5.52545 11.63 5.96868 11.7843 6.46172C11.9387 6.95477 11.9593 7.47996 11.8441 7.9836C11.729 8.48723 11.4821 8.95125 11.1288 9.32823C10.7756 9.7052 10.3285 9.9816 9.83342 10.1292Z" fill="#718096" />
                  </svg>
                </div>

                <div className="mt-3">
                  <input
                    className="p-4 rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                    {...register("cvc")}
                  />
                </div>
                {errors.cvc && <span>{errors.cvc.message}</span>}
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-base font-medium leading-6 text-grayButton mr-5">
            Cancel order
          </button>
          <button
            type="submit"
            className="px-16 py-5 rounded-lg bg-blueButton text-base font-medium text-whiteButton shadow-sm"
          >
            Complete order
          </button>
        </div>
      </form>
    </>
  )
}