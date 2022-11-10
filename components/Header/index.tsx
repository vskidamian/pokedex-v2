import Image from "next/image";
import { Container } from "@ui/Container";
import { Bars3Icon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <Container className="sticky top-0 z-50 bg-pokedex">
      <div className="py-5 flex justify-between items-center relative">
        <Image src="/images/svg/Camera.svg" alt="Camera" width="169" height="67" />
        <Bars3Icon className="h-10 w-10 text-white" />
      </div>
    </Container>
  );
};
