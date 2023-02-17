import { FiAlertCircle } from 'react-icons/fi';

export default function Toast({
    type,
    message,
    id,
}: {
    type: 'success' | 'error';
    message: string;
    id: string;
}) {
    return (
        <>
            {type == 'error' && (
                <div className="rounded-md bg-red-500 p-4 w-auto">
                    <div className="flex gap-3 items-center justify-center">
                        <FiAlertCircle className="w-5 h-5 text-white" />
                        <p className="text-sm font-medium text-white">
                            {message}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
