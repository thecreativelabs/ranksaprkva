import React from "react";
import Container from "@/components/Container";
import Contactform from "./contactform";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { client } from "@sanity/lib/client";
import { Contact } from "@/types/sanity";

const contact = {
  header: "Get in touch.",
  subheader:
    "Whether its a service inquiry, feedback, or just to say hello, wed love to hear from you. Reach out to us anytime with a detailed message, and well get back to you as soon as possible.",
  address: "548 Market St. #41895\nSan Francisco, CA 94104",
  email: "info@victoriousseo.com",
  phone: "(415) 621-9830",
  w3ckey: "your_web3forms_access_key_here",
};

export default async function Page() {
  const data = (await client.fetch(
    `*[_type == "contact"][0]`
  )) as Contact | null;
  if (!data) return <></>;

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-6xl mt-16">
        <div className="md:w-[510px] w-auto">
          <h2 className="text-3xl font-tertiary md:text-5xl text-dark-red">
            {data.heading}
          </h2>
          <p className="text-lg font-sans leading-relaxed mt-6 text-dark-red">
            {data.description}
          </p>
          <div className="md:flex mt-10 md:gap-[50px]">
            {data.address && (
              <div className="flex flex-col mt-2 text-blue-700">
                <div className="md:flex-col flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <>
                      <path
                        d="M11.55 20.6442C10.24 18.9042 9.45996 16.7442 9.45996 14.3942C9.45996 8.83421 13.82 4.30421 19.31 4.01421C25.46 3.69421 30.57 8.82423 30.23 14.9742C30.11 17.0942 29.36 19.0442 28.16 20.6442L20.63 30.7842C20.24 31.3042 19.47 31.3042 19.08 30.7842L11.55 20.6442Z"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.5103 13.7543C25.5303 13.9743 25.5502 14.1944 25.5502 14.4144C25.5502 15.3744 25.3102 16.2844 24.8902 17.0844C24.3002 18.1944 23.3602 19.0744 22.2102 19.5944C21.5002 19.9144 20.7102 20.0944 19.8802 20.0944C16.7402 20.0944 14.2002 17.5544 14.2002 14.4144C14.2002 11.2744 16.7402 8.73438 19.8802 8.73438C20.4702 8.73438 21.0403 8.82432 21.5703 8.99432"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.3105 9.88379C23.4805 10.0138 23.6505 10.1538 23.8105 10.3038C24.0505 10.5338 24.2705 10.7838 24.4605 11.0538"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M27.8504 24.8643H29.6004C29.9804 24.8643 30.3203 25.1043 30.4503 25.4543L33.7003 34.1443C33.8903 34.6543 33.5104 35.2043 32.9704 35.2043H6.78037C6.23037 35.2043 5.86039 34.6643 6.05039 34.1443L9.30039 25.4543C9.43039 25.0943 9.77036 24.8643 10.1504 24.8643H11.8704"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </>
                  </svg>
                  <div className="ml-4 md:ml-1">
                    <h2 className="md:text-xl text-md font-semibold text-dark-red mt-2 mb-2">
                      Address
                    </h2>
                    <a
                      className="text-light-pink"
                      href={data.address.link}
                      target="_blank"
                    >
                      {data.address.text}
                    </a>
                  </div>
                </div>
              </div>
            )}
            {data.contactInfo && (
              <div className="flex flex-col mr-0 md:mr-24 mt-2 text-blue-700">
                <div className="md:flex-col flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <>
                      <path
                        d="M32.5635 30.0503L26.4535 26.0804C25.9635 25.8104 25.3635 25.8403 24.9035 26.1703L21.6635 28.7903C21.1835 29.1303 20.5435 29.1504 20.0535 28.8404C18.9835 28.1604 17.1835 26.7304 15.5235 25.0804C13.8635 23.4404 12.4335 21.6504 11.7435 20.5804C11.4235 20.0904 11.4435 19.4503 11.7935 18.9803L14.4235 15.7504C14.7535 15.3004 14.7835 14.7004 14.5135 14.2104L10.5235 8.14037C10.1435 7.48037 9.21347 7.42038 8.75347 8.02038L4.90346 12.7104C4.03346 13.8304 3.77347 15.3004 4.20347 16.6504C5.84347 21.8904 10.6335 27.1904 12.0135 28.5604C13.3935 29.9304 18.7235 34.6904 24.0035 36.3204C25.3635 36.7404 26.8435 36.4804 27.9735 35.6204L32.6935 31.7903C33.3035 31.3303 33.2335 30.4003 32.5735 30.0303L32.5635 30.0503Z"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.4131 11.8896C24.1331 11.8896 28.7631 16.5097 28.7631 22.2097"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.7139 7.9502C26.4539 7.9502 32.7239 14.2002 32.7239 21.9102"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.0039 4C28.7739 4 36.6839 11.89 36.6839 21.62"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.8135 27.9805L30.9135 33.2505"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.614 17.82L7.33398 9.75"
                        stroke="#F0564C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </>
                  </svg>
                  <div className="ml-4 md:ml-1">
                    <h2 className="md:text-xl text-md font-semibold text-dark-red mt-2 mb-2">
                      Contact Info
                    </h2>
                    <a
                      className="text-light-pink"
                      href={`mailto:${data.contactInfo.email?.text}`}
                    >
                      {data.contactInfo.email?.text}
                    </a>
                    <br />
                    <a
                      className="text-light-pink"
                      href={`tel:${data.contactInfo.phone?.text}`}
                    >
                      {data.contactInfo.phone?.text}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white p-5 md:p-8 rounded-xl mb-5">
          <Contactform />
        </div>
      </div>
    </Container>
  );
}
