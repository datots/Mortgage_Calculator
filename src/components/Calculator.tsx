import { useFormik } from "formik";
import Results from "./Results";
import { useState } from "react";
import * as Yup from "yup";

const Calculator = () => {
  const [mortgageData, setMortgageData] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
  });
  const formik = useFormik({
    initialValues: {
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
    },
    validationSchema: Yup.object({
      mortgageAmount: Yup.number()
        .required("Required")
        .min(1, "Mortgage amount must be greater than 0"),
      mortgageTerm: Yup.number()
        .required("Required")
        .min(1, "Mortgage term must be greater than 0"),
      interestRate: Yup.number()
        .required("Required")
        .min(0.01, "Interest rate must be greater than 0"),
    }),
    onSubmit: (values) => {
      setMortgageData(values);
    },
  });

  const ResetData = () => {
    formik.resetForm();
    setMortgageData({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
    });
  };
  return (
    <section className="bg-white flex flex-col sm:flex-row ">
      <div className="m-5 h-auto w-auto pt-14 sm:m-5 overflow-x-auto">
        <div className=" sm:flex  pb-8 ">
          <h1 className="pr-4 sm:pr-44 pb-3">Mortgage Calculator</h1>
          <button
            onClick={ResetData}
            className="ml-auto bg-blue-500 text-white p-2 rounded"
          >
            Clear All
          </button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mb-4">
            <h1>Mortgage Amount</h1>
            <span className="inline-flex items-center border border-gray-500 p-2 rounded">
              <p className="bg-slate-300">£</p>{" "}
              <input
                type="number"
                name="mortgageAmount"
                onChange={formik.handleChange}
                value={formik.values.mortgageAmount}
                placeholder="Enter here"
                className="p-2 w-full rounded-none rounded-r"
              />
            </span>
            {formik.touched.mortgageAmount ? (
              <p className="text-red-500">{formik.errors.mortgageAmount}</p>
            ) : null}
          </div>
          <div className="gap-10 sm:flex flex-row">
            <div>
              <h1>Mortgage Term</h1>
              <span className="inline-flex border border-gray-500 p-2 rounded">
                <input
                  type="number"
                  name="mortgageTerm"
                  placeholder="Enter here"
                  onChange={formik.handleChange}
                  value={formik.values.mortgageTerm}
                />

                <p className="bg-slate-300 inline-flex">years</p>
              </span>
              {formik.touched.mortgageTerm ? (
                <p className="text-red-500">{formik.errors.mortgageTerm}</p>
              ) : null}
            </div>
            <div>
              <h1>Interest Rate</h1>
              <span className="inline-flex border border-gray-500 p-2 rounded">
                <input
                  type="number"
                  name="interestRate"
                  placeholder="Enter here"
                  value={formik.values.interestRate}
                  onChange={formik.handleChange}
                />

                <p className="bg-slate-300 inline-flex">%</p>
              </span>
              {formik.touched.interestRate ? (
                <p className="text-red-500">{formik.errors.interestRate}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col mt-10 mb-10">
            <h1 className="pb-5">Mortgage Type</h1>
            <span className="flex inline-flex border border-gray-500 p-2 rounded gap-4 mb-2">
              {" "}
              <input type="radio" /> <h1>Repayment</h1>
            </span>
            <span className="flex inline-flex border border-gray-500 p-2 rounded gap-4">
              {" "}
              <input type="radio" /> <h1>Interest Only</h1>
            </span>
          </div>
          <button className="bg-lime-400 text-white p-2 rounded" type="submit">
            Calculate Repayement
          </button>
        </form>
      </div>
      <Results
        mortgageAmount={mortgageData.mortgageAmount}
        mortgageTerm={mortgageData.mortgageTerm}
        interestRate={mortgageData.interestRate}
      />
    </section>
  );
};

export default Calculator;
