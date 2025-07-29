import incomeChart from "../../assets/income-chart.png"
export default function Income() {
    const incomeData = [{
        amount: 720,
        date: "1/12/22"
    },{
        amount: 560,
        date: "10/11/22"
    },{
        amount: 980,
        date: "23/11/22"
    }]
    return (
        <div className="income-container">
        <h1 className="income">Income</h1>
        <p>Last <span>30 days</span></p>
        <h1 className="amount">$2,260</h1>
        <img src={incomeChart} alt="" />
        <div className="transaction-container">
            <div className="transaction-top">
                <h3>Your transactions ({incomeData.length})</h3>
                 <p>Last <span>30 days</span></p>
            </div>
            <div className="transaction-card-container">
                {
                    incomeData.map((income) => (
                        <div className="transaction-card" key={income.date}>
                            <h1>${income.amount}</h1>
                            <p>{income.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}