import NavLink from '@/Components/NavLink';

export default function SideBar({ ...props }) {
    return (

        <div className="bg-gray-200 w-48 min-h-screen hidden sm:block">
            <div className="p-4">
                <div className="font-bold text-lg text-gray-800 mb-4">Lara React Inertia</div>
                <ul>
                    <li className="py-2">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink href={route('profile.edit')}>Profile</NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink href={route('logout')} method="post" as="button">
                            Log Out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}