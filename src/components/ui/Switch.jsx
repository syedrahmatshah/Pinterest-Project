/** @format */

import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchComp = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className='group relative flex  w-12 cursor-pointer rounded-full bg-black transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black border data-[checked]:bg-white data-[checked]:border-black'>
      <span
        aria-hidden='true'
        className='pointer-events-none inline-block size-6 translate-x-0 rounded-full  bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-6 group-data-[checked]:border-black border'
      />
    </Switch>
  );
};

export default SwitchComp;
