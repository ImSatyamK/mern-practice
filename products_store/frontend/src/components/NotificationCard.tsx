type NotificationProps = {
    message: string
    success: boolean
    onClose?: () => void
}

export default function NotificationCard({ message, success, onClose }: NotificationProps) {
    const bgColor = success ? 'bg-green-100' : 'bg-red-100';
    const textColor = success ? 'text-green-800' : 'text-red-800';

    return (
        <div className={`${bgColor} ${textColor} p-4 rounded-lg shadow max-w-40`}>
            <button className="bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-700 absolute top-1 right-2"
                onClick={onClose}>
                x
            </button>
            <p className="m-0">{message}</p>
        </div>
    );
}