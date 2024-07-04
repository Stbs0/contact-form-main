export function Radio({}) {
  return (
    <fieldset className='flex flex-col '>
      {/* fix erro lagen is not recognized see console for more info */}
      <p className='text-left mb-2 text-sm'>
        Query Type <span>*</span>
      </p>
      <div className='flex gap-4 '>
        <label
          htmlFor='query'
          className='group grow px-3 py-2 has-[:checked]:bg-primary-green200 border  flex border-gray-500   rounded-lg'>
          {" "}
          <input
            type='radio'
            className='mr-2 w-4 outline-none accent-primary-green600 '
            name='query'
            id='query'
          />
          General Enquiry
        </label>

        <label
          htmlFor='query2'
          className='has-[:checked]:bg-primary-green200
          grow px-3 py-2 border  flex align-middle border-gray-500   rounded-lg'>
          {" "}
          <input
            type='radio'
            className='mr-2 w-4 outline-none accent-primary-green600 '
            name='query'
            value='efen='
            id='query2'
          />
          Support Request
        </label>
      </div>
    </fieldset>
  );
}
