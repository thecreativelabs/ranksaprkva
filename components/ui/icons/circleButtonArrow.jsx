export default function CircleArrow(props) {
  return (
    <svg
      class={`${props.className} `}
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
    ><circle cx="19.5" cy="19.5" r="19.5" class=""></circle><path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.8533 17.7296L18.9181 12.6995L20.3457 11.2988L27.9008 18.9992L20.3457 26.6995L18.9181 25.2988L24.3822 19.7296H12.5V17.7296H23.8533Z"
      fill={(props.color != null) ? props.color : "#3C1121"}></path></svg>

  )
}

