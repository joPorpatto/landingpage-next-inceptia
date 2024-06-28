import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inceptia: Contacto",
  description: "sdaasdasd ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
