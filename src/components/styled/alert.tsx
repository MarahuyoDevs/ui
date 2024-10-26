import { children, Component, JSX } from "solid-js";
import {
  Alert as NativeAlert,
  AlertTitle as NativeAlertTitle,
  AlertDescription as NativeAlertDescription,
} from "~/components/primitives/alert";

const Alert: Component<{
  icon?: JSX.Element;
  title?: JSX.Element | string;
  status?: "info" | "success" | "warning" | "error";
  size: "sm" | "md" | "lg";
  children?: JSX.Element;
}> = (props) => {
  const resolved = children(() => props.children);

  return (
    <NativeAlert
      variant={
        props.status === "error"
          ? "destructive"
          : props.status === "info"
          ? "default"
          : props.status
      }
      size={props.size}
    >
      {props.icon}
      <NativeAlertTitle>{props.title}</NativeAlertTitle>
      <NativeAlertDescription>{resolved()}</NativeAlertDescription>
    </NativeAlert>
  );
};

export default Alert;
