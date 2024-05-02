'use client'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { BaseSyntheticEvent } from "react"

const addressFormSchema = z.object({
  firstLineAddress: z.string().min(1, 'This field is required!'),
  streetName: z.string().min(1, 'This field is required!'),
  postcode: z.string().min(1, 'This field is required!'),
  shippingFee: z.coerce.number().min(1, 'This field is required!')
})

type AdressFormSchema = z.infer<typeof addressFormSchema>


export function AddressForm() {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<AdressFormSchema>({
    resolver: zodResolver(addressFormSchema)
  })

  function handleAddressForm(data: AdressFormSchema) {
    console.log(data)
  }

  function handleSavedAddressSelect(event: BaseSyntheticEvent) {
    const optionChosen = event.target.value

    if (optionChosen == 0) {
      reset()
    }
    else {
      setValue('firstLineAddress', '123')
      setValue('streetName', 'Electric avenue')
      setValue('postcode', 'ABC - 123')
      setValue('shippingFee', 0)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleAddressForm)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <label className="block text-base font-medium leading-5 text-graytext">
                Use saved address
              </label>
            </div>

            <div className="sm:col-span-2">
              <select
                autoComplete="country-name"
                className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                onChange={handleSavedAddressSelect}
              >
                <option value={0}>None</option>
                <option value={321}>123, Electric avenue</option>
              </select>
            </div>

            <div className="col-span-full">
              <label className="block text-base font-medium leading-5 text-labeltext">
                First line of address
              </label>
              <div className="relative mt-3">
                <input
                  className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                  {...register("firstLineAddress")}
                />

                <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99963 20C4.47663 20 -0.000366211 15.523 -0.000366211 10C-0.000366211 4.477 4.47663 0 9.99963 0C15.5226 0 19.9996 4.477 19.9996 10C19.9996 15.523 15.5226 20 9.99963 20ZM9.00263 14L16.0726 6.929L14.6586 5.515L9.00263 11.172L6.17363 8.343L4.75963 9.757L9.00263 14Z" fill="#1A202C" />
                  </svg>
                </div>
              </div>
              {errors.firstLineAddress && <span>{errors.firstLineAddress.message}</span>}
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-base font-medium leading-5 text-labeltext">
                Street name
              </label>
              <div className="relative mt-3">
                <input
                  className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                  {...register("streetName")}
                />

                <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99963 20C4.47663 20 -0.000366211 15.523 -0.000366211 10C-0.000366211 4.477 4.47663 0 9.99963 0C15.5226 0 19.9996 4.477 19.9996 10C19.9996 15.523 15.5226 20 9.99963 20ZM9.00263 14L16.0726 6.929L14.6586 5.515L9.00263 11.172L6.17363 8.343L4.75963 9.757L9.00263 14Z" fill="#1A202C" />
                  </svg>
                </div>
              </div>
              {errors.streetName && <span>{errors.streetName.message}</span>}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-base font-medium leading-5 text-labeltext">
                Postcode
              </label>
              <div className="mt-3">
                <input
                  className="p-4 w-5/6 rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                  {...register("postcode")}
                />
              </div>
              {errors.postcode && <span>{errors.postcode.message}</span>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-base font-medium leading-5 text-labeltext">
                Select shipping
              </label>
              <div className="mt-3">
                <select
                  className="p-4 w-full rounded-md border-0 focus:ring-0 text-graytext bg-bginputs"
                  {...register("shippingFee")}
                >
                  <option value={0}>Free delivery</option>
                  <option value={32.3}>Fedex</option>
                  <option value={12.5}>PAC</option>
                </select>
              </div>
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
          Payment
        </button>
      </div>
    </form>
  )
}