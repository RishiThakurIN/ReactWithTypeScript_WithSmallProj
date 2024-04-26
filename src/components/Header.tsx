import { PropsWithChildren } from "react";

type ImageProps = {
  src: string;
  alt: string;
};
type HeaderProps = PropsWithChildren<{
  image: ImageProps;
}>;
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
