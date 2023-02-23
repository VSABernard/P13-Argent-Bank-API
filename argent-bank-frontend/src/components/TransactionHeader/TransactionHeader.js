import React from "react"

/**
 * Component React displaying header for page transactions (containing account data)
 * @component
 */
const TransactionHeader = ({ data }) => {
  return (
    <header className="transactionHeader">
      <div className="transactionHeaderContent">
        <h3 className="transactionHeaderTitle">{data.title}</h3>
        <p className="transactionHeaderAmount">{data.amount}</p>
        <p className="transactionHeaderAmountDescription">
          {data.description}
        </p>
      </div>
    </header>
  )
}

export default TransactionHeader;