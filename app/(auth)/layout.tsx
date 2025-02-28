import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-2/5 items-center justify-center bg-brand p-10 lg:flex lg:flex-col">
        <div className="flex max-h-[800px] max-2-[430px] flex-col justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            alt=""
            width={224}
            height={82}
            className="h-auto"
          />
        </div>
        <div className="space-y-5 text-white">
          <h1 className="h1">Manage your files the best way</h1>
          <p className="body-1">
            This is a place where you can store all your documents.
          </p>
        </div>
        <Image
          src="/assets/images/files.png"
          width={342}
          height={342}
          alt="Files"
          className="transition-all hover:rotate-2 hover:scale-105"
        />
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt=""
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
