import React, { useState } from 'react';


function NextStep() {
 const [currentTab, setCurrentTab] = useState(0);

 // ... اطلاعات خود را اینجا وارد می کنید

 const handleNext = () => {
    setCurrentTab(currentTab + 1);
 };

 const handlePrev = () => {
    setCurrentTab(currentTab - 1);
 };

 const handleSubmit = () => {
    // اقدام به ارسال اطلاعات و به روز رسانی جدول
 };

 return (
    <div className="App">
      <div id="form">
        <button type="button" onClick={handlePrev} disabled={currentTab === 0}>
          مرحله قبلی
        </button>
        <button type="button" onClick={handleNext} disabled={currentTab === currentTab - 1}>
          مرحله بعدی
        </button>
        <button type="button" onClick={handleSubmit}>
          ارسال
        </button>
      </div>
      <div id="table">
        {/* اطلاعات جدول اینجا قرار می گیرد */}
      </div>
    </div>
 );
}

export default NextStep;


// import React, { useState } from 'react';
// import axios from 'axios';

// function NextStep() {
//  const [currentTab, setCurrentTab] = useState(0);

//  const handlePrev = () => {
//     setCurrentTab(currentTab - 1);
//  };

//  const handleNext = () => {
//     setCurrentTab(currentTab + 1);
//  };

//  const handleSubmit = async () => {
//     // به عنوان مثال، اطلاعات فرم در متغیر formData ذخیره شده است
//     const formData = { key1: 'value1', key2: 'value2' };

//     try {
//       const response = await axios.post('http://your-api-url.com/submit', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//  };

//  return (
//     // ساختار JSX کامپوننت اینجا قرار داده شده است
//  );
// }

// export default NextStep;