export default function Card({ className = '', children, ...props }) {
    return (
        <div className={"bg-white overflow-hidden shadow-sm sm:rounded-lg "  +
        className}>
        <div className="p-6 text-gray-900">{children}</div>
    </div>
    );
}