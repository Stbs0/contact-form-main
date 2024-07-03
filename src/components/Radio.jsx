

export function Radio({}) {
  return <fieldset className="flex flex-col ">
  {/* fix erro lagen is not recognized see console for more info */}
            <lagend className="text-left text-sm">
              Query Type <span>*</span>
            </lagend>
            <div>
              <div>
                <label htmlFor='query'>General Enquiry</label>
                <input type='radio' name='query' />
              </div>
              <div>
                <label htmlFor='query'>Support Request</label>
                <input type='radio' name='query' value='efen=' />
              </div>
            </div>
          </fieldset>;
}
  