import Sidebar from "../Sidebar/Sidebar";


function Dashboard() {
    return (
        <>
            <div className="row" style={{height:'100vh'}}>
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <section className='admin'>
                        <div className="new-application">
                            <h1 className='mx-2'>NEW APPLICATION</h1>
                            <table className="table align-middle mb-0 bg-white table-bordered">
                                <thead className="bg-light text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Company name</th>
                                        <th>Company details</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        {<td></td>}
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="pending-application">
                            <h1 className='mx-2'>PENDING APPLICATION</h1>

                            <table className="table align-middle mb-0 bg-white table-bordered">
                                <thead className="bg-light text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Company name</th>
                                        <th>Company details</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Software engineer</p>
                                            <p className="text-muted mb-0">IT department</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
