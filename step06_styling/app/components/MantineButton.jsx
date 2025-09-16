import { Button } from "@mantine/core";

export default function MantineButton({ children, disabled, onClick }) {
  return (
    <Button variant="filled" disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
}
