import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Card from '@/Components/Card';
import Chart from '@/Components/Chart';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">Welcome back, {auth.user.name}! We've missed you. 👋</div>
                    <div className="grid gap-4">
                        <Card className="row-start-2" title="Sales" badge="NEW" stat="14%" statDesc="Since yesterday"><p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p></Card>
                        <Card className="row-start-2" title="Users"><p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p></Card>
                        <Card className="row-start-2" title="Expenses"><p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p></Card>
                    </div>

                    <div className="mt-4 bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
                        <Chart type={"bar"} data={{
                            labels: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday",
                            ],
                            datasets: [
                                {
                                    label: "Traffic",
                                    data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                                },
                            ],
                        }} /></div><div className="mt-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4">#</th>
                                                    <th scope="col" className="px-6 py-4">First</th>
                                                    <th scope="col" className="px-6 py-4">Last</th>
                                                    <th scope="col" className="px-6 py-4">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                                </tr>
                                                <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                                </tr>
                                                <tr className="border-b border-success-200 bg-success-100 text-neutral-800">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
