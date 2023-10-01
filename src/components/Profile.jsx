import { TERipple } from "tw-elements-react";

export default function RippleImageProfile() {
  return (
    <TERipple>
      <img
        src="/profile.svg"
        className="w-32 rounded-full"
        alt="Profile"
      />
    </TERipple>
  );
}