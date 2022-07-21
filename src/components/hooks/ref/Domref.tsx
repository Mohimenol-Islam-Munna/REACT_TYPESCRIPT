import React, { useEffect, useRef } from "react";

function Domref() {
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    domRef.current?.focus();
  }, []);

  return (
    <div className="w-[50%] mx-auto border p-2 mt-10">
      <label htmlFor="domRef">Dom Ref</label> <br />
      <input
        ref={domRef}
        id="domRef"
        type="text"
        className="p-3 rounded-full border border-sky-600"
      />
    </div>
  );
}

export default Domref;
