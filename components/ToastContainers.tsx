import { useToastStateContext } from '@/hooks/ToastContext';
import Toast from './Toast';

export default function ToastContainer() {
    const { toasts } = useToastStateContext();

    return (
        <div className="absolute bottom-10 w-full z-50 flex items-center justify-center">
            {toasts &&
                toasts.map((toast) => (
                    <Toast
                        id={toast.id}
                        key={toast.id}
                        type={toast.type}
                        message={toast.message}
                    />
                ))}
        </div>
    );
}
