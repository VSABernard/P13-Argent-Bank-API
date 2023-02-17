import React from 'react'

import '../../components/DashboardAccount/DashboardAccount.css'

/**
 * Component React which display the account's information of an user
 * @component
 */

const DashboardAccount = () => {
    return (
        <main className="mainAccount">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="editButton">Edit Name</button>
            </div>

            <h2 className="srOnly">Accounts</h2>
            <section className="account">
                <div className="accountContentWrapper">
                <h3 className="accountTitle">Argent Bank Checking (x8349)</h3>
                <p className="accountAmount">$2,082.79</p>
                <p className="accountAmountDescription">Available Balance</p>
                </div>

                <div className="accountContentWrapper cta">
                <button className="transactionButton">View transactions</button>
                </div>
            </section>

            <section className="account">
                <div className="accountContentWrapper">
                <h3 className="accountTitle">Argent Bank Savings (x6712)</h3>
                <p className="accountAmount">$10,928.42</p>
                <p className="accountAmountDescription">Available Balance</p>
                </div>

                <div className="accountContentWrapper cta">
                <button className="transactionButton">View transactions</button>
                </div>
            </section>

            <section className="account">
                <div className="accountContentWrapper">
                <h3 className="accountTitle">Argent Bank Credit Card (x8349)</h3>
                <p className="accountAmount">$184.30</p>
                <p className="accountAmountDescription">Current Balance</p>
                </div>

                <div className="accountContentWrapper cta">
                <button className="transactionButton">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default DashboardAccount