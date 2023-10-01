/* eslint-disable react/prop-types */
import RippleImageProfile from "./Profile";

export default function Header(props) {
  return (
    <>
      <RippleImageProfile />
      <h5 className="mb-2 text-xl font-medium leading-tight mt-4">{props.name}</h5>
      <p className="text-neutral-500 dark:text-neutral-400">{props.description}</p>
    </>
  )
}