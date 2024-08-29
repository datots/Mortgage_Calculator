const Results = ({ mortgageAmount, mortgageTerm, interestRate }) => {
  const MonthlyPayementCalculation = () => {
    const loanMoney = parseFloat(mortgageAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const mortgagePeriod = parseInt(mortgageTerm) * 12;

    if (rate === 0) {
      return loanMoney / mortgagePeriod;
    }

    const M =
      (loanMoney * rate * Math.pow(1 + rate, mortgagePeriod)) /
      (Math.pow(1 + rate, mortgagePeriod) - 1);
    return M.toFixed(2);
  };

  const PayementByMonth = MonthlyPayementCalculation();
  const totalPayement = (PayementByMonth * mortgageTerm * 12).toFixed(2);
  return (
    <div className="bg-slate-800 rounded-2xl">
      <section className="m-14">
        <div className="">
          <h1 className="text-slate-300 text-2xl pb-3">Your results</h1>
          <p className="text-slate-300 pb-3">
            Your results are shown below based on the information <br /> you
            provided.To adjust the results, edit the form and <br />
            click "calcualte repayement" again.
          </p>
          <div className="bg-slate-900 p-8 w-auto h-auto rounded-2xl ">
            <p className="text-white">Your monthly repayement</p>
            <h1 className="text-lime-600 pb-16 text-2xl">{PayementByMonth}</h1>

            <p className="text-white">Total you'll repay over the term</p>
            <h2 className="text-lime-600 pb-10 pt-10">{totalPayement}</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
