import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Orders({ auth }) {
    console.log(auth)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="border border-black/10 p-6 rounded-xl min-h-[250px] max-sm:p-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
							<div className="overflow-x-auto table-style-1">
								<table className="table-hover min-w-[600px] mb-4 w-full text-left">
									<thead>
										<tr>
											<th className="py-3 px-3 uppercase">Order #</th>
											<th className="py-3 px-3 uppercase">Date Purchased</th>
											<th className="py-3 px-3 uppercase">Status</th>
											<th className="py-3 px-3 uppercase">Total</th>
											<th className="py-3 px-3 uppercase text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-3 px-3 text-body border-t border-border"><a href="account-order-details.html" className="fw-medium">#34VB5540K83</a></td>
											<td className="py-3 px-3 text-body border-t border-border">May 21, 2024</td>
											<td className="py-3 px-3 text-body border-t border-border">$358.75</td>
											<td className="py-3 px-3 text-body border-t border-border"><span className="py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-[#0194d9]  m-0">In Progress</span></td>
											<td className="py-3 px-3 text-body border-t border-border text-right"><a href="account-order-details.html" className="text-[#010fd9] underline p-0">View</a></td>
										</tr>
										<tr>
											<td className="py-3 px-3 text-body border-t border-border"><a href="account-order-details.html" className="fw-medium">#78A643CD409</a></td>
											<td className="py-3 px-3 text-body border-t border-border">December 09, 2024</td>
											<td className="py-3 px-3 text-body border-t border-border"><span>$760.50</span></td>
											<td className="py-3 px-3 text-body border-t border-border"><span className="py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-[#d23636]  m-0">Canceled</span></td>
											<td className="py-3 px-3 text-body border-t border-border text-right"><a href="account-order-details.html" className="text-[#010fd9] underline p-0">View</a></td>
										</tr>
										<tr>
											<td className="py-3 px-3 text-body border-t border-border"><a href="javascript:void(0);" className="fw-medium">#112P45A90V2</a></td>
											<td className="py-3 px-3 text-body border-t border-border">October 15, 2024</td>
											<td className="py-3 px-3 text-body border-t border-border">$1,264.00</td>
											<td className="py-3 px-3 text-body border-t border-border"><span className="py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-warning  m-0">Delayed</span></td>
											<td className="py-3 px-3 text-body border-t border-border text-right"><a href="account-order-details.html" className="text-[#010fd9] underline p-0">View</a></td>
										</tr>
										<tr>
											<td className="py-3 px-3 text-body border-t border-border"><a href="account-order-details.html" className="fw-medium">#28BA67U0981</a></td>
											<td className="py-3 px-3 text-body border-t border-border">July 19, 2024</td>
											<td className="py-3 px-3 text-body border-t border-border">$198.35</td>
											<td className="py-3 px-3 text-body border-t border-border"><span className="py-1 px-2.5 text-white rounded-md uppercase text-center text-xs leading-[1] inline-block font-semibold bg-[#31a56d]  m-0">Delivered</span></td>
											<td className="py-3 px-3 text-body border-t border-border text-right"><a href="account-order-details.html" className="text-[#010fd9] underline p-0">View</a></td>
										</tr>
									
									</tbody>
								</table>
							</div>
							
                        </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
