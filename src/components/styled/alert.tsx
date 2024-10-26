import { children, Component, JSX } from "solid-js";
import {
  Alert as NativeAlert,
  AlertTitle as NativeAlertTitle,
  AlertDescription as NativeAlertDescription,
} from "~/components/primitives/alert";

const Alert: Component<{
  icon?: JSX.Element;
  title?: JSX.Element | string;
  children?: JSX.Element;
}> = (props) => {
  const resolved = children(() => props.children);

  return (
    <NativeAlert>
      {props.icon}
      <NativeAlertTitle>{props.title}</NativeAlertTitle>
      <NativeAlertDescription>{resolved()}</NativeAlertDescription>
    </NativeAlert>
  );
};

export default Alert;
