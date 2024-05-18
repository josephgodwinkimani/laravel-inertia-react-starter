import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Card from '@/Components/Card';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <Card className='row-start-2'>Hello there!</Card>
                    <Card className='row-end-3'>Hello there!</Card>
                    <Card className='row-end-3'>Hello there!</Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
