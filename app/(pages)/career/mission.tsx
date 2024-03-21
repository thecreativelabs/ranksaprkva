import React from 'react'
import Container from '@/components/Container'

const data = {
    title: "OUR MISSION",
    heading: "Victorious is committed to helping our customers unleash their true search potential. From small marketing teams to large enterprise SEOs, we help businesses boost their visibility by shaping search-first marketing strategies into sustainable growth engines.",
    description:
      "We build trust by being open and honest, communicating clearly, and sharing what we know. Our goal is to empower our customers with a deep understanding of fundamental SEO principles while providing impactful recommendations that help them thrive.",
    it: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M21.1193 31.352C21.1193 31.352 21.1193 31.048 21.1273 30.736C21.1433 29.68 21.5113 29.4 21.7353 29.048C22.1593 28.384 23.4953 26.824 23.5513 23.408L23.6313 18.12C23.6393 17.408 23.0473 16.824 22.3033 16.816H22.2713C21.5033 16.8 20.8713 17.392 20.8553 18.12C20.8393 19.16 20.7753 23.224 20.7753 23.224L20.8873 15.952C20.8953 15.216 20.2873 14.616 19.5193 14.608C18.7513 14.6 18.1273 15.184 18.1113 15.912L18.0313 21.112L18.1353 14.304C18.1433 13.568 17.5353 12.968 16.7673 12.96H16.7033C15.9753 12.952 15.3753 13.504 15.3673 14.2L15.2633 21.2L15.3353 15.208C15.3433 14.496 14.7513 13.912 14.0073 13.904H13.9753C13.2073 13.888 12.5753 14.48 12.5593 15.208C12.5193 18.104 12.4473 22.76 12.4473 22.76" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.4633 22.1359V21.7759C12.4793 20.9039 11.7513 20.1839 10.8473 20.1759C10.2233 20.1679 9.70331 20.6479 9.69531 21.2479C9.69531 21.2479 9.73531 23.6799 10.0073 25.2319C10.4233 27.6399 11.5433 28.3999 11.9993 28.7599C12.3113 29.0079 12.5353 29.2719 12.6953 29.5439" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0957 36.0078L11.9277 32.3358C11.9357 31.7118 12.4717 31.2158 13.1197 31.2318L20.9837 31.3518C21.6317 31.3598 22.1517 31.8718 22.1437 32.4958L22.0317 35.9518" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.1348 12.5681C17.1348 11.8561 17.7268 11.2721 18.4708 11.2721H18.5028C19.2788 11.2721 19.9028 11.8561 19.9028 12.5841C19.9108 13.6241 19.9188 14.6721 19.9188 14.6721L19.8868 10.4161C19.8868 9.68006 20.4948 9.08806 21.2628 9.08006C22.0308 9.08006 22.6548 9.66405 22.6548 10.4001L22.6948 15.2721L22.6468 8.79205C22.6468 8.05605 23.2548 7.46405 24.0228 7.45605H24.0868C24.8148 7.45605 25.4148 8.00806 25.4148 8.71206L25.4708 15.7121L25.4468 9.72005C25.4468 9.00805 26.0388 8.42405 26.7828 8.42405H26.8148C27.5908 8.42405 28.2148 9.00805 28.2148 9.73606C28.2388 12.6321 28.2708 17.2881 28.2708 17.2881" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.27 16.6561V16.2961C28.262 15.4241 28.99 14.7121 29.902 14.7041C30.526 14.7041 31.038 15.1841 31.046 15.7841C31.046 15.7841 30.99 18.2161 30.71 19.7601C30.278 22.1681 29.15 22.9121 28.694 23.2721C28.382 23.5201 28.158 23.7841 27.998 24.0481" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.5028 35.2481L28.7348 26.8641C28.7348 26.2401 28.1988 25.7441 27.5508 25.7441L23.3828 25.7761" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0887 9.54354L12.7207 5.72754" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.1192 10.8962L8.95117 9.24023" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0488 3.99219L17.4648 8.46419" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ),
        title: "Give a Shit",
        description:
          "We care about our work and each other.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20.0586 8.91016C25.5886 8.91016 30.0786 13.4002 30.0786 18.9302C30.0786 25.4102 25.4486 25.8102 24.8086 31.4002L24.5286 33.5802H20.0586" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0591 8.91016C14.5291 8.91016 10.0391 13.4002 10.0391 18.9302C10.0391 25.4102 14.6691 25.8102 15.3091 31.4002L15.5891 33.5802H20.0591" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9995 4.29992L15.0195 0.669922" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.8887 4.25012L24.8487 0.620117" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.75 8.15047L33.39 5.48047" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.75 14.9502L38.38 13.9502" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.8301 22.8301L38.4701 23.7801" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.9688 29.71L33.6587 32.35" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.40906 30.0498L6.78906 32.7498" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33875 23.29L1.71875 24.33" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.1693 15.41L1.5293 14.5" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.97 8.48988L6.25 5.87988" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9199 36.4805H24.1899" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9199 27.8506H24.1899" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.25 39.3799H23.86" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0796 20.1702C21.3112 20.1702 22.3096 19.1046 22.3096 17.7902C22.3096 16.4757 21.3112 15.4102 20.0796 15.4102C18.848 15.4102 17.8496 16.4757 17.8496 17.7902C17.8496 19.1046 18.848 20.1702 20.0796 20.1702Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.6699 21.54C16.7299 21.74 15.1699 22.42 15.1699 24.14V25.83" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.9395 25.83V24.14C24.9395 22.42 23.3795 21.74 21.4395 21.54" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.6699 21.5498L19.8999 24.7298C19.9599 24.8898 20.1899 24.8898 20.2499 24.7298L21.4299 21.5498" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ),
        title: "Empower One Another",
        description:
          "We uphold each other’s priorities as high as our own.",
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M30.3497 37.607L22.4697 36.667L22.9097 32.987C22.9697 32.457 23.4497 32.077 23.9797 32.147L31.5798 33.057L31.1097 37.017C31.0597 37.397 30.7197 37.657 30.3497 37.617V37.607Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.8896 32.8361L35.5696 27.3261C36.2196 26.5061 36.2597 26.2561 36.2797 25.2861L36.0197 17.7761C36.0097 17.3561 35.6596 17.0361 35.2396 17.0461C34.2696 17.0761 33.4896 17.8461 33.4496 18.8161L33.2996 21.8961" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.1404 28.7668L33.3604 25.0268C33.7104 24.6268 33.6704 24.0168 33.2804 23.6568C32.6904 23.1068 31.7604 23.1268 31.2004 23.7168L28.7104 26.3068C28.7104 26.3068 26.7204 26.1268 25.0104 28.1268C23.9004 29.4268 23.7704 30.5468 23.8204 32.0168" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M29.34 35.0762C29.4 35.1362 29.4 35.2262 29.34 35.2862C29.28 35.3462 29.19 35.3462 29.13 35.2862C29.07 35.2262 29.07 35.1362 29.13 35.0762C29.19 35.0162 29.28 35.0162 29.34 35.0762Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.93018 37.607L16.8102 36.667L16.3702 32.987C16.3102 32.457 15.8302 32.077 15.3002 32.147L7.7002 33.057L8.17017 37.017C8.22017 37.397 8.56018 37.657 8.93018 37.617V37.607Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.39001 32.8361L3.71002 27.3261C3.06002 26.5061 3.02 26.2561 3 25.2861L3.26001 17.7761C3.27001 17.3561 3.61998 17.0361 4.03998 17.0461C5.00998 17.0761 5.79002 17.8461 5.83002 18.8161L5.97998 21.8961" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.14001 28.7668L5.91998 25.0268C5.56998 24.6268 5.61 24.0168 6 23.6568C6.59 23.1068 7.52001 23.1268 8.08001 23.7168L10.57 26.3068C10.57 26.3068 12.56 26.1268 14.27 28.1268C15.38 29.4268 15.51 30.5468 15.46 32.0168" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.93953 35.0762C9.87953 35.1362 9.87953 35.2262 9.93953 35.2862C9.99953 35.3462 10.0896 35.3462 10.1496 35.2862C10.2096 35.2262 10.2096 35.1362 10.1496 35.0762C10.0896 35.0162 9.99953 35.0162 9.93953 35.0762Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5823 7.24521C21.5014 6.73904 21.8363 5.58355 21.3301 4.66436C20.824 3.74517 19.6685 3.41037 18.7493 3.91653C17.8301 4.4227 17.4953 5.57815 18.0015 6.49735C18.5076 7.41654 19.6631 7.75137 20.5823 7.24521Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6699 10.0469C20.8699 10.0469 21.9399 10.1969 22.5999 10.3869C23.6199 10.6869 24.14 11.4969 24.14 12.5069C24.14 13.5169 23.9999 16.1269 23.9999 16.1269C23.9799 16.4869 23.9299 17.0969 23.3099 17.5569" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6702 10.0469C18.4702 10.0469 17.4002 10.1969 16.7402 10.3869C15.7202 10.6869 15.2002 11.4969 15.2002 12.5069C15.2002 13.5169 15.3402 16.1269 15.3402 16.1269C15.3602 16.4869 15.3402 17.0669 15.9802 17.5569" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.7097 13.4062L21.4397 24.5762V24.8062C21.4397 25.2262 21.0997 25.5562 20.6897 25.5562H18.5897C18.1697 25.5562 17.8397 25.2162 17.8397 24.8062V24.5662L17.6797 13.4062" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.0799 6.53671C27.0188 6.53671 27.7799 5.7756 27.7799 4.83672C27.7799 3.89783 27.0188 3.13672 26.0799 3.13672C25.141 3.13672 24.3799 3.89783 24.3799 4.83672C24.3799 5.7756 25.141 6.53671 26.0799 6.53671Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.0703 8.83691C27.1403 8.83691 28.1203 8.96692 28.7103 9.13692C29.6203 9.40692 30.0903 10.1369 30.0903 11.0369C30.0903 11.9369 29.9503 14.2769 29.9503 14.2769C29.9403 14.5769 29.8703 15.1769 29.4303 15.5269" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.0703 8.83691C25.6903 8.83691 25.3302 8.85692 25.0002 8.88692C24.7402 8.90692 24.5003 8.94691 24.2803 8.97691" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.8997 11.8467L27.6596 21.8467V22.0467C27.6596 22.4167 27.3596 22.7167 26.9896 22.7167H25.1096C24.7396 22.7167 24.4396 22.4167 24.4396 22.0467V21.8367L24.3896 19.3467" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.2596 6.53671C14.1985 6.53671 14.9596 5.7756 14.9596 4.83672C14.9596 3.89783 14.1985 3.13672 13.2596 3.13672C12.3207 3.13672 11.5596 3.89783 11.5596 4.83672C11.5596 5.7756 12.3207 6.53671 13.2596 6.53671Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.27 8.83691C12.2 8.83691 11.22 8.96692 10.63 9.13692C9.72 9.40692 9.25 10.1369 9.25 11.0369C9.25 11.9369 9.39001 14.2769 9.39001 14.2769C9.40001 14.5869 9.45997 15.1269 9.96997 15.5269" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3398 8.83691C13.7198 8.83691 14.0798 8.85692 14.4098 8.88692C14.6698 8.90692 14.9098 8.94691 15.1298 8.97691" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.4502 11.8467L11.6902 21.8467V22.0467C11.6902 22.4167 11.9902 22.7167 12.3602 22.7167H14.2402C14.6102 22.7167 14.9102 22.4167 14.9102 22.0467V21.8367L14.9602 19.3467" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ),
        title: "People First",
        description:
          "We support the people who help our business thrive.",
      },
      {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M29.9502 9.68533L32.4402 7.19531" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.6299 21.0151L27.9399 11.7051" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9397 11.7052L27.4297 8.49524L31.3497 3.15525C31.5597 2.87525 31.9997 2.99525 32.0297 3.34525L32.4297 7.20524" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9404 11.7048L31.1504 12.2148L36.4904 8.29483C36.7704 8.08483 36.6504 7.64484 36.3004 7.61484L32.4404 7.21484" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.8801 20.7351C21.8801 20.8251 21.8901 20.9151 21.8901 21.0051C21.8901 22.8051 20.4301 24.2651 18.6301 24.2651C16.8301 24.2651 15.3701 22.8051 15.3701 21.0051C15.3701 19.2051 16.8301 17.7451 18.6301 17.7451C18.7201 17.7451 18.8001 17.7451 18.8801 17.7451" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.1699 17.4652C25.7399 18.5152 26.0699 19.7252 26.0699 21.0052C26.0699 25.1052 22.74 28.4352 18.64 28.4352C14.54 28.4352 11.21 25.1052 11.21 21.0052C11.21 16.9052 14.54 13.5752 18.64 13.5752C19.92 13.5752 21.1299 13.8952 22.1799 14.4752" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.2599 14.3754C29.5599 16.2654 30.3199 18.5454 30.3199 21.0154C30.3199 27.4754 25.0799 32.7154 18.6199 32.7154C12.1599 32.7154 6.91992 27.4754 6.91992 21.0154C6.91992 14.5554 12.1599 9.31543 18.6199 9.31543C21.0799 9.31543 23.3699 10.0754 25.2599 11.3754" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.45 13.705C33.6 15.885 34.26 18.375 34.26 21.005C34.26 29.635 27.26 36.635 18.63 36.635C10 36.635 3 29.635 3 21.005C3 12.375 10 5.375 18.63 5.375C21.1 5.375 23.44 5.94498 25.52 6.97498C25.68 7.05498 25.84 7.13498 26 7.22498" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ),
        title: "Process Perfection",
        description:
          "We’re driven to become the best version of ourselves.",
      },
      {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M19.5596 8.36035V30.8403" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.8395 35.46H11.2695" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.0196 32.9004H13.0996" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.2399 6.67999C21.2399 7.60999 20.4899 8.36005 19.5599 8.36005C18.6299 8.36005 17.8799 7.60999 17.8799 6.67999C17.8799 5.74999 18.6299 5 19.5599 5" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.1904 10.5296C24.2004 9.91958 26.8505 12.3696 29.1605 12.0896C29.9405 11.9996 30.4804 11.6396 30.7704 11.2096" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.96 25.1504C14.96 27.6904 12.73 29.7504 9.98001 29.7504C7.23001 29.7504 5 27.6904 5 25.1504H14.97H14.96Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.45996 23.5299L9.96994 16.4199L14.2499 25.0899" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M34.1904 22.7803C34.1904 25.3203 31.9604 27.3802 29.2104 27.3802C26.4604 27.3802 24.2305 25.3203 24.2305 22.7803H34.2004H34.1904Z" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.7002 21.1598L29.2102 14.0498L33.4802 22.7098" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.1901 10.5303C14.1801 11.1403 12.2101 14.1703 9.89011 14.4503C9.11011 14.5403 8.50012 14.3403 8.12012 13.9803" stroke="#F0564C" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        ),
        title: "Radical Integrity",
        description:
          "We do the right thing even when it’s tough.",
      },
    ],
  };

