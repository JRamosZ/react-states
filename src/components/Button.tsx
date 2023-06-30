interface Props {
  text: string;
  handleClick: () => void;
}

export default function Button(props: Props) {
  //   const handleClick = () => {
  //     alert("sí le diste click woof 🐕");
  //   };

  //   function handleClick() {
  //     alert("sí le diste click woof 🐕");
  //   }
  return <button onClick={props.handleClick}>{props.text}</button>;
}
