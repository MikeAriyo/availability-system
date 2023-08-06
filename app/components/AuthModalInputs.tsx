import React from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };

  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthModalInputs({ inputs, handleChangeInput }: Props) {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="First Name"
          value={inputs.firstName}
          onChange={handleChangeInput}
        />

        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Last Name"
          value={inputs.lastName}
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Phone"
          value={inputs.phone}
          onChange={handleChangeInput}
        />

        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="City"
          value={inputs.city}
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
}
