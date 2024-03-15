'use client'

import React from "react";
import Button from "@/components/ui/icons/button";

const contactform = () => {
  return (
    <>
      <style>
        {`
          .invalid-feedback,
          .empty-feedback {
            display: none;
          }

          .was-validated :placeholder-shown:invalid ~ .empty-feedback {
            display: block;
          }

          .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
            display: block;
          }

          .is-invalid,
          .was-validated :invalid {
            border-color: #dc3545;
          }
        `}
      </style>

      {/* <script is="inline">
        {`
          document.addEventListener(
            "astro:page-load",
            () => {
              const form = document.getElementById("form");
              const result = document.getElementById("result");

              form.addEventListener("submit", function (e) {
                e.preventDefault();
                form.classList.add("was-validated");
                if (!form.checkValidity()) {
                  form.querySelectorAll(":invalid")[0].focus();
                  return;
                }
                const formData = new FormData(form);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);

                result.innerHTML = "Sending...";

                fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: json,
                })
                  .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                      result.classList.add("text-green-500");
                      result.innerHTML = json.message;
                    } else {
                      console.log(response);
                      result.classList.add("text-red-500");
                      result.innerHTML = json.message;
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    result.innerHTML = "Something went wrong!";
                  })
                  .then(function () {
                    form.reset();
                    form.classList.remove("was-validated");
                    setTimeout(() => {
                      result.style.display = "none";
                    }, 5000);
                  });
              });
            },
            { once: true },
          );
        `}
      </script> */}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        id="form"
        className="needs-validation mt-[-30px]"
        data-astro-reload
        noValidate
      >
        <input type="hidden" name="access_key" value="" />
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          name="botcheck"
        />
        <div className="flex flex-col space-y md:flex-row md:space-x-4">
          <div className="flex-1 mb-5 bg-white md:bg-white">
            <p className="text-sm mb-1 text-[#3B0D17] font-normal">
              First name<span className="font-bold text-[#e55447]">*</span>
            </p>
            <input
              type="text"
              placeholder=""
              required
              className="w-full px-4 py-3 border bg-slate-100 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-400 ring-slate-300"
              name="firstName"
            />
            <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
              Please provide your first name.
            </div>
          </div>
          <div className="flex-1 mb-5">
            <p className="text-sm mb-1 text-[#3B0D17] font-normal">
              Last Name<span className="text-[#e55447] font-bold">*</span>
            </p>
            <input
              type="text"
              placeholder=""
              required
              className="w-full px-4 py-3 border bg-slate-100 rounded-md outline-none focus:!ring-4 border-slate-300 focus:border-slate-400 !ring-slate-300"
              name="lastName"
            />
            <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
              Please provide your last name.
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y md:flex-row md:space-x-4">
          <div className="flex-1 mb-5">
            <p className="text-sm mb-1 text-[#3B0D17] font-normal">
              Email Address<span className="text-[#e55447] font-bold">*</span>
            </p>
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder=""
              name="email"
              required
              className="w-full px-4 py-3 border bg-slate-100 rounded-md outline-none focus:ring-4 border-slate-300 focus:border-slate-400 !ring-slate-300"
            />
            <div className="empty-feedback text-red-400 text-sm mt-1">
              Please provide your email address.
            </div>
            <div className="invalid-feedback text-red-400 text-sm mt-1">
              Please provide a valid email address.
            </div>
          </div>
          <div className="flex-1 mb-5">
            <p className="text-sm mb-1 text-[#3B0D17] font-normal">Phone</p>
            <input
              type="tel"
              placeholder=""
              required
              className="w-full px-4 py-3 border bg-slate-100 rounded-md outline-none focus:!ring-4 border-slate-300 focus:border-slate-400 !ring-slate-300"
              name="phone"
            />
            <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
              Please provide your Phone.
            </div>
          </div>
        </div>
        <div className="mb-5 bg-white px-4 py-3">
          <p className="text-md mb-1 text-[#3B0D17] -px-4 font-normal">
            Which describes you?<span className="text-[#e55447]">*</span>
          </p>
          <div className="text-sm mt-4 text-[#3B0D17] space-y-1">
            {[
              "I am looking for agency services",
              "I am an agency looking for a white label partner",
              "I am a current Victorious customer",
              "Other",
            ].map((option) => (
              <label className="flex items-center" key="">
                <input
                  type="radio"
                  placeholder="description"
                  required
                  value={option}
                  name="description"
                />
                <p className="ml-4 text-[#3B0D17]">{option}</p>
              </label>
            ))}
          </div>

          <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
            Please select an option.
          </div>
        </div>
        <div className="mb-3">
          <p className="text-sm mb-1 text-[#3B0D17] font-normal">
            Your Message<span className="text-[#e55447] font-bold">*</span>
          </p>
          <textarea
            name="message"
            required
            placeholder=""
            className="w-full px-4 py-3 border bg-slate-100 rounded-md outline-none h-14 focus:ring-4 border-slate-300 focus:border-slate-400 !ring-slate-300"
          ></textarea>
          <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
            Please enter your message.
          </div>
        </div>
        <div className="h-captcha" data-captcha="true"></div>

        <Button type="submit" size="lg" block>
          SUBMIT
        </Button>
        <div id="result" className="mt-3 text-center"></div>
      </form>
    </>
  );
};

export default contactform;