const mission = () => {
  return (
    <Container>
      <div>
        <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-xl text-md mb-6 lg:text-sm font-semibold ">
          <slot name="title tracking-widest leading-6">
            {data.title}
          </slot>
        </h1>
        <p className="md:text-3xl tracking-wide leading-7 md:leading-10 font-medium text-xl font-serif mt-4 text-[#3B0D17] mx-auto w-full">
          <slot name="desc">{data.heading}</slot>
        </p>
        <p className='mt-10 text-md tracking-wider leading-7 w-auto md:w-[800px]'>{data.description}</p>
      </div>

    <div className='mt-16'>
    <h2 className='md:text-3xl text-lg w-auto font-semibold text-[#3B0D17]'>Our Values</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-8 md:gap-8">
        {data.it.map((item, index) => (
          <div
            key={index}
            className="bg-graybg md:h-[270px] w-auto h-auto md:w-[400px] flex flex-col gap-4 mb-2 md:mb-6 items-start group rounded transition-all px-8 py-6"
          >
            <div className="items-center justify-between">
              <div className="mt-1 mb-6 bg-white shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-full grid place-items-center p-2 w-14 h-14 shrink-0">
                <span className="text-[#C42A1C] text">{item.icon}</span>
              </div>
              <h3 className="font-semibold font-sans text-left text-lg md:text-2xl text-[#3B0D17]">
                {item.title}
              </h3>
            </div>
            <div>
              <p className="mt-2 leading-relaxed md:text-md text-sm text-[#3B0D17]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Container>
  )
}

export default mission